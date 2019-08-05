<template>
  <div class="not-found-pages">
    <div class="row">
      <div
        class="flex xs12 sm6 lg4 xl3"
        v-for="item in items"
        :key="item.$index"
      >
        <va-card
          class="not-found-pages__cards text--center"
          :image="item.imageUrl"
        >
          {{ item.label }}
          <div class="not-found-pages__button-container pt-3 mb-0">
            <va-button
              :to="{ name: item.buttonTo }">
              {{ 'View Example' }}
            </va-button>
          </div>
        </va-card>
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
