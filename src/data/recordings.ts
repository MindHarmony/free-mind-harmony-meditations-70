
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
    description: "Release stress and anxiety with this gentle hypnosis session that guides you to find peace in the present moment.",
    duration: "18:24",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3", // Fallback audio
    embedType: "soundcloud",
    embedSrc: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2051337652%3Fsecret_token%3Ds-UimZw0AL1H1&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
    category: "stress-anxiety",
    featured: true
  },
  {
    id: "2",
    title: "Deep Relaxation Journey",
    description: "Let go of daily worries and find your center with this deep relaxation hypnosis.",
    duration: "18:30",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-dreaming-big-31.mp3",
    category: "stress-anxiety"
  },
  {
    id: "3",
    title: "Quiet Mind Meditation",
    description: "Calm your racing thoughts and find inner peace with this guided hypnosis session.",
    duration: "15:20",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-a-very-happy-christmas-897.mp3",
    category: "stress-anxiety"
  },
  {
    id: "4",
    title: "Personal Confidence Booster",
    description: "Build unshakeable confidence and self-esteem with this powerful custom hypnosis recording.",
    duration: "30:00",
    audioSrc: "https://drive.google.com/uc?export=download&id=1chBUp0d-gg3RD73VeHo3NH9Np22-tKlK",
    category: "confidence",
    featured: true,
    embedType: "soundcloud",
    embedSrc: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2056850564&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
  },
  {
    id: "5",
    title: "Public Speaking Mastery",
    description: "Overcome fear of public speaking and present with confidence using this targeted hypnosis.",
    duration: "19:45",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3",
    category: "confidence"
  },
  {
    id: "6",
    title: "Inner Strength Activation",
    description: "Discover and activate your inner strength and resilience with this empowering session.",
    duration: "24:30",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-driving-ambition-32.mp3",
    category: "confidence"
  },
  {
    id: "7",
    title: "Deep Sleep Induction",
    description: "Fall asleep quickly and enjoy restful sleep all night with this sleep hypnosis.",
    duration: "30:10",
    audioSrc: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Yusuke_Tsutsumi/Zen_Music/Yusuke_Tsutsumi_-_01_-_Letting_Go.mp3",
    category: "sleep",
    featured: true
  },
  {
    id: "8",
    title: "Insomnia Relief",
    description: "Break the cycle of insomnia and train your mind for healthy sleep patterns.",
    duration: "27:40",
    audioSrc: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_06_-_Murmuration.mp3",
    category: "sleep"
  },
  {
    id: "9",
    title: "Peaceful Night's Rest",
    description: "Release the day's tension and prepare your mind and body for rejuvenating sleep.",
    duration: "25:15",
    audioSrc: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3",
    category: "sleep"
  },
  {
    id: "10",
    title: "Building Resilience",
    description: "Develop psychological resilience to stand strong against bullying and peer pressure.",
    duration: "21:35",
    audioSrc: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/blocSonic/Cory_Gray/Cory_Gray_-_Warmth/Cory_Gray_-_01_-_Recollection.mp3",
    category: "anti-bullying",
    featured: true
  },
  {
    id: "11",
    title: "Teen Confidence Builder",
    description: "Build a strong sense of self-worth and confidence to overcome social challenges.",
    duration: "18:50",
    audioSrc: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3",
    category: "anti-bullying"
  },
  {
    id: "12",
    title: "Emotional Shield",
    description: "Create an emotional shield to protect yourself from negative influences and remarks.",
    duration: "20:25",
    audioSrc: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Jahzzar/Tumbling_Dishes_Like_Old-Mans_Memories/Jahzzar_-_05_-_Siesta.mp3",
    category: "anti-bullying"
  },
  {
    id: "13",
    title: "Future Self Visualization",
    description: "Connect with your ideal future self and set the path to becoming who you want to be.",
    duration: "26:20",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-deep-urban-623.mp3",
    category: "personal-growth",
    featured: true,
    embedType: "soundcloud",
    embedSrc: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2056845500&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
  },
  {
    id: "14",
    title: "Habit Transformation",
    description: "Replace limiting habits with empowering ones that align with your ideal self.",
    duration: "24:10",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-blurry-future-120.mp3",
    category: "personal-growth"
  },
  {
    id: "15",
    title: "Unlock Your Potential",
    description: "Remove subconscious blocks and unlock your full potential through this guided hypnosis.",
    duration: "28:45",
    audioSrc: "https://assets.mixkit.co/music/preview/mixkit-forest-treasure-138.mp3",
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
