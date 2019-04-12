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
          Click (is default)
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

    <VbCard title="Shows no respect to hidden overflow (unfinished)">
      <div style="width: 100px; height: 100px; overflow: hidden">
        <va-dropdown-popper>
          <button slot="activator">
            Click
          </button>
          <div style="width: 150px; height: 150px; background: #4ae387"/>
        </va-dropdown-popper>
      </div>
    </VbCard>

    <VbCard title="Can be closed from another component in context">
      <va-dropdown-popper>
        <button slot="activator">
          Click
        </button>
        <DropdownCloseButton/>
      </va-dropdown-popper>
    </VbCard>

    <VbCard focus title="Click outside">
      <va-dropdown-popper>
        <button slot="activator">
          Click
        </button>
        Should close on click outside
      </va-dropdown-popper>
    </VbCard>
  </VbDemo>
</template>

<script>
import VaDropdownPopper from './VaDropdownPopper.vue'
import DropdownCloseButton from './__demo__/DropdownCloseButton.'

export default {
  components: { DropdownCloseButton, VaDropdownPopper },
}
</script>
