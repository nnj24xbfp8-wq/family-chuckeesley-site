// One place to format genealogy dates — keep raw strings in content
// (correct call for fuzzy/qualified dates) and render through here.

type DatePart = string | undefined;

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/**
 * Renders a single date string consistently.
 *   "1764"              → "1764"
 *   "1764-12-06"        → "6 Dec 1764"
 *   "1764-12"           → "Dec 1764"
 *   "c. 1899"           → "c. 1899"
 *   "after 1993"        → "after 1993"
 *   "circa 1899 (...)"  → passes through unchanged (prose date)
 */
export function formatDate(raw: DatePart): string {
  if (!raw) return '';
  const trimmed = raw.trim();
  const m = trimmed.match(
    /^(c\.|abt\.|before|after|aft\.|bef\.|circa)?\s*(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?$/i,
  );
  if (!m) return trimmed; // prose like "after 1993", "early 1900s", "circa 1899 (caption: ...)"
  const [, qual, y, mo, d] = m;
  let out = y;
  if (mo) out = `${MONTHS[+mo - 1]} ${y}`;
  if (mo && d) out = `${+d} ${MONTHS[+mo - 1]} ${y}`;
  return qual ? `${qual} ${out}` : out;
}

/**
 * Renders a lifespan from optional birth/death strings.
 *   ("1924", "after 1993") → "1924 – after 1993"
 *   ("1756", "1829")       → "1756 – 1829"
 *   ("1796", undefined)    → "b. 1796"
 *   (undefined, "1942")    → "d. 1942"
 */
export function formatLifespan(birth: DatePart, death: DatePart): string {
  const b = formatDate(birth);
  const d = formatDate(death);
  if (b && d) return `${b} – ${d}`;
  if (b) return `b. ${b}`;
  if (d) return `d. ${d}`;
  return '';
}

/**
 * Extract a sortable 4-digit year from a fuzzy date string.
 * Returns `fallback` (default 9999) when no year is present —
 * pushing undated items to the end of an ascending sort.
 */
export function sortableYear(raw: DatePart, fallback = 9999): number {
  if (!raw) return fallback;
  const m = raw.match(/\d{4}/);
  return m ? parseInt(m[0], 10) : fallback;
}

/**
 * Sort key for fuzzy date strings — uses sortDate when present (caller-supplied
 * ISO override), otherwise falls back to the first 4-digit year in `raw`.
 */
export function sortableDateKey(sortDate: DatePart, raw: DatePart, fallback = 9999): number {
  const explicit = sortableYear(sortDate, NaN);
  if (!Number.isNaN(explicit) && explicit !== fallback) return explicit;
  return sortableYear(raw, fallback);
}
