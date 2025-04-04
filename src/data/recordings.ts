export type Recording = {
  id: string;
  title: string;
  description: string;
  duration: string;
  audioSrc: string;
  category: Category;
  featured?: boolean;
  embedType?: "soundcloud";
  embedSrc?: string;
  keywords?: string[]; // Added keywords field for SEO
};

export type Category = 
  | "stress-anxiety"
  | "confidence"
  | "sleep"
  | "personal-growth"
  | "inner-calm"
  | "manifest-dreams"
  | "teenage-anti-bullying";

export const categoryNames: Record<Category, string> = {
  "stress-anxiety": "Anxiety",
  "confidence": "Confidence",
  "sleep": "Sleep & Insomnia",
  "personal-growth": "Future Self Visualization",
  "inner-calm": "Inner Calm",
  "manifest-dreams": "Manifest Your Dreams",
  "teenage-anti-bullying": "Teenage Anti-Bullying"
};

// Define initial recordings data
const initialRecordings: Recording[] = [
  // First set of recordings for stress-anxiety
  {
    id: "1",
    title: "Peace In The Now",
    description: "Free guided meditation for anxiety and stress relief. This gentle hypnosis session guides you to find peace in the present moment, helping you overcome overthinking and worry.",
    duration: "18:24",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3", // Fallback audio
    embedType: "soundcloud",
    embedSrc: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2051337652%3Fsecret_token%3Ds-UimZw0AL1H1&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
    category: "stress-anxiety",
    featured: true,
    keywords: ["free guided meditation for anxiety and stress relief", "calming hypnosis", "meditation for anxiety and overthinking"]
  },
  {
    id: "2",
    title: "Deep Relaxation Journey",
    description: "Let go of daily worries with this calming hypnosis for social anxiety. A perfect meditation for those dealing with social situations and public gatherings.",
    duration: "18:30",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-dreaming-big-31.mp3",
    category: "stress-anxiety",
    keywords: ["calming hypnosis for social anxiety", "meditation for social situations", "anxiety relief"]
  },
  {
    id: "3",
    title: "Quiet Mind Meditation",
    description: "Short meditation for anxiety and overthinking. Learn how to use meditation for panic attacks and find inner peace with this guided hypnosis session.",
    duration: "15:20",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-a-very-happy-christmas-897.mp3",
    category: "stress-anxiety",
    keywords: ["short meditation for anxiety and overthinking", "how to use meditation for panic attacks", "quick anxiety relief"]
  },
  
  // Confidence category recordings
  {
    id: "4",
    title: "Personal Confidence Booster",
    description: "Guided meditation for self-confidence and inner strength. Build unshakeable confidence and self-esteem with this powerful custom hypnosis recording.",
    duration: "30:00",
    audioSrc: "https://drive.google.com/uc?export=download&id=1chBUp0d-gg3RD73VeHo3NH9Np22-tKlK",
    category: "confidence",
    featured: true,
    embedType: "soundcloud",
    embedSrc: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2056850564&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
    keywords: ["guided meditation for self-confidence and inner strength", "hypnosis to boost confidence", "self-esteem meditation"]
  },
  {
    id: "5",
    title: "Public Speaking Mastery",
    description: "Confidence meditation for speaking in public. Overcome fear of public speaking and present with confidence using this targeted hypnosis for professionals and students.",
    duration: "19:45",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3",
    category: "confidence",
    keywords: ["confidence meditation for speaking in public", "overcome fear of public speaking", "presentation confidence"]
  },
  {
    id: "6",
    title: "Inner Strength Activation",
    description: "Free hypnosis to boost confidence and motivation. Discover and activate your inner strength and resilience with this empowering session designed to overcome self-doubt and fear.",
    duration: "24:30",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-driving-ambition-32.mp3",
    category: "confidence",
    keywords: ["free hypnosis to boost confidence and motivation", "hypnosis to overcome self-doubt and fear", "inner strength meditation"]
  },

  // Sleep category recordings - UPDATED WITH NEW SLEEP MEDITATION
  {
    id: "7",
    title: "Deep Sleep Meditation",
    description: "Free sleep hypnosis for deep relaxation. Fall asleep quickly and enjoy restful sleep all night with this calming, gentle sleep meditation for anxiety and insomnia.",
    duration: "25:12",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-forest-treasure-138.mp3", // Fallback audio
    category: "sleep",
    featured: true,
    embedType: "soundcloud",
    embedSrc: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2070655640&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    keywords: ["free sleep hypnosis for deep relaxation", "best sleep meditation for anxiety and stress", "sleep hypnosis", "insomnia relief", "fall asleep fast"]
  },
  {
    id: "8",
    title: "Insomnia Relief",
    description: "Insomnia relief meditation for a restful night. Break the cycle of insomnia and train your mind for healthy sleep patterns with this hypnosis for calming the mind before bed.",
    duration: "27:40",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3",
    category: "sleep",
    keywords: ["insomnia relief meditation for a restful night", "hypnosis for calming the mind before bed", "sleep meditation"]
  },
  {
    id: "9",
    title: "Peaceful Night's Rest",
    description: "10-minute guided meditation for falling asleep fast. Release the day's tension and prepare your mind and body for rejuvenating sleep regardless of anxiety levels.",
    duration: "25:15",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-blurry-future-120.mp3",
    category: "sleep",
    keywords: ["10-minute guided meditation for falling asleep fast", "quick sleep meditation", "bedtime relaxation"]
  },

  // Personal growth category recordings
  {
    id: "13",
    title: "Future Self Visualization",
    description: "Guided visualization meditation to manifest success. Connect with your ideal future self and set the path to becoming who you want to be using the law of attraction.",
    duration: "26:20",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-deep-urban-623.mp3",
    category: "personal-growth",
    featured: true,
    embedType: "soundcloud",
    embedSrc: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2056845500&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
    keywords: ["guided visualization meditation to manifest success", "future self meditation for personal growth and clarity", "manifest your best self"]
  },
  {
    id: "14",
    title: "Habit Transformation",
    description: "Hypnosis for manifesting your dream life. Replace limiting habits with empowering ones that align with your ideal self through this visualization exercise.",
    duration: "24:10",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-blurry-future-120.mp3",
    category: "personal-growth",
    keywords: ["hypnosis for manifesting your dream life", "habit transformation meditation", "replacing limiting beliefs"]
  },
  {
    id: "15",
    title: "Unlock Your Potential",
    description: "Law of attraction meditation for abundance and confidence. Remove subconscious blocks and unlock your full potential to attract positivity and wealth in your life.",
    duration: "28:45",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-forest-treasure-138.mp3",
    category: "personal-growth",
    keywords: ["law of attraction meditation for abundance and confidence", "visualization exercise to attract positivity and wealth", "abundance meditation"]
  },
  
  // Inner calm category recordings
  {
    id: "16",
    title: "Inner Calm Meditation",
    description: "In order to go from surviving to thriving we need to regulate our nervous system. Only then can we unlock the key to our full potential and leading lives of purpose and fulfilment.",
    duration: "20:15",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3", // Fallback audio
    embedType: "soundcloud",
    embedSrc: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2060244268&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
    category: "inner-calm",
    featured: true,
    keywords: ["nervous system regulation", "meditation for regulation", "surviving to thriving", "purpose and fulfillment"]
  },
  
  // Manifest dreams category recordings
  {
    id: "17",
    title: "Manifest Your Dreams",
    description: "Powerful guided meditation for manifestation and abundance. Harness the power of your subconscious mind to manifest your deepest desires and dreams. This session helps you clarify your vision and connect with the emotional frequency of your desired reality.",
    duration: "25:30",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-dreaming-big-31.mp3", // Fallback audio
    category: "manifest-dreams",
    featured: true,
    embedType: "soundcloud",
    embedSrc: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2064258228&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
    keywords: ["dream manifestation", "manifest desires", "law of attraction", "visualization for manifestation", "manifest your dreams meditation", "abundance meditation", "how to manifest what you want"]
  },
  {
    id: "18",
    title: "Abundance Activation",
    description: "Open yourself to receiving abundance in all forms. This meditation removes limiting beliefs about wealth and prosperity, allowing you to align with the frequency of abundance.",
    duration: "22:15",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-driving-ambition-32.mp3",
    category: "manifest-dreams",
    keywords: ["abundance meditation", "prosperity hypnosis", "wealth attraction", "financial freedom"]
  },
  {
    id: "19",
    title: "Quantum Reality Creation",
    description: "Tap into quantum field principles to reshape your reality. This advanced manifestation technique uses specific visualization methods that help you collapse possibility waves into your desired experiences.",
    duration: "27:40",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-forest-treasure-138.mp3",
    category: "manifest-dreams",
    keywords: ["quantum manifestation", "reality creation meditation", "conscious creation", "manifestation techniques"]
  },
  
  // Teenage Anti-Bullying category recordings
  {
    id: "20",
    title: "Building Teen Resilience",
    description: "Free guided meditation for teenagers experiencing bullying. This powerful hypnosis session helps teens build mental and emotional resilience, increase self-confidence, and develop practical coping strategies for difficult social situations.",
    duration: "23:40",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3", // Fallback audio
    category: "teenage-anti-bullying",
    featured: true,
    embedType: "soundcloud",
    embedSrc: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2065152776&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
    keywords: ["teen resilience meditation", "anti-bullying for teenagers", "confidence building for teens", "teenage mental strength", "bullying support", "teen self-esteem", "how to deal with bullying", "hypnosis for bullied teens"]
  },
  {
    id: "21",
    title: "Social Confidence for Teens",
    description: "Boost your social confidence and overcome peer pressure with this guided meditation designed specifically for teenagers. Learn how to stay true to yourself while navigating complex social environments.",
    duration: "19:15",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-dreaming-big-31.mp3",
    category: "teenage-anti-bullying",
    keywords: ["teen social confidence", "peer pressure resistance", "teenage self-esteem", "authentic self meditation"]
  },
  {
    id: "22",
    title: "Teen Emotional Healing",
    description: "A gentle guided meditation to help teenagers process and heal from emotional wounds caused by bullying or social exclusion. This session creates a safe space for emotional release and rebuilding self-worth.",
    duration: "24:30",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-deep-urban-623.mp3",
    category: "teenage-anti-bullying",
    keywords: ["emotional healing for teens", "teenage trauma release", "bullying recovery meditation", "teen self-worth"]
  }
];

