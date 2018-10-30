<template>
  <div class="vuestic-tag-group">
    <vuestic-tag
      v-for="(item, index) in value"
      :key="index"
      :name="item.name || item"
      :type="type || item.type"
      :removable="removable"
      @remove="removeTag(index)"
    />
  </div>
</template>

<script>
import VuesticTag from './VuesticTag.vue'

export default {
  name: 'vuestic-tag-group',
  props: {
    removable: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Array,
    },
    type: {
      type: String,
      default: '',
    },
  },
  components: {
    VuesticTag,
  },
  methods: {
    removeTag (tagIndex) {
      this.$emit('input', this.value.filter((item, i) => i !== tagIndex))
    },
  },
}
</script>

<style lang="scss">
.vuestic-tag-group {
  display: flex;
  flex-wrap: wrap;
}
</style>
