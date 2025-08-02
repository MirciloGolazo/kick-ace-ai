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
                src="/lovable-uploads/logo.png" 
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
            <p className="text-muted-foreground">Last Updated: July 30, 2025</p>
          </div>

          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              This Privacy Policy describes how Golazo AI ApS collects, uses, and protects your information when you use our mobile application.
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Data Controller</h2>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p>The data controller for your information is:</p>
                <p><strong>Golazo AI ApS</strong></p>
                <p>CVR: 45681513</p>
                <p>Address: Lyshøjgårdsvej 91, st. th</p>
                <p>Email: Hello@golazo.ai</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>We collect the following types of information:</p>
                
                <div>
                  <p><strong>Account Information:</strong> When you create an account, we may collect information through various login methods, including transfers from platforms like TikTok, Instagram, and Snapchat. This data is used for login, creating your profile, and for leaderboard purposes.</p>
                </div>

                <div>
                  <p><strong>Video and Biometric Data:</strong></p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>We collect the videos you record and upload for processing.</li>
                    <li>To analyze your technique, our AI processes your video to create a skeletal model. This is considered biometric data. We will ask for your explicit consent before processing this data.</li>
                    <li>We also store the output picture from our machine learning model related to your player position.</li>
                  </ul>
                </div>

                <div>
                  <p><strong>Feedback:</strong> We store feedback you provide in the app or via email to help us develop new features and improve the quality of the app.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information & Legal Basis</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>We use your information for the following purposes:</p>
                
                <div>
                  <p><strong>To Provide and Improve the Service:</strong> We process your video and biometric data to provide you with AI-powered analysis of your soccer technique. The legal basis for processing biometric data is your <strong>Explicit Consent</strong>.</p>
                </div>

                <div>
                  <p><strong>To Manage Your Account:</strong> We use your account information to manage your profile, login, and display your name and picture on leaderboards. The legal basis is the <strong>Performance of a Contract</strong>.</p>
                </div>

                <div>
                  <p><strong>For Quality Improvements:</strong> We use your feedback to improve our app. The legal basis is our <strong>Legitimate Interest</strong>.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Data Storage, Processing, and Retention</h2>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <div>
                  <p><strong>Data Processors:</strong> We use third-party services to process and store your data. All our primary processors use servers located in the EU.</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li><strong>SupaBase (EU server):</strong> Used for collection of login, leaderboard, and profile information.</li>
                    <li><strong>RunPod (EU server):</strong> Used for processing your video with our AI.</li>
                    <li><strong>Google Cloud (EU server):</strong> Used for storing the videos you record and the machine learning output pictures.</li>
                  </ul>
                </div>

                <div>
                  <p><strong>Data Retention:</strong></p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Feedback provided by you will be stored until it is no longer relevant for improving our features and quality.</li>
                    <li>Other personal data will be stored for as long as your account is active or as needed to provide you with our services.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to protecting your data. We implement encryption, access controls, and other industry-standard security measures to safeguard user data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Your Rights Under GDPR</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>You have certain rights regarding your personal data. You can exercise these rights at any time by contacting us at hello@golazo.ai. Your rights include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>The right to access your data.</li>
                  <li>The right to rectification (correct incorrect data).</li>
                  <li>The right to erasure (the "right to be forgotten").</li>
                  <li>The right to restrict processing.</li>
                  <li>The right to data portability.</li>
                  <li>The right to object to processing.</li>
                  <li>The right not to be subject to automated decision-making.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Users must be a minimum of 13 years of age to get access to the app. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at Hello@golazo.ai.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;