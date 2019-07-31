<template>
  <VbDemo>
    <VbCard>
      <a href="/default-link" class="link">Default Link</a>
    </VbCard>
    <VbCard>
      <a href="/not-visited-link" class="link-secondary">Secondary Link</a>
    </VbCard>
    <VbCard>
      <a href="#" class="link">Default link Visited</a>
    </VbCard>
    <VbCard>
      <a href="#" class="link-secondary">Secondary link Visited</a>
    </VbCard>
  </VbDemo>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '../resources/resources';
@import 'typography';
</style>
