<template>
  <VbDemo>
    <VbCard title="Click">
      <va-dropdown-popper>
        <button slot="anchor">
          Activator
        </button>
        Dropdown text
      </va-dropdown-popper>
    </VbCard>

    <VbCard title="Click outside won't close">
      <va-dropdown-popper
        :closeOnClickOutside="false"
      >
        <button slot="anchor">
          Click
        </button>
        Should ignore click outside
      </va-dropdown-popper>
    </VbCard>

    <VbCard title="Anchor click won't close">
      <va-dropdown-popper
        :closeOnAnchorClick="false"
      >
        <button slot="anchor">
          Click
        </button>
        Should ignore click outside
      </va-dropdown-popper>
    </VbCard>

    <VbCard title="Hover">
      <va-dropdown-popper trigger="hover">
        <button slot="anchor">
          Hover
        </button>
        Dropdown text
      </va-dropdown-popper>
    </VbCard>

    <VbCard title="Content not hoverable">
      <va-dropdown-popper
        trigger="hover"
        :isContentHoverable="false"
      >
        <button slot="anchor">
          Hover
        </button>
        Dropdown text
      </va-dropdown-popper>
    </VbCard>

    <VbCard title="No trigger">
      <label>
        <input type="checkbox" v-model="noTriggerValue"> Show: {{noTriggerValue}}
      </label>

      <va-dropdown-popper
        trigger="none"
        :isContentHoverable="false"
        :value="noTriggerValue"
      >
        <button slot="anchor">
          Hover
        </button>
        Dropdown text
      </va-dropdown-popper>
    </VbCard>

    <VbCard title="Events">
      <label>
        <input type="checkbox" v-model="logEvents"> Log events (spammy): {{logEvents}}
      </label>
      <template v-if="logEvents">
        <label>
          <input type="checkbox" v-model="eventsValue"> Show: {{eventsValue}}
        </label>

        <va-dropdown-popper
          trigger="none"
          :isContentHoverable="false"
          :value="eventsValue"
          @clickOutside="$vb.log('Events: clickOutside')"
          @anchorClick="$vb.log('Events: anchorClick')"
        >
          <button slot="anchor">
            Hover
          </button>
          Dropdown text
        </va-dropdown-popper>
      </template>
    </VbCard>

    <VbCard title="Disabled">
      <va-dropdown-popper disabled>
        <button slot="anchor">
          Click
        </button>
        Dropdown text
      </va-dropdown-popper>
      <va-dropdown-popper disabled trigger="hover">
        <button slot="anchor">
          Hover
        </button>
        Dropdown text
      </va-dropdown-popper>
    </VbCard>

    <VbCard title="Shows no respect to hidden overflow">
      <div style="width: 50px; height: 50px; overflow: hidden; border: 1px gray solid">
        <va-dropdown-popper>
          <button slot="anchor">
            Click
          </button>
          <div style="width: 150px; height: 150px; background: #4ae387"/>
        </va-dropdown-popper>
      </div>
    </VbCard>

    <VbCard title="Can be closed from another component in context">
      <va-dropdown-popper>
        <button slot="anchor">
          Click
        </button>
        <DropdownCloseButton/>
      </va-dropdown-popper>
    </VbCard>

    <VbCard title="Nesting 3x">
      <va-dropdown-popper debugId="1">
        <button slot="anchor">
          Click
        </button>
        1
        <va-dropdown-popper debugId="2">
          <button slot="anchor">
            Click
          </button>
          2
          <va-dropdown-popper debugId="3">
            <button slot="anchor">
              Click
            </button>
            3
          </va-dropdown-popper>
        </va-dropdown-popper>
      </va-dropdown-popper>
    </VbCard>

    <VbCard title="Placement">
      <div style="display: flex; align-content: center; flex-direction: column; padding: 0 100px">
        <va-dropdown-popper
          v-for="position in possiblePositions"
          :key="position"
          :position="position"
        >
          <button style="width: 70px; height: 70px" slot="anchor">
            {{position}}
          </button>
          <span style="background-color: #222222; color: #babfc2;">{{position}}</span>
        </va-dropdown-popper>
      </div>
    </VbCard>

    <VbCard title="Offset">
      <div>
        <va-dropdown-popper :offset="40">
          <button style="width: 70px; height: 70px" slot="anchor">
            40
          </button>
          <span style="background-color: #222222; color: #babfc2;">Content</span>
        </va-dropdown-popper>
        <va-dropdown-popper :offset="'40px, 40px'">
          <button style="width: 70px; height: 70px" slot="anchor">
            40px, 40px
          </button>
          <span style="background-color: #222222; color: #babfc2;">Content</span>
        </va-dropdown-popper>
      </div>
    </VbCard>
  </VbDemo>
</template>

<script>
import VaDropdownPopper from './VaDropdownPopper.vue'
import DropdownCloseButton from './__demo__/DropdownCloseButton.'

export default {
  components: { DropdownCloseButton, VaDropdownPopper },
  data () {
    return {
      possiblePositions: [
        'auto',
        'top',
        'right',
        'bottom',
        'left',
        'bottom-start',
        'bottom-end',
        'left-start',
        'left-end',
      ],
      noTriggerValue: false,
      eventsValue: false,
      logEvents: false,
    }
  },
}
</script>
