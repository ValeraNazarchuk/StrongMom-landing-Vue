import { createI18n } from 'vue-i18n'
import en from './en.json'
import sv from './sv.json'

const defaultLocale = 'en'

const messages = {
  en,
  sv,
}

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages,
})

export default i18n
