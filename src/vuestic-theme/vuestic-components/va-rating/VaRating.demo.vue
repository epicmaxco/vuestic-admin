<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <va-rating
        :max="6"
        size="3rem"
        color="red"
        emptyIcon="fa fa-star-o"
        v-model="value"
      />
      3rem
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
export default {
  data () {
    return {
      value: 2
    }
  }
}
</script>
