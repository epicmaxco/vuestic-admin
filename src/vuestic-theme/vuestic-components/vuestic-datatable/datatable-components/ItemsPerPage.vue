<template>
  <vuestic-dropdown
    class="form-group"
    placement="bottom"
  >
    <button
      class="btn btn-primary btn-sm dropdown-toggle"
      type="button"
      slot="actuator"
    >
      {{selected}} {{label}}
      <i class="ion-ios-arrow-down arrow-down"/>
    </button>
    <template>
      <a
        class="dropdown-item"
        v-for="(option, index) in options"
        :key="index"
        @click="selectedItemsPerPage(option.value)"
      >
        {{option.value}} per page
      </a>
    </template>
  </vuestic-dropdown>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    options: {
      type: Array,
      required: true,
    },
    defaultPerPage: {
      type: Number,
    },
  },
  data () {
    return {
      selected: this.defaultPerPage,
    }
  },
  methods: {
    selectedItemsPerPage (optionValue) {
      this.selected = optionValue
      this.$emit('items-per-page', this.selected)
    },
  },
}
</script>

<style lang="scss" scoped>
.btn.dropdown-toggle, .dropdown-menu {
  min-width: 13rem;
  max-width: 13rem;
}

.dropdown-item, .dropdown-toggle {
  text-transform: uppercase;
}
</style>
