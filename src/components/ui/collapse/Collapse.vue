<template>
  <div class="row">
    <div class="col-md-12">
      <vuestic-widget :headerText="$t('collapse.accordion')">
        <vuestic-accordion>
          <vuestic-collapse>
            <button class="btn btn-primary" slot="header">
              <span> Expand This Block </span>
            </button>
            <div slot="body">
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
          <vuestic-collapse>
            <button class="btn btn-primary" slot="header">
              <span> Another Block </span>
            </button>
            <div slot="body">
              <div class="row">
                <div class="col-md-6">
                  <div class="collapse-content">
                    <h4>April 2018</h4>
                    <div>
                      The unique stripes of zebras make them one of the animals
                      most familiar to people. They occur in a variety of habitats,
                      such as grasslands, savannas, woodlands, thorny scrublands.
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="collapse-content">
                    <h4>May 2018</h4>
                    <div>
                      They occur in a variety of habitats,
                      such as grasslands, savannas, woodlands, thorny scrublands.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </vuestic-collapse>
          <vuestic-collapse>
            <button class="btn btn-primary" slot="header">
              <span> Let's Go </span>
            </button>
            <div slot="body">
              <div class="row">
                <div class="col-md-6">
                  <div class="collapse-content">
                    <h4>June 2018</h4>
                    <div>
                      The unique stripes of zebras make them one of the animals
                      most familiar to people. They occur in a variety of habitats,
                      such as grasslands, savannas, woodlands, thorny scrublands.
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="collapse-content">
                    <h4>July 2018</h4>
                    <div>
                      They occur in a variety of habitats,
                      such as grasslands, savannas, woodlands, thorny scrublands.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </vuestic-collapse>
        </vuestic-accordion>
      </vuestic-widget>
    </div>
    <div class="col-md-12">
      <vuestic-widget :headerText="$t('collapse.buttons')">
        <div class="row">
          <div class="col-md-12">
            <vuestic-collapse>
              <div class="row" slot="header">
                <div class="col-md-4">
                  <button class="btn btn-primary">
                    <span> Expand Button </span>
                  </button>
                </div>
              </div>
              <div slot="body">
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
          </div>
        </div>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
import VuesticCollapse from '../../../vuestic-theme/vuestic-components/vuestic-collapse/VuesticCollapse'
import VuesticAccordion from '../../../vuestic-theme/vuestic-components/vuestic-collapse/VuesticAccordion'

export default {
  name: 'cards',
  components: { VuesticCollapse, VuesticAccordion }
}
</script>

<style lang="scss">
  .collapse-content {
    padding: 25px 10px;
  }
</style>
