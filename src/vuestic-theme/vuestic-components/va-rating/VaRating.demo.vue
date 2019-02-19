<template>
  <VbDemo>
    <VbContainer title="Half icon">
      <va-rating
        :max="6"
        size="30px"
        color="red"
        emptyIcon="fa fa-star-o"
        halfIcon="fa fa-star-half-full"
        v-model="value"
      />
    </VbContainer>
    <VbContainer title="Disabled icons">
      <va-rating
        :max="6"
        size="large"
        color="green"
        disabled
        v-model="value"
      />
    </VbContainer>
    <VbContainer title="Readonly icons">
      <va-rating
        :max="6"
        size="large"
        color="blue"
        v-model="value"
        readonly
      />
    </VbContainer>
    <VbContainer title="Numbers icons">
      <va-rating
        :max="6"
        size="large"
        color="blue"
        v-model="value"
        numbers
      />
    </VbContainer>
    <VbContainer title="Small icons">
      <va-rating
        :max="6"
        size="small"
        color="blue"
        v-model="value"
      />
    </VbContainer>
    <VbContainer title="Custom icons">
      <va-rating
        :max="8"
        icon="fa fa-bug"
        color="blue"
        v-model="value"
      />
    </VbContainer>
    <VbContainer>
      value = {{value}}
    </VbContainer>
  </VbDemo>
</template>

<script>
export default {
  data () {
    return {
      value: 2
    }
  }
}
</script>
