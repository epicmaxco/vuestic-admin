<template>
  <div class="grid row">
    <div class="flex xs12 md12">
      <va-card title="Fixed Grid">
        <div>
          <div class="row">
            <div class="flex xs12">
              <div
                class="grid__container flex-center"
                :style="computedStyle"
              >
                xs12
              </div>
            </div>
            <div class="flex xs6" v-for="i in 2" :key="`6${i}`">
              <div
                class="grid__container flex-center"
                :style="computedStyle"
              >
                xs6
              </div>
            </div>
            <div class="flex xs4" v-for="i in 3" :key="`4${i}`">
              <div
                class="grid__container flex-center"
                :style="computedStyle"
              >
                xs4
              </div>
            </div>
          </div>
        </div>
      </va-card>
    </div>
    <div class="flex md12 xs12">
      <va-card title="Desktop Grid">
        <div class="row">
          <div class="flex xs6 lg4" v-for="i in 3" :key="`4${i}`">
            <div
              class="grid__container flex-center"
              :style="computedStyle"
            >
              xs4
            </div>
          </div>
        </div>
        <div class="row">
          <div v-for="i in 6" :key="i" class="flex xs4 lg2">
            <div
              class="grid__container flex-center"
              :style="computedStyle"
            >xs2</div>
          </div>
        </div>
        <div class="row">
          <div v-for="i in 12" :key="i" class="flex xs3 lg1">
            <div
              class="grid__container flex-center"
              :style="computedStyle"
            >xs1</div>
          </div>
        </div>
      </va-card>
    </div>

    <div class="flex md12 xs12">
      <va-card title="Mobile and Desktop Grid">
        <div class="row">
          <div class="flex xs12 md4">
            <div
              class="grid__container flex-center"
              :style="computedStyle"
            >xs12 md4</div>
          </div>
        </div>
        <div class="row">
          <div class="flex xs8 md3">
            <div
              class="grid__container flex-center"
              :style="computedStyle"
            >xs8 md3</div>
          </div>
          <div class="flex xs4 md9">
            <div
              class="grid__container flex-center"
              :style="computedStyle"
            >xs4 md9</div>
          </div>
        </div>
        <div class="row">
          <div class="flex xs3 md4">
            <div
              class="grid__container flex-center"
              :style="computedStyle"
            >xs3 md4</div>
          </div>
          <div class="flex xs6 md4">
            <div
              class="grid__container flex-center"
              :style="computedStyle"
            >xs6 md4</div>
          </div>
          <div class="flex xs3 md4">
            <div
              class="grid__container flex-center"
              :style="computedStyle"
            >xs3 md4</div>
          </div>
        </div>
      </va-card>
    </div>

    <div class="flex md12 xs12">
      <va-card title="Offsets">
        <div class="row">
          <div class="flex xs6 md6 offset--md6">
            <div
              class="grid__container flex-center"
              :style="computedStyle"
            >xs6 md6 offset--md6</div>
          </div>
        </div>
        <div class="flex md6 offset--md3">
          <div
            class="grid__container flex-center"
            :style="computedStyle"
          >md6 offset--md3</div>
        </div>
        <div class="row">
          <div class="flex md4">
            <div
              class="grid__container flex-center"
              :style="computedStyle"
            >md4</div>
          </div>
          <div class="flex md4 offset--md4">
            <div
              class="grid__container flex-center"
              :style="computedStyle"
            >md4 offset--md4</div>
          </div>
        </div>
      </va-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'grid',

  computed: {
    computedStyle () {
      return {
        backgroundColor: this.$themes.primary,
      }
    },
  },
}
</script>

<style lang="scss">
.grid {
  &__container {
    min-height: 3rem;
    color: $white;
    border-radius: 0.5rem;

    @include media-breakpoint-down(xs) {
      padding: 0.5rem;
      text-align: center;
      font-size: 0.75rem;
    }
  }
}

</style>
