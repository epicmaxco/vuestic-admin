<template>
  <div class="vuestic-div-checkbox" @click="selected = !selected">
    <span class="vuestic-div-checkbox__icon"
          :class="{
            'vuestic-div-checkbox__icon--selected': selected,
          }"
    >
      <span class="icon" v-if="selected">
        <i class="ion ion-ios-checkmark-outline" aria-hidden="true"/>
      </span>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'vuestic-div-checkbox',
    props: {
      value: {
        type: Boolean,
        required: true
      }
    },
    computed: {
      selected: {
        set (selected) {
          this.$emit('input', selected)
        },
        get () {
          return this.value
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../../sass/variables";

  .vuestic-div-checkbox {
    display: inline-block;
    cursor: pointer;
    &__icon {
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 24px;
      height: 22px;
      width: 22px;
      color: $white;
      border: solid 2px $lighter-gray;

      &--selected {
        background-color: $vue-green;
        border: none;
      }
    }
  }
</style>

