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
              <va-pagination :length="4" v-model="activePage"/>
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>Pagination With Total Pages</td>
          <td>
            <VbContainer>
              <va-pagination :total-pages="20" v-model="activePage"/>
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>Disabled Pagination</td>
          <td>
            <VbContainer>
              <va-pagination v-model="activePage" disabled/>
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
      activePage: 2
    }
  }
}
</script>
