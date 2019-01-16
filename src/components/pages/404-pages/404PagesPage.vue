<template>
  <div class="not-found-pages va-row">
    <div class="flex md12">
      <div class="va-row">
        <vuestic-card
          class="not-found-pages__cards"
          :image="item.imageUrl"
          v-for="item in items"
          :key="item.$index"
        >
          {{ item.label }}
          <div class="not-found-pages__button-container pt-3 mb-0">
            <va-button
              tag="router-link"
              :to="{ name: item.buttonTo }"
              target="_blank">
              {{ 'View Example' }}
            </va-button>
          </div>
        </vuestic-card>
      </div>
    </div>
  </div>
</template>

<script>
import VaButton from './../../../vuestic-theme/vuestic-components/va-button/VaButton'

export default {
  name: 'not-found-pages',
  components: {
    VaButton
  },
  data () {
    return {
      items: [
        {
          imageUrl: 'https://i.imgur.com/GzUR0Wz.png',
          label: 'Advanced layout',
          buttonTo: 'not-found-advanced',
        },
        {
          imageUrl: 'https://i.imgur.com/HttcXPi.png',
          label: 'Simple',
          buttonTo: 'not-found-simple',
        },
        {
          imageUrl: 'https://i.imgur.com/dlcZMiG.png',
          label: 'Custom image',
          buttonTo: 'not-found-custom',
        },
        {
          imageUrl: 'https://i.imgur.com/qcOlDz7.png',
          label: 'Large text heading',
          buttonTo: 'not-found-large-text',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.not-found-pages {
  $cardGutter: #{(19/16)}rem;
  .vuestic-card.not-found-pages__cards {
    min-width: 220px;
    text-align: center;
    margin: 0 $cardGutter calc(#{$cardGutter} * 2) $cardGutter;
  }
  &__button-container {
    text-align: center;
  }
}
</style>
