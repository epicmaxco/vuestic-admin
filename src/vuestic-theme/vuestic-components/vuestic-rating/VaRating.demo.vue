<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <va-rating
        :max="6"
        size="large"
        color="red"
        emptyIcon="fa fa-star-o"
        v-model="value"
      />
    </div>
    <div class="demo-container__item">
      <va-rating
        :max="6"
        size="large"
        color="green"
        disabled
        v-model="value"
      />
      disabled
    </div>
    <div class="demo-container__item">
      <va-rating
        :max="6"
        size="large"
        color="blue"
        v-model="value"
        readonly
      />
      readonly
    </div>
    <div class="demo-container__item">
      <va-rating
        :max="6"
        size="large"
        color="blue"
        v-model="value"
        numbers
      />
      numbers
    </div>
    <div class="demo-container__item">
      <va-rating
        :max="6"
        size="small"
        color="blue"
        v-model="value"
      />
      small
    </div>
    <div class="demo-container__item">
      <va-rating
        :max="6"
        icon="fa fa-bug"
        color="blue"
        v-model="value"
      />
    </div>
  </div>
</template>

<script>
import VaRating from './VaRating'
export default {
  components: {
    VaRating: VaRating
  },
  data () {
    return {
      value: 2
    }
  }
}
</script>
