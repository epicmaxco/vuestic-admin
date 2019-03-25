<template>
  <VbDemo>
    <VbContainer title="Timeline Item with Label">
      <va-timeline-item is-first is-last>
        <div class="title text--center" slot="before">22 February, 2018</div>
      </va-timeline-item>
    </VbContainer>
    <VbContainer title="Timeline Item with Card">
      <va-timeline-item is-first is-last>
        <vuestic-card
          slot="after"
          stripe="success"
          title-on-image
          overlay
          image="https://picsum.photos/300/200/?random">
          <template slot="title">
            Card with overlay and text on top of image
          </template>
          Running out of pages in your passport. Two trailer park girls go
          around the outside.
        </vuestic-card>
      </va-timeline-item>
    </VbContainer>
  </VbDemo>
</template>

<script>
import VaTimelineItem from './VaTimelineItem.vue'
import VuesticCard from '../vuestic-card/VuesticCard'

export default {
  components: {
    VuesticCard,
    VaTimelineItem,
  },
}
</script>
