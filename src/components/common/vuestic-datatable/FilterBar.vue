<template>
  <div class="form-group with-icon-left">
    <div class="input-group">
      <input id="input-icon-left" name="input-icon-left" @keyup="doFilter" v-model="filterText" required/>
      <i class="glyphicon glyphicon-search icon-left input-icon search-icon"></i>
      <label class="control-label" for="input-icon-left">Search</label><i class="bar"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'filterBar',
    data () {
      return {
        filterText: ''
      }
    },
    methods: {
      doFilter () {
        this.$events.fire('filter-set', this.filterText)
      }
    }
  }
</script>

<style lang="scss">
  .search-icon {
    transform: rotate(90deg);
  }
</style>
