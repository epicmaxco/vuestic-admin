<template>
  <VbDemo>
    <VbCard>
      <va-accordion style="width: 400px;">
        <va-collapse>
          <span slot="header">One collapse</span>
          <div slot="body">
            <div>
              Expand first content
            </div>
          </div>
        </va-collapse>
        <va-collapse>
          <span slot="header">Two collapse</span>
          <div slot="body">
            <div>
              Expand three content
            </div>
          </div>
        </va-collapse>
        <va-collapse>
          <span slot="header">Three collapse</span>
          <div slot="body">
            <div>
              Expand three content
            </div>
          </div>
        </va-collapse>
      </va-accordion>
    </VbCard>
  </VbDemo>
</template>

<script>

import VaAccordion from './VaAccordion'
import VaCollapse from './VaCollapse'

export default {
  components: {
    VaAccordion,
    VaCollapse,
  },
}
</script>