// Update categoryKeywords - ENHANCED WITH MORE RELEVANT KEYWORDS
export const categoryKeywords: Record<Category, string> = {
  "stress-anxiety": "free guided meditation for anxiety and stress relief, calming hypnosis for social anxiety, short meditation for anxiety and overthinking, how to use meditation for panic attacks, best meditation for anxiety before sleep",
  "confidence": "guided meditation for self-confidence and inner strength, hypnosis to overcome self-doubt and fear, confidence meditation for speaking in public, daily self-esteem meditation for a positive mindset, free hypnosis to boost confidence and motivation",
  "sleep": "free sleep hypnosis for deep relaxation, 10-minute guided meditation for falling asleep fast, insomnia relief meditation for a restful night, hypnosis for calming the mind before bed, best sleep meditation for anxiety and stress",
  "personal-growth": "guided visualization meditation to manifest success, hypnosis for manifesting your dream life, law of attraction meditation for abundance and confidence, visualization exercise to attract positivity and wealth, future self meditation for personal growth and clarity",
  "inner-calm": "inner calm meditation, nervous system regulation, guided meditation for inner peace, techniques for emotional balance, meditation for purpose and fulfillment",
  "manifest-dreams": "manifest your dreams meditation, manifestation techniques, guided manifestation, law of attraction meditation, manifest abundance, create your desired reality, visualization for manifestation, quantum manifestation, how to manifest what you want, manifest wealth, manifest health",
  "teenage-anti-bullying": "anti-bullying meditation for teens, teen resilience meditation, how to deal with bullying, teen anxiety relief, free meditation for bullied teenagers, confidence for teenagers, teen emotional support, bullying coping strategies, teen self-esteem hypnosis, adolescent mental health, teenage struggles"
};

