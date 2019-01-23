<template>
  <VbDemo>
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
              <va-pagination v-model="activePage"/>
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>Pagination With Length</td>
          <td>
            <VbContainer>
              <va-pagination :length="3" v-model="activePage2"/>
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>Pagination With Length</td>
          <td>
            <VbContainer>
              <va-pagination :total-pages="20" v-model="activePage3"/>
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>Disabled Pagination</td>
          <td>
            <VbContainer>
              <va-pagination v-model="activePage4" disabled/>
            </VbContainer>
          </td>
        </tr>
      </table>
    </VbContainer>
  </VbDemo>
</template>

<script>
export default {
  data () {
    return {
      activePage: 1,
      activePage2: 2,
      activePage3: 11,
      activePage4: 3
    }
  }
}
</script>
