<template>
  <VbDemo>
    <VbContainer>
      <table class="table table-bordered">
        <tr>
          <th>Description</th>
          <th>Vuestic Rating</th>
        </tr>
        <tr>
          <td>Types</td>
          <td>
            <va-rating
              v-model="value"
            />
            default
            <va-rating
              numbers
              v-model="value"
            />
            numbers
          </td>
        </tr>
        <tr>
          <td>Sizes</td>
          <td>
            <va-rating
              v-model="value"
              size="medium"
            />
            medium
            <va-rating
              size="small"
              v-model="value"
            />
            small
            <va-rating
              size="large"
              v-model="value"
            />
            large
            <va-rating
              size="55px"
              v-model="value"
            />
            55px(custom)
          </td>
        </tr>
        <tr>
          <td>Disabled state</td>
          <td>
            <va-rating
              v-model="value"
              disabled
            />
          </td>
        </tr>
        <tr>
          <td>Readonly state</td>
          <td>
            <va-rating
              v-model="value"
              readonly
            />
          </td>
        </tr>
        <tr>
          <td>Half icon state</td>
          <td>
            <va-rating
              v-model="value"
              halfIcon="fa fa-star-half-full"
              size="30px"
            />
          </td>
        </tr>
        <tr>
          <td>Custom icons</td>
          <td>
            <va-rating
              icon="fa fa-bug"
              color="blue"
              v-model="value"
            />
          </td>
        </tr>
      </table>
    </VbContainer>
    <VbContainer>
      value = {{value}}
    </VbContainer>
  </VbDemo>
</template>

<script>
import VaRating from './VaRating'

export default {
  components: {
    VaRating
  },
  data () {
    return {
      value: 2.5
    }
  }
}
</script>
