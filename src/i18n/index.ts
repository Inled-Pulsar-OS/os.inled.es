import { DEFAULT_LOCALE, type Locale } from './config';
import { en, type Content } from './en';
import { es } from './es';
import { it } from './it';
import { fr } from './fr';
import { de } from './de';

export const CONTENT: Record<Locale, Content> = { en, es, it, fr, de };

export function getContent(locale: Locale = DEFAULT_LOCALE): Content {
  return CONTENT[locale] ?? en;
}

export type { Content };
