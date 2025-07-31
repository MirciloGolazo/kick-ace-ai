import { useLanguage } from "@/hooks/useLanguage";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Mail, MapPin, Building, Hash } from "lucide-react";

const Contact = () => {
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
                className="h-8 w-auto rounded-full"
              />
              <span className="font-bold text-sm sm:text-xl md:text-xl lg:text-xl">Golazo AI</span>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="/" className="transition-colors hover:text-foreground/80 text-foreground/60">Home</a>
              <a href="/#features" className="transition-colors hover:text-foreground/80 text-foreground/60">Features</a>
              <a href="/#about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</a>
            </nav>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We're here to help! Get in touch with us for any questions, feedback, or support regarding Golazo AI. 
                Whether you need technical assistance, have feature suggestions, or want to discuss partnership opportunities, 
                our team is ready to assist you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-card rounded-lg p-6 border">
                  <div className="flex items-center space-x-3 mb-4">
                    <Building className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">Company Information</h3>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Company:</strong> Golazo AI ApS</p>
                    <div className="flex items-center space-x-2">
                      <Hash className="h-4 w-4" />
                      <p><strong>Company ID:</strong> 45681513</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <p><strong>Country:</strong> Denmark</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-lg p-6 border">
                  <div className="flex items-center space-x-3 mb-4">
                    <Mail className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">Get in Touch</h3>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <p>For all inquiries, please contact us at:</p>
                    <a 
                      href="mailto:Hello@golazo.ai" 
                      className="text-primary hover:text-primary/80 font-medium"
                    >
                      Hello@golazo.ai
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-section rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">What can we help you with?</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>Technical support and troubleshooting</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>Feature requests and feedback</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>Partnership and collaboration opportunities</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>Media inquiries and press questions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>General questions about our AI technology</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>Account and billing support</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="text-lg font-semibold mb-4">Response Time</h3>
                  <p className="text-muted-foreground">
                    We typically respond to all inquiries within 24-48 hours during business days. 
                    For urgent technical issues, please include "URGENT" in your subject line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;