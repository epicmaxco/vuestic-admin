<template>
  <div class="not-found-pages row">
    <div class="col-md-12">
      <div class="row">
        <vuestic-card
          class="not-found-pages__cards"
          image="https://i.imgur.com/GzUR0Wz.png">
          {{ 'Advanced layout' }}
          <div class="not-found-pages__button-container  pt-3 mb-0">
            <router-link
              :to="{ name: 'not-found-advanced' }"
              target="_blank"
            >
              <button class="btn btn-primary btn-sm not-found-pages__advanced-button">
                {{ 'View Example' }}
              </button>
            </router-link>
          </div>
        </vuestic-card>
        <vuestic-card
          class="not-found-pages__cards"
          image="https://i.imgur.com/HttcXPi.png">
          {{ 'Simple' }}
          <div class="not-found-pages__button-container pt-3 mb-0">
            <router-link
              :to="{ name: 'not-found-simple' }"
              target="_blank"
            >
              <button class="btn btn-primary btn-sm not-found-pages__advanced-button">
                {{ 'View Example' }}
              </button>
            </router-link>
          </div>
        </vuestic-card>
        <vuestic-card
          class="not-found-pages__cards"
          image="https://i.imgur.com/dlcZMiG.png">
          {{ 'Custom image' }}
          <div class="not-found-pages__button-container pt-3 mb-0">
            <router-link
              :to="{ name: 'not-found-custom' }"
              target="_blank"
            >
              <button class="btn btn-primary btn-sm not-found-pages__advanced-button">
                {{ 'View Example' }}
              </button>
            </router-link>
          </div>
        </vuestic-card>
        <vuestic-card
          class="not-found-pages__cards"
          image="https://i.imgur.com/qcOlDz7.png">
          {{ 'Large text heading' }}
          <div class="not-found-pages__button-container pt-3 mb-0">
            <router-link
              :to="{ name: 'not-found-large-text' }"
              target="_blank"
            >
              <button class="btn btn-primary btn-sm not-found-pages__advanced-button">
                {{ 'View Example' }}
              </button>
            </router-link>
          </div>
        </vuestic-card>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'not-found-pages'
}
</script>

<style lang="scss">
.not-found-pages {
  $cardGutter: #{(19/16)}rem;
  .vuestic-card.not-found-pages__cards {
    min-width: 220px;
    text-align: center;
    margin: 0 $cardGutter calc(#{$cardGutter} * 2) $cardGutter;
  }
  &__button-container {
    .btn.not-found-pages__advanced-button {
      font-size: $font-size-root;
      font-weight: $font-weight-bold;
      padding-left: 0;
      padding-right: 0;
      width: 180px;
    }
    text-align: center;
  }
}
</style>
