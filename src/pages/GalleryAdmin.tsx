import { useEffect, useState, useCallback, useRef, useMemo } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import SEO from "@/components/SEO";
import { GALLERY_CATEGORIES } from "@/data/galleryCategories";
import {
  useMediaAssets,
  type MediaAsset,
  type FeaturedFlag,
  FEATURED_FLAGS,
} from "@/hooks/useMediaAssets";
import { clearMediaSlotCache } from "@/hooks/useMediaSlot";
import {
  ArrowDown,
  ArrowUp,
  Trash2,
  Upload,
  LogOut,
  RefreshCw,
  Search,
} from "lucide-react";
import { toast } from "@/components/ui/sonner";

/**
 * Gallery Admin — Phase 2.
 *
 * Now a thin admin over the central `media_assets` library. Same UI shell;
 * adds: featured-flag toggles (homepage / gallery / package / blog /
 * destination / experience / vehicle), text search, sort, and bulk upload.
 *
 * The legacy `gallery_images` table is left untouched; replacing or
 * deleting an asset here only affects `media_assets` + storage, so the
 * Gallery falls back to legacy only when no featured_gallery rows exist.
 */

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60) || "image";

const FLAG_LABELS: Record<FeaturedFlag, string> = {
  featured_homepage: "Home",
  featured_gallery: "Gallery",
  featured_package: "Package",
  featured_blog: "Blog",
  featured_destination: "Destination",
  featured_experience: "Experience",
  featured_vehicle: "Vehicle",
};

type SortMode = "manual" | "newest" | "title";

