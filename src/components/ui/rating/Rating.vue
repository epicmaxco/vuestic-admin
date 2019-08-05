<template>
  <div class="rating">
    <div class="row">
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
      <div class="flex md6 xs12">
        <va-card :title="$t('rating.small')">
          <va-rating
            size="small"
            color="warning"
            v-model="value"
          />
        </va-card>
      </div>
      <div class="flex md6 xs12">
        <va-card :title="$t('rating.large')">
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
            v-model="value"
          />
        </va-card>
      </div>
      <div class="flex md6 xs12">
        <va-card :title="$t('rating.halves')">
          <va-rating
            color="warning"
            emptyIcon="fa fa-star-o"
            halves
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
      value: 2,
    }
  },
}
</script>
