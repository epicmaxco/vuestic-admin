<template>
  <div class="flex items-center justify-between">
    <p>
      Language
    </p>
    <div class="w-40">
      <VaSelect class="ellipsis" :options="options" v-model="model"/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'

import { useI18n } from 'vue-i18n'

interface LanguageMap {
  [key: string]: string
}

const { t, locale } = useI18n()

const languages: LanguageMap = {
  english: t('language.english'),
  spanish: t('language.spanish'),
  brazilian_portuguese: t('language.brazilian_portuguese'),
  simplified_chinese: t('language.simplified_chinese'),
  persian: t('language.persian'),
}

const languageCodes: LanguageMap = {
  gb: languages.english,
  es: languages.spanish,
  br: languages.brazilian_portuguese,
  cn: languages.simplified_chinese,
  ir: languages.persian,
}

const languageName: LanguageMap = Object.fromEntries(Object.entries(languageCodes).map(([key, value]) => [value, key]))

const options = Object.entries(languageCodes).map(([_, option]) => option)

const model = computed({
  get () { return languageCodes[locale.value]  },
  set (value) { return locale.value = languageName[value] },
})
</script>