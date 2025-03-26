
import { useEffect } from 'react';
import { Category } from '@/data/recordings';

// Simple analytics interface
interface AnalyticsEvent {
  event: string;
  category?: string;
  action?: string;
  label?: string;
  value?: number;
  timestamp: number;
}

// Storage key for analytics events
const ANALYTICS_STORAGE_KEY = 'mind-harmony-analytics';

// Helper to store events in localStorage
const storeEvent = (event: AnalyticsEvent) => {
  try {
    const existingEvents = localStorage.getItem(ANALYTICS_STORAGE_KEY);
    const events = existingEvents ? JSON.parse(existingEvents) : [];
    events.push(event);
    localStorage.setItem(ANALYTICS_STORAGE_KEY, JSON.stringify(events));
    console.log('Analytics event tracked:', event);
  } catch (error) {
    console.error('Failed to store analytics event:', error);
  }
};

// Analytics hook
export const useAnalytics = () => {
  // Track page view on component mount
  useEffect(() => {
    trackPageView();
  }, []);

  // Track page view
  const trackPageView = (path?: string) => {
    const event: AnalyticsEvent = {
      event: 'pageview',
      category: 'navigation',
      action: 'view',
      label: path || window.location.pathname,
      timestamp: Date.now()
    };
    storeEvent(event);
  };

  // Track recording selection
  const trackRecordingSelection = (categoryId: Category, recordingTitle: string) => {
    const event: AnalyticsEvent = {
      event: 'recording_selection',
      category: 'engagement',
      action: 'select',
      label: `${categoryId}:${recordingTitle}`,
      timestamp: Date.now()
    };
    storeEvent(event);
  };

  // Track category change
  const trackCategoryChange = (categoryId: Category) => {
    const event: AnalyticsEvent = {
      event: 'category_change',
      category: 'navigation',
      action: 'select',
      label: categoryId,
      timestamp: Date.now()
    };
    storeEvent(event);
  };

  // Export analytics data (could be used for admin panel later)
  const exportAnalytics = (): AnalyticsEvent[] => {
    try {
      const data = localStorage.getItem(ANALYTICS_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Failed to export analytics:', error);
      return [];
    }
  };

  // Clear analytics data
  const clearAnalytics = () => {
    localStorage.removeItem(ANALYTICS_STORAGE_KEY);
  };

  return {
    trackPageView,
    trackRecordingSelection,
    trackCategoryChange,
    exportAnalytics,
    clearAnalytics
  };
};
