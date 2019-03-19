<template>
  <div class="cards">
    <div class="flex md12">
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

          <div class="flex xs12 sm6 lg4 xl3" :key="loop">
            <va-card
              title-on-image
              overlay
              image="https://picsum.photos/300/200/?image=1043"
              :title="$t('cards.title.overlayAndTextOnImage')"
            >
              {{ $t('cards.contentText') }}
              <div class="pt-3">
                <va-button flat color="gray" href="#">
                  {{ $t('cards.link.secondaryAction') }}
                </va-button>
              </div>
            </va-card>
          </div>

          <div class="flex xs12 sm6 lg4 xl3" :key="loop">
            <va-card
              image="https://picsum.photos/300/200/?image=898"
              :title="$t('cards.title.normal')"
            >
              {{ $t('cards.contentText') }}
              <div class="pt-3">
                <va-button flat href="#">
                  {{ $t('cards.link.readFull') }}
                </va-button>
              </div>
            </va-card>
          </div>

          <div class="flex xs12 sm6 lg4 xl3" :key="loop">
            <va-card
              image="https://picsum.photos/300/200/?image=1052"
              title-on-image
              :title="$t('cards.title.titleOnImageNoOverlay')"
            >
              {{ $t('cards.contentText') }}
            </va-card>
          </div>

          <div class="flex xs12 sm6 lg4 xl3" :key="loop">
            <va-card
              image="https://picsum.photos/300/200/?image=1067"
            >
              Short one
              <div class="mt-2">
                <va-button flat href="#">
                  {{ $t('cards.link.action1') }}
                </va-button>
                <va-button color="gray" flat href="#">
                  {{ $t('cards.link.action2') }}
                </va-button>
              </div>
            </va-card>
          </div>

          <div class="flex xs12 sm6 lg4 xl3" :key="loop">
            <va-card
              stripe="warning"
              image="https://picsum.photos/300/200/?image=1058"
            >
              <div>
                <va-button flat href="#">
                  {{ $t('cards.link.edit') }}
                </va-button>
                <va-button flat href="#">
                  {{ $t('cards.link.setAsDefault') }}
                </va-button>
                <va-button flat href="#">
                  {{ $t('cards.link.delete') }}
                </va-button>
              </div>
            </va-card>
          </div>

          <div class="flex xs12 sm6 lg4 xl3" :key="loop">
            <va-card
              theme="bright"
              :title="$t('cards.title.bright')"
            >
              {{ $t('cards.contentText') }}
              <p class="pt-3 mb-0">
                <va-button color="dark" flat href="#">
                  {{ $t('cards.link.edit') }}
                </va-button>
                <va-button color="dark" flat href="#">
                  {{ $t('cards.link.setAsDefault') }}
                </va-button>
                <va-button color="dark" flat href="#">
                  {{ $t('cards.link.delete') }}
                </va-button>
              </p>
            </va-card>
          </div>

          <div class="flex xs12 sm6 lg4 xl3" :key="loop">
            <va-card
              image="https://picsum.photos/300/200/?image=997"
            >
              {{ $t('cards.contentText') }}
              <p class="pt-3 mb-0">
                <va-button>
                  {{ $t('cards.button.main') }}
                </va-button>
                <va-button flat href="#">
                  {{ $t('cards.button.cancel') }}
                </va-button>
              </p>
            </va-card>
          </div>

          <div class="flex xs12 sm6 lg4 xl3" :key="loop">
            <va-card
              stripe="success"
              :title="$t('cards.title.stripeNoImage')"
            >
              {{ $t('cards.contentText') }}
            </va-card>
          </div>

          <div class="flex xs12 sm6 lg4 xl3" :key="loop">
            <va-card
              image="https://picsum.photos/300/200/?image=1013"
              theme="dark"
              :title="$t('cards.title.dark')"
            >
              {{ $t('cards.contentText') }}
              <div class="pt-3">
                <va-button flat href="#">
                  {{ $t('cards.link.edit') }}
                </va-button>
                <va-button flat href="#">
                  {{ $t('cards.link.setAsDefault') }}
                </va-button>
                <va-button flat href="#">
                  {{ $t('cards.link.delete') }}
                </va-button>
              </div>
            </va-card>
          </div>

          <div class="flex xs12 sm6 lg4 xl3" :key="loop">
            <va-card
              image="https://picsum.photos/300/200/?image=885"
            >
              <div class="flex">
                <p>{{ $t('cards.contentText') }}</p>
                <va-button icon="ion-md-cloud-outline ion"/>
              </div>
            </va-card>
          </div>

          <div class="flex xs12 sm6 lg4 xl3" :key="loop">
            <va-card
              image="https://picsum.photos/300/200/?image=1003"
            >
              <p>{{ $t('cards.contentText') }}</p>
              <div class="card-separator"/>
              <div>
                <va-button flat href="#">
                  {{ $t('cards.link.traveling') }}
                </va-button>
                /
                <va-button flat href="#">
                  {{ $t('cards.link.france') }}
                </va-button>
              </div>
            </va-card>
          </div>

          <div class="flex xs12 sm6 lg4 xl3" :key="loop">
            <va-card
              theme="dark"
              :title="$t('cards.title.dark')"
            >
              {{ $t('cards.contentText') }}
              <div class="pt-3">
                <va-button flat href="#">
                  {{ $t('cards.link.review') }}
                </va-button>
                <va-button flat href="#">
                  {{ $t('cards.link.feedback') }}
                </va-button>
              </div>
            </va-card>
          </div>
        </template>
      </div>
    </div>

    <div class="flex md12">
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
