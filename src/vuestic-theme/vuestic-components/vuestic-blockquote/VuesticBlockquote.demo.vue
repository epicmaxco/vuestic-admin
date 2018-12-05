<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-blockquote>
        <p style="color: #babfc2; margin-bottom: 0.5rem;">{{ quote }}</p>
      </vuestic-blockquote>
    </div>
  </div>
</template>

<script>
import VuesticBlockquote from './VuesticBlockquote'

export default {
  components: {
    VuesticBlockquote
  },
  data () {
    return {
      quote: 'BQ: Let’s talk about meat fondue recipes and what you need to know' +
        ' first. Meat fondue also known as oil fondue is a method of cooking all kinds.',
      author: 'Mister Lebowski'
    }
  }
}
</script>
