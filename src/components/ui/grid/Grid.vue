<template>
  <div class="grid va-row">
    <div class="flex xs12 md12">
      <va-card title="Fixed Grid">
        <div>
          <div class="va-row">
            <div class="flex xs12">
              <div class="grid__container flex-center">
                xs12
              </div>
            </div>
            <div class="flex xs6" v-for="i in 2" :key="`6${i}`">
              <div class="grid__container flex-center">
                xs6
              </div>
            </div>
            <div class="flex xs4" v-for="i in 3" :key="`4${i}`">
              <div class="grid__container flex-center">
                xs4
              </div>
            </div>
          </div>
        </div>
      </va-card>
    </div>
    <div class="flex md12 xs12">
      <va-card title="Desktop Grid">
        <div class="va-row">
          <div class="flex xs4" v-for="i in 3" :key="`4${i}`">
            <div class="grid__container flex-center">
              xs4
            </div>
          </div>
        </div>
        <div class="va-row">
          <div v-for="i in 6" :key="i" class="flex xs2">
            <div class="grid__container flex-center">xs2</div>
          </div>
        </div>
        <div class="va-row">
          <div v-for="i in 12" :key="i" class="flex xs1">
            <div class="grid__container flex-center">xs1</div>
          </div>
        </div>
      </va-card>
    </div>

    <div class="flex md12 xs12">
      <va-card title="Mobile and Desktop Grid">
        <div class="va-row">
          <div class="flex xs12 md4">
            <div class="grid__container flex-center">xs12 md4</div>
          </div>
        </div>
        <div class="va-row">
          <div class="flex xs8 md3">
            <div class="grid__container flex-center">xs8 md3</div>
          </div>
          <div class="flex xs4 md9">
            <div class="grid__container flex-center">xs4 md9</div>
          </div>
        </div>
        <div class="va-row">
          <div class="flex xs2 md4">
            <div class="grid__container flex-center">xs2 md4</div>
          </div>
          <div class="flex xs8 md4">
            <div class="grid__container flex-center">xs8 md4</div>
          </div>
          <div class="flex xs2 md4">
            <div class="grid__container flex-center">xs2 md4</div>
          </div>
        </div>
      </va-card>
    </div>

    <div class="flex md12 xs12">
      <va-card title="Offsets">
        <div class="va-row">
          <div class="flex xs6 md6 offset--md6">
            <div class="grid__container flex-center">xs6 md6 offset--md6</div>
          </div>
        </div>
        <div class="flex md6 offset--md3">
          <div class="grid__container flex-center">md6 offset--md3</div>
        </div>
        <div class="va-row">
          <div class="flex md4">
            <div class="grid__container flex-center">md4</div>
          </div>
          <div class="flex md4 offset--md4">
            <div class="grid__container flex-center">md4 offset--md4</div>
          </div>
        </div>
      </va-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'grid',
}
</script>

<style lang="scss">
.grid {
  &__container {
    min-height: 3rem;
    color: $white;
    background-color: $brand-primary;
    border-radius: 0.5rem;
  }
}

</style>
