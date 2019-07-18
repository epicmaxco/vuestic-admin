<template>
  <vb-demo>
    <vb-card width="400px">
      <va-button small color="info" @click="loading = !loading">
        {{ loading ? 'Stop loading' : 'Start loading '}}
      </va-button>

      <va-inner-loading :loading="loading">
        <va-card title="Epicmax">
          <template slot="actions">
            <va-button icon="fa fa-envelope" />
            <va-button icon="fa fa-phone" />
          </template>

          <p>
            NO BUREAUCRACY. NO MIDDLEMEN. NO WASTE OF TIME.
          </p>

          <p>
            Epicmax is a team of talented people ready to care about your product.
            We love coding. We love beautiful design. We love doing our job better than possible.
            Every product we craft is a challenge we are excited about.
          </p>
        </va-card>
      </va-inner-loading>
    </vb-card>
  </vb-demo>
</template>

<script>
import VaButton from '../va-button/VaButton'
import VaCard from '../va-card/VaCard'
import VaInnerLoading from '../va-inner-loading/VaInnerLoading'

export default {
  components: {
    VaButton,
    VaCard,
    VaInnerLoading,
  },
  data () {
    return {
      loading: true,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
