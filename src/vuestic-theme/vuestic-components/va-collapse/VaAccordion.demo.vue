<template>
  <VbDemo>
    <VbContainer style="width: 900px;" title="Accordion">
      <va-accordion>
        <va-collapse>
          <span slot="header"> Default collapse </span>
          <div slot="body">
            <div>
              Expand first content
            </div>
          </div>
        </va-collapse>
        <va-collapse withBackground>
          <span slot="header">Collapse with background</span>
          <div slot="body">
            <div>
              Expand three content
            </div>
          </div>
        </va-collapse>
      </va-accordion>
    </VbContainer>
  </VbDemo>
</template>

<script>

import VaAccordion from './VaAccordion'
export default {
  components: {
    VaAccordion
  }
}
</script>
