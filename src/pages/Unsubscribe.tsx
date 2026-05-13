import SEO from "@/components/SEO";

const Unsubscribe = () => {
  return (
    <main className="pt-28 pb-20 min-h-[60vh]">
      <SEO title="Unsubscribe | Heritage Jaipur Travels" description="Manage your email preferences." path="/unsubscribe" />
      <div className="container mx-auto px-4 max-w-md">
        <div className="bg-card rounded-lg p-8 heritage-shadow text-center">
          <h1 className="font-display text-2xl font-bold text-foreground mb-4">Email Preferences</h1>
          <p className="text-muted-foreground mb-6">To update email preferences, please contact our team directly.</p>
          <a href="mailto:info@heritagejaipurtravels.com" className="px-6 py-3 rounded-md heritage-gradient text-primary-foreground font-bold text-sm inline-flex">
            Email Heritage Jaipur Travels
          </a>
        </div>
      </div>
    </main>
  );
};

export default Unsubscribe;
