<template>
  <va-tree-root>
    <va-tree-category label="Images">
      <div slot="icon" class="icon">
        <va-icon icon="ion ion-md-images"/>
      </div>
      <va-tree-node>
        <div slot="icon" class="icon">
          <va-icon icon="ion ion-md-image"/>
        </div>
        sick_catz_cuddling.jpg
      </va-tree-node>
      <va-tree-node>
        <div slot="icon" class="icon">
          <va-icon icon="ion ion-md-image"/>
        </div>
        pins-and-needles.jpg
      </va-tree-node>
      <va-tree-node>
        <div slot="icon" class="icon">
          <va-icon icon="ion ion-md-image"/>
        </div>
        avatar_50x50.jpg
      </va-tree-node>
    </va-tree-category>
    <va-tree-category label="Music" isOpen>
      <div slot="icon" class="icon">
        <va-icon icon="ion ion-md-star-outline"/>
      </div>
      <va-tree-node>
        <div slot="icon" class="icon">
          <va-icon icon="ion ion-md-musical-notes"/>
        </div>
        Taylor_swift_hello.mp3
      </va-tree-node>
      <va-tree-node>
        <div slot="icon" class="icon">
          <va-icon icon="ion ion-md-musical-notes"/>
        </div>
        straight_to_the_bank.wav
      </va-tree-node>
      <va-tree-node>
        <div slot="icon" class="icon">
          <va-icon icon="ion ion-md-musical-notes"/>
        </div>
        imagine_dragons_promo.mp3
      </va-tree-node>
    </va-tree-category>
    <va-tree-category label="Miscellaneous">
      <div slot="icon" class="icon">
        <va-icon icon="ion ion-md-list"/>
      </div>
      <va-tree-node>
        <div slot="icon" class="icon">
          <va-icon icon="ion ion-md-grid"/>
        </div>
        dump.sql
      </va-tree-node>
      <va-tree-node>
        <div slot="icon" class="icon">
          <va-icon icon="ion ion-md-help"/>
        </div>
        unknown-file
      </va-tree-node>
      <va-tree-node>
        <div slot="icon" class="icon">
          <va-icon icon="ion ion-md-key"/>
        </div>
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
