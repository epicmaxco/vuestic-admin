<template>
  <div class="made-by-component">
    <span>
        ©2018. Made by
        <a href="https://epicmax.co">Epicmax</a>
    </span>
  </div>
</template>

<script>
export default {
  name: 'made-by',
}
</script>

<style lang="scss">
.made-by-component {
  padding-bottom: 20px;
  display: flex;
  color: white;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
