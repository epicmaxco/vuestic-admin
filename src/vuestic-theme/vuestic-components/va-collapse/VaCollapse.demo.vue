<template>
  <VbDemo>
    <VbContainer title="Default">
      <va-collapse style="width: 400px;">
        <span slot="header">{{collapseHeader}}</span>
        <div slot="body">
          {{collapseContent}}
        </div>
      </va-collapse>
    </VbContainer>
    <VbContainer title="Custom header">
      <va-collapse style="width: 400px;" customHeader>
        <va-button slot="header" style="width: 100%">
          {{collapseHeader}}
        </va-button>
        <div slot="body">
          {{collapseContent}}
        </div>
      </va-collapse>
    </VbContainer>
    <VbContainer title="With background">
      <va-collapse style="width: 400px;" withBackground>
        <span slot="header">{{collapseHeader}}</span>
        <div slot="body">
          {{collapseContent}}
        </div>
      </va-collapse>
    </VbContainer>
    <VbContainer title="Is open default">
      <va-collapse style="width: 400px;" isOpenDefault>
        <span slot="header">{{collapseHeader}}</span>
        <div slot="body">
          {{collapseContent}}
        </div>
      </va-collapse>
    </VbContainer>
    <VbContainer title="looooong texts">
      <va-collapse style="width: 400px;" defaultValue>
        <span slot="header">{{collapseHeader}} {{collapseHeader}} {{collapseHeader}} {{collapseHeader}} {{collapseHeader}} {{collapseHeader}} {{collapseHeader}} {{collapseHeader}} {{collapseHeader}} {{collapseHeader}}</span>
        <div slot="body">
          {{collapseContent}} {{collapseContent}} {{collapseContent}} {{collapseContent}} {{collapseContent}} {{collapseContent}} {{collapseContent}} {{collapseContent}} {{collapseContent}} {{collapseContent}} {{collapseContent}} {{collapseContent}} {{collapseContent}} {{collapseContent}}
          {{collapseContent}} {{collapseContent}} {{collapseContent}} {{collapseContent}} {{collapseContent}} {{collapseContent}} {{collapseContent}} {{collapseContent}} {{collapseContent}} {{collapseContent}} {{collapseContent}} {{collapseContent}} {{collapseContent}} {{collapseContent}}
        </div>
      </va-collapse>
    </VbContainer>
  </VbDemo>
</template>

<script>
import VaCollapse from './VaCollapse.vue'

export default {
  components: {
    VaCollapse,
  },
  data () {
    return {
      collapseHeader: `Expand This Block`,
      collapseContent: `Collapse content`,
    }
  },
}
</script>
