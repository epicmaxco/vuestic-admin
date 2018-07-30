<template>
  <div class="row">
    <div class="col-md-12">
      <vuestic-widget :headerText="$t('collapse.accordion')">
        <vuestic-accordion>
          <vuestic-collapse :selected="true">
            <div slot="collapse-header">
              Expand This Block
            </div>
            <div slot="collapse-body">
              <div class="row">
                <div class="col-md-6">
                  <div class="collapse-content">
                    <h4>February 2018</h4>
                    <div>
                      The unique stripes of zebras make them one of the animals
                      most familiar to people. They occur in a variety of habitats,
                      such as grasslands, savannas, woodlands, thorny scrublands.
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="collapse-content">
                    <h4>March 2018</h4>
                    <div>
                      They occur in a variety of habitats,
                      such as grasslands, savannas, woodlands, thorny scrublands.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </vuestic-collapse>
          <vuestic-collapse :selected="true">
            <div slot="collapse-header">
              Another Block
            </div>
            <div slot="collapse-body">
              <div class="row">
                <div class="col-md-6">
                  <div class="collapse-content">
                    <h4>February 2018</h4>
                    <div>
                      The unique stripes of zebras make them one of the animals
                      most familiar to people. They occur in a variety of habitats,
                      such as grasslands, savannas, woodlands, thorny scrublands.
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="collapse-content">
                    <h4>March 2018</h4>
                    <div>
                      They occur in a variety of habitats,
                      such as grasslands, savannas, woodlands, thorny scrublands.
                    </div>
                  </div>
                </div>
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
      </vuestic-widget>
    </div>
    <div class="col-md-12">
      <vuestic-widget :headerText="$t('collapse.buttons')">
        <vuestic-multi-collapse :tabs="tabs"/>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
  import VuesticCollapse from '../../../vuestic-theme/vuestic-components/vuestic-collapse/VuesticCollapse'
  import VuesticMultiCollapse from '../../../vuestic-theme/vuestic-components/vuestic-collapse/VuesticMultiCollapse'
  import VuesticAccordion from '../../../vuestic-theme/vuestic-components/vuestic-collapse/VuesticAccordion'

  export default {
    name: 'cards',
    components: { VuesticCollapse, VuesticMultiCollapse, VuesticAccordion },
    data () {
      return {
        tabs: [
          {
            name: 'Expand One',
            description: 'Expand Description One'
          },
          {
            name: 'Expand Two',
            description: 'Expand Description Two'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .collapse-content {
    padding: 25px 5px;
  }
</style>
