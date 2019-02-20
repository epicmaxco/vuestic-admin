<template>
  <VbDemo>
    <VbContainer title="default item">
      <va-rating-item
        :value="true"
      />
    </VbContainer>
    <VbContainer title="item with half-icon">
      <va-rating-item
        emptyIcon="fa fa-star-o"
        halfIcon="fa fa-star-half-full"
        isHalf
      />
    </VbContainer>
    <VbContainer title="empty item">
      <va-rating-item
        :value="false"
      />
    </VbContainer>
    <VbContainer title="item with custom icon">
      <va-rating-item
        icon="fa fa-bug"
        :value="true"
      />
    </VbContainer>
  </VbDemo>
</template>

<script>
import VaRatingItem from './VaRatingItem'
export default {
  components: { VaRatingItem }
}
</script>
