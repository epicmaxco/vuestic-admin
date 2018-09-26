<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-timeline>
        <vuestic-timeline-item
          v-for="(item, index) in items"
          :key="index"
          :active="item"
        >
          <span slot="before">Before text</span>
          <span slot="after">After text</span>
        </vuestic-timeline-item>
      </vuestic-timeline>
    </div>

    <div class="demo-container__item">
      <vuestic-timeline vertical>
        <vuestic-timeline-item
          v-for="(item, index) in items"
          :key="index"
          :active="item"
        >
          <span slot="before">Before text</span>
          <span slot="after">
            <div>After text</div>
            <div>After text</div>
            <div>After text</div>
          </span>
        </vuestic-timeline-item>
      </vuestic-timeline>
    </div>

    <div class="demo-container__item">
      {{ items }}
      <button @click="reroll()">Reroll</button>
    </div>
  </div>
</template>

<script>
import VuesticTimeline from './VuesticTimeline.vue'
import VuesticTimelineItem from './VuesticTimelineItem.vue'

export default {
  components: {
    VuesticTimeline,
    VuesticTimelineItem,
  },
  data () {
    return {
      items: [
        true,
        true,
        false,
      ],
    }
  },
  methods: {
    reroll () {
      const getItem = () => !!Math.floor(Math.random() * 2)
      this.items = [
        getItem(),
        getItem(),
        getItem(),
      ]
    },
  },
}
</script>
