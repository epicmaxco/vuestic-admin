<template>
  <VbDemo>
    <VbCard title="Default">
      {{value}}
      <va-toggle v-model="value"/>
    </VbCard>
    <VbCard title="Primary colors">
    <va-toggle v-model="value"/>
    <va-toggle v-model="value" color="info"/>
    <va-toggle v-model="value" color="danger"/>
    <va-toggle v-model="value" color="warning"/>
    <va-toggle v-model="value" color="gray"/>
    <va-toggle v-model="value" color="dark"/>
  </VbCard>
    <VbCard title="With label">
      <va-toggle v-model="value" label="turn"/>
      <va-toggle v-model="value"><div style="background: mediumpurple" slot="label">Slot label</div></va-toggle>
    </VbCard>
    <VbCard title="Sizes">
      <va-toggle v-model="value" small label="small"/>
      <va-toggle v-model="value" label="default"/>
      <va-toggle v-model="value" large label="large"/>
    </VbCard>
  </VbDemo>
</template>

<script>
import VaToggle from './VaToggle'

export default {
  components: {
    VaToggle,
  },
  data () {
    return {
      value: true,
    }
  },
}
</script>
