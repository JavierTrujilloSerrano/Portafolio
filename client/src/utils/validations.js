import { z } from 'zod';
import { TRANSLATIONS } from '../static/translations.js';

export const createSchema  = (lang) => z.object({
  email: z.string().email({ message: TRANSLATIONS[lang].FORM.EMAIL_ERROR}),
  name: z.string().nonempty({ message: TRANSLATIONS[lang].FORM.NAME_ERROR}),
  message: z.string().nonempty({ message: TRANSLATIONS[lang].FORM.MESSAGE_ERROR}),
});