const GalleryAdmin = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authBusy, setAuthBusy] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);
  const replaceInput = useRef<HTMLInputElement>(null);
  const [replaceTarget, setReplaceTarget] = useState<MediaAsset | null>(null);
  const [search, setSearch] = useState("");
  const [sortMode, setSortMode] = useState<SortMode>("manual");
  const { assets, loading, reload } = useMediaAssets();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session?.user) {
      setIsAdmin(null);
      return;
    }
    supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin")
      .maybeSingle()
      .then(({ data }) => setIsAdmin(!!data));
  }, [session]);

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setAuthBusy(false);
    if (error) toast.error(error.message);
  };

  const signUp = async () => {
    setAuthBusy(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${window.location.origin}/gallery/admin` },
    });
    setAuthBusy(false);
    if (error) toast.error(error.message);
    else toast.success("Account created. Ask the project owner to grant admin role.");
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const refreshAll = useCallback(() => {
    clearMediaSlotCache();
    reload();
  }, [reload]);

  const handleUpload = useCallback(
    async (files: FileList | null) => {
      if (!files || files.length === 0) return;
      setUploading(true);
      const maxOrder = assets.reduce((m, i) => Math.max(m, i.sort_order), 0);
      let order = maxOrder + 1;
      let okCount = 0;
      for (const file of Array.from(files)) {
        const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
        const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}-${slugify(file.name)}.${ext}`;
        const { error: upErr } = await supabase.storage
          .from("gallery")
          .upload(path, file, { cacheControl: "31536000", upsert: false, contentType: file.type });
        if (upErr) {
          toast.error(`${file.name}: ${upErr.message}`);
          continue;
        }
        const title = file.name.replace(/\.[a-z0-9]+$/i, "").replace(/[-_]+/g, " ");
        const { error: insErr } = await supabase.from("media_assets").insert({
          bucket: "gallery",
          image_path: path,
          title,
          alt_text: title,
          category: "Culture",
          sort_order: order++,
          featured_gallery: true,
        });
        if (insErr) {
          toast.error(`${file.name}: ${insErr.message}`);
          await supabase.storage.from("gallery").remove([path]);
          continue;
        }
        okCount++;
      }
      setUploading(false);
      if (okCount > 0) toast.success(`Uploaded ${okCount} image${okCount > 1 ? "s" : ""}`);
      refreshAll();
    },
    [assets, refreshAll],
  );

  const update = async (id: string, patch: Partial<MediaAsset>) => {
    const { error } = await supabase.from("media_assets").update(patch).eq("id", id);
    if (error) toast.error(error.message);
    else refreshAll();
  };

  const remove = async (a: MediaAsset) => {
    if (!confirm(`Delete "${a.title || a.image_path}"? Every page using this image will lose it.`)) return;
    await supabase.storage.from(a.bucket || "gallery").remove([a.image_path]);
    const { error } = await supabase.from("media_assets").delete().eq("id", a.id);
    if (error) toast.error(error.message);
    else {
      toast.success("Deleted");
      refreshAll();
    }
  };

  const move = async (i: number, dir: -1 | 1) => {
    if (sortMode !== "manual") {
      toast.info("Switch to Manual sort to reorder.");
      return;
    }
    const j = i + dir;
    if (j < 0 || j >= filtered.length) return;
    const a = filtered[i];
    const b = filtered[j];
    await Promise.all([
      supabase.from("media_assets").update({ sort_order: b.sort_order }).eq("id", a.id),
      supabase.from("media_assets").update({ sort_order: a.sort_order }).eq("id", b.id),
    ]);
    refreshAll();
  };

  const replaceFile = async (file: File) => {
    if (!replaceTarget) return;
    const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}-${slugify(file.name)}.${ext}`;
    const { error: upErr } = await supabase.storage
      .from(replaceTarget.bucket || "gallery")
      .upload(path, file, { cacheControl: "31536000", contentType: file.type });
    if (upErr) {
      toast.error(upErr.message);
      return;
    }
    await supabase.storage.from(replaceTarget.bucket || "gallery").remove([replaceTarget.image_path]);
    await supabase.from("media_assets").update({ image_path: path }).eq("id", replaceTarget.id);
    setReplaceTarget(null);
    toast.success("Image replaced — every page using it now shows the new file.");
    refreshAll();
  };

  const toggleFlag = (a: MediaAsset, flag: FeaturedFlag) => {
    update(a.id, { [flag]: !a[flag] } as Partial<MediaAsset>);
  };

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    let list = assets;
    if (q) {
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.alt_text.toLowerCase().includes(q) ||
          a.location.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q),
      );
    }
    if (sortMode === "newest") list = [...list].reverse();
    if (sortMode === "title")
      list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    return list;
  }, [assets, search, sortMode]);

  // ---------- Render: unauthenticated ----------
  if (!session) {
    return (
      <main className="min-h-screen lux-cream-bg py-20 px-5">
        <SEO title="Media Library Admin" description="Manage media library." path="/gallery/admin" />
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 mt-10">
          <h1 className="font-display text-2xl mb-2">Media Library Admin</h1>
          <p className="text-sm text-[#0F0F0F]/60 mb-6">Sign in to manage media.</p>
          <form onSubmit={signIn} className="space-y-3">
            <input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-[#0F0F0F]/15 focus:border-[#C9A84C] outline-none" />
            <input type="password" required minLength={6} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-[#0F0F0F]/15 focus:border-[#C9A84C] outline-none" />
            <button disabled={authBusy} type="submit" className="w-full py-3 rounded-lg bg-[#0F0F0F] text-[#FFF8F0] font-display tracking-[0.18em] uppercase text-xs disabled:opacity-50">Sign In</button>
            <button type="button" onClick={signUp} disabled={authBusy} className="w-full py-3 rounded-lg border border-[#0F0F0F]/20 text-[#0F0F0F] font-display tracking-[0.18em] uppercase text-xs disabled:opacity-50">Create Account</button>
          </form>
        </div>
      </main>
    );
  }

  if (isAdmin === false) {
    return (
      <main className="min-h-screen lux-cream-bg py-20 px-5 text-center">
        <SEO title="Media Library Admin" description="Manage media library." path="/gallery/admin" />
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 mt-10">
          <h1 className="font-display text-2xl mb-3">Admin Access Required</h1>
          <p className="text-sm text-[#0F0F0F]/70 mb-6">
            Signed in as <strong>{session.user.email}</strong>.<br />
            Ask the project owner to grant your account the <code>admin</code> role.
          </p>
          <button onClick={signOut} className="px-5 py-2 rounded-full border border-[#0F0F0F]/20 text-xs font-display tracking-[0.18em] uppercase">
            <LogOut size={14} className="inline mr-2" />Sign Out
          </button>
        </div>
      </main>
    );
  }

  if (isAdmin === null) {
    return <main className="min-h-screen lux-cream-bg py-20 text-center">Checking permissions…</main>;
  }

  // ---------- Render: admin ----------
  return (
    <main className="min-h-screen lux-cream-bg py-12 md:py-16">
      <SEO title="Media Library Admin" description="Manage media library." path="/gallery/admin" />
      <div className="container mx-auto px-5" style={{ maxWidth: 1400 }}>
        <header className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-display text-3xl md:text-4xl">Media Library</h1>
            <p className="text-sm text-[#0F0F0F]/60 mt-1">
              {assets.length} asset{assets.length === 1 ? "" : "s"} · one source for Gallery, Homepage & more.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={refreshAll} className="px-4 py-2 rounded-full border border-[#0F0F0F]/15 text-xs font-display tracking-[0.18em] uppercase inline-flex items-center gap-2">
              <RefreshCw size={14} /> Refresh
            </button>
            <button onClick={signOut} className="px-4 py-2 rounded-full border border-[#0F0F0F]/15 text-xs font-display tracking-[0.18em] uppercase inline-flex items-center gap-2">
              <LogOut size={14} /> Sign Out
            </button>
          </div>
        </header>

        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => { e.preventDefault(); handleUpload(e.dataTransfer.files); }}
          className="border-2 border-dashed border-[#C9A84C]/50 rounded-2xl p-8 md:p-12 text-center bg-white/60 mb-8"
        >
          <Upload className="mx-auto mb-3 text-[#C9A84C]" size={32} />
          <p className="font-serif text-lg">Drop images here, or</p>
          <button onClick={() => fileInput.current?.click()} disabled={uploading} className="mt-3 px-6 py-3 rounded-full bg-[#0F0F0F] text-[#FFF8F0] font-display tracking-[0.18em] uppercase text-xs disabled:opacity-50">
            {uploading ? "Uploading…" : "Browse Files"}
          </button>
          <input ref={fileInput} type="file" multiple accept="image/webp,image/jpeg,image/png,image/avif" className="hidden" onChange={(e) => handleUpload(e.target.files)} />
          <p className="text-xs text-[#0F0F0F]/50 mt-3">WebP, JPG, PNG. Bulk upload supported. New uploads are featured in the Gallery by default.</p>
        </div>

        {/* Search + Sort */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="relative flex-1 min-w-[220px]">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0F0F0F]/40" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search title, alt, location, category…"
              className="w-full pl-9 pr-4 py-2 rounded-full border border-[#0F0F0F]/15 text-sm bg-white"
            />
          </div>
          <select
            value={sortMode}
            onChange={(e) => setSortMode(e.target.value as SortMode)}
            className="px-4 py-2 rounded-full border border-[#0F0F0F]/15 text-xs font-display tracking-[0.18em] uppercase bg-white"
          >
            <option value="manual">Sort: Manual</option>
            <option value="newest">Sort: Newest</option>
            <option value="title">Sort: Title</option>
          </select>
        </div>

        <input ref={replaceInput} type="file" accept="image/webp,image/jpeg,image/png,image/avif" className="hidden" onChange={(e) => e.target.files?.[0] && replaceFile(e.target.files[0])} />

        {loading ? (
          <p className="text-center text-[#0F0F0F]/60 py-12">Loading…</p>
        ) : (
          <div className="space-y-3">
            {filtered.map((img, i) => (
              <div key={img.id} className="bg-white rounded-2xl shadow-sm p-4 flex flex-col md:flex-row gap-4 items-start">
                <img src={img.url} alt={img.alt_text} className="w-full md:w-40 h-40 object-cover rounded-xl" />
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
                  <label className="text-xs">
                    <span className="block text-[#0F0F0F]/60 mb-1">Title</span>
                    <input defaultValue={img.title} onBlur={(e) => e.target.value !== img.title && update(img.id, { title: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-[#0F0F0F]/15 text-sm" />
                  </label>
                  <label className="text-xs">
                    <span className="block text-[#0F0F0F]/60 mb-1">Location</span>
                    <input defaultValue={img.location} onBlur={(e) => e.target.value !== img.location && update(img.id, { location: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-[#0F0F0F]/15 text-sm" />
                  </label>
                  <label className="text-xs md:col-span-2">
                    <span className="block text-[#0F0F0F]/60 mb-1">Alt text (SEO & accessibility)</span>
                    <input defaultValue={img.alt_text} onBlur={(e) => e.target.value !== img.alt_text && update(img.id, { alt_text: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-[#0F0F0F]/15 text-sm" />
                  </label>
                  <label className="text-xs md:col-span-2">
                    <span className="block text-[#0F0F0F]/60 mb-1">Description</span>
                    <textarea defaultValue={img.description} onBlur={(e) => e.target.value !== img.description && update(img.id, { description: e.target.value })} rows={2} className="w-full px-3 py-2 rounded-lg border border-[#0F0F0F]/15 text-sm" />
                  </label>
                  <label className="text-xs">
                    <span className="block text-[#0F0F0F]/60 mb-1">Category</span>
                    <select defaultValue={img.category} onChange={(e) => update(img.id, { category: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-[#0F0F0F]/15 text-sm bg-white">
                      {GALLERY_CATEGORIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </label>
                  <div className="md:col-span-2">
                    <span className="block text-xs text-[#0F0F0F]/60 mb-2">Feature in</span>
                    <div className="flex flex-wrap gap-2">
                      {FEATURED_FLAGS.map((flag) => {
                        const on = img[flag];
                        return (
                          <button
                            key={flag}
                            type="button"
                            onClick={() => toggleFlag(img, flag)}
                            className={`px-3 py-1.5 rounded-full text-[11px] font-display tracking-[0.16em] uppercase border transition-colors ${
                              on
                                ? "bg-[#0F0F0F] text-[#FFF8F0] border-[#0F0F0F]"
                                : "bg-white text-[#0F0F0F]/70 border-[#0F0F0F]/15 hover:border-[#C9A84C]"
                            }`}
                          >
                            {FLAG_LABELS[flag]}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col gap-2 md:items-end">
                  <button onClick={() => move(i, -1)} disabled={i === 0 || sortMode !== "manual"} className="p-2 rounded-full border border-[#0F0F0F]/15 disabled:opacity-30" aria-label="Move up">
                    <ArrowUp size={16} />
                  </button>
                  <button onClick={() => move(i, 1)} disabled={i === filtered.length - 1 || sortMode !== "manual"} className="p-2 rounded-full border border-[#0F0F0F]/15 disabled:opacity-30" aria-label="Move down">
                    <ArrowDown size={16} />
                  </button>
                  <button
                    onClick={() => { setReplaceTarget(img); replaceInput.current?.click(); }}
                    className="p-2 rounded-full border border-[#0F0F0F]/15"
                    aria-label="Replace image file"
                    title="Replace file (every page using this image updates automatically)"
                  >
                    <Upload size={16} />
                  </button>
                  <button onClick={() => remove(img)} className="p-2 rounded-full border border-red-300 text-red-600" aria-label="Delete">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <p className="text-center text-[#0F0F0F]/60 py-12">
                {search ? "No images match your search." : "No images yet. Upload your first images above."}
              </p>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default GalleryAdmin;
