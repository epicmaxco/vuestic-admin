<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 900px;">
      <div class="row">
        <div class="col-lg-12">
          <vuestic-accordion>
            <vuestic-collapse :selected="true">
              <div slot="collapse-header">
                Expand This Block
              </div>
              <div slot="collapse-body">
                <div>
                  Expand first content
                </div>
              </div>
            </vuestic-collapse>
            <vuestic-collapse :selected="true">
              <div slot="collapse-header">
                Another Block
              </div>
              <div slot="collapse-body">
                <div>
                  Expand second content
                </div>
              </div>
            </vuestic-collapse>
            <vuestic-collapse :selected="true">
              <div slot="collapse-header">
                Let's Go
              </div>
              <div slot="collapse-body">
                <div>
                  Expand three content
                </div>
              </div>
            </vuestic-collapse>
          </vuestic-accordion>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VuesticCollapse from './VuesticCollapse.vue'
  import VuesticAccordion from './VuesticAccordion.vue'

  export default {
    components: { VuesticCollapse, VuesticAccordion },
  }
</script>
