<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-timeline-item>
        <div slot="left">22 February, 2018</div>
        <vuestic-card
          slot="right"
          stripe="warning"
          title-on-image
          overlay
          image="https://picsum.photos/300/200/?random">
          <template slot="title">
            Card with overlay and text on top of image
          </template>
          Running out of pages in your passport. Two trailer park girls go around the outside.
        </vuestic-card>
      </vuestic-timeline-item>
    </div>
  </div>
</template>

<script>
import VuesticTimelineItem from './VuesticTimelineItem.vue'
import VuesticCard from '../../vuestic-card/VuesticCard'

export default {
  components: {
    VuesticCard,
    VuesticTimelineItem,
  },
}
</script>
