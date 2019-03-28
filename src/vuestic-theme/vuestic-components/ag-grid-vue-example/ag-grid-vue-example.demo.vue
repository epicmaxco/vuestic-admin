<template>
  <VbDemo>
    <VbContainer title="Empty table">
      <AgGridEmptyTable style="width: 700px; height: 350px;"/>
    </VbContainer>
    <VbContainer title="Large data set">
      <AgGridLargeDataSetExample/>
    </VbContainer>
    <VbContainer title="Large data set">
      <RichGridExample/>
    </VbContainer>
  </VbDemo>
</template>

<script>
import AgGridEmptyTable from './AgGridEmptyTable'
import AgGridLargeDataSetExample from './AgGridLargeDataSetExample'
import RichGridExample from './rich-grid-example/RichGridExample'

export default {
  components: {
    RichGridExample,
    AgGridLargeDataSetExample,
    AgGridEmptyTable,
  },
  data () {
    return {

    }
  },
}
</script>

<style lang="scss">
@import '../../vuestic-sass/resources/resources';

$ag-icons-path: '~ag-grid-community/src/styles/ag-theme-balham/icons/';
@import "~ag-grid-community/src/styles/ag-grid.scss";

// theme shortcuts

$default-background: $white;
$chrome-background: $white;
$active: darken($vue-green, 5);
$foreground-color: #000;
$border-color: $gray-light;
$icon-color: #232321;
$alt-background: $light-gray;
$odd-row-background-color: $light-gray3;
$header-cell-moving-background-color: blue;

@import "~ag-grid-community/src/styles/ag-theme-balham/sass/ag-theme-balham.scss";
</style>
