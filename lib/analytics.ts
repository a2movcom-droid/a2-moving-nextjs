export function trackEvent(event: string, params: Record<string, string> = {}) {
  if (typeof window === 'undefined') return;
  const w = window as any;
  if (w.gtag) w.gtag('event', event, params);
  if (w.dataLayer) w.dataLayer.push({ event, ...params });
}
