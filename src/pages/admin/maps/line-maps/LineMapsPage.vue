<template>
  <div class="line-maps-page">
    <div class="row">
      <div class="flex md12 xs12">
        <va-card class="line-maps-page__widget" title="Line Maps">
          <line-map :map-data="lineMapData" style="height: 65vh" />
        </va-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useGlobalConfig } from 'vuestic-ui'

  import LineMap from '../../../../components/maps/LineMap.vue'
  import { getLineMapData } from '../../../../data/maps/LineMapData'

  const { getGlobalConfig } = useGlobalConfig()

  const lineMapData = computed(() => {
    return getLineMapData(getGlobalConfig().colors!)
  })
</script>
