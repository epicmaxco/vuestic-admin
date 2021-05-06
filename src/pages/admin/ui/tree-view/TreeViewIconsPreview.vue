<template>
  <va-tree-root>
    <va-tree-category label="Images" icon="ion_md_images">
      <va-tree-node icon="ion_md_image">
        sick_catz_cuddling.jpg
      </va-tree-node>
      <va-tree-node icon="ion_md_image">
        pins-and-needles.jpg
      </va-tree-node>
      <va-tree-node icon="ion_md_image">
        avatar_50x50.jpg
      </va-tree-node>
    </va-tree-category>
    <va-tree-category label="Music" isOpen icon="ion_md_star_outline">
      <va-tree-node icon="ion_md_musical_notes">
        Taylor_swift_hello.mp3
      </va-tree-node>
      <va-tree-node icon="ion_md_musical_notes">
        straight_to_the_bank.wav
      </va-tree-node>
      <va-tree-node icon="ion_md_musical_notes">
        imagine_dragons_promo.mp3
      </va-tree-node>
    </va-tree-category>
    <va-tree-category label="Miscellaneous" icon="ion_md_list">
      <va-tree-node icon="ion_md_grid">
        dump.sql
      </va-tree-node>
      <va-tree-node icon="ion_md_help">
        unknown-file
      </va-tree-node>
      <va-tree-node icon="ion_md_key">
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
