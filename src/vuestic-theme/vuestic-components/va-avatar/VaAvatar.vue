<template>
  <div class="va-avatar va-row column justify--center align--center">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'va-avatar',
}
</script>

<style lang="scss" scoped>
  .va-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;

    img {
      display: block;
      width: 100%;
    }
  }
</style>
