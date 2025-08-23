import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const Terms = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <div className="mr-6 flex items-center space-x-2">
              <img 
                src="/lovable-uploads/logo.png" 
                alt="Golazo AI Logo" 
                className="h-8 w-auto rounded-full"
              />
              <span className="font-bold text-xl">Golazo AI</span>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <Button variant="ghost" onClick={() => window.history.back()} className="mr-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Terms Content */}
      <div className="container px-4 md:px-6 py-12 max-w-4xl">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter mb-4">Terms & Conditions</h1>
            <p className="text-muted-foreground">Last Updated: August 23, 2025</p>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Parties to the Agreement</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>These Terms & Conditions are an agreement between you and the service provider:</p>
                <div className="ml-4">
                  <p>Golazo AI ApS</p>
                  <p>CVR: 45681513</p>
                  <p>Address: Lyshøjgårdsvej 91, st. th</p>
                  <p>Email: Hello@golazo.ai</p>
                  <p>Hereafter mentioned as "Golazo AI"</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By creating an account or using the Golazo AI application ("Service"), you agree to be bound by these Terms & Conditions ("Terms").
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Description of the Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                The app provides feedback on video records of football/soccer moves and shots via AI. The Service is provided on an "as-is" basis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. User Accounts & Eligibility</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p><strong>Age Requirement:</strong> You must be at least 13 years old (or the minimum legal age in your country to use our Service) to create an account and use the Service.</p>
                <p><strong>Account Security:</strong> You are responsible for maintaining the security of your login information and for all activities that occur under your account.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. User Conduct and Content Standards</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>You agree not to misuse the Service. This includes, but is not limited to, the following prohibitions:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>You may not engage in any activity that is illegal, misleading, or fraudulent.</li>
                  <li>You may not impersonate others or provide inaccurate information.</li>
                  <li>You may not attempt to create accounts or access or collect information in unauthorized ways, such as using bots, scrapers, or other automated means.</li>
                  <li>You may not post someone else's private or confidential information without permission or do anything that violates someone else's rights, including intellectual property rights.</li>
                  <li>You may not interfere with the intended operation of the Service.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Intellectual Property</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p><strong>Our Rights:</strong> Golazo AI retains all rights to its trademark and software.</p>
                <p><strong>Your License to Us:</strong> You own the content you upload. However, by using the service, you grant us a non-exclusive, royalty-free, transferable, worldwide license to process, use, distribute, modify, and display the content you upload solely for the purpose of providing and improving the Service.</p>
                <p><strong>Your Responsibility for Your Content:</strong> You represent and warrant that you own or have the necessary licenses, rights, consents, and permissions to your content and to grant the rights and licenses in these Terms.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                Golazo AI reserves the right to suspend or terminate your account at our sole discretion for any breach of these Terms, including the User Conduct rules, or for any reason we deem inappropriate. Upon termination, your right to use the Service will immediately cease. Some provisions of these Terms, including, without limitation, ownership provisions, warranty disclaimers, and limitations of liability, will survive termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Advertisements</h2>
              <p className="text-muted-foreground leading-relaxed">
                Golazo AI may show advertisements within the app and might use user data for this purpose, in accordance with our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">9. Disclaimer of Warranties & Limitation of Liability</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>The app is provided "as-is" without any warranties. To the maximum extent permitted by applicable law, in no event shall Golazo AI be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Service.</p>
                <p>Physical activities like football/soccer carry inherent risks. You agree that Golazo AI has no responsibility for any type of injuries caused by using the app. You are responsible for your own safety while engaging in physical activities.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">10. Modifications to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Golazo AI reserves the right to modify these Terms. We will notify users of changes via in-app notification or email. Major changes will be presented to the user at login where they will need to accept them to continue using our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">11. Governing Law and Disputes</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p><strong>Governing Law:</strong> These Terms are governed by the laws of Denmark, and any disputes will be resolved in the courts of Copenhagen.</p>
                <p><strong>Binding Arbitration:</strong> Any dispute or claim arising out of or relating to these Terms shall be determined by arbitration in Copenhagen, Denmark. The arbitration shall be administered by The Danish Institute of Arbitration pursuant to its Rules of Arbitration.</p>
                <p><strong>Waiver of Class Actions:</strong> You agree to bring claims against Golazo AI only in your individual capacity and not as a plaintiff or class member in any purported class or representative proceeding. By agreeing to these terms, you and Golazo AI waive the right to a trial by jury.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">12. Contact Information</h2>
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

export default Terms;