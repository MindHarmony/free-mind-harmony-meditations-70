
import { useState, useEffect } from "react";
import type { ConsentStatus } from "@/components/CookieConsent";

const COOKIE_CONSENT_KEY = "cookie-consent-status";

const defaultConsent: ConsentStatus = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
  accepted: false,
};

export const useCookieConsent = () => {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>(defaultConsent);
  
  useEffect(() => {
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (storedConsent) {
      setConsentStatus(JSON.parse(storedConsent));
    }
  }, []);

  // Utility function to check if certain cookie types are allowed
  const isAllowed = (type: keyof Omit<ConsentStatus, 'accepted'>) => {
    if (type === 'necessary') return true; // Necessary cookies always allowed
    return consentStatus.accepted && consentStatus[type];
  };

  return {
    consentStatus,
    isAllowed,
    hasResponded: consentStatus.accepted,
  };
};
