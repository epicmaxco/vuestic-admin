<template>
  <va-tree-root>
    <va-tree-category label="Images" icon="ion ion-md-images">
      <va-tree-node icon="ion ion-md-image">
        sick_catz_cuddling.jpg
      </va-tree-node>
      <va-tree-node icon="ion ion-md-image">
        pins-and-needles.jpg
      </va-tree-node>
      <va-tree-node icon="ion ion-md-image">
        avatar_50x50.jpg
      </va-tree-node>
    </va-tree-category>
    <va-tree-category label="Music" isOpen icon="ion ion-md-star-outline">
      <va-tree-node icon="ion ion-md-musical-notes">
        Taylor_swift_hello.mp3
      </va-tree-node>
      <va-tree-node icon="ion ion-md-musical-notes">
        straight_to_the_bank.wav
      </va-tree-node>
      <va-tree-node icon="ion ion-md-musical-notes">
        imagine_dragons_promo.mp3
      </va-tree-node>
    </va-tree-category>
    <va-tree-category label="Miscellaneous" icon="ion ion-md-list">
      <va-tree-node icon="ion ion-md-grid">
        dump.sql
      </va-tree-node>
      <va-tree-node icon="ion ion-md-help">
        unknown-file
      </va-tree-node>
      <va-tree-node icon="ion ion-md-key">
        secure.key
      </va-tree-node>
    </va-tree-category>
  </va-tree-root>
</template>

<script>
export default {
  name: 'tree-view-icons-preview',
}
</script>
