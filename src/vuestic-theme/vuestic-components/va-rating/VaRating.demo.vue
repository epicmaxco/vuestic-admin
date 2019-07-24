<template>
  <VbDemo>
    <VbCard title="No value">
      <va-rating @input="$vb.log"/>
      <va-rating
        @input="$vb.log"
        halves
        halfIcon="fa fa-star-half-full"
        emptyIcon="fa fa-star-o"
      />
    </VbCard>
    <VbCard width="1200px">
      <table class="table table-bordered" style="width: 100%">
        <tr>
          <th>Description</th>
          <th>Vuestic Rating</th>
        </tr>
        <tr>
          <td>Types</td>
          <td>
            default
            <va-rating
              v-model="value"
            />
            numbers
            <va-rating
              numbers
              v-model="value"
            />
          </td>
        </tr>
        <tr>
          <td>Themes</td>
          <td>
            <div class="row">
              <div class="flex">
                success
                <va-rating
                  color="success"
                  numbers
                  v-model="value"
                />
                info
                <va-rating
                  color="info"
                  numbers
                  v-model="value"
                />
                danger
                <va-rating
                  color="danger"
                  numbers
                  v-model="value"
                />
                warning
                <va-rating
                  color="warning"
                  numbers
                  v-model="value"
                />
                gray
                <va-rating
                  color="gray"
                  numbers
                  v-model="value"
                />
                dark
                <va-rating
                  color="dark"
                  numbers
                  v-model="value"
                />
              </div>
              <div class="flex">
                success
                <va-rating
                  color="success"
                  v-model="value"
                />
                info
                <va-rating
                  color="info"
                  v-model="value"
                />
                danger
                <va-rating
                  color="danger"
                  v-model="value"
                />
                warning
                <va-rating
                  color="warning"
                  v-model="value"
                />
                gray
                <va-rating
                  color="gray"
                  v-model="value"
                />
                dark
                <va-rating
                  color="dark"
                  v-model="value"
                />
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>Sizes</td>
          <div class="row">
            <div class="flex">
              medium
              <va-rating
                v-model="value"
                size="medium"
              />
              small
              <va-rating
                size="small"
                v-model="value"
              />
              large
              <va-rating
                size="large"
                v-model="value"
              />
              55px
              <va-rating
                size="55px"
                v-model="value"
              />
              2rem
              <va-rating
                size="2rem"
                v-model="value"
              />
            </div>
            <div class="flex">
              medium
              <va-rating
                v-model="value"
                numbers
                size="medium"
              />
              small
              <va-rating
                size="small"
                numbers
                v-model="value"
              />
              large
              <va-rating
                size="large"
                numbers
                v-model="value"
              />
              55px
              <va-rating
                size="55px"
                numbers
                v-model="value"
              />
              2rem
              <va-rating
                size="2rem"
                numbers
                v-model="value"
              />
            </div>
          </div>
          <td>
          </td>
        </tr>
        <tr>
          <td>Disabled state</td>
          <td>
            <va-rating
              v-model="value"
              disabled
            />
            <va-rating
              disabled
              numbers
              v-model="value"
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
            <va-rating
              v-model="value"
              readonly
              numbers
            />
          </td>
        </tr>
        <tr>
          <td>Half icon state</td>
          <td>
            <va-rating
              v-model="value"
              halves
              emptyIcon="fa fa-star-o"
              size="30px"
            />
            readonly
            <va-rating
              v-model="value"
              readonly
              halves
              emptyIcon="fa fa-star-o"
              size="30px"
            />
            disabled
            <va-rating
              v-model="value"
              disabled
              halves
              emptyIcon="fa fa-star-o"
              size="30px"
            />
          </td>
        </tr>
        <tr>
          <td>Custom icons</td>
          <td>
            <va-rating
              icon="fa fa-bug"
              color="warning"
              v-model="value"
            />
          </td>
        </tr>
        <tr>
          <td>Max items</td>
          <td>
            <va-rating
              :max="10"
              v-model="value"
              color="danger"
            />
            <va-rating
              :max="10"
              numbers
              v-model="value"
              color="danger"
            />
          </td>
        </tr>
      </table>
    </VbCard>
    <VbCard title="value">
      <input type="text" v-model.number="value">
    </VbCard>
    <VbCard title="Custom color">
      <va-rating color="#2219bb" :value="2"/>
    </VbCard>
  </VbDemo>
</template>

<script>
import VaRating from './VaRating'

export default {
  components: {
    VaRating,
  },
  data () {
    return {
      value: 2.5,
    }
  },
}
</script>
