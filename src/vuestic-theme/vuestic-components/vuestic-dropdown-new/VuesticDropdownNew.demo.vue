<template>
  <VbDemo>
    <VbContainer title="Direction">
      <vuestic-dropdown-new
        v-for="(value, key) in dropdownDirections"
        :position="key"
        :key="key"
      >
        {{ dropdownText }}
        <button slot="actuator">
          {{value}}
        </button>
      </vuestic-dropdown-new>
    </VbContainer>

    <!-- <VbContainer title="Title">
      <vuestic-dropdown-new title="Title" :message="dropdownText">
        <button slot="actuator">Dropdown with Title</button>
      </vuestic-dropdown-new>
    </VbContainer>
    <VbContainer title="Absolute">
      <vuestic-dropdown-new absolute>
        {{ dropdownText }}
        <button slot="actuator">Open</button>
      </vuestic-dropdown-new>
    </VbContainer> -->

    <VbContainer title="Max Width">
      <vuestic-dropdown-new max-width="150px">
        {{ dropdownText }}
        <button slot="actuator">Open</button>
      </vuestic-dropdown-new>
    </VbContainer>

    <VbContainer title="Disabled">
      <vuestic-dropdown-new disabled>
        {{ dropdownText }}
        <button slot="actuator">Open</button>
      </vuestic-dropdown-new>
    </VbContainer>

    <!-- <VbContainer title="Dropdown activation">
      <button>Just button</button>
      <button @click="toggleNewDropdown()">External actuator</button>
      <vuestic-dropdown-new
        v-model="valueProxy"
      >
        With model
        <button slot="actuator">Actuator</button>
      </vuestic-dropdown-new>
    </VbContainer> -->

    <VbContainer title="Nested Dropdown">
      <vuestic-dropdown-new>
        <button slot="actuator">Open</button>
        <div>
          {{ dropdownText }}
          <vuestic-dropdown-new>
            {{ dropdownText }}
            <button slot="actuator">Open child</button>
          </vuestic-dropdown-new>
        </div>
      </vuestic-dropdown-new>
    </VbContainer>

    <VbContainer title="Actuator events">
      <vuestic-dropdown-new trigger-mode="hover">
        <span>Hover</span>
        <button slot="actuator">Hover</button>
      </vuestic-dropdown-new>
      <vuestic-dropdown-new trigger-mode="focus">
        <span>Focus</span>
        <button slot="actuator">Focus</button>
      </vuestic-dropdown-new>
    </VbContainer>

    <VbContainer title="Content events">
      <vuestic-dropdown-new>
        <span
          @click="handleClick"
          @mouseenter="handleMouseOver"
          @mouseleave="handleMouseLeave"
        >Event Listeners</span>
        <button slot="actuator">Open</button>
      </vuestic-dropdown-new>
    </VbContainer>

    <!-- <div class="demo-container__item">
      <div class="demo-container__item-title">Dropdown with model</div>
      <button id="open-dropdown" @click="toggleNewDropdown" ref="btn">Dropdown</button>
      <vuestic-dropdown-new
        v-model="showDropdown"
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
  methods: {
    toggleNewDropdown () {
      this.showDropdown = !this.showDropdown
    },
    handleClick (e) {
      // eslint-disable-next-line no-console
      console.log('click ', e)
    },
    handleMouseOver (e) {
      // eslint-disable-next-line no-console
      console.log('mouseover ', e)
    },
    handleMouseLeave (e) {
      // eslint-disable-next-line no-console
      console.log('mouseleave ', e)
    }
  },
  computed: {
    valueProxy: {
      get () {
        return this.showDropdown
      },
      set (value) {
        // this.showDropdown = value
      },
    }
  }
}
</script>
