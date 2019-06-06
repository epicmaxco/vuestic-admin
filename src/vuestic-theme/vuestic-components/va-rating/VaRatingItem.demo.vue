<template>
  <VbDemo>
    <VbCard title="default">
      <table class="table table-bordered">
        <tr>
          <th>Description</th>
          <th>Vuestic Rating Item</th>
        </tr>
        <tr>
          <td>Value</td>
          <td>
            <va-rating-item
              :value="1"
            />
            1
            <va-rating-item
              :value="0"
            />
            0
            <va-rating-item
              :value="0.5"
              halfIcon="fa fa-star-half-full"
            />
            0.5
          </td>
        </tr>
        <tr>
          <td>Icon</td>
          <td>
            <va-rating-item
              :value="1"
            />
            default
            <va-rating-item
              :value="1"
              icon="fa fa-bug"
            />
            custom
          </td>
        </tr>
        <tr>
          <td>Empty Icon</td>
          <td>
            <va-rating-item
              :value="0"
            />
            default
            <va-rating-item
              emptyIcon="fa fa-battery-0"
              :value="0"
            />
            custom
          </td>
        </tr>
        <tr>
          <td>Events tests</td>
          <td>
            <va-rating-item
              :value="0.5"
              style="width: 14px; height: 14px"
              halfIcon="fa fa-star-half-full"
              @click="showEvent($event, 'click')"
            />
            click event = {{clickEvent}}
            <va-rating-item
              :value="0.5"
              style="width: 14px; height: 14px"
              halfIcon="fa fa-star-half-full"
              @hover="showEvent($event, 'hover')"
            />
            hover event = {{hoverEvent}}
          </td>
        </tr>
      </table>
    </VbCard>
  </VbDemo>
</template>

<script>

import VaRatingItem from './VaRatingItem'

export default {
  components: {
    VaRatingItem,
  },
  data () {
    return {
      clickEvent: '',
      hoverEvent: '',
    }
  },
  methods: {
    showEvent (eventValue, event) {
      if (event === 'click') {
        this.clickEvent = eventValue
      } else {
        this.hoverEvent = eventValue
      }
    },
  },
}
</script>
