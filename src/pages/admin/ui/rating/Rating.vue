<template>
  <div class="rating">
    <div class="row">
      <div class="flex md6 xs12">
        <va-card>
          <va-card-title>{{ $t('rating.singleIcon') }}</va-card-title>
          <va-card-content>
            <va-rating
              color="danger"
              v-model="value"
            />
          </va-card-content>
        </va-card>
      </div>
      <div class="flex md6 xs12">
        <va-card>
          <va-card-title>{{ $t('rating.twoIcons') }}</va-card-title>
          <va-card-content>
            <va-rating
              v-model="value"
              icon="bell_slash"
              empty-icon="bell"
            />
          </va-card-content>
        </va-card>
      </div>
      <div class="flex md6 xs12">
        <va-card>
          <va-card-title>{{ $t('rating.small') }}</va-card-title>
          <va-card-content>
            <va-rating
              size="small"
              color="warning"
              v-model="value"
            />
          </va-card-content>
        </va-card>
      </div>
      <div class="flex md6 xs12">
        <va-card>
          <va-card-title>{{ $t('rating.large') }}</va-card-title>
          <va-card-content>
            <va-rating
              v-model="value"
              size="large"
              color="info"
            />
          </va-card-content>
        </va-card>
      </div>
      <div class="flex md6 xs12">
        <va-card>
          <va-card-title>{{ $t('rating.numbers') }}</va-card-title>
          <va-card-content>
            <va-rating
              numbers
              v-model="value"
            />
          </va-card-content>
        </va-card>
      </div>
      <div class="flex md6 xs12">
        <va-card>
          <va-card-title>{{ $t('rating.halves') }}</va-card-title>
          <va-card-content>
            <va-rating
              color="warning"
              halves
              v-model="value"
            />
          </va-card-content>
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
