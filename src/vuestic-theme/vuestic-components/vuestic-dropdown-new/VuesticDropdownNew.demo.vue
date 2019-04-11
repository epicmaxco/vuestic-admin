<template>
  <VbDemo>
    <VbCard title="Direction">
      <vuestic-dropdown-new
        v-for="(value, key) in dropdownDirections"
        :position="key"
        :key="key"
      >
        {{ dropdownText }}
        <button slot="activator">
          {{value}}
        </button>
      </vuestic-dropdown-new>
    </VbCard>

    <VbCard title="Max Width">
      <vuestic-dropdown-new max-width="150px">
        {{ dropdownText }}
        <button slot="activator">Open</button>
      </vuestic-dropdown-new>
    </VbCard>

    <VbCard title="Disabled">
      <vuestic-dropdown-new disabled>
        {{ dropdownText }}
        <button slot="activator">Open</button>
      </vuestic-dropdown-new>
    </VbCard>

    <VbCard title="Nested Dropdown">
      <vuestic-dropdown-new>
        <button slot="activator">Open</button>
        <div>
          {{ dropdownText }}
          <vuestic-dropdown-new>
            {{ dropdownText }}
            <button slot="activator">Open child</button>
          </vuestic-dropdown-new>
          <vuestic-dropdown-new>
            <button slot="activator">Open child</button>
            {{ dropdownText }}
            <vuestic-dropdown-new>
              {{ dropdownText }}
              <button slot="activator">Open child</button>
            </vuestic-dropdown-new>
          </vuestic-dropdown-new>
        </div>
      </vuestic-dropdown-new>
    </VbCard>

    <VbCard title="Activator events">
      <vuestic-dropdown-new trigger-mode="hover">
        <span>Hover</span>
        <button slot="activator">Hover</button>
      </vuestic-dropdown-new>
      <vuestic-dropdown-new trigger-mode="focus">
        <span>Focus</span>
        <button slot="activator">Focus</button>
      </vuestic-dropdown-new>
    </VbCard>
  </VbDemo>
</template>

<script>
import VuesticDropdownNew from './VuesticDropdownNew.vue'

export default {
  components: {
    VuesticDropdownNew,
  },
  data () {
    return {
      dropdownDirections: {
        T: 'Top',
        TR: 'Top Right',
        R: 'Right',
        BR: 'Bottom Right',
        B: 'Bottom',
        BL: 'Bottom Left',
        L: 'Left',
        TL: 'Top Left',
      },
      showDropdown: false,
      dropdownText: 'Dropdown text. Dropdown text. Dropdown text. Dropdown text. Dropdown text. Dropdown text. Dropdown text. Dropdown text. Dropdown text. Dropdown text. Dropdown text. ',
    }
  },
}
</script>
