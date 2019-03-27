<template>
  <div class="cards">
      <div class="cards-container va-row d-flex wrap align--start">
        <!-- eslint-disable vue/valid-v-for -->
        <template v-for="loop in listLoops">
          <div class="flex xs12 sm6" :key="loop">
            <va-card
              :title="$t('cards.title.default')"
            >
              {{ $t('cards.contentTextLong') }}
            </va-card>
          </div>

          <div class="flex xs12 sm6" :key="loop">
            <va-card
              :title="$t('cards.title.withControls')"
            >
              <template slot="actions">
                <va-button icon="fa fa-refresh" />
                <va-button icon="fa fa-gear" />
              </template>
              {{ $t('cards.contentTextLong') }}
            </va-card>
          </div>

          <div class="flex xs12 sm6" :key="loop">
            <va-card>
              <template slot="header">
                <va-icon icon="fa fa-cogs mr-3" color="success" />
                <h5 class="mt-0 mb-0">{{ $t('cards.title.customHeader') }}</h5>
              </template>
              {{ $t('cards.contentTextLong') }}
            </va-card>
          </div>

          <div class="flex xs12 sm6" :key="loop">
            <va-card>
              <p>{{ $t('cards.title.withoutHeader') }}</p>
              {{ $t('cards.contentTextLong') }}
            </va-card>
          </div>

          <div class="flex xs12 sm6 lg4 xl3" :key="loop">
            <va-card
              image="https://picsum.photos/300/200/?image=1043"
              :title="$t('cards.title.withImage')"
            >
              {{ $t('cards.contentText') }}
            </va-card>
          </div>

          <div class="flex xs12 sm6 lg4 xl3" :key="loop">
            <va-card
              overlay
              titleOnImage
              image="https://picsum.photos/300/200/?image=898"
              :title="$t('cards.title.withTitleOnImage')"
            >
              {{ $t('cards.contentText') }}
            </va-card>
          </div>

          <div class="flex xs12 sm6 lg4 xl3" :key="loop">
            <va-card
              overlay
              titleOnImage
              image="https://picsum.photos/300/200/?image=898"
              :title="$t('cards.title.withCustomTitleOnImage')"
            >
              <va-button slot="header">
                Read More
              </va-button>
            </va-card>
          </div>

          <div class="flex xs12 sm6 lg4 xl3" :key="loop">
            <va-card
              stripe="danger"
              :title="$t('cards.title.withStripe')"
            >
              {{ $t('cards.contentTextLong') }}
            </va-card>
          </div>

          <div class="flex xs12 sm6 lg4 xl3" :key="loop">
            <va-card
              color="success"
            >
              {{ $t('cards.contentTextLong') }}
            </va-card>
          </div>

          <div class="flex xs12 sm6 lg4 xl3" :key="loop">
            <va-card
              color="danger"
            >
              {{ $t('cards.contentTextLong') }}
            </va-card>
          </div>

          <div class="flex xs12 sm6 lg4 xl3" :key="loop">
            <va-card
              stripe="info"
              :title="$t('cards.title.withStripe')"
            >
              {{ $t('cards.contentTextLong') }}
            </va-card>
          </div>

          <div class="flex xs12 sm6 lg4 xl3" :key="loop">
            <va-card
              overlay
              titleOnImage
              image="https://picsum.photos/300/200/?image=1067"
              :title="$t('cards.title.withTitleOnImage')"
            >
              {{ $t('cards.contentText') }}
            </va-card>
          </div>
        </template>
      </div>

      <div class="pre-loader-container flex-center my-5">
        <vuestic-pre-loader
          v-show="isShown"
          class="pre-loader"/>
        <div v-if="!isShown">
          <va-button @click="addCards()">
            Show More
          </va-button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'cards',
  data () {
    return {
      listLoops: 1,
      isShown: false,
    }
  },
  methods: {
    addCards () {
      this.isShown = true
      setTimeout(() => {
        this.isShown = false
        ++this.listLoops
      }, 1000)
    },
  },
}
</script>

<style lang="scss">
.cards-container {
  .va-card {
    margin: 0;
  }
}
</style>
