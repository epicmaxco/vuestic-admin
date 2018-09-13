<template>
  <vuestic-tree-root>
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
</template>

<script>
export default {
  name: 'tree-view-basic-preview',
}
</script>
