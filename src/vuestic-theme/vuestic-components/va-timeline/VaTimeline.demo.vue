<template>
  <VbDemo>
    <VbCard title="Simple Timeline">
      <va-timeline>
        <va-timeline-item
          v-for="(item, index) in items"
          :key="index"
          :active="item"
        >
          <span
            :class="{ 'title': item, 'title title--gray': !item }"
            slot="before"
          >
            Before text
          </span>
          <span
            :class="{ 'title': item, 'title title--gray': !item }"
            slot="after"
          >
            After text
          </span>
        </va-timeline-item>
      </va-timeline>
    </VbCard>
    <VbCard title="Vertical Timeline" width="300px">
      <va-timeline vertical>
        <va-timeline-item
          v-for="(item, index) in items"
          :key="index"
          :active="item"
        >
          <span
            class="va-timeline-item__text"
            :class="{ 'title': item, 'title title--gray': !item }"
            slot="before"
          >
            Before text
          </span>
          <span
            class="va-timeline-item__text"
            :class="{ 'title': item, 'title title--gray': !item }"
            slot="after"
          >
            After text
          </span>
        </va-timeline-item>
      </va-timeline>
    </VbCard>
    <VbCard title="Colorful Timeline">
      <va-timeline>
        <va-timeline-item
          v-for="(item, index) in items"
          :key="index"
          color="info"
          :active="item"
        >
          <span
            class="va-timeline-item__text"
            :class="{ 'title title--info': item, 'title title--gray': !item }"
            slot="before"
          >
            Before text
          </span>
          <span
            class="va-timeline-item__text"
            :class="{ 'title title--info': item, 'title title--gray': !item }"
            slot="after"
          >
            After text
          </span>
        </va-timeline-item>
      </va-timeline>
      <va-timeline vertical>
        <va-timeline-item
          v-for="(item, index) in items"
          :key="index"
          color="danger"
          :active="item"
        >
          <span
            class="va-timeline-item__text"
            :class="{ 'title title--danger': item, 'title title--gray': !item }"
            slot="before"
          >
            Before text
          </span>
          <span
            class="va-timeline-item__text"
            :class="{ 'title title--danger': item, 'title title--gray': !item }"
            slot="after"
          >
            After text
          </span>
        </va-timeline-item>
      </va-timeline>
    </VbCard>
    <VbCard>
      {{ items }}
      <va-button @click="reroll()">
        Reroll
      </va-button>
    </VbCard>
  </VbDemo>
</template>

<script>
import VaButton from './../va-button/VaButton.vue'
import VaTimeline from './VaTimeline.vue'
import VaTimelineItem from './VaTimelineItem.vue'

export default {
  components: {
    VaButton,
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
