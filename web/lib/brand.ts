/**
 * Display helper for RevMarshal Learn branding.
 * Replaces the literal brand name in localized strings while
 * preserving translations and formatting across all languages.
 */
export function brandText(text: string): string {
  if (!text) return text;
  return text.replace(/DeepTutor/g, "RevMarshal Learn");
}
