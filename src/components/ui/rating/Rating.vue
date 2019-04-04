<template>
  <div class="rating">
    <div class="va-row">
      <div class="flex md6 xs12">
        <va-card :title="$t('rating.singleIcon')">
          <va-rating
            color="danger"
            v-model="value"
            icon="fa fa-bug"
          />
        </va-card>
      </div>
      <div class="flex md6 xs12">
        <va-card :title="$t('rating.twoIcons')">
          <va-rating
            v-model="value"
            icon="fa fa-bell-slash"
            emptyIcon="fa fa-bell"
          />
        </va-card>
      </div>
    </div>
    <div class="va-row">
      <div class="flex md6 xs12">
        <va-card :title="$t('rating.size')">
          <va-rating
            v-model="value"
            size="large"
            color="info"
          />
        </va-card>
      </div>
      <div class="flex md6 xs12">
        <va-card :title="$t('rating.numbers')">
          <va-rating
            numbers
            size="large"
            v-model="value"
          />
        </va-card>
      </div>
    </div>
    <div class="va-row">
      <div class="flex md6 xs12">
        <va-card :title="$t('rating.halves')">
          <va-rating
            size="large"
            color="warning"
            emptyIcon="fa fa-star-o"
            half-increment
            v-model="value"
          />
        </va-card>
      </div>
      <div class="flex md6 xs12">
        <va-card :title="$t('rating.mini')">
          <va-rating
            size="small"
            color="warning"
            v-model="value"
          />
        </va-card>
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
