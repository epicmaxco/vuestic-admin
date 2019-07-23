<template>
  <VbDemo>
    <VbCard title="Click">
      <va-dropdown>
        <button slot="anchor">
          Activator
        </button>
        Dropdown text
      </va-dropdown>
    </VbCard>

    <VbCard title="Click outside won't close">
      <va-dropdown
        :closeOnClickOutside="false"
      >
        <button slot="anchor">
          Click
        </button>
        Should ignore click outside
      </va-dropdown>
    </VbCard>

    <VbCard title="Anchor click won't close">
      <va-dropdown
        :closeOnAnchorClick="false"
      >
        <button slot="anchor">
          Click
        </button>
        Should ignore click outside
      </va-dropdown>
    </VbCard>

    <VbCard title="Hover">
      <va-dropdown trigger="hover">
        <button slot="anchor">
          Hover
        </button>
        Dropdown text
      </va-dropdown>
    </VbCard>

    <VbCard title="Content not hoverable">
      <va-dropdown
        trigger="hover"
        :isContentHoverable="false"
      >
        <button slot="anchor">
          Hover
        </button>
        Dropdown text
      </va-dropdown>
    </VbCard>

    <VbCard title="Doesn't redraw on content change">
      <va-dropdown>
        <button slot="anchor">
          Click
        </button>
        <button @click="redrawContentSize = redrawContentSize - 20">-</button>
        <button @click="redrawContentSize = redrawContentSize + 20">+</button>
        <div
          :style="{
            width: redrawContentSize + 'px',
            height: redrawContentSize + 'px',
            backgroundColor: '#14bb14',
          }"
        />
      </va-dropdown>
    </VbCard>

    <VbCard title="No trigger">
      <label>
        <input type="checkbox" v-model="noTriggerValue"> Show: {{noTriggerValue}}
      </label>

      <va-dropdown
        trigger="none"
        :isContentHoverable="false"
        :value="noTriggerValue"
      >
        <button slot="anchor">
          None
        </button>
        Dropdown text
      </va-dropdown>
    </VbCard>

    <VbCard title="Events">
      <label>
        <input type="checkbox" v-model="logEvents"> Log events (spammy): {{logEvents}}
      </label>
      <template v-if="logEvents">
        <label>
          <input type="checkbox" v-model="eventsValue"> Show: {{eventsValue}}
        </label>

        <va-dropdown
          trigger="none"
          :isContentHoverable="false"
          :value="eventsValue"
          @clickOutside="$vb.log('Events: clickOutside')"
          @anchorClick="$vb.log('Events: anchorClick')"
        >
          <button slot="anchor">
            Click
          </button>
          Dropdown text
        </va-dropdown>
      </template>
    </VbCard>

    <VbCard title="Anchor width">
      <va-dropdown keepAnchorWidth>
        <button slot="anchor">
          ------- Anchor ------
        </button>
        Same width as anchor
      </va-dropdown>
    </VbCard>

    <VbCard title="Disabled">
      <va-dropdown disabled>
        <button slot="anchor">
          Click
        </button>
        Dropdown text
      </va-dropdown>
      <va-dropdown disabled trigger="hover">
        <button slot="anchor">
          Hover
        </button>
        Dropdown text
      </va-dropdown>
    </VbCard>

    <VbCard title="Ignores to hidden overflow">
      <div style="width: 50px; height: 50px; overflow: hidden; border: 1px gray solid">
        <va-dropdown>
          <button slot="anchor">
            Click
          </button>
          <div style="width: 150px; height: 150px; background: #4ae387">text</div>
        </va-dropdown>
      </div>
    </VbCard>

    <VbCard title="Fixed flag makes possible to ignore even `position: relative`">
      <div style="width: 50px; height: 50px; overflow: hidden; position: relative; border: 1px gray solid">
        <va-dropdown fixed>
          <button slot="anchor">
            Click
          </button>
          <div style="width: 150px; height: 150px; background: #4ae387">text</div>
        </va-dropdown>
      </div>
    </VbCard>

    <VbCard title="Can be closed from another component in context">
      <va-dropdown>
        <button slot="anchor">
          Click
        </button>
        <DropdownCloseButton/>
      </va-dropdown>
    </VbCard>

    <VbCard title="Nesting 3x">
      <va-dropdown debugId="1">
        <button slot="anchor">
          Click
        </button>
        1
        <va-dropdown debugId="2">
          <button slot="anchor">
            Click
          </button>
          2
          <va-dropdown debugId="3">
            <button slot="anchor">
              Click
            </button>
            3
          </va-dropdown>
        </va-dropdown>
      </va-dropdown>
    </VbCard>

    <VbCard title="Placement">
      <div style="display: flex; align-content: center; flex-direction: column; padding: 0 100px">
        <va-dropdown
          v-for="position in possiblePositions"
          :key="position"
          :position="position"
        >
          <button style="width: 70px; height: 70px" slot="anchor">
            {{position}}
          </button>
          <span style="background-color: #222222; color: #babfc2;">{{position}}</span>
        </va-dropdown>
      </div>
    </VbCard>

    <VbCard title="Offset">
      <div>
        <va-dropdown :offset="40">
          <button style="width: 70px; height: 70px" slot="anchor">
            40
          </button>
          <span style="background-color: #222222; color: #babfc2;">Content</span>
        </va-dropdown>
        <va-dropdown :offset="'40px, 40px'">
          <button style="width: 70px; height: 70px" slot="anchor">
            40px, 40px
          </button>
          <span style="background-color: #222222; color: #babfc2;">Content</span>
        </va-dropdown>
      </div>
    </VbCard>
  </VbDemo>
</template>

<script>
import VaDropdown from './VaDropdown.vue'
import DropdownCloseButton from './__demo__/DropdownCloseButton'

export default {
  components: { DropdownCloseButton, VaDropdown },
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
      redrawContentSize: 100,
    }
  },
}
</script>
