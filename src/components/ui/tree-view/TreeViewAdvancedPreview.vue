<template>
  <div class="tree-view-advanced-preview">
    <div class="va-row mb4">
      <div class="small-set flex sm6 justify--center">
        <button class="btn btn-primary btn-micro"
                @click="$refs.treeView.expand()"
        >
          EXPAND ALL
        </button>
      </div>
      <div class="small-set flex sm6 justify--center">
        <button class="btn btn-primary btn-micro"
                @click="$refs.treeView.collapse()"
        >
          COLLAPSE ALL
        </button>
      </div>
    </div>

    <vuestic-tree-root ref="treeView">
      <vuestic-tree-category label="Electronics">
        <vuestic-tree-node>Cellphones</vuestic-tree-node>
        <vuestic-tree-node>Camera Body Kits</vuestic-tree-node>
        <vuestic-tree-node>External HDDs</vuestic-tree-node>
      </vuestic-tree-category>
      <vuestic-tree-category isOpen label="Products">
        <vuestic-tree-category label="Cables">
          <vuestic-tree-node>Audio</vuestic-tree-node>
          <vuestic-tree-node>Video</vuestic-tree-node>
          <vuestic-tree-node>Optical</vuestic-tree-node>
        </vuestic-tree-category>
        <vuestic-tree-node>Monitors</vuestic-tree-node>
        <vuestic-tree-node>Keyboards</vuestic-tree-node>
      </vuestic-tree-category>
      <vuestic-tree-category label="Apparel">
        <vuestic-tree-node>Jackets</vuestic-tree-node>
        <vuestic-tree-node>Pants</vuestic-tree-node>
        <vuestic-tree-node>Skirts</vuestic-tree-node>
      </vuestic-tree-category>
    </vuestic-tree-root>
  </div>
</template>

<script>
export default {
  name: 'tree-view-advanced-preview',
}
</script>
