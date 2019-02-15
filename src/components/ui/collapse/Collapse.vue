<template>
  <div class="collapse-page">
      <vuestic-widget :headerText="$t('collapse.accordion')">
        <va-accordion>
          <va-collapse>
            <span slot="header"> Expand This Block </span>
            <div slot="body">
              <div class="va-row">
                <div class="flex md6">
                  <p class="collapse-page__title">February 2018</p>
                  <div>
                    The unique stripes of zebras make them one of the animals
                    most familiar to people. They occur in a variety of
                    habitats,
                    such as grasslands, savannas, woodlands, thorny
                    scrublands.
                  </div>
                </div>
                <div class="flex md6">
                  <p class="collapse-page__title">March 2018</p>
                  <div>
                    They occur in a variety of habitats,
                    such as grasslands, savannas, woodlands, thorny
                    scrublands.
                  </div>
                </div>
              </div>
            </div>
          </va-collapse>
          <va-collapse>
            <span slot="header"> Another Block </span>
            <div slot="body">
              <div class="va-row">
                <div class="flex md6">
                  <p class="collapse-page__title">April 2018</p>
                  <div>
                    The unique stripes of zebras make them one of the animals
                    most familiar to people. They occur in a variety of
                    habitats,
                    such as grasslands, savannas, woodlands, thorny
                    scrublands.
                  </div>
                </div>
                <div class="flex md6">
                  <p class="collapse-page__title">May 2018</p>
                  <div>
                    They occur in a variety of habitats,
                    such as grasslands, savannas, woodlands, thorny
                    scrublands.
                  </div>
                </div>
              </div>
            </div>
          </va-collapse>
          <va-collapse>
            <span slot="header"> Let's Go </span>
            <div slot="body">
              <div class="va-row">
                <div class="flex md6">
                  <p class="collapse-page__title">June 2018</p>
                  <div>
                    The unique stripes of zebras make them one of the animals
                    most familiar to people. They occur in a variety of
                    habitats,
                    such as grasslands, savannas, woodlands, thorny
                    scrublands.
                  </div>
                </div>
                <div class="flex md6">
                  <p class="collapse-page__title">July 2018</p>
                  <div>
                    They occur in a variety of habitats,
                    such as grasslands, savannas, woodlands, thorny
                    scrublands.
                  </div>
                </div>
              </div>
            </div>
          </va-collapse>
        </va-accordion>
      </vuestic-widget>
    <vuestic-widget :headerText="$t('collapse.accordionWithBackground')">
      <va-accordion>
        <va-collapse isBackgroundExists>
          <span slot="header"> Expand This Block </span>
          <div slot="body">
            <div class="va-row">
              <div class="flex md6">
                <p class="collapse-page__title">February 2018</p>
                <div>
                  The unique stripes of zebras make them one of the animals
                  most familiar to people. They occur in a variety of
                  habitats,
                  such as grasslands, savannas, woodlands, thorny
                  scrublands.
                </div>
              </div>
              <div class="flex md6">
                <p class="collapse-page__title">March 2018</p>
                <div>
                  They occur in a variety of habitats,
                  such as grasslands, savannas, woodlands, thorny
                  scrublands.
                </div>
              </div>
            </div>
          </div>
        </va-collapse>
        <va-collapse isBackgroundExists>
          <span slot="header"> Another Block </span>
          <div slot="body">
            <div class="va-row">
              <div class="flex md6">
                <p class="collapse-page__title">April 2018</p>
                <div>
                  The unique stripes of zebras make them one of the animals
                  most familiar to people. They occur in a variety of
                  habitats,
                  such as grasslands, savannas, woodlands, thorny
                  scrublands.
                </div>
              </div>
              <div class="flex md6">
                <p class="collapse-page__title">May 2018</p>
                <div>
                  They occur in a variety of habitats,
                  such as grasslands, savannas, woodlands, thorny
                  scrublands.
                </div>
              </div>
            </div>
          </div>
        </va-collapse>
        <va-collapse isBackgroundExists>
          <span slot="header"> Let's Go </span>
          <div slot="body">
            <div class="va-row">
              <div class="flex md6">
                <p class="collapse-page__title">June 2018</p>
                <div>
                  The unique stripes of zebras make them one of the animals
                  most familiar to people. They occur in a variety of
                  habitats,
                  such as grasslands, savannas, woodlands, thorny
                  scrublands.
                </div>
              </div>
              <div class="flex md6">
                <p class="collapse-page__title">July 2018</p>
                <div>
                  They occur in a variety of habitats,
                  such as grasslands, savannas, woodlands, thorny
                  scrublands.
                </div>
              </div>
            </div>
          </div>
        </va-collapse>
      </va-accordion>
    </vuestic-widget>
  </div>
</template>

<script>
export default {
  name: 'collapse'
}
</script>

<style lang="scss">
.collapse-page {
  &__title {
    font-size: 1.375rem;
    font-weight: bold;
  }
  &__description {

  }
}
</style>
