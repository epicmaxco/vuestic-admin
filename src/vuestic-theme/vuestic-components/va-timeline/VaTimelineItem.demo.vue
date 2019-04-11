<template>
  <VbDemo>
    <VbCard title="Timeline Item with Label">
      <va-timeline-item is-first is-last>
        <div slot="before">22 February, 2018</div>
      </va-timeline-item>
    </VbCard>
    <VbCard title="Timeline Item with Card">
      <va-timeline-item is-first is-last>
        <va-card
          slot="after"
          stripe="success"
          title-on-image
          overlay
          image="https://picsum.photos/300/200/?random"
        >
          <template slot="title">
            Card with overlay and text on top of image
          </template>
          Running out of pages in your passport. Two trailer park girls go
          around the outside.
        </va-card>
      </va-timeline-item>
    </VbCard>
  </VbDemo>
</template>

<script>
import VaTimelineItem from './VaTimelineItem.vue'
import VaCard from '../va-card/VaCard'

export default {
  components: {
    VaCard,
    VaTimelineItem,
  },
}
</script>
