
import React, { useEffect, useState } from "react";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Cookie consent storage key
const COOKIE_CONSENT_KEY = "cookie-consent-status";

export type ConsentStatus = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  accepted: boolean;
};

const defaultConsent: ConsentStatus = {
  necessary: true, // Always true - strictly necessary
  analytics: false,
  marketing: false,
  preferences: false,
  accepted: false,
};

export const CookieConsent = () => {
  const [open, setOpen] = useState(false);
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>(defaultConsent);
  const [showCustomize, setShowCustomize] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    
    if (!storedConsent) {
      // Show consent dialog if no previous consent
      setOpen(true);
    } else {
      // Parse stored consent
      setConsentStatus(JSON.parse(storedConsent));
    }

    // Listen for the custom event from the sidebar
    const handleOpenCookieSettings = () => {
      setOpen(true);
    };

    window.addEventListener('open-cookie-settings', handleOpenCookieSettings);

    // Cleanup event listener
    return () => {
      window.removeEventListener('open-cookie-settings', handleOpenCookieSettings);
    };
  }, []);

  const handleAcceptAll = () => {
    const fullConsent: ConsentStatus = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
      accepted: true,
    };
    
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(fullConsent));
    setConsentStatus(fullConsent);
    setOpen(false);
    toast.success("Cookie preferences saved");
  };

  const handleCustomize = () => {
    setShowCustomize(true);
  };

  const handleSavePreferences = () => {
    const updatedConsent = {
      ...consentStatus,
      accepted: true,
    };
    
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(updatedConsent));
    setConsentStatus(updatedConsent);
    setOpen(false);
    toast.success("Cookie preferences saved");
  };

  const handleRejectAll = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({
      ...defaultConsent,
      accepted: true
    }));
    setConsentStatus({
      ...defaultConsent,
      accepted: true
    });
    setOpen(false);
    toast.success("Cookie preferences saved");
  };

  const toggleConsent = (type: keyof Omit<ConsentStatus, 'accepted'>) => {
    if (type === 'necessary') return; // Necessary cookies can't be toggled
    
    setConsentStatus(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>Cookie Consent</AlertDialogTitle>
            <AlertDialogDescription>
              {!showCustomize ? (
                <>
                  <p className="mb-4">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                    By clicking "Accept All", you consent to our use of cookies.
                  </p>
                  <p>
                    You can customize your cookie preferences or reject non-essential cookies by clicking the respective buttons.
                  </p>
                </>
              ) : (
                <div className="space-y-4 mt-2">
                  <div className="flex items-start space-x-2">
                    <input 
                      type="checkbox" 
                      id="necessary-cookies" 
                      checked={consentStatus.necessary} 
                      disabled 
                      className="mt-1"
                    />
                    <div>
                      <label htmlFor="necessary-cookies" className="font-medium">Necessary Cookies</label>
                      <p className="text-sm text-muted-foreground">Essential for website functionality. Cannot be disabled.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <input 
                      type="checkbox" 
                      id="analytics-cookies" 
                      checked={consentStatus.analytics} 
                      onChange={() => toggleConsent('analytics')}
                      className="mt-1"
                    />
                    <div>
                      <label htmlFor="analytics-cookies" className="font-medium">Analytics Cookies</label>
                      <p className="text-sm text-muted-foreground">Help us improve our website by collecting anonymous usage information.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <input 
                      type="checkbox" 
                      id="marketing-cookies" 
                      checked={consentStatus.marketing}
                      onChange={() => toggleConsent('marketing')}
                      className="mt-1" 
                    />
                    <div>
                      <label htmlFor="marketing-cookies" className="font-medium">Marketing Cookies</label>
                      <p className="text-sm text-muted-foreground">Used to track visitors across websites to display relevant advertisements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <input 
                      type="checkbox" 
                      id="preferences-cookies" 
                      checked={consentStatus.preferences} 
                      onChange={() => toggleConsent('preferences')}
                      className="mt-1"
                    />
                    <div>
                      <label htmlFor="preferences-cookies" className="font-medium">Preferences Cookies</label>
                      <p className="text-sm text-muted-foreground">Remember your settings and preferences for a better experience.</p>
                    </div>
                  </div>
                </div>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col sm:flex-row gap-2">
            {!showCustomize ? (
              <>
                <Button variant="outline" onClick={handleRejectAll} className="w-full sm:w-auto">
                  Reject All
                </Button>
                <Button onClick={handleCustomize} variant="outline" className="w-full sm:w-auto">
                  Customize
                </Button>
                <Button onClick={handleAcceptAll} className="w-full sm:w-auto">
                  Accept All
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" onClick={() => setShowCustomize(false)} className="w-full sm:w-auto">
                  Back
                </Button>
                <Button onClick={handleSavePreferences} className="w-full sm:w-auto">
                  Save Preferences
                </Button>
              </>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Removing the floating button as it's now in the sidebar */}
    </>
  );
};

export default CookieConsent;
