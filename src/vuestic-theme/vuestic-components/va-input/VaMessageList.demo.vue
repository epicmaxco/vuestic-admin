<template>
  <VbDemo>
    <VbCard title="Default">
      <VaMessageList :value="stringMessage"/>
    </VbCard>
    <VbCard title="Message array">
      <VaMessageList :limit="3" :value="stringMessages"/>
    </VbCard>
    <VbCard title="Error">
      <VaMessageList color="danger" :value="stringMessages"/>
    </VbCard>
    <VbCard title="Success">
      <VaMessageList color="success" :value="stringMessages"/>
    </VbCard>
  </VbDemo>
</template>

<script>
import VaMessageList from './VaMessageList.vue'

export default {
  components: {
    VaMessageList,
  },
  data () {
    return {
      stringMessage: 'String message',
      stringMessages: ['Message', 'Another message', 'Long long long long long long long long long long long long long long error message'],
    }
  },
}
</script>
