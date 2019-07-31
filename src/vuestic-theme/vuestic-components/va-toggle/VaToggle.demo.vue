<template>
  <VbDemo>
    <VbCard title="Default">
      {{value}}
      <va-toggle v-model="value"/>
    </VbCard>
    <VbCard title="Colors">
      <va-toggle v-model="value"/>
      <va-toggle v-model="value" color="info"/>
      <va-toggle v-model="value" color="danger"/>
      <va-toggle v-model="value" color="warning"/>
      <va-toggle v-model="value" color="gray"/>
      <va-toggle v-model="value" color="dark"/>
    </VbCard>
    <VbCard title="With label">
      <va-toggle v-model="value" label="turn"/>
      <va-toggle v-model="value">
        <div style="background: mediumpurple">Slot label</div>
      </va-toggle>
    </VbCard>
    <VbCard title="Sizes">
      <va-toggle v-model="value" small label="small"/>
      <va-toggle v-model="value" label="default"/>
      <va-toggle v-model="value" large label="large"/>
    </VbCard>
    <VbCard title="Custom trueValue, falseValue">
      <va-toggle
        v-model="customTrueFalse"
        true-value="agree"
        false-value="disagree"
        :label="`${customTrueFalse}`"
      />
    </VbCard>
    <VbCard title="Array as model">
      {{selection}}
      <va-toggle v-model="selection" array-value="one" label="one"/>
      <va-toggle v-model="selection" array-value="two" label="two"/>
      <va-toggle v-model="selection" array-value="three" label="three"/>
      <va-toggle v-model="selection" array-value="four" label="four"/>
    </VbCard>
    <VbCard title="Object values">
      {{selection}}
      <va-toggle
        v-for="objectOption in objectOptions"
        :key="objectOption.id"
        v-model="selection"
        :array-value="objectOption"
        :label="objectOption.name"
      />
    </VbCard>
    <VbCard title="Disabled">
      <va-toggle v-model="value" disable/>
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
      customTrueFalse: 'disagree',
      selection: [],
      objectOptions: [
        { id: 1, name: 'one' },
        { id: 2, name: 'two' },
        { id: 3, name: 'three' },
      ],
    }
  },
}
</script>
