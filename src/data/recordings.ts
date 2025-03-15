
export type Recording = {
  id: string;
  title: string;
  description: string;
  duration: string;
  audioSrc: string;
  category: Category;
  featured?: boolean;
};

export type Category = 
  | "stress-anxiety"
  | "confidence"
  | "sleep"
  | "anti-bullying"
  | "personal-growth";

export const categoryNames: Record<Category, string> = {
  "stress-anxiety": "Stress & Anxiety Relief",
  "confidence": "Confidence & Self Esteem",
  "sleep": "Sleep & Insomnia",
  "anti-bullying": "Teenage Anti-Bullying & Resilience",
  "personal-growth": "Be The Person You Want To Be"
};

// Sample recordings data
export const recordings: Recording[] = [
  {
    id: "1",
    title: "Calming Ocean Waves",
    description: "Release stress and anxiety with this gentle hypnosis session featuring soothing ocean waves.",
    duration: "23:45",
    audioSrc: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_1fb52756e1.mp3",
    category: "stress-anxiety",
    featured: true
  },
  {
    id: "2",
    title: "Deep Relaxation Journey",
    description: "Let go of daily worries and find your center with this deep relaxation hypnosis.",
    duration: "18:30",
    audioSrc: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0c6ff1eab.mp3",
    category: "stress-anxiety"
  },
  {
    id: "3",
    title: "Quiet Mind Meditation",
    description: "Calm your racing thoughts and find inner peace with this guided hypnosis session.",
    duration: "15:20",
    audioSrc: "https://cdn.pixabay.com/download/audio/2022/04/27/audio_db1d5618e9.mp3",
    category: "stress-anxiety"
  },
  {
    id: "4",
    title: "Confidence Booster",
    description: "Build unshakeable confidence and self-esteem with this powerful hypnosis recording.",
    duration: "22:15",
    audioSrc: "https://cdn.pixabay.com/download/audio/2021/11/25/audio_f1b7b2298d.mp3",
    category: "confidence",
    featured: true
  },
  {
    id: "5",
    title: "Public Speaking Mastery",
    description: "Overcome fear of public speaking and present with confidence using this targeted hypnosis.",
    duration: "19:45",
    audioSrc: "https://cdn.pixabay.com/download/audio/2022/10/25/audio_200fa854b7.mp3",
    category: "confidence"
  },
  {
    id: "6",
    title: "Inner Strength Activation",
    description: "Discover and activate your inner strength and resilience with this empowering session.",
    duration: "24:30",
    audioSrc: "https://cdn.pixabay.com/download/audio/2022/10/23/audio_2b304e9d74.mp3",
    category: "confidence"
  },
  {
    id: "7",
    title: "Deep Sleep Induction",
    description: "Fall asleep quickly and enjoy restful sleep all night with this sleep hypnosis.",
    duration: "30:10",
    audioSrc: "https://cdn.pixabay.com/download/audio/2022/03/10/audio_270f49919b.mp3",
    category: "sleep",
    featured: true
  },
  {
    id: "8",
    title: "Insomnia Relief",
    description: "Break the cycle of insomnia and train your mind for healthy sleep patterns.",
    duration: "27:40",
    audioSrc: "https://cdn.pixabay.com/download/audio/2022/03/09/audio_788dd3c27b.mp3",
    category: "sleep"
  },
  {
    id: "9",
    title: "Peaceful Night's Rest",
    description: "Release the day's tension and prepare your mind and body for rejuvenating sleep.",
    duration: "25:15",
    audioSrc: "https://cdn.pixabay.com/download/audio/2022/01/27/audio_31743c58df.mp3",
    category: "sleep"
  },
  {
    id: "10",
    title: "Building Resilience",
    description: "Develop psychological resilience to stand strong against bullying and peer pressure.",
    duration: "21:35",
    audioSrc: "https://cdn.pixabay.com/download/audio/2022/10/03/audio_957dff9538.mp3",
    category: "anti-bullying",
    featured: true
  },
  {
    id: "11",
    title: "Teen Confidence Builder",
    description: "Build a strong sense of self-worth and confidence to overcome social challenges.",
    duration: "18:50",
    audioSrc: "https://cdn.pixabay.com/download/audio/2021/12/05/audio_6eb9c39545.mp3",
    category: "anti-bullying"
  },
  {
    id: "12",
    title: "Emotional Shield",
    description: "Create an emotional shield to protect yourself from negative influences and remarks.",
    duration: "20:25",
    audioSrc: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_1fb52756e1.mp3",
    category: "anti-bullying"
  },
  {
    id: "13",
    title: "Future Self Visualization",
    description: "Connect with your ideal future self and set the path to becoming who you want to be.",
    duration: "26:20",
    audioSrc: "https://cdn.pixabay.com/download/audio/2021/11/13/audio_cb4f1212a7.mp3",
    category: "personal-growth",
    featured: true
  },
  {
    id: "14",
    title: "Habit Transformation",
    description: "Replace limiting habits with empowering ones that align with your ideal self.",
    duration: "24:10",
    audioSrc: "https://cdn.pixabay.com/download/audio/2022/01/11/audio_d16737dc28.mp3",
    category: "personal-growth"
  },
  {
    id: "15",
    title: "Unlock Your Potential",
    description: "Remove subconscious blocks and unlock your full potential through this guided hypnosis.",
    duration: "28:45",
    audioSrc: "https://cdn.pixabay.com/download/audio/2022/05/17/audio_89897adf20.mp3",
    category: "personal-growth"
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
