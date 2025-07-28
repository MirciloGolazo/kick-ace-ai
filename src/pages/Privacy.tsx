import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const Privacy = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <div className="mr-6 flex items-center space-x-2">
              <img 
                src="/lovable-uploads/58dc850b-44ff-491e-93e4-b101d64c5ccd.png" 
                alt="Golazo AI Logo" 
                className="h-10 w-10"
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

      {/* Privacy Content */}
      <div className="container px-4 md:px-6 py-12 max-w-4xl">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2024 (Version 1.0)</p>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p><strong>Personal Information:</strong> When you create an account, we collect your name, email address, and profile information.</p>
                <p><strong>Video Content:</strong> We collect and analyze videos you upload for the purpose of providing AI-powered feedback on your football technique.</p>
                <p><strong>Usage Data:</strong> We collect information about how you use the app, including features accessed, time spent, and performance metrics.</p>
                <p><strong>Device Information:</strong> We may collect device-specific information such as device model, operating system, and unique device identifiers.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p>We use your information to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Provide AI analysis and feedback on your football technique</li>
                  <li>Improve our machine learning algorithms and services</li>
                  <li>Enable social features like leaderboards and competitions</li>
                  <li>Send you important updates about the service</li>
                  <li>Provide customer support and respond to your inquiries</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information to third parties. We may share your information in the following limited circumstances: with your consent, to comply with legal obligations, to protect our rights and safety, or with service providers who help us operate our business.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Access and receive a copy of your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Delete your personal information (subject to certain exceptions)</li>
                  <li>Object to or restrict certain processing of your information</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information during such transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">9. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at privacy@golazoai.com.
              </p>
            </section>
          </div>

          <div className="border-t pt-6">
            <p className="text-sm text-muted-foreground">
              Version History: v1.0 (January 2024) - Initial privacy policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;