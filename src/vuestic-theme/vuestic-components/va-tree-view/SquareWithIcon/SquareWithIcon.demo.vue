<template>
  <VbDemo>
    <VbCard title="Default">
      <square-with-icon iconClass="ion ion-md-checkmark"/>
      <square-with-icon iconClass="ion ion-md-checkmark" color="danger"/>
    </VbCard>
  </VbDemo>
</template>

<script>
import SquareWithIcon from './SquareWithIcon.vue'

export default {
  components: { SquareWithIcon },
}
</script>
