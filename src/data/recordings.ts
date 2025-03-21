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
  | "anti-bullying"
  | "personal-growth";

export const categoryNames: Record<Category, string> = {
  "stress-anxiety": "Anxiety",
  "confidence": "Confidence",
  "sleep": "Sleep & Insomnia",
  "anti-bullying": "Anti-Bullying",
  "personal-growth": "Future Self Visualization"
};

// Sample recordings data
export const recordings: Recording[] = [
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

  // Update the sleep recordings with new audio sources
  {
    id: "7",
    title: "Deep Sleep Induction",
    description: "Free sleep hypnosis for deep relaxation. Fall asleep quickly and enjoy restful sleep all night with this best sleep meditation for anxiety and stress.",
    duration: "30:10",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-forest-treasure-138.mp3", // Updated to a more reliable source
    category: "sleep",
    featured: true,
    keywords: ["free sleep hypnosis for deep relaxation", "best sleep meditation for anxiety and stress", "sleep hypnosis"]
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
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-blurry-future-120.mp3", // Updated to a more reliable source
    category: "sleep",
    keywords: ["10-minute guided meditation for falling asleep fast", "quick sleep meditation", "bedtime relaxation"]
  },

  // Update the anti-bullying recordings with new audio sources
  {
    id: "10",
    title: "Building Resilience",
    description: "Guided meditation for teens dealing with bullying. Develop psychological resilience to stand strong against bullying and peer pressure with this supportive hypnosis session.",
    duration: "21:35",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-blurry-future-120.mp3", // Updated to a more reliable source
    category: "anti-bullying",
    featured: true,
    keywords: ["guided meditation for teens dealing with bullying", "hypnosis for building resilience after bullying", "teen resilience"]
  },
  {
    id: "11",
    title: "Teen Confidence Builder",
    description: "Self-love meditation for teenagers with low confidence. Build a strong sense of self-worth and confidence to overcome social challenges and bullying situations.",
    duration: "18:50",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-forest-treasure-138.mp3", // Updated to a more reliable source
    category: "anti-bullying",
    keywords: ["self-love meditation for teenagers with low confidence", "teen confidence meditation", "overcoming bullying"]
  },
  {
    id: "12",
    title: "Emotional Shield",
    description: "Meditation to let go of negative thoughts from bullying. Create an emotional shield to protect yourself from negative influences and remarks, helping you stay strong after being bullied.",
    duration: "20:25",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-deep-urban-623.mp3",
    category: "anti-bullying",
    keywords: ["meditation to let go of negative thoughts from bullying", "how to stay strong after being bullied – meditation", "emotional protection"]
  },
  {
    id: "13",
    title: "Future Self Visualization",
    description: "Guided visualization meditation to manifest success. Connect with your ideal future self and set the path to becoming who you want to be using the law of attraction.",
    duration: "26:20",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-deep-urban-623.mp3",
    category: "personal-growth",
    featured: true,
    embedType: "soundcloud",
    embedSrc: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2056845500&color=%23ff5500&auto_play=false&hide_related=false&show_user=true&show_reposts=false&show_teaser=false",
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
  }
];

export const getFeaturedRecordings = (): Recording[] => {
  return recordings.filter(recording => recording.featured);
};

export const getRecordingsByCategory = (category: Category): Recording[] => {
  return recordings.filter(recording => recording.category === category);
};

export const getAllCategories = (): Category[] => {
  return Object.keys(categoryNames) as Category[];
};
