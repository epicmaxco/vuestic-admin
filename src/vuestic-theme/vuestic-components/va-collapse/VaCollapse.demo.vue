<template>
  <VbDemo>
    <VbContainer style="width: 900px;" title="Default collapse">
      <va-collapse>
        <span slot="header">Toggle collapse </span>
        <div slot="body">
          Expand content
        </div>
      </va-collapse>
    </VbContainer>
    <VbContainer style="width: 900px;" title="Collapse with custom header">
      <va-collapse customHeader>
        <va-button slot="header" style="width: 100%">
          Toggle collapse
        </va-button>
        <div slot="body">
          Expand content
        </div>
      </va-collapse>
    </VbContainer>
    <VbContainer title="Collapse with background color" style="width: 900px;">
      <va-collapse withBackground>
        <span slot="header"> Expand This Block </span>
        <div slot="body">
          Expand content
        </div>
      </va-collapse>
    </VbContainer>
    <VbContainer title="Collapse with defaultValue = true" style="width: 900px;">
      <va-collapse :defaultValue="true">
        <span slot="header"> Expand This Block </span>
        <div slot="body">
          Expand content
        </div>
      </va-collapse>

    </VbContainer>
  </VbDemo>
</template>

<script>

import VaCollapse from './VaCollapse'
export default {
  components: {
    VaCollapse
  }
}
</script>
