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

      {/* Terms Content */}
      <div className="container px-4 md:px-6 py-12 max-w-4xl">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter mb-4">Terms & Conditions</h1>
            <p className="text-muted-foreground">Last updated: January 2024 (Version 1.0)</p>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By downloading, installing, or using the Golazo AI mobile application, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Description of Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                Golazo AI is a mobile application that uses artificial intelligence to analyze football shooting techniques, particularly free kicks. The app provides feedback, training suggestions, and social features to help users improve their football skills.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. User Account and Registration</h2>
              <p className="text-muted-foreground leading-relaxed">
                You may be required to create an account to access certain features. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Data Collection and Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our collection and use of personal information is governed by our Privacy Policy. By using Golazo AI, you consent to the collection and use of your information as outlined in our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. User Content</h2>
              <p className="text-muted-foreground leading-relaxed">
                You retain ownership of videos and content you upload to Golazo AI. However, by uploading content, you grant us a worldwide, non-exclusive license to use, analyze, and process your content to provide our AI analysis services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Prohibited Uses</h2>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p>You agree not to use Golazo AI to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Upload inappropriate, offensive, or copyrighted content</li>
                  <li>Attempt to reverse engineer or hack the application</li>
                  <li>Use the service for any illegal purposes</li>
                  <li>Interfere with the proper functioning of the service</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Golazo AI is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of the application, including but not limited to direct, indirect, incidental, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of material changes through the app or by email. Continued use of the service after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">9. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms & Conditions, please contact us at terms@golazoai.com.
              </p>
            </section>
          </div>

          <div className="border-t pt-6">
            <p className="text-sm text-muted-foreground">
              Version History: v1.0 (January 2024) - Initial terms and conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;