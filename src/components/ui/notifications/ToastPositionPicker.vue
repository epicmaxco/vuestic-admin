<template>
 <div class="toast-position-picker">
   <div class="position-boxes-row">
     <div class="position-box"></div>
     <div class="position-box"></div>
     <div class="position-box"></div>
   </div>
   <div class="position-boxes-row">
     <div class="position-box"></div>
     <div class="position-box"></div>
     <div class="position-box selected"></div>
   </div>
 </div>
</template>

<script>
  export default {
    name: 'toast-position-picker'
  }
</script>

<style lang='scss' scoped>
  @import '../../../sass/_variables.scss';

  .toast-position-picker {
    width: 112px;
    height: 76px;
  }

  .position-boxes-row {
    display: flex;
    flex-direction: row;

    &:first-child {
      margin-bottom: 2px;
    }
  }

  .position-box {
    height: 36px;
    width: 36px;
    margin-right: 2px;
    cursor: pointer;
    background-color: $brand-primary;
    opacity: 0.3;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      opacity: 0.6;
    }

    &.selected {
      opacity: 1;
    }
  }
</style>
