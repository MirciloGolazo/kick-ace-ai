import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'da' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.download': 'Download',
    'nav.about': 'About',
    
    // Hero Section
    'hero.badge': 'Master the Perfect Free Kick',
    'hero.title': 'Master Football Skills',
    'hero.titleHighlight': 'with AI Analysis',
    'hero.description': 'Perfect your shooting technique with AI-powered analysis. Record your shots, get instant feedback, and compete with friends to become the ultimate goal scorer.',
    'hero.downloadBtn': 'Download Now',
    'hero.watchDemo': 'Watch Demo',
    
    // Demo Section
    'demo.title': 'See Golazo AI in Action',
    'demo.description': 'Watch how our AI analyzes your technique and provides instant feedback to improve your free kicks.',
    
    // App Preview Sections
    'preview1.badge': 'AI-Powered Analysis',
    'preview1.title': 'Analyze Your Shots',
    'preview1.description': 'Get detailed analytics on every shot you take. Our AI analyzes your technique, and provides personalized feedback to help you improve.',    
    
    'preview2.badge': 'Social Competition',
    'preview2.title': 'Compete & Achieve',
    'preview2.description': 'Challenge friends, climb leaderboards, and unlock achievements in the future. Make training fun with our gamified approach to football skill development.',

    'preview3.badge': 'Feedback',
    'preview3.title': 'What\'s coming next?',
    'preview3.description': 'Let us know what you think of the app and which new skills you want to learn!',

    
    // Features Section
    'features.badge': 'Features',
    'features.title': 'Master Your Technique',
    'features.description': 'Advanced AI analysis helps you perfect your shooting technique with personalized feedback and gamified learning.',
    
    'feature1.title': 'AI Shot Analysis',
    'feature1.description': 'Record your free kicks and get instant AI feedback on your technique, ball contact, and trajectory.',
    
    'feature2.title': 'Precision Training',
    'feature2.description': 'Learn the exact technique Cristiano Ronaldo uses for his signature knuckleball free kicks.',
    
    'feature3.title': 'Points & Achievements',
    'feature3.description': 'Earn points for successful shots and unlock achievements as you master different techniques.',
    
    'feature4.title': 'Compete with Friends',
    'feature4.description': 'Challenge your friends in free kick competitions and climb the leaderboards.',
    
    'feature5.title': 'More coming soon!',
    'feature5.description': 'Give us your feedback in the app about which next skill we should add.',
    
    'feature6.title': 'Progress Tracking',
    'feature6.description': 'Track your improvement over time with detailed analytics and personalized training plans.',
    
    // Download Section
    'download.badge': 'Get Started',
    'download.title': 'Download Golazo AI',
    'download.description': 'Start your journey to mastering the perfect free kick. Available on iOS and Android.',
    'download.ios': 'Download for iOS',
    'download.android': 'Download for Android',
    
    // About Section
    'about.badge': 'About',
    'about.title': 'The Science Behind the Perfect Free Kick',
    'about.description': 'Our AI analyzes data points from Cristiano Ronaldo\'s famous free kicks to help you understand and master the knuckleball technique that makes goalkeepers helpless.',
    'about.knuckleball.title': 'What is a Knuckleball?',
    'about.knuckleball.description': 'The knuckleball is a technique where the ball travels with minimal rotation, causing unpredictable movement through the air. Cristiano Ronaldo has perfected this technique, making his free kicks nearly impossible to save.',
    'about.ai.title': 'AI-Powered Analysis',
    'about.ai.description': 'Our advanced computer vision AI analyzes your shooting technique in real-time, providing instant feedback on lower body placement, and follow-through to help you achieve the perfect knuckleball effect.',
    'about.stats.kicks': 'Free kicks analyzed',
    'about.stats.accuracy': 'Accuracy improvement',
    'about.stats.time': 'Average learning time',
    
    // Footer
    'footer.description': 'Master football skills with AI-powered analysis and training.',
    'footer.product': 'Product',
    'footer.support': 'Support',
    'footer.contact': 'Contact Us',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.connect': 'Connect',
    'footer.tiktok': 'TikTok',
    'footer.instagram': 'Instagram',
    'footer.youtube': 'YouTube',
    'footer.copyright': '© 2025 Golazo AI. All rights reserved.',
  },
  da: {
    // Navigation
    'nav.features': 'Funktioner',
    'nav.download': 'Download',
    'nav.about': 'Om os',
    
    // Hero Section
    'hero.badge': 'Mestre det perfekte frispark',
    'hero.title': 'Mestre fodbold færdigheder',
    'hero.titleHighlight': 'med AI analyse',
    'hero.description': 'Perfektioner din skydteknik med AI-drevet analyse. Optag dine skud, få øjeblikkelig feedback og konkurrér med venner for at blive den ultimative målscorer.',
    'hero.downloadBtn': 'Download nu',
    'hero.watchDemo': 'Se demo',
    
    // Demo Section
    'demo.title': 'Se Golazo AI i aktion',
    'demo.description': 'Se hvordan vores AI analyserer din teknik og giver øjeblikkelig feedback for at forbedre dine frispark.',
    
    // App Preview Sections
    'preview1.badge': 'AI-drevet analyse',
    'preview1.title': 'Analyser dine skud',
    'preview1.description': 'Få detaljeret analyse af hvert skud du tager. Vores AI analyserer din teknik og giver personlig feedback for at hjælpe dig med at forbedre dig.',
    
    'preview2.badge': 'Social konkurrence',
    'preview2.title': 'Konkurrér!',
    'preview2.description': 'Udfordre venner, klatr op af toplisterne og lås spændende ting op i fremtiden. Gør træning sjovt med vores gamificerede tilgang til fodbold færdighedsudvikling.',
    
    'preview3.badge': 'Feedback',
    'preview3.title': 'Hvad er det næste der kommer?',
    'preview3.description': 'Fortæl os hvad du synes om appen og hvilke nye færdigheder du gerne vil lære!',
    
    // Features Section
    'features.badge': 'Funktioner',
    'features.title': 'Mestre din teknik',
    'features.description': 'Avanceret AI analyse hjælper dig med at perfektionere din skydteknik med personlig feedback og gamificeret læring.',
    
    'feature1.title': 'AI skud analyse',
    'feature1.description': 'Optag dine frispark og få øjeblikkelig AI feedback på din teknik, boldkontakt og bane.',
    
    'feature2.title': 'Præcisionstræning',
    'feature2.description': 'Lær den nøjagtige teknik Cristiano Ronaldo bruger til sine karakteristiske knuckleball frispark.',
    
    'feature3.title': 'Point og præstationer',
    'feature3.description': 'Tjen point for vellykkede skud og lås præstationer op, mens du mestrer forskellige teknikker.',
    
    'feature4.title': 'Konkurrér med venner',
    'feature4.description': 'Udfordre dine venner i frispark konkurrencer og klatr på toplisterne.',
    
    'feature5.title': 'Mere kommer snart!',
    'feature5.description': 'Giv os din feedback i appen om hvilken næste færdighed vi skal tilføje.',
    
    'feature6.title': 'Fremskridtssporing',
    'feature6.description': 'Spor dine forbedringer over tid med detaljeret analyse og personlige træningsplaner.',
    
    // Download Section
    'download.badge': 'Kom i gang',
    'download.title': 'Download Golazo AI',
    'download.description': 'Start din rejse mod at mestre det perfekte frispark. Tilgængelig på iOS og Android.',
    'download.ios': 'Download til iOS',
    'download.android': 'Download til Android',
    
    // About Section
    'about.badge': 'Om os',
    'about.title': 'Videnskaben bag det perfekte frispark',
    'about.description': 'Vores AI analyserer tusindvis af datapunkter fra professionelle frispark for at hjælpe dig med at forstå og mestre knuckleball teknikken, der gør målmænd hjælpeløse.',
    'about.knuckleball.title': 'Hvad er en knuckleball?',
    'about.knuckleball.description': 'Knuckleball er en teknik hvor bolden rejser med minimal rotation, hvilket forårsager uforudsigelig bevægelse gennem luften. Cristiano Ronaldo har perfektioneret denne teknik og gør sine frispark næsten umulige at redde.',
    'about.ai.title': 'AI-drevet analyse',
    'about.ai.description': 'Vores avancerede computer vision teknologi analyserer din skydteknik i realtid og giver øjeblikkelig feedback på fodplacering, boldkontakt og opfølgning for at hjælpe dig med at opnå den perfekte knuckleball effekt.',
    'about.stats.kicks': 'Frispark analyseret',
    'about.stats.accuracy': 'Præcisionsforbedring',
    'about.stats.time': 'Gennemsnitlig indlæringstid',
    
    // Footer
    'footer.description': 'Mestre fodbold færdigheder med AI-drevet analyse og træning.',
    'footer.product': 'Produkt',
    'footer.support': 'Support',
    'footer.contact': 'Kontakt os',
    'footer.privacy': 'Privatlivspolitik',
    'footer.terms': 'Vilkår og betingelser',
    'footer.connect': 'Forbind',
    'footer.tiktok': 'TikTok',
    'footer.instagram': 'Instagram',
    'footer.youtube': 'YouTube',
    'footer.copyright': '© 2025 Golazo AI. Alle rettigheder forbeholdes.',
  },
  es: {
    // Navigation
    'nav.features': 'Características',
    'nav.download': 'Descargar',
    'nav.about': 'Acerca de',
    
    // Hero Section
    'hero.badge': 'Domina el tiro libre perfecto',
    'hero.title': 'Domina las habilidades del fútbol',
    'hero.titleHighlight': 'con análisis de IA',
    'hero.description': 'Perfecciona tu técnica de tiro con análisis impulsado por IA. Graba tus tiros, recibe comentarios instantáneos y compite con amigos para convertirte en el máximo goleador.',
    'hero.downloadBtn': 'Descargar ahora',
    'hero.watchDemo': 'Ver demo',
    
    // Demo Section
    'demo.title': 'Ve Golazo AI en Acción',
    'demo.description': 'Mira cómo nuestra IA analiza tu técnica y proporciona comentarios instantáneos para mejorar tus tiros libres.',
    
    // App Preview Sections
    'preview1.badge': 'Análisis impulsado por IA',
    'preview1.title': 'Analiza tus tiros',
    'preview1.description': 'Obtén análisis detallados de cada tiro que hagas. Nuestra IA analiza tu técnica y proporciona comentarios personalizados para ayudarte a mejorar.',
    
    'preview2.badge': 'Competencia social',
    'preview2.title': 'Compite y logra',
    'preview2.description': 'Desafía a amigos, escala las clasificaciones y desbloquea logros en el futuro. Haz que el entrenamiento sea divertido con nuestro enfoque gamificado para el desarrollo de habilidades de fútbol.',
    
    'preview3.badge': 'Comentarios',
    'preview3.title': '¿Qué viene después?',
    'preview3.description': '¡Dinos qué piensas de la aplicación y qué nuevas habilidades quieres aprender!',
    
    // Features Section
    'features.badge': 'Características',
    'features.title': 'Domina tu técnica',
    'features.description': 'El análisis avanzado de IA te ayuda a perfeccionar tu técnica de tiro con comentarios personalizados y aprendizaje gamificado.',
    
    'feature1.title': 'Análisis de tiro con IA',
    'feature1.description': 'Graba tus tiros libres y recibe comentarios instantáneos de IA sobre tu técnica, contacto con el balón y trayectoria.',
    
    'feature2.title': 'Entrenamiento de precisión',
    'feature2.description': 'Aprende la técnica exacta que usa Cristiano Ronaldo para sus característicos tiros libres knuckleball.',
    
    'feature3.title': 'Puntos y logros',
    'feature3.description': 'Gana puntos por tiros exitosos y desbloquea logros mientras dominas diferentes técnicas.',
    
    'feature4.title': 'Compite con amigos',
    'feature4.description': 'Desafía a tus amigos en competencias de tiros libres y escala las clasificaciones.',
    
    'feature5.title': '¡Más próximamente!',
    'feature5.description': 'Danos tu opinión en la aplicación sobre qué próxima habilidad deberíamos agregar.',
    
    'feature6.title': 'Seguimiento de progreso',
    'feature6.description': 'Rastrea tu mejora a lo largo del tiempo con análisis detallados y planes de entrenamiento personalizados.',
    
    // Download Section
    'download.badge': 'Comenzar',
    'download.title': 'Descargar Golazo AI',
    'download.description': 'Comienza tu viaje para dominar el tiro libre perfecto. Disponible en iOS y Android.',
    'download.ios': 'Descargar para iOS',
    'download.android': 'Descargar para Android',
    
    // About Section
    'about.badge': 'Acerca de',
    'about.title': 'La ciencia detrás del tiro libre perfecto',
    'about.description': 'Nuestra IA analiza miles de puntos de datos de tiros libres profesionales para ayudarte a entender y dominar la técnica knuckleball que deja indefensos a los porteros.',
    'about.knuckleball.title': '¿Qué es un knuckleball?',
    'about.knuckleball.description': 'El knuckleball es una técnica donde el balón viaja con rotación mínima, causando movimiento impredecible a través del aire. Cristiano Ronaldo ha perfeccionado esta técnica, haciendo sus tiros libres casi imposibles de detener.',
    'about.ai.title': 'Análisis impulsado por IA',
    'about.ai.description': 'Nuestra tecnología avanzada de visión por computadora analiza tu técnica de tiro en tiempo real, proporcionando comentarios instantáneos sobre la colocación del pie, contacto con el balón y seguimiento para ayudarte a lograr el efecto knuckleball perfecto.',
    'about.stats.kicks': 'Tiros libres analizados',
    'about.stats.accuracy': 'Mejora de precisión',
    'about.stats.time': 'Tiempo promedio de aprendizaje',
    
    // Footer
    'footer.description': 'Domina las habilidades del fútbol con análisis y entrenamiento impulsado por IA.',
    'footer.product': 'Producto',
    'footer.support': 'Soporte',
    'footer.contact': 'Contáctanos',
    'footer.privacy': 'Política de privacidad',
    'footer.terms': 'Términos y condiciones',
    'footer.connect': 'Conectar',
    'footer.tiktok': 'TikTok',
    'footer.instagram': 'Instagram',
    'footer.youtube': 'YouTube',
    'footer.copyright': '© 2025 Golazo AI. Todos los derechos reservados.',
  },
};

const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase();
  
  // Danish detection
  if (browserLang.startsWith('da') || browserLang === 'da-dk') {
    return 'da';
  }
  
  // Spanish detection
  if (browserLang.startsWith('es') || 
      ['es-es', 'es-mx', 'es-ar', 'es-co', 'es-cl', 'es-pe', 'es-ve', 'es-ec', 'es-gt', 'es-cu', 'es-bo', 'es-do', 'es-hn', 'es-py', 'es-sv', 'es-ni', 'es-cr', 'es-pa', 'es-uy', 'es-pr'].includes(browserLang)) {
    return 'es';
  }
  
  // Default to English
  return 'en';
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => detectBrowserLanguage());

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};