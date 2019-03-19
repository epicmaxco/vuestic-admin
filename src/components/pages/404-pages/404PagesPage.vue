<template>
  <div class="not-found-pages va-row">
    <div class="flex md12">
      <div class="va-row">
        <vuestic-card
          class="not-found-pages__cards text--center"
          :image="item.imageUrl"
          v-for="item in items"
          :key="item.$index"
        >
          {{ item.label }}
          <div class="not-found-pages__button-container pt-3 mb-0">
            <va-button
              :to="{ name: item.buttonTo }">
              {{ 'View Example' }}
            </va-button>
          </div>
        </vuestic-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'not-found-pages',
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

  .va-card.not-found-pages__cards {
    min-width: 220px;
    margin: 0 $cardGutter calc(#{$cardGutter} * 2) $cardGutter;
  }
}
</style>
