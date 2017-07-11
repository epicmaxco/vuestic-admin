<template>
  <div class="circle progress-bar" :class="'value-' + animatedValue"  v-progress-bar="{data: $data}">
    <div class="overlay">
      <span>{{animatedValue+'%'}}</span>
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
      radius: {
        default: '25px'
      },
      borderWidth: {
        default: '2px'
      },
      color: {
        type: String,
        default: '$brand-primary'
      },
      isActive: {
        type: Boolean,
        default: 'false'
      }
    },
    directives: {
      progressBar (el, binding) {
        binding.value.data.progressBarElement = el
      }
    },
    methods: {
      enableBarAnimation (flag) {
//        if (flag) {
//          this.progressBarElement.setAttribute('class', 'progress-bar active')
//        } else {
//          this.progressBarElement.setAttribute('class', 'progress-bar')
//        }
      }
    },
    watch: {
      isActive (flag) {
        this.enableBarAnimation(flag)
      }
    },
    data () {
      return {
        animatedValue: this.value,
        progressBarElement: null
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../../sass/variables";
  @import "../../../../sass/mixins";
  @import "../../../../../node_modules/bootstrap/scss/variables";

  @include circle-progress-bar($brand-primary, 48px, 2px)

</style>
