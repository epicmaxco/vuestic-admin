<template>
  <VbDemo>
    <VbCard title="Badge Types">
      <va-badge>
        Paid
      </va-badge>
      <va-badge outline>
        Paid
      </va-badge>
    </VbCard>
    <VbCard title="Badges Colors">
      <va-badge>
        Paid
      </va-badge>
      <va-badge color="info">
        Info
      </va-badge>
      <va-badge color="danger">
        Danger
      </va-badge>
      <va-badge color="warning">
        On Hold
      </va-badge>
      <va-badge color="gray">
        Processing
      </va-badge>
      <va-badge color="dark">
        New Label
      </va-badge>
    </VbCard>
    <VbCard title="Outline Badges Colors">
      <va-badge outline>
        Paid
      </va-badge>
      <va-badge outline color="info">
        Info
      </va-badge>
      <va-badge outline color="danger">
        Danger
      </va-badge>
      <va-badge outline color="warning">
        On Hold
      </va-badge>
      <va-badge outline color="gray">
        Processing
      </va-badge>
      <va-badge outline color="dark">
        New Label
      </va-badge>
    </VbCard>
  </VbDemo>
</template>

<script>
import VaBadge from './VaBadge'

export default {
  components: { VaBadge },
}
</script>
