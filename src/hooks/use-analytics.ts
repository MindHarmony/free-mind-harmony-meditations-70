
import { useCookieConsent } from "./use-cookie-consent";

export const useAnalytics = () => {
  const { isAllowed } = useCookieConsent();
  
  const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
    if (isAllowed('analytics') && window.gtag) {
      window.gtag('event', eventName, eventParams);
      console.log('Tracking event:', eventName, eventParams);
    }
  };
  
  return {
    trackEvent
  };
};
