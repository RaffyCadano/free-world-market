/**
 * lib/calendly.js
 *
 * Utilities for listening to Calendly postMessage events.
 * Use in client components only.
 *
 * Calendly fires window.postMessage events with these types:
 *   calendly.profile_page_viewed
 *   calendly.event_type_viewed
 *   calendly.date_and_time_selected
 *   calendly.event_scheduled
 *
 * USAGE:
 *   import { onCalendlyEvent, CALENDLY_EVENTS } from '@/lib/calendly';
 *
 *   // in useEffect:
 *   const cleanup = onCalendlyEvent(CALENDLY_EVENTS.SCHEDULED, (e) => {
 *     trackSchedule();
 *   });
 *   return cleanup;
 */

export const CALENDLY_EVENTS = {
  PROFILE_VIEWED:    'calendly.profile_page_viewed',
  EVENT_TYPE_VIEWED: 'calendly.event_type_viewed',
  TIME_SELECTED:     'calendly.date_and_time_selected',
  SCHEDULED:         'calendly.event_scheduled',
};

/**
 * Attach a listener for a specific Calendly postMessage event.
 * Returns a cleanup function — call it in useEffect return.
 *
 * @param {string}   eventType  - one of CALENDLY_EVENTS
 * @param {Function} handler    - called with the raw MessageEvent
 * @returns {() => void}        - cleanup function
 */
export function onCalendlyEvent(eventType, handler) {
  function listener(e) {
    if (!isCalendlyEvent(e)) return;
    if (e.data.event === eventType) handler(e);
  }

  window.addEventListener('message', listener);
  return () => window.removeEventListener('message', listener);
}

/**
 * Returns true when a MessageEvent originates from Calendly.
 * @param {MessageEvent} e
 */
export function isCalendlyEvent(e) {
  return (
    e.origin === 'https://calendly.com' &&
    e.data != null &&
    typeof e.data.event === 'string' &&
    e.data.event.startsWith('calendly.')
  );
}
