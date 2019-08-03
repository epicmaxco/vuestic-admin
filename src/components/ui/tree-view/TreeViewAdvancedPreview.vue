<template>
  <div class="tree-view-advanced-preview">
    <div class="tree-view-advanced-preview__buttons">
      <va-button @click="$refs.treeView.expand()">
        EXPAND ALL
      </va-button>
      <va-button @click="$refs.treeView.collapse()">
        COLLAPSE ALL
      </va-button>
    </div>

    <va-tree-root ref="treeView">
      <va-tree-category label="Electronics">
        <va-tree-node>Cellphones</va-tree-node>
        <va-tree-node>Camera Body Kits</va-tree-node>
        <va-tree-node>External HDDs</va-tree-node>
      </va-tree-category>
      <va-tree-category isOpen label="Products">
        <va-tree-category label="Cables">
          <va-tree-node>Audio</va-tree-node>
          <va-tree-node>Video</va-tree-node>
          <va-tree-node>Optical</va-tree-node>
        </va-tree-category>
        <va-tree-node>Monitors</va-tree-node>
        <va-tree-node>Keyboards</va-tree-node>
      </va-tree-category>
      <va-tree-category label="Apparel">
        <va-tree-node>Jackets</va-tree-node>
        <va-tree-node>Pants</va-tree-node>
        <va-tree-node>Skirts</va-tree-node>
      </va-tree-category>
    </va-tree-root>
  </div>
</template>

<script>
export default {
  name: 'tree-view-advanced-preview',
}
</script>

<style lang="scss">
  .tree-view-advanced-preview {
    &__buttons {
      margin-bottom: 1rem;
      display: flex;

      @include media-breakpoint-down(xs) {
        flex-flow: column;
      }
    }
  }
</style>
