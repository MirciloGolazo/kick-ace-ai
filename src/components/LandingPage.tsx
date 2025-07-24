import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Smartphone, Target, Trophy, Users, Play, Download, Apple, PlayCircle } from "lucide-react";
import appScreenshot1 from "@/assets/app-screenshot-1.png";
import appScreenshot2 from "@/assets/app-screenshot-2.png";
import appScreenshot3 from "@/assets/app-screenshot-3.png";

const LandingPage = () => {
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
              <a href="#features" className="transition-colors hover:text-foreground/80 text-foreground/60">Features</a>
              <a href="#download" className="transition-colors hover:text-foreground/80 text-foreground/60">Download</a>
              <a href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</a>
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="secondary" className="mb-4">
                Master the Perfect Free Kick
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                Master Football Skills
                <br />
                <span className="text-primary">with AI Analysis</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Perfect your shooting technique with AI-powered analysis. Record your shots, get instant feedback, and compete with friends to become the ultimate goal scorer.
              </p>
            </div>
            <div className="space-x-4 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Download className="mr-2 h-4 w-4" />
                Download Now
              </Button>
              <Button variant="secondary" size="lg">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
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
                AI-Powered Analysis
              </Badge>
              <h3 className="text-3xl font-bold tracking-tighter">
                Track Your Shots
              </h3>
              <p className="text-muted-foreground text-lg">
                Get detailed analytics on every shot you take. Our AI analyzes your technique, ball trajectory, and provides personalized feedback to help you improve.
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
                Video Analysis
              </Badge>
              <h3 className="text-3xl font-bold tracking-tighter">
                Motion Tracking
              </h3>
              <p className="text-muted-foreground text-lg">
                Advanced computer vision technology tracks your movement and ball contact in real-time, providing detailed insights into your shooting technique.
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
                Social Competition
              </Badge>
              <h3 className="text-3xl font-bold tracking-tighter">
                Compete & Achieve
              </h3>
              <p className="text-muted-foreground text-lg">
                Challenge friends, climb leaderboards, and unlock achievements. Make training fun with our gamified approach to football skill development.
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
              Features
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Master Your Technique
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
              Advanced AI analysis helps you perfect your shooting technique with personalized feedback and gamified learning.
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
                <h3 className="text-xl font-semibold mb-2">AI Shot Analysis</h3>
                <p className="text-muted-foreground">
                  Record your free kicks and get instant AI feedback on your technique, ball contact, and trajectory.
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
                <h3 className="text-xl font-semibold mb-2">Precision Training</h3>
                <p className="text-muted-foreground">
                  Learn the exact technique Cristiano Ronaldo uses for his signature knuckleball free kicks.
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
                <h3 className="text-xl font-semibold mb-2">Points & Achievements</h3>
                <p className="text-muted-foreground">
                  Earn points for successful shots and unlock achievements as you master different techniques.
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
                <h3 className="text-xl font-semibold mb-2">Compete with Friends</h3>
                <p className="text-muted-foreground">
                  Challenge your friends in free kick competitions and climb the leaderboards.
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
                <h3 className="text-xl font-semibold mb-2">Video Tutorials</h3>
                <p className="text-muted-foreground">
                  Access detailed video tutorials breaking down the physics and technique of the perfect knuckleball.
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
                <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
                <p className="text-muted-foreground">
                  Track your improvement over time with detailed analytics and personalized training plans.
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
              Get Started
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Download Golazo AI
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
              Start your journey to mastering the perfect free kick. Available on iOS and Android.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="min-w-48">
              <Apple className="mr-2 h-5 w-5" />
              Download for iOS
            </Button>
            <Button variant="outline" size="lg" className="min-w-48">
              <PlayCircle className="mr-2 h-5 w-5" />
              Download for Android
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-section">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              About
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              The Science Behind the Perfect Free Kick
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
              Our AI analyzes thousands of data points from professional free kicks to help you understand and master the knuckleball technique that makes goalkeepers helpless.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3">What is a Knuckleball?</h3>
                <p className="text-muted-foreground">
                  The knuckleball is a technique where the ball travels with minimal rotation, causing unpredictable movement through the air. Cristiano Ronaldo has perfected this technique, making his free kicks nearly impossible to save.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">AI-Powered Analysis</h3>
                <p className="text-muted-foreground">
                  Our advanced computer vision technology analyzes your shooting technique in real-time, providing instant feedback on foot placement, ball contact, and follow-through to help you achieve the perfect knuckleball effect.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <p className="text-muted-foreground mb-4">Free kicks analyzed</p>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground mb-4">Accuracy improvement</p>
              <div className="text-4xl font-bold text-primary mb-2">5 Minutes</div>
              <p className="text-muted-foreground">Average learning time</p>
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
                Master football skills with AI-powered analysis and training.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground">Features</a></li>
                <li><a href="#download" className="hover:text-foreground">Download</a></li>
                <li><a href="#" className="hover:text-foreground">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Twitter</a></li>
                <li><a href="#" className="hover:text-foreground">Instagram</a></li>
                <li><a href="#" className="hover:text-foreground">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Golazo AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;