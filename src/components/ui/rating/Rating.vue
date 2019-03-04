<template>
  <div class="rating">
    <div class="va-row">
      <div class="flex md6 xs12">
        <vuestic-widget :headerText="$t('rating.singleIcon')">
          <va-rating
            v-model="value"
            icon="fa fa-bug"
            color="red"
          />
        </vuestic-widget>
      </div>
      <div class="flex md6 xs12">
        <vuestic-widget :headerText="$t('rating.twoIcons')">
          <va-rating
            v-model="value"
            icon="fa fa-bell-slash"
            emptyIcon="fa fa-bell"
          />
        </vuestic-widget>
      </div>
    </div>
    <div class="va-row">
      <div class="flex md6 xs12">
        <vuestic-widget :headerText="$t('rating.size')">
          <va-rating
            v-model="value"
            size="large"
            color="#2c82e0"
          />
        </vuestic-widget>
      </div>
      <div class="flex md6 xs12">
        <vuestic-widget :headerText="$t('rating.numbers')">
          <va-rating
            numbers
            size="large"
            v-model="value"
          />
        </vuestic-widget>
      </div>
    </div>
    <div class="va-row">
      <div class="flex md6 xs12">
        <vuestic-widget :headerText="$t('rating.halves')">
          <va-rating
            size="large"
            color="#ffc200"
            emptyIcon="fa fa-star-o"
            halfIcon="fa fa-star-half-full"
            v-model="value"
          />
        </vuestic-widget>
      </div>
      <div class="flex md6 xs12">
        <vuestic-widget :headerText="$t('rating.mini')">
          <va-rating
            size="small"
            color="#ffc200"
            v-model="value"
          />
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rating',
  data () {
    return {
      value: 2
    }
  }
}
</script>
