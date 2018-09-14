<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 900px;">
      <div class="row">
        <div class="col-lg-12">
          <vuestic-accordion>
            <vuestic-collapse>
              <button class="btn btn-primary" slot="header">
                <span> Expand This Block </span>
              </button>
              <div slot="body">
                <div style="padding: 10px;">
                  Expand first content
                </div>
              </div>
            </vuestic-collapse>
            <vuestic-collapse>
              <button class="btn btn-primary" slot="header">
                <span> Another Block </span>
              </button>
              <div slot="body">
                <div style="padding: 10px;">
                  Expand second content
                </div>
              </div>
            </vuestic-collapse>
            <vuestic-collapse>
              <button class="btn btn-primary" slot="header">
                <span> Let's Go </span>
              </button>
              <div slot="body">
                <div style="padding: 10px;">
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
