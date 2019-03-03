<template>
  <VbDemo>
    <VbContainer>
      <vuestic-dropdown-new position="B">
        <span>Bottom</span>
        <va-button slot="actuator">
            Dropdown bottom
        </va-button>
      </vuestic-dropdown-new>
    </VbContainer>

    <VbContainer>
      <vuestic-dropdown-new position="T">
        <span>Top</span>
        <va-button slot="actuator">Dropdown top</va-button>
      </vuestic-dropdown-new>
    </VbContainer>

    <VbContainer>
      <vuestic-dropdown-new position="L">
        <span>Left</span>
        <va-button slot="actuator">Dropdown left</va-button>
      </vuestic-dropdown-new>
    </VbContainer>

    <VbContainer>
      <vuestic-dropdown-new position="R">
        <span>Right</span>
        <va-button slot="actuator">Dropdown right</va-button>
      </vuestic-dropdown-new>
    </VbContainer>

    <VbContainer>
      <vuestic-dropdown-new position="TR">
        <span>Top-Right</span>
        <va-button slot="actuator">Dropdown top-right</va-button>
      </vuestic-dropdown-new>
    </VbContainer>

    <VbContainer>
      <vuestic-dropdown-new position="TL">
        <span>Top-Left</span>
        <va-button slot="actuator">Dropdown top-left</va-button>
      </vuestic-dropdown-new>
    </VbContainer>

    <VbContainer>
      <vuestic-dropdown-new position="BR">
        <span>Bottom-Right</span>
        <va-button slot="actuator">Dropdown bottom-right</va-button>
      </vuestic-dropdown-new>
    </VbContainer>

    <VbContainer>
      <vuestic-dropdown-new position="BL">
        <span>Bottom-Left</span>
        <va-button slot="actuator">Dropdown bottom-left</va-button>
      </vuestic-dropdown-new>
    </VbContainer>

    <VbContainer>
      <vuestic-dropdown-new position="BL" :no-fade="true">
        <span>No Fade</span>
        <va-button slot="actuator">Dropdown noFade</va-button>
      </vuestic-dropdown-new>
    </VbContainer>

    <VbContainer>
      <vuestic-dropdown-new title="Title" message="Content">
        <va-button slot="actuator">Dropdown with Title</va-button>
      </vuestic-dropdown-new>
    </VbContainer>

    <VbContainer>
      <vuestic-dropdown-new absolute>
        <span>Absolute</span>
        <va-button slot="actuator">Absolute Dropdown</va-button>
      </vuestic-dropdown-new>
    </VbContainer>

    <VbContainer>
      <vuestic-dropdown-new max-width="150px">
        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum officia cumque nam assumenda debitis minima</span>
        <va-button slot="actuator">Max Width Dropdown</va-button>
      </vuestic-dropdown-new>
    </VbContainer>

    <VbContainer>
      <vuestic-dropdown-new disabled>
        <span>Disabled</span>
        <va-button slot="actuator">Disabled Dropdown</va-button>
      </vuestic-dropdown-new>
    </VbContainer>

    <VbContainer>
      <vuestic-dropdown-new
        v-model="newDropdownVal"
      >
        <span>With model</span>
        <va-button @click="toggleNewDropdown" slot="actuator">Dropdown with model</va-button>
      </vuestic-dropdown-new>
    </VbContainer>

    <VbContainer>
      <vuestic-dropdown-new>
        <va-button slot="actuator">Nested Dropdown</va-button>
        <vuestic-dropdown-new>
          <div style="padding: 10px;" slot="actuator">
            <button>Click Me!</button>
          </div>
          <span>Hi! I am nested inside</span>
        </vuestic-dropdown-new>
      </vuestic-dropdown-new>
    </VbContainer>

    <VbContainer>
      <vuestic-dropdown-new trigger-mode="hover">
        <span>Hover</span>
        <va-button slot="actuator">Hover Dropdown</va-button>
      </vuestic-dropdown-new>
    </VbContainer>

    <VbContainer>
      <vuestic-dropdown-new trigger-mode="focus">
        <span>Focus</span>
        <va-button slot="actuator">Focus Dropdown</va-button>
      </vuestic-dropdown-new>
    </VbContainer>

    <VbContainer>
      <vuestic-dropdown-new
        @onClick="handleClick"
        @onMouseEnter="handleMouseOver"
        @onMouseLeave="handleMouseLeave">
        <span>Event Listeners</span>
        <va-button slot="actuator">Events Dropdown</va-button>
      </vuestic-dropdown-new>
    </VbContainer>

    <!-- <div class="demo-container__item">
      <div class="demo-container__item-title">Dropdown with model</div>
      <va-button id="open-dropdown" @click="toggleNewDropdown" ref="btn">Dropdown</va-button>
      <vuestic-dropdown-new
        v-model="newDropdownVal"
        position="B"
        :absolute="true"
        max-width="200px"
        :max-height="300"
        @onClick="handleClick"
        @onMouseEnter="handleMouseOver"
        @onMouseLeave="handleMouseLeave"
        target="open-dropdown"
      >
        <span>With model</span>
      </vuestic-dropdown-new>
    </div>-->
  </VbDemo>
</template>

<script>
import VuesticDropdownNew from './VuesticDropdownNew.vue'

export default {
  components: {
    VuesticDropdownNew
  },
  data () {
    return {
      newDropdownVal: false
    }
  },
  methods: {
    toggleNewDropdown () {
      this.newDropdownVal = !this.newDropdownVal
      console.log('val ', this.newDropdownVal, this.$refs)
    },
    handleClick (e) {
      console.log('click ', e)
    },
    handleMouseOver (e) {
      console.log('mouseover ', e)
    },
    handleMouseLeave (e) {
      console.log('mouseleave ', e)
    }
  }
}
</script>
