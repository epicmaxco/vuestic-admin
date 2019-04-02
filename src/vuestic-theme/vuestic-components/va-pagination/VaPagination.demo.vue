<template>
  <VbDemo>
    <VbContainer>
      <input v-model.number="activePage"/>
      {{typeof activePage}}
    </VbContainer>
    <VbContainer>
      <table class="table table-bordered">
        <tr>
          <th>Description</th>
          <th>Va Pagination</th>
        </tr>
        <tr>
          <td>Default Pagination</td>
          <td>
            <VbContainer>
              <va-pagination :pages="20" v-model="activePage"/>
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>Pagination With Visible Pages</td>
          <td>
            <VbContainer>
              <va-pagination :pages="10" :visible-pages="3" v-model="activePage"/>
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>Pagination Sizes</td>
          <td>
            <VbContainer>
              <va-pagination small :pages="10" :visible-pages="3" v-model="activePage"/>
              <va-pagination large :pages="10" :visible-pages="3" v-model="activePage"/>
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>Colored Pagination</td>
          <td>
            <VbContainer>
              <va-pagination v-model="activePage" :visible-pages="4" :pages="15" color="success"/>
              <va-pagination v-model="activePage" :visible-pages="4" :pages="15" color="danger"/>
              <va-pagination v-model="activePage" :visible-pages="4" :pages="15" color="warning"/>
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>Disabled Pagination</td>
          <td>
            <VbContainer>
              <va-pagination v-model="activePage" :visible-pages="4" :pages="15" disabled/>
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>Pagination Without Links</td>
          <td>
            <VbContainer>
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
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>Pagination With Icons</td>
          <td>
            <VbContainer>
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
            </VbContainer>
          </td>
        </tr>
      </table>
    </VbContainer>
  </VbDemo>
</template>

<script>
import VaPagination from './VaPagination'

export default {
  components: {
    VaPagination,
  },
  data () {
    return {
      activePage: 4,
    }
  },
}
</script>
