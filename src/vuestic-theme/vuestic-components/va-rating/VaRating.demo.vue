<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <va-rating
        :max="6"
        size="30px"
        color="red"
        emptyIcon="fa fa-star-o"
        halfIcon="fa fa-star-half-full"
        v-model="value"
      />
      30px half-icon
      {{value}}
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
      {{value}}
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
      {{value}}
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
      {{value}}
    </div>
    <div class="demo-container__item">
      <va-rating
        :max="6"
        size="small"
        color="blue"
        v-model="value"
      />
      small
      {{value}}
    </div>
    <div class="demo-container__item">
      <va-rating
        :max="8"
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
