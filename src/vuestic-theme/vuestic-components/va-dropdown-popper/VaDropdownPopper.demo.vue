<template>
  <VbDemo>
    <VbCard title="Default">
      <va-dropdown-popper>
        <button slot="activator">
          Activator
        </button>
        Dropdown text
      </va-dropdown-popper>
    </VbCard>

    <VbCard title="Triggers">
      <va-dropdown-popper trigger="click">
        <button slot="activator">
          Click
        </button>
        Dropdown text
      </va-dropdown-popper>
      <va-dropdown-popper trigger="hover">
        <button slot="activator">
          Hover
        </button>
        Dropdown text
      </va-dropdown-popper>
    </VbCard>

  </VbDemo>
</template>

<script>
import VaDropdownPopper from './VaDropdownPopper.vue'

export default {
  components: { VaDropdownPopper },
}
</script>
