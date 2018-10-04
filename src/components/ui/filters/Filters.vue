<template>
  <div class="filters-page">
    <vuestic-widget>
      <div class="row">
        <div class="col-md-12">
          <vuestic-collapse noHeader>
            <span slot="header">
              Show filters
            </span>
            <div slot="body">
              Inputs here
            </div>
          </vuestic-collapse>
        </div>
      </div>
    </vuestic-widget>

    <vuestic-widget>
      <div class="filters-page__tags">
        <vuestic-tag
          v-if="carMaker"
          :name="`Car maker: ${ carMaker }`"
          removable
          @remove="carMaker = undefined"
        />
        <vuestic-tag
          v-if="user"
          :name="`Car maker: ${ user }`"
          removable
          @remove="user = undefined"
        />
      </div>
    </vuestic-widget>
  </div>
</template>

<script>
export default {
  name: 'filters',
  data () {
    return {
      carMaker: 'o',
      user: 'Nancy',
    }
  },
}
</script>

<style lang="scss">
.filters-page {
  &__tags {
    display: flex;
  }
}
</style>
