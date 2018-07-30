<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 900px;">
      <div class="row">
        <div class="col-lg-12">
          <vuestic-collapse>
            <div slot="collapse-header">
              Let's Go
            </div>
            <div slot="collapse-body">
              <div>
                Expand three content
              </div>
            </div>
          </vuestic-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VuesticCollapse from './VuesticCollapse.vue'
  import VuesticAccordeon from './VuesticAccordion.vue'

  export default {
    components: { VuesticCollapse, VuesticAccordeon },
  }
</script>
