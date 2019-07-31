<template>
  <div class="va-avatar">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'va-avatar',
}
</script>

<style lang="scss">
.va-avatar {
  display: flex;
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
