<template>
 <div class="va-button-content">
   <i
     v-if="icon"
     class="va-button-content__icon-right"
     :class="icon"></i>
   <div class="va-button-content__title">
     <slot/>
   </div>
   <i
     v-if="iconRight"
     class="va-button-content__icon-right"
     :class="iconRight"></i>
 </div>
</template>

<script>
export default {
  name: 'va-button-content',
  props: {
    icon: {
      type: String
    },
    iconRight: {
      type: String
    }
  }
}
</script>

<style lang='scss'>
  .va-button-content {
    display: flex;

    &__title, &__icon {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
    }

    &__icon {
      .va-button--large & {
        font-size: 2rem;
      }

      .va-button--small & {
        font-size: 1rem;
      }

      .va-button--normal & {
        font-size: 1.5rem;
      }
    }

    &__title {
      .va-button--large.va-button--with-left-icon & {
        padding-left: 0.5rem;
      }

      .va-button--large.va-button--with-right-icon & {
        padding-right: 0.63rem;
      }

      .va-button--small.va-button--with-left-icon & {
        padding-left: 0.25rem;
      }

      .va-button--small.va-button--with-right-icon & {
        padding-right: 0.25rem;
      }

      .va-button--normal.va-button--with-left-icon & {
        padding-left: 0.5rem;
      }

      .va-button--normal.va-button--with-right-icon & {
        padding-right: 0.5rem;
      }
    }
  }
</style>
