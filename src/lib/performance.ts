/**
 * Web Vitals Performance Monitoring
 * Tracks key performance metrics: LCP, FID, CLS, FCP, TTFB
 */

export interface Metric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

// Thresholds for each metric (from web.dev)
const thresholds = {
  LCP: { good: 2500, poor: 4000 },
  FID: { good: 100, poor: 300 },
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  TTFB: { good: 800, poor: 1800 },
};

function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = thresholds[name as keyof typeof thresholds];
  if (!threshold) return 'good';
  
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

function reportMetric(metric: Metric) {
  // Log to console in development
  if (import.meta.env.DEV) {
    console.log(`[Performance] ${metric.name}:`, {
      value: `${metric.value.toFixed(2)}ms`,
      rating: metric.rating,
    });
  }

  // In production, you could send to analytics
  // Example: sendToAnalytics(metric);
}

// Largest Contentful Paint (LCP)
function observeLCP() {
  if (!('PerformanceObserver' in window)) return;

  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1] as PerformanceEntry & { renderTime?: number; loadTime?: number };
    
    const value = lastEntry.renderTime || lastEntry.loadTime || 0;
    const metric: Metric = {
      name: 'LCP',
      value,
      rating: getRating('LCP', value),
      delta: value,
      id: `lcp-${Date.now()}`,
    };
    reportMetric(metric);
  });

  try {
    observer.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (e) {
    console.warn('LCP observation failed', e);
  }
}

// First Input Delay (FID)
function observeFID() {
  if (!('PerformanceObserver' in window)) return;

  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry: any) => {
      const value = entry.processingStart - entry.startTime;
      const metric: Metric = {
        name: 'FID',
        value,
        rating: getRating('FID', value),
        delta: value,
        id: `fid-${Date.now()}`,
      };
      reportMetric(metric);
    });
  });

  try {
    observer.observe({ type: 'first-input', buffered: true });
  } catch (e) {
    console.warn('FID observation failed', e);
  }
}

// Cumulative Layout Shift (CLS)
function observeCLS() {
  if (!('PerformanceObserver' in window)) return;

  let clsValue = 0;
  let clsEntries: PerformanceEntry[] = [];

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!(entry as any).hadRecentInput) {
        clsValue += (entry as any).value;
        clsEntries.push(entry);
      }
    }
  });

  try {
    observer.observe({ type: 'layout-shift', buffered: true });
  } catch (e) {
    console.warn('CLS observation failed', e);
  }

  // Report on page hide or visibility change
  const reportCLS = () => {
    const metric: Metric = {
      name: 'CLS',
      value: clsValue,
      rating: getRating('CLS', clsValue),
      delta: clsValue,
      id: `cls-${Date.now()}`,
    };
    reportMetric(metric);
  };

  addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      reportCLS();
    }
  });
}

// First Contentful Paint (FCP)
function observeFCP() {
  if (!('PerformanceObserver' in window)) return;

  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      if (entry.name === 'first-contentful-paint') {
        const value = entry.startTime;
        const metric: Metric = {
          name: 'FCP',
          value,
          rating: getRating('FCP', value),
          delta: value,
          id: `fcp-${Date.now()}`,
        };
        reportMetric(metric);
      }
    });
  });

  try {
    observer.observe({ type: 'paint', buffered: true });
  } catch (e) {
    console.warn('FCP observation failed', e);
  }
}

// Time to First Byte (TTFB)
function observeTTFB() {
  const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  if (navigationEntry) {
    const value = navigationEntry.responseStart - navigationEntry.requestStart;
    const metric: Metric = {
      name: 'TTFB',
      value,
      rating: getRating('TTFB', value),
      delta: value,
      id: `ttfb-${Date.now()}`,
    };
    reportMetric(metric);
  }
}

/**
 * Initialize all performance observers
 * Call this once when your app starts
 */
export function initPerformanceMonitoring() {
  if (typeof window === 'undefined') return;

  // Wait for page to be fully loaded before observing
  if (document.readyState === 'complete') {
    observeLCP();
    observeFID();
    observeCLS();
    observeFCP();
    observeTTFB();
  } else {
    window.addEventListener('load', () => {
      observeLCP();
      observeFID();
      observeCLS();
      observeFCP();
      observeTTFB();
    });
  }
}

/**
 * Get current performance metrics snapshot
 */
export function getPerformanceMetrics() {
  if (typeof window === 'undefined') return null;

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  return {
    // Page load metrics
    domContentLoaded: navigation?.domContentLoadedEventEnd - navigation?.domContentLoadedEventStart,
    loadComplete: navigation?.loadEventEnd - navigation?.loadEventStart,
    
    // Resource timing
    resourceCount: performance.getEntriesByType('resource').length,
    
    // Memory (if available)
    memory: (performance as any).memory ? {
      usedJSHeapSize: ((performance as any).memory.usedJSHeapSize / 1048576).toFixed(2) + ' MB',
      totalJSHeapSize: ((performance as any).memory.totalJSHeapSize / 1048576).toFixed(2) + ' MB',
    } : null,
  };
}
