
import { useState, useEffect } from "react";
import { AudioPlayer } from "./AudioPlayer";
import { Recording, getRecordingsByCategory, Category } from "@/data/recordings";
import { Clock, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryContentProps {
  category: Category;
}

export const CategoryContent = ({ category }: CategoryContentProps) => {
  const [recording, setRecording] = useState<Recording | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smoother transitions
    setIsLoading(true);
    
    // Get recordings for this category and select the first one
    const categoryRecordings = getRecordingsByCategory(category);
    
    const timer = setTimeout(() => {
      setRecording(categoryRecordings[0] || null);
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [category]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-10 w-40 bg-calm-100 rounded-md mb-4"></div>
          <div className="h-4 w-60 bg-calm-100 rounded-md"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {recording && (
        <div className="fade-in space-y-6">
          <article className="bg-white rounded-2xl shadow-md p-6" itemScope itemType="https://schema.org/AudioObject">
            <div className="mb-5">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-medium text-calm-900" itemProp="name">{recording.title}</h2>
                <div className="flex items-center text-xs text-calm-500">
                  <Clock className="w-3.5 h-3.5 mr-1" />
                  <span itemProp="duration">{recording.duration}</span>
                </div>
              </div>
              <p className="text-calm-600 mt-2" itemProp="description">{recording.description}</p>
              
              {/* Keywords for SEO - hidden visually but available for search engines */}
              {recording.keywords && (
                <div className="sr-only">
                  <h3>Related searches:</h3>
                  <ul>
                    {recording.keywords.map((keyword, index) => (
                      <li key={index}>{keyword}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {/* Coming Soon Announcement for Sleep and Anti-bullying categories */}
            {(category === "sleep" || category === "anti-bullying") ? (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-amber-800">Coming Soon</h3>
                    <p className="text-amber-700 text-sm mt-1">
                      We're currently updating our {category === "sleep" ? "Sleep & Insomnia" : "Teenage Anti-Bullying"} recordings. 
                      Please check back soon for new meditation content!
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <AudioPlayer recording={recording} />
            )}
            
            {/* Enhanced structured data for this audio content */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "AudioObject",
                "name": recording.title,
                "description": recording.description,
                "duration": recording.duration,
                "contentUrl": recording.audioSrc,
                "encodingFormat": "audio/mpeg",
                "keywords": recording.keywords?.join(", "),
                "potentialAction": {
                  "@type": "ListenAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": window.location.href
                  }
                }
              })}
            </script>
          </article>
          
          {/* Affiliate Banner */}
          <a 
            href="https://www.thecentreforhealing.com/a/43957/EFJWNTPz"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-xl overflow-hidden shadow-md transition-transform hover:shadow-lg hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-trust-500"
            aria-label="Visit The Centre for Healing"
          >
            <img 
              src="/lovable-uploads/6cb5cd17-484c-4d25-859e-ff5b1d0c0bf6.png" 
              alt="Share your Light - Become a qualified healer & therapist through The Centre for Healing" 
              className="w-full h-auto"
            />
          </a>
          
          {/* Affiliate Text */}
          <div className="text-left mt-3">
            <p className="text-calm-700 text-sm md:text-base">
              The Centre For Healing - they don't just teach superior therapy modalities - they equip you with the full business toolkit you need to succeed. From Ready-to-use Forms & Scripts, to Professional Business Plans, Marketing Strategies and Practitioner Support.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryContent;
