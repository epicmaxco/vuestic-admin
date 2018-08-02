<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 900px;">
      <div class="row">
        <div class="col-lg-12">
          <vuestic-collapse>
            <div slot="header">
              <button class="btn btn-primary">
                <span> First Button </span>
              </button>
              <button class="btn btn-primary">
                <span> Second Button </span>
              </button>
            </div>
            <div slot="body">
              <div> Expand three content </div>
              <div> Expand three content </div>
              <div> Expand three content </div>
              <div> Expand three content </div>
              <div> Expand three content </div>
              <div> Expand three content </div>
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
