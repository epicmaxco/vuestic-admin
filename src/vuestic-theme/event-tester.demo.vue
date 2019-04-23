<template>
  <VbDemo>
    <VbCard title="Window events (counts)">
      <div>
        resize: {{resize}}
      </div>
      <div>
        resizeEnd: {{resizeEnd}}
      </div>
    </VbCard>
  </VbDemo>
</template>

<script>

export default {
  data () {
    return {
      resize: 0,
      resizeEnd: 0,
    }
  },
  subs: {
    resize () {
      this.resize++
    },
    resizeEnd () {
      this.resizeEnd++
    },
  },
}
</script>
