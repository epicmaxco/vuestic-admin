import { createI18n } from 'vue-i18n'

const fileNameToLocaleModuleDict = import.meta.globEager('./locales/*.json')

const messages: { [P: string]: Record<string, string> } = {}
Object.entries(fileNameToLocaleModuleDict)
  .map(([fileName, localeModule]) => {
    const fileNameParts = fileName.split('/')
    const fileNameWithoutPath = fileNameParts[fileNameParts.length - 1]
    const localeName = fileNameWithoutPath.split('.json')[0]

    return [localeName, localeModule.default]
  })
  .forEach((localeNameLocaleMessagesTuple) => {
    messages[localeNameLocaleMessagesTuple[0]] = localeNameLocaleMessagesTuple[1]
  })

export default createI18n({
  legacy: false,
  locale: 'gb',
  fallbackLocale: 'gb',
  messages,
})
