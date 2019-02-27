<template>
  <VbDemo>
    <VbContainer title="default">
      <table class="table table-bordered">
        <tr>
          <th>Description</th>
          <th>Vuestic Rating Item</th>
        </tr>
        <tr>
          <td>Value</td>
          <td>
            <va-rating-item
              value
            />
            true
            <va-rating-item/>
            false
          </td>
        </tr>
        <tr>
          <td>Icon</td>
          <td>
            <va-rating-item
              value
            />
            default
            <va-rating-item
              value
              icon="fa fa-bug"
            />
            custom
          </td>
        </tr>
        <tr>
          <td>Half Icon</td>
          <td>
            <va-rating-item
              isHalf
              halfIcon="fa fa-star-half-full"
            />
          </td>
        </tr>
        <tr>
          <td>Empty Icon</td>
          <td>
            <va-rating-item/>
            default
            <va-rating-item
              emptyIcon="fa fa-battery-0"
            />
            custom
          </td>
        </tr>
      </table>
    </VbContainer>
  </VbDemo>
</template>

<script>

import VaRatingItem from './VaRatingItem'
export default {
  components: {
    VaRatingItem
  },
  data () {
    return {}
  }
}
</script>
