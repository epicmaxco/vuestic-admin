<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 900px;">
      <vuestic-accordion>
        <vuestic-collapse>
          <span slot="header"> Expand This Block </span>
          <div slot="body">
            <div style="padding: 10px;">
              Expand first content
            </div>
          </div>
        </vuestic-collapse>
        <vuestic-collapse>
          <span slot="header"> Another Block </span>
          <div slot="body">
            <div style="padding: 10px;">
              Expand second content
            </div>
          </div>
        </vuestic-collapse>
        <vuestic-collapse>
          <span slot="header"> Let's Go </span>
          <div slot="body">
            <div style="padding: 10px;">
              Expand three content
            </div>
          </div>
        </vuestic-collapse>
      </vuestic-accordion>
    </div>
    <div class="demo-container__item" style="width: 900px;">
      <vuestic-accordion expand>
        <vuestic-collapse>
          <span slot="header"> Expand This Block </span>
          <div slot="body">
            <div style="padding: 10px;">
              Expand first content
            </div>
          </div>
        </vuestic-collapse>
        <vuestic-collapse>
          <span slot="header"> Another Block </span>
          <div slot="body">
            <div style="padding: 10px;">
              Expand second content
            </div>
          </div>
        </vuestic-collapse>
        <vuestic-collapse>
          <span slot="header"> Let's Go </span>
          <div slot="body">
            <div style="padding: 10px;">
              Expand three content
            </div>
          </div>
        </vuestic-collapse>
      </vuestic-accordion>
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
