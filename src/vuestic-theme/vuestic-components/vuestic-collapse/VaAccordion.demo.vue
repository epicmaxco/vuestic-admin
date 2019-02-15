<template>
  <VbDemo>
    <VbContainer style="width: 900px;">
      <va-accordion>
        <va-collapse>
          <span slot="header"> Expand This Block </span>
          <div slot="body">
            <div>
              Expand first content
            </div>
          </div>
        </va-collapse>
        <va-collapse isBackgroundExists>
          <span slot="header">Accordeon with background</span>
          <div slot="body">
            <div>
              Expand three content
            </div>
          </div>
        </va-collapse>
      </va-accordion>
    </VbContainer>
    <VbContainer style="width: 900px;">
      <va-accordion expand>
        <va-collapse>
          <span slot="header"> Expand This Block </span>
          <div slot="body">
            <div>
              Expand first content
            </div>
          </div>
        </va-collapse>
        <va-collapse :value="true">
          <span slot="header"> Let's Go </span>
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
import VaCollapse from './VaCollapse.vue'
import VaAccordion from './VaAccordion.vue'

export default {
  components: { VaCollapse, VaAccordion },
}
</script>
