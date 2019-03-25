<template>
  <VbDemo>
    <VbContainer title="Simple Timeline">
      <va-timeline>
        <va-timeline-item
          v-for="(item, index) in items"
          :key="index"
          :active="item"
        >
          <span slot="before">Before text</span>
          <span slot="after">After text</span>
        </va-timeline-item>
      </va-timeline>
    </VbContainer>
    <VbContainer title="Vertical Timeline">
      <va-timeline vertical>
        <va-timeline-item
          v-for="(item, index) in items"
          :key="index"
          :active="item"
        >
          <span slot="before">Before text</span>
          <span slot="after">
            <div>After text</div>
          </span>
        </va-timeline-item>
      </va-timeline>
    </VbContainer>
    <VbContainer title="Colorful Timeline">
      <va-timeline>
        <va-timeline-item
          v-for="(item, index) in items"
          :key="index"
          color="info"
          :active="item"
        >
          <span slot="before">Before text</span>
          <span slot="after">After text</span>
        </va-timeline-item>
      </va-timeline>
      <va-timeline vertical>
        <va-timeline-item
          v-for="(item, index) in items"
          :key="index"
          color="danger"
          :active="item"
        >
          <span slot="before">Before text</span>
          <span slot="after">
            <div>After text</div>
          </span>
        </va-timeline-item>
      </va-timeline>
    </VbContainer>
    <VbContainer>
      {{ items }}
      <va-button @click="reroll()">
        Reroll
      </va-button>
    </VbContainer>
  </VbDemo>
</template>

<script>
import VaTimeline from './VaTimeline.vue'
import VaTimelineItem from './VaTimelineItem.vue'

export default {
  components: {
    VaTimeline,
    VaTimelineItem,
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
