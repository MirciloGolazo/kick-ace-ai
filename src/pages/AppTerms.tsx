const AppTerms = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Content Only - No Navigation */}
      <div className="container px-4 md:px-6 py-12 max-w-4xl">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter mb-4">App Terms & Conditions</h1>
            <p className="text-muted-foreground">Last Updated: July 30, 2025</p>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By creating an account or using the Golazo AI application ("Service"), you agree to be bound by these Terms & Conditions ("Terms").
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Description of the Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                The app provides feedback on video records of football/soccer moves and shots via AI. The Service is provided on an "as-is" basis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed">
                You are responsible for maintaining the security of your login information and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. User Conduct</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree not to misuse the Service. We have the right to delete users that we suspect are bots or who upload content that is political or that we deem inappropriate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                Golazo AI ApS retains all rights to its trademark and software. By using the service, you grant us a limited license to process the content you upload solely for the purpose of providing and improving the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Advertisements</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may show advertisements within the app and might use user data for this purpose, in accordance with our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Disclaimer of Warranties & Limitation of Liability</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>The app is provided "as-is" without any warranties.</p>
                <p>You agree that Golazo AI ApS has no responsibility for any type of injuries caused by using the app. You are responsible for your own safety while engaging in physical activities.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Modifications to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms. We will notify users of changes via in-app notification or email.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">9. Governing Law and Disputes</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by the laws of Denmark, and any disputes will be resolved in the courts of Copenhagen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">10. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For any questions regarding these Terms & Conditions, please contact us at hello@golazo.ai.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppTerms;