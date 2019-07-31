<template>
  <VbDemo>
    <VbCard>
      <va-input type="number" v-model.number="activePage" label="Current Page" />
    </VbCard>
    <VbCard>
      <table class="table table-bordered">
        <tr>
          <th>Description</th>
          <th>Va Pagination</th>
        </tr>
        <tr>
          <td>Default Pagination</td>
          <td>
            <VbCard>
              <va-pagination :pages="20" v-model="activePage"/>
            </VbCard>
          </td>
        </tr>
        <tr>
          <td>Pagination With Visible Pages</td>
          <td>
            <VbCard>
              <va-pagination :pages="10" :visible-pages="3" v-model="activePage"/>
            </VbCard>
          </td>
        </tr>
        <tr>
          <td>Pagination Sizes</td>
          <td>
            <VbCard>
              <va-pagination small :pages="10" :visible-pages="3" v-model="activePage"/>
              <va-pagination large :pages="10" :visible-pages="3" v-model="activePage"/>
            </VbCard>
          </td>
        </tr>
        <tr>
          <td>Colored Pagination</td>
          <td>
            <VbCard>
              <va-pagination v-model="activePage" :visible-pages="4" :pages="15" color="success"/>
              <va-pagination v-model="activePage" :visible-pages="4" :pages="15" color="danger"/>
              <va-pagination v-model="activePage" :visible-pages="4" :pages="15" color="warning"/>
            </VbCard>
          </td>
        </tr>
        <tr>
          <td>Disabled Pagination</td>
          <td>
            <VbCard>
              <va-pagination v-model="activePage" :visible-pages="4" :pages="15" disabled/>
            </VbCard>
          </td>
        </tr>
        <tr>
          <td>Pagination Without Links</td>
          <td>
            <VbCard>
              <va-pagination
                :pages="10"
                :visible-pages="3"
                :boundary-links="false"
                v-model="activePage"
              />
              <va-pagination
                :pages="10" :visible-pages="3"
                :direction-links="false"
                v-model="activePage"
              />
            </VbCard>
          </td>
        </tr>
        <tr>
          <td>Pagination With Icons</td>
          <td>
            <VbCard>
              <va-pagination
                :pages="10"
                :visible-pages="3"
                :icon="{ direction: 'fa fa-volume-off' }"
                :icon-right="{ direction: 'fa fa-volume-up' }"
                v-model="activePage"/>
              <va-pagination
                :pages="10"
                :visible-pages="3"
                :icon="{ boundary: 'fa fa-bell-slash' }"
                :icon-right="{ boundary: 'fa fa-bell' }"
                v-model="activePage"/>
              <va-pagination
                :pages="10"
                :visible-pages="3"
                :icon="{ boundary: 'fa fa-bell-slash', direction: 'fa fa-volume-off' }"
                :icon-right="{ boundary: 'fa fa-bell', direction: 'fa fa-volume-up' }"
                v-model="activePage"/>
            </VbCard>
          </td>
        </tr>
      </table>
    </VbCard>
  </VbDemo>
</template>

<script>
import VaPagination from './VaPagination'
import VaInput from '../va-input/VaInput'

export default {
  components: {
    VaPagination,
    VaInput,
  },
  data () {
    return {
      activePage: 4,
    }
  },
}
</script>
