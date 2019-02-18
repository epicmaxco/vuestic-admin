<template>
  <VbDemo>
    <VbContainer>
      <va-rating
        :max="6"
        size="30px"
        color="red"
        emptyIcon="fa fa-star-o"
        halfIcon="fa fa-star-half-full"
        v-model="value"
      />
      half-icon
    </VbContainer>
    <VbContainer>
      <va-rating
        :max="6"
        size="large"
        color="green"
        disabled
        v-model="value"
      />
      disabled
    </VbContainer>
    <VbContainer>
      <va-rating
        :max="6"
        size="large"
        color="blue"
        v-model="value"
        readonly
      />
      readonly
    </VbContainer>
    <VbContainer>
      <va-rating
        :max="6"
        size="large"
        color="blue"
        v-model="value"
        numbers
      />
      numbers
    </VbContainer>
    <VbContainer>
      <va-rating
        :max="6"
        size="small"
        color="blue"
        v-model="value"
      />
      small
    </VbContainer>
    <VbContainer>
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
