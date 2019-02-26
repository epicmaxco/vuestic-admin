<template>
  <div class="collapses">
    <div class="flex md12">
      <vuestic-widget :headerText="$t('collapse.accordion')">
        <vuestic-accordion>
          <vuestic-collapse>
            <span slot="header"> Expand This Block </span>
            <div slot="body">
              <div class="va-row">
                <div class="flex md6">
                  <div class="pa-4">
                    <h4 class="display-3 text--bold">February 2018</h4>
                    <div>
                      The unique stripes of zebras make them one of the animals
                      most familiar to people. They occur in a variety of
                      habitats,
                      such as grasslands, savannas, woodlands, thorny
                      scrublands.
                    </div>
                  </div>
                </div>
                <div class="flex md6">
                  <div>
                    <h4 class="display-3 text--bold">March 2018</h4>
                    <div>
                      They occur in a variety of habitats,
                      such as grasslands, savannas, woodlands, thorny
                      scrublands.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </vuestic-collapse>
          <vuestic-collapse>
            <span slot="header"> Another Block </span>
            <div slot="body">
              <div class="va-row">
                <div class="flex md6">
                  <div class="pa-4">
                    <h4 class="display-3 text--bold">April 2018</h4>
                    <div>
                      The unique stripes of zebras make them one of the animals
                      most familiar to people. They occur in a variety of
                      habitats,
                      such as grasslands, savannas, woodlands, thorny
                      scrublands.
                    </div>
                  </div>
                </div>
                <div class="flex md6">
                  <div>
                    <h4 class="display-3 text--bold">May 2018</h4>
                    <div>
                      They occur in a variety of habitats,
                      such as grasslands, savannas, woodlands, thorny
                      scrublands.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </vuestic-collapse>
          <vuestic-collapse>
            <span slot="header"> Let's Go </span>
            <div slot="body">
              <div class="va-row">
                <div class="flex md6">
                  <div>
                    <h4 class="display-3 text--bold">June 2018</h4>
                    <div>
                      The unique stripes of zebras make them one of the animals
                      most familiar to people. They occur in a variety of
                      habitats,
                      such as grasslands, savannas, woodlands, thorny
                      scrublands.
                    </div>
                  </div>
                </div>
                <div class="flex md6">
                  <div>
                    <h4 class="display-3 text--bold">July 2018</h4>
                    <div>
                      They occur in a variety of habitats,
                      such as grasslands, savannas, woodlands, thorny
                      scrublands.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </vuestic-collapse>
        </vuestic-accordion>
      </vuestic-widget>
    </div>
    <div class="flex md12">
      <vuestic-widget :headerText="$t('collapse.buttons')">
        <div class="va-row">
          <div class="flex md12">
            <vuestic-collapse noHeader>
              <div class="va-row" slot="header">
                <div class="flex md4">
                  <va-button>
                    <span> Expand Button </span>
                  </va-button>
                </div>
              </div>
              <div slot="body">
                <div class="va-row">
                  <div class="flex md6">
                    <div>
                      <h4 class="display-3 text--bold">February
                        2018</h4>
                      <div>
                        The unique stripes of zebras make them one of the
                        animals
                        most familiar to people. They occur in a variety of
                        habitats,
                        such as grasslands, savannas, woodlands, thorny
                        scrublands.
                      </div>
                    </div>
                  </div>
                  <div class="flex md6">
                    <div>
                      <h4 class="display-3 text--bold">March 2018</h4>
                      <div>
                        They occur in a variety of habitats,
                        such as grasslands, savannas, woodlands, thorny
                        scrublands.
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
export default {
  name: 'collapse'
}
</script>
