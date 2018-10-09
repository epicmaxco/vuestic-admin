<template>
  <div class="collapse-page row">
      <div class="col-12">
        <vuestic-widget :headerText="$t('collapse.accordion')">
          <vuestic-accordion>
            <vuestic-collapse>
              <span slot="header"> Expand This Block </span>
              <div slot="body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="collapse-page__content">
                      <h4 class="collapse-page__content__title">February 2018</h4>
                      <div>
                        The unique stripes of zebras make them one of the animals
                        most familiar to people. They occur in a variety of habitats,
                        such as grasslands, savannas, woodlands, thorny scrublands.
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="collapse-page__content">
                      <h4 class="collapse-page__content__title">March 2018</h4>
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
              <span slot="header"> Another Block </span>
              <div slot="body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="collapse-page__content">
                      <h4 class="collapse-page__content__title">April 2018</h4>
                      <div>
                        The unique stripes of zebras make them one of the animals
                        most familiar to people. They occur in a variety of habitats,
                        such as grasslands, savannas, woodlands, thorny scrublands.
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="collapse-page__content">
                      <h4 class="collapse-page__content__title">May 2018</h4>
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
              <span slot="header"> Let's Go </span>
              <div slot="body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="collapse-page__content">
                      <h4 class="collapse-page__content__title">June 2018</h4>
                      <div>
                        The unique stripes of zebras make them one of the animals
                        most familiar to people. They occur in a variety of habitats,
                        such as grasslands, savannas, woodlands, thorny scrublands.
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="collapse-page__content">
                      <h4 class="collapse-page__content__title">July 2018</h4>
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
              <vuestic-collapse noHeader>
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
                      <div class="collapse-page__content">
                        <h4 class="collapse-page__content__title">February 2018</h4>
                        <div>
                          The unique stripes of zebras make them one of the animals
                          most familiar to people. They occur in a variety of habitats,
                          such as grasslands, savannas, woodlands, thorny scrublands.
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="collapse-page__content">
                        <h4 class="collapse-page__content__title">March 2018</h4>
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
export default {
  name: 'collapse',
}
</script>

<style lang="scss">
.collapse-page {
  &__content {
    padding: 2rem;
    &__title {
      font-size: 1.375rem;
      font-weight: bold;
    }
    &__description {

    }
  }
}
</style>
