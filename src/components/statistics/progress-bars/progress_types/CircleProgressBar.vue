<template>
  <div class="circle">
    <div class="progress">
      <div class="overlay">
        <span>{{value+'%'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Number,
        default: 0
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      size: {
        default: {
          radius: '25px',
          borderWidth: '2px'
        }
      },
      color: {
        type: String,
        default: '$brand-primary'
      }
    },
    methods: {
      setValue (value) {
        console.log('test')
        this.value = value
      }
    },
    watch: {

    }
  }
</script>

<style lang="scss">
  /*@import "../../../../sass/variables";*/
  /*@import "../../../../sass/mixins";*/
  /*@import "../../../../../node_modules/bootstrap/scss/variables";*/

//  @include circle-progress-bar($brand-primary, 48px, 2px)

</style>
