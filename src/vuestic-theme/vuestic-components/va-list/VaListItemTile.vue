<template>
  <div :class="getTileClasses()">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'va-list-item-tile',
  props: {
    cut: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getTileClasses () {
      const cut = this.cut ? 'va-list-cut' : ''
      const right = this.right ? 'va-list-right' : ''
      return `va-list-item-tile ${cut} ${right}`
    },
  },
}
</script>

<style>
img {
  object-fit: cover;
  border-radius: 50%;
  height: 48px;
  width: 48px;
}

.va-list-right {
  margin-left: auto;
  align-items: end;
  margin-right: 8px;
}

.va-list-item-tile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 64px;
  padding: 8px;
  height: 64px;
}

.va-list-cut {
  overflow: hidden;
  justify-content: start;
}
</style>