// Update categoryDescriptions - ENHANCED DESCRIPTIONS
export const categoryDescriptions: Record<Category, string> = {
  "stress-anxiety": "Free guided meditations and hypnosis recordings for anxiety relief, stress reduction, and managing overthinking or panic attacks.",
  "confidence": "Boost your self-confidence and overcome self-doubt with our free guided hypnosis sessions for personal empowerment and public speaking confidence.",
  "sleep": "Fall asleep faster and enjoy deeper rest with our free sleep hypnosis recordings designed to calm your mind before bed and relieve insomnia.",
  "personal-growth": "Manifest your dreams and visualize your ideal future self with our guided meditation recordings for personal growth, abundance, and positive change.",
  "inner-calm": "Find inner calm and peace with our guided meditations designed to help you transition from surviving to thriving and unlock your full potential.",
  "manifest-dreams": "Free guided meditations to help you effectively manifest your deepest desires, attract abundance, and create your dream reality using proven visualization and law of attraction techniques.",
  "teenage-anti-bullying": "Free supportive guided meditations for teenagers dealing with bullying. Build resilience, boost confidence, and develop effective emotional coping strategies."
};

// Create a copy of the recordings and apply any specific updates needed
const updatedTeenBullyingRecordings = initialRecordings.map(recording => {
  if (recording.id === "20") {
    return {
      ...recording,
      description: "Free guided meditation for teenagers experiencing bullying. This powerful hypnosis session helps teens build mental and emotional resilience, increase self-confidence, and develop practical coping strategies for difficult social situations.",
      keywords: [
        "teen resilience meditation", 
        "anti-bullying for teenagers", 
        "confidence building for teens", 
        "teenage mental strength", 
        "bullying support", 
        "teen self-esteem", 
        "how to deal with bullying", 
        "hypnosis for bullied teens",
        "teen mental health",
        "coping with adolescent struggles"
      ]
    };
  }
  return recording;
});

// Export the SINGLE recordings array
export const recordings = updatedTeenBullyingRecordings;

export const getFeaturedRecordings = (): Recording[] => {
  return recordings.filter(recording => recording.featured);
};

export const getRecordingsByCategory = (category: Category): Recording[] => {
  return recordings.filter(recording => recording.category === category);
};

export const getAllCategories = (): Category[] => {
  return Object.keys(categoryNames) as Category[];
};
