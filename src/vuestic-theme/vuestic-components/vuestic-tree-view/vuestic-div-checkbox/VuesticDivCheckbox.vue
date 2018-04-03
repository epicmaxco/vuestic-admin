<template>
  <div class="vuestic-div-checkbox" @click="selected = !selected">
    <span class="vuestic-div-checkbox__icon-selected"
          v-if="selected"
    >
      <span class="icon">
        <i class="ion ion-md-checkmark" aria-hidden="true"/>
      </span>
    </span>
    <span class="vuestic-div-checkbox__icon-hollow"
          v-else
    />
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
    cursor: pointer;
    &__icon-hollow {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 1.375rem;
      width: 1.375rem;
      color: $white;
      border: solid 0.125rem $lighter-gray;
    }
    &__icon-selected {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 1.375rem;
      width: 1.375rem;
      color: $white;
      background-color: $vue-green;
    }
  }
</style>

