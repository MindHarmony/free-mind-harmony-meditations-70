
import { useState, useEffect } from "react";
import { AudioPlayer } from "./AudioPlayer";
import { Recording, getRecordingsByCategory, Category } from "@/data/recordings";
import { Clock, AlertCircle, Copy, Check, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface CategoryContentProps {
  category: Category;
}

export const CategoryContent = ({ category }: CategoryContentProps) => {
  const [recording, setRecording] = useState<Recording | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasCopied, setHasCopied] = useState(false);
  const { toast } = useToast();

  const handleCopyCode = () => {
    navigator.clipboard.writeText("CARLA");
    setHasCopied(true);
    toast({
      title: "Discount code copied!",
      description: "Use code 'CARLA' at checkout for 10% off.",
    });
    
    // Reset copy status after 2 seconds
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

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
                <h2 className="text-xl font-medium text-calm-900 text-left w-full" itemProp="name">{recording.title}</h2>
                <div className="flex items-center text-xs text-calm-500 flex-shrink-0">
                  <Clock className="w-3.5 h-3.5 mr-1" />
                  <span itemProp="duration">{recording.duration}</span>
                </div>
              </div>
              <p className="text-calm-600 mt-2 text-left" itemProp="description">{recording.description}</p>
              
              {/* Netflix Adolescence Series Reference for Anti-Bullying Category */}
              {category === "teenage-anti-bullying" && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <div className="flex items-start">
                    <Info className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-blue-800 text-left">Relevant to Netflix's "Adolescence" Series</h3>
                      <p className="text-blue-700 text-sm mt-1">
                        This meditation explores similar themes to Netflix's "Adolescence" series, helping teens navigate the 
                        complex social and emotional challenges portrayed in the show. Perfect for young people seeking 
                        support with issues highlighted in the series.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Keywords for SEO - hidden visually but available for search engines */}
              {recording.keywords && (
                <div className="sr-only">
                  <h3>Related searches:</h3>
                  <ul>
                    {recording.keywords.map((keyword, index) => (
                      <li key={index}>{keyword}</li>
                    ))}
                    {category === "teenage-anti-bullying" && (
                      <>
                        <li>Netflix Adolescence series</li>
                        <li>teen mental health in media</li>
                        <li>adolescent struggles portrayed in Netflix</li>
                      </>
                    )}
                  </ul>
                </div>
              )}
            </div>
            
            {/* Coming Soon Announcement for Sleep category only */}
            {(category === "sleep") ? (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-amber-800 text-left">Coming Soon</h3>
                    <p className="text-amber-700 text-sm mt-1">
                      We're currently updating our Sleep & Insomnia recordings. 
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
                "description": recording.description + (category === "teenage-anti-bullying" ? " Relevant to themes explored in Netflix's 'Adolescence' series." : ""),
                "duration": recording.duration,
                "contentUrl": recording.audioSrc,
                "encodingFormat": "audio/mpeg",
                "keywords": recording.keywords?.join(", ") + (category === "teenage-anti-bullying" ? ", Netflix Adolescence series, teen mental health" : ""),
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
          
          {/* SEO Optimized Affiliate Banner with Structured Data - REDESIGNED FOR BETTER VISIBILITY */}
          <section itemScope itemType="https://schema.org/Product" className="affiliate-section">
            <meta itemProp="name" content="The Centre for Healing - Therapy Training Programs" />
            <meta itemProp="description" content="Comprehensive training for healers and therapists with business toolkit, marketing strategies, and professional support." />
            <meta itemProp="brand" content="The Centre for Healing" />
            
            <a 
              href="https://www.thecentreforhealing.com/a/43957/EFJWNTPz"
              target="_blank"
              rel="noopener sponsored"
              className="block w-full rounded-xl overflow-hidden shadow-md transition-transform hover:shadow-lg hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-trust-500"
              aria-label="Become a qualified healer & therapist through The Centre for Healing"
              title="Learn superior therapy modalities and business skills with The Centre for Healing"
              itemProp="url"
            >
              <img 
                src="/lovable-uploads/6cb5cd17-484c-4d25-859e-ff5b1d0c0bf6.png" 
                alt="The Centre for Healing - Become a qualified healer & therapist with complete business toolkit and support" 
                className="w-full h-auto"
                itemProp="image"
                loading="lazy"
              />
            </a>
            
            {/* Affiliate Text with enhanced styling - COLORS UPDATED TO GREEN */}
            <div className="text-left mt-3 bg-gradient-to-r from-emerald-50 to-green-50 p-5 rounded-xl border border-emerald-100" itemProp="offers" itemScope itemType="https://schema.org/Offer">
              <h3 className="text-xl font-bold text-emerald-800 mb-3 tracking-tight" itemProp="name">
                The Centre For Healing - Therapy Training Programs
              </h3>
              <p className="text-calm-800 text-base leading-relaxed" itemProp="description">
                <span className="font-medium text-emerald-700">Transform your life</span> by becoming a qualified healer and therapist. The Centre For Healing doesn't just teach superior therapy modalities - they equip you with the <span className="font-medium text-green-700">full business toolkit</span> you need to succeed. From ready-to-use forms & scripts to professional business plans, marketing strategies and ongoing practitioner support.
              </p>

              {/* Discount Code Section with enhanced visual appeal - COLORS UPDATED TO GREEN */}
              <div className="mt-5 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-lg p-5 shadow-sm">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                  <div className="mb-3 sm:mb-0">
                    <h4 className="font-bold text-lg text-emerald-800">Special Offer: 10% Discount</h4>
                    <p className="text-green-700 mt-1">Use code <span className="font-bold text-emerald-900 text-lg tracking-wide bg-white px-2 py-0.5 rounded border border-green-200">CARLA</span> at checkout</p>
                  </div>
                  <Button 
                    onClick={handleCopyCode}
                    variant="outline" 
                    size="sm"
                    className="border-green-200 bg-white text-emerald-700 hover:bg-green-50 hover:text-emerald-800 font-medium shadow-sm"
                  >
                    {hasCopied ? (
                      <>
                        <Check className="w-4 h-4 mr-1.5" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-1.5" /> Copy Code
                      </>
                    )}
                  </Button>
                </div>
              </div>
              
              <meta itemProp="priceCurrency" content="USD" />
              <meta itemProp="availability" content="https://schema.org/InStock" />
              <link itemProp="url" href="https://www.thecentreforhealing.com/a/43957/EFJWNTPz" />
              
              {/* Add discount offer data */}
              <meta itemProp="discount" content="10% off with code CARLA" />
            </div>
            
            {/* Structured data for the affiliate relationship */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "The Centre for Healing",
                "url": "https://www.thecentreforhealing.com/a/43957/EFJWNTPz",
                "logo": "https://www.thecentreforhealing.com/logo.png",
                "description": "The Centre For Healing offers comprehensive training for healers and therapists with complete business toolkit and ongoing support.",
                "offers": {
                  "@type": "Offer",
                  "discount": "10% off with code CARLA"
                },
                "sameAs": [
                  "https://www.facebook.com/thecentreforhealing",
                  "https://www.instagram.com/thecentreforhealing/"
                ]
              })}
            </script>
          </section>
        </div>
      )}
    </div>
  );
};

export default CategoryContent;
