<template>
  <va-tree-root>
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
</template>

<script>
export default {
  name: 'tree-view-basic-preview',
}
</script>
