import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Smartphone, Target, Trophy, Users, Play, Download, Apple, PlayCircle } from "lucide-react";
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
                src="/lovable-uploads/58dc850b-44ff-491e-93e4-b101d64c5ccd.png" 
                alt="Golazo AI Logo" 
                className="h-8 w-8"
              />
              <span className="font-bold text-xl">Golazo AI</span>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#features" className="transition-colors hover:text-foreground/80 text-foreground/60">{t('nav.features')}</a>
              <a href="#download" className="transition-colors hover:text-foreground/80 text-foreground/60">{t('nav.download')}</a>
              <a href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">{t('nav.about')}</a>
            </nav>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="secondary" className="mb-4">
                {t('hero.badge')}
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                {t('hero.title')}
                <br />
                <span className="text-primary">{t('hero.titleHighlight')}</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                {t('hero.description')}
              </p>
            </div>
            <div className="space-x-4 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Download className="mr-2 h-4 w-4" />
                {t('hero.downloadBtn')}
              </Button>
              <Button variant="secondary" size="lg">
                <Play className="mr-2 h-4 w-4" />
                {t('hero.watchDemo')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20">
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
                  className="max-w-xs rounded-2xl shadow-2xl"
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

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-section">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              {t('features.badge')}
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t('features.title')}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
              {t('features.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('feature1.title')}</h3>
                <p className="text-muted-foreground">
                  {t('feature1.description')}
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('feature2.title')}</h3>
                <p className="text-muted-foreground">
                  {t('feature2.description')}
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('feature3.title')}</h3>
                <p className="text-muted-foreground">
                  {t('feature3.description')}
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('feature4.title')}</h3>
                <p className="text-muted-foreground">
                  {t('feature4.description')}
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Play className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('feature5.title')}</h3>
                <p className="text-muted-foreground">
                  {t('feature5.description')}
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('feature6.title')}</h3>
                <p className="text-muted-foreground">
                  {t('feature6.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              {t('download.badge')}
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t('download.title')}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
              {t('download.description')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="min-w-48">
              <Apple className="mr-2 h-5 w-5" />
              {t('download.ios')}
            </Button>
            <Button variant="outline" size="lg" className="min-w-48">
              <PlayCircle className="mr-2 h-5 w-5" />
              {t('download.android')}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            <div className="bg-muted rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <p className="text-muted-foreground mb-4">{t('about.stats.kicks')}</p>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground mb-4">{t('about.stats.accuracy')}</p>
              <div className="text-4xl font-bold text-primary mb-2">5 {t('about.stats.time').includes('Minutes') ? 'Minutes' : t('about.stats.time').split(' ')[1]}</div>
              <p className="text-muted-foreground">{t('about.stats.time')}</p>
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
                  src="/lovable-uploads/58dc850b-44ff-491e-93e4-b101d64c5ccd.png" 
                  alt="Golazo AI Logo" 
                  className="h-8 w-8"
                />
                <span className="font-bold text-xl">Golazo AI</span>
              </div>
              <p className="text-muted-foreground">
                {t('footer.description')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">{t('footer.product')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground">{t('nav.features')}</a></li>
                <li><a href="#download" className="hover:text-foreground">{t('nav.download')}</a></li>
                <li><a href="#" className="hover:text-foreground">{t('footer.pricing')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">{t('footer.support')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">{t('footer.help')}</a></li>
                <li><a href="#" className="hover:text-foreground">{t('footer.contact')}</a></li>
                <li><a href="#" className="hover:text-foreground">{t('footer.privacy')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">{t('footer.connect')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">{t('footer.twitter')}</a></li>
                <li><a href="#" className="hover:text-foreground">{t('footer.instagram')}</a></li>
                <li><a href="#" className="hover:text-foreground">{t('footer.youtube')}</a></li>
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