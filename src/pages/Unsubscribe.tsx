import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import SEO from "@/components/SEO";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState<"loading" | "valid" | "already" | "invalid" | "done" | "error">("loading");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!token) { setState("invalid"); return; }
    fetch(`${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`, {
      headers: { apikey: SUPABASE_KEY },
    })
      .then(r => r.json())
      .then(data => {
        if (data?.valid) setState("valid");
        else if (data?.reason === "already_unsubscribed") setState("already");
        else setState("invalid");
      })
      .catch(() => setState("error"));
  }, [token]);

  const confirm = async () => {
    if (!token) return;
    setSubmitting(true);
    const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", { body: { token } });
    setSubmitting(false);
    if (error) { setState("error"); return; }
    if (data?.success || data?.reason === "already_unsubscribed") setState("done");
    else setState("error");
  };

  return (
    <main className="pt-28 pb-20 min-h-[60vh]">
      <SEO title="Unsubscribe | Heritage Jaipur Travels" description="Manage your email preferences." path="/unsubscribe" />
      <div className="container mx-auto px-4 max-w-md">
        <div className="bg-card rounded-lg p-8 heritage-shadow text-center">
          <h1 className="font-display text-2xl font-bold text-foreground mb-4">Email Preferences</h1>
          {state === "loading" && <p className="text-muted-foreground">Checking your unsubscribe link…</p>}
          {state === "invalid" && <p className="text-muted-foreground">This unsubscribe link is invalid or expired.</p>}
          {state === "already" && <p className="text-muted-foreground">You have already unsubscribed.</p>}
          {state === "error" && <p className="text-destructive">Something went wrong. Please try again later.</p>}
          {state === "valid" && (
            <>
              <p className="text-muted-foreground mb-6">Click below to confirm you want to unsubscribe from Heritage Jaipur Travels emails.</p>
              <button onClick={confirm} disabled={submitting} className="px-6 py-3 rounded-md heritage-gradient text-primary-foreground font-bold text-sm disabled:opacity-60">
                {submitting ? "Processing…" : "Confirm Unsubscribe"}
              </button>
            </>
          )}
          {state === "done" && <p className="text-foreground font-medium">You have been unsubscribed. We're sorry to see you go.</p>}
        </div>
      </div>
    </main>
  );
};

export default Unsubscribe;
