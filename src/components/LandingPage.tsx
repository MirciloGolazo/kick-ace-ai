import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Smartphone, Target, Trophy, Users, Play, Apple, PlayCircle, Clock } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import appScreenshot1 from "@/assets/app-screenshot-1.png";
import appScreenshot2 from "@/assets/app-screenshot-2.png";
import appScreenshot3 from "@/assets/app-screenshot-3.png";


const LandingPage = () => {
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
              <span className="font-bold text-sm sm:text-xl md:text-xl lg:text-xl">Golazo AI</span>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#features" className="transition-colors hover:text-foreground/80 text-foreground/60">{t('nav.features')}</a>
              <a href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">{t('nav.about')}</a>
            </nav>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative bg-gradient-hero py-20 md:py-32 overflow-hidden">
        {/* Video Background Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-black/60 to-black/40">
            {/* Placeholder for video - replace this div with video element later */}
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-50"></div>
          </div>
        </div>
        
        {/* Content overlay */}
        <div className="relative z-10 container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
                {t('hero.badge')}
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {t('hero.title')}
                <br />
                <span className="text-primary">{t('hero.titleHighlight')}</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-white/90 md:text-xl lg:text-2xl">
                {t('hero.description')}
              </p>
            </div>
            <div className="flex flex-col gap-4 pt-4 w-full max-w-md mx-auto">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 w-full">
                <Apple className="mr-2 h-5 w-5" />
                {t('download.ios')}
              </Button>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 w-full">
                <PlayCircle className="mr-2 h-5 w-5" />
                {t('download.android')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary">
                {t('preview1.badge')}
              </Badge>
              <h3 className="text-3xl font-bold tracking-tighter">
                {t('preview1.title')}
              </h3>
              <p className="text-muted-foreground text-lg">
                {t('preview1.description')}
              </p>
            </div>
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative">
                <img 
                  src={appScreenshot1} 
                  alt="Golazo AI shot analysis interface" 
                  className="max-w-xs rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-section">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2 flex justify-center order-2 lg:order-1">
              <div className="relative">
                <img 
                  src={appScreenshot2} 
                  alt="Golazo AI leaderboard and competition" 
                  className="max-w-xs rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <Badge variant="secondary">
                {t('preview2.badge')}
              </Badge>
              <h3 className="text-3xl font-bold tracking-tighter">
                {t('preview2.title')}
              </h3>
              <p className="text-muted-foreground text-lg">
                {t('preview2.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary">
                {t('preview3.badge')}
              </Badge>
              <h3 className="text-3xl font-bold tracking-tighter">
                {t('preview3.title')}
              </h3>
              <p className="text-muted-foreground text-lg">
                {t('preview3.description')}
              </p>
            </div>
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative">
                <img 
                  src={appScreenshot3} 
                  alt="Golazo AI feedback and technique analysis" 
                  className="max-w-xs rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Watch Demo Section */}
      <section id="download" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              {t('hero.watchDemo')}
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t('demo.title')}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
              {t('demo.description')}
            </p>
          </div>
          <div className="flex justify-center">
            <Button variant="outline" size="lg" className="min-w-48">
              <Play className="mr-2 h-5 w-5" />
              {t('hero.watchDemo')}
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-section">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              {t('about.badge')}
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t('about.title')}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
              {t('about.description')}
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3">{t('about.knuckleball.title')}</h3>
                <p className="text-muted-foreground">
                  {t('about.knuckleball.description')}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">{t('about.ai.title')}</h3>
                <p className="text-muted-foreground">
                  {t('about.ai.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/logo.png" 
                  alt="Golazo AI Logo" 
                  className="h-8 w-auto rounded-full"
                />
                <span className="font-bold text-sm sm:text-xl md:text-xl lg:text-xl">Golazo AI</span>
              </div>
              <p className="text-muted-foreground">
                {t('footer.description')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">{t('footer.product')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground">{t('nav.features')}</a></li>
                <li><a href="#" className="hover:text-foreground scroll-smooth" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>{t('nav.download')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">{t('footer.support')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/contact" className="hover:text-foreground">{t('footer.contact')}</a></li>
                <li><a href="/privacy" className="hover:text-foreground">{t('footer.privacy')}</a></li>
                <li><a href="/terms" className="hover:text-foreground">{t('footer.terms')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Follow us on</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="https://www.tiktok.com/@golazo_ai" className="hover:text-foreground" target="_blank" rel="noopener noreferrer">{t('footer.tiktok')}</a></li>
                <li><a href="https://www.instagram.com/golazoai/" className="hover:text-foreground" target="_blank" rel="noopener noreferrer">{t('footer.instagram')}</a></li>
                <li><a href="https://www.youtube.com/@GolazoAI" className="hover:text-foreground" target="_blank" rel="noopener noreferrer">{t('footer.youtube')}</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;