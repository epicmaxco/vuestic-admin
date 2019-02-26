<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <div class="demo-container__item-title">Dropdown top</div>
      <va-button id="open-top-dropdown" ref="btn">Dropdown</va-button>
      <vuestic-dropdown-new position="T" target="open-top-dropdown">
        <span>Top</span>
      </vuestic-dropdown-new>
    </div>
    <div class="demo-container__item">
      <div class="demo-container__item-title">Dropdown bottom</div>
      <va-button id="open-bottom-dropdown" ref="btn">Dropdown</va-button>
      <vuestic-dropdown-new position="B" target="open-bottom-dropdown">
        <span>Bottom</span>
      </vuestic-dropdown-new>
    </div>
    <div class="demo-container__item">
      <div class="demo-container__item-title">Dropdown left</div>
      <va-button id="open-left-dropdown" ref="btn">Dropdown</va-button>
      <vuestic-dropdown-new position="L" target="open-left-dropdown">
        <span>Left</span>
      </vuestic-dropdown-new>
    </div>
    <div class="demo-container__item">
      <div class="demo-container__item-title">Dropdown right</div>
      <va-button id="open-right-dropdown" ref="btn">Dropdown</va-button>
      <vuestic-dropdown-new position="R" target="open-right-dropdown">
        <span>Right</span>
      </vuestic-dropdown-new>
    </div>
    <div class="demo-container__item">
      <div class="demo-container__item-title">Dropdown top-right</div>
      <va-button id="open-top-right-dropdown" ref="btn">Dropdown</va-button>
      <vuestic-dropdown-new position="TR" target="open-top-right-dropdown">
        <span>Top-Right</span>
      </vuestic-dropdown-new>
    </div>
    <div class="demo-container__item">
      <div class="demo-container__item-title">Dropdown top-left</div>
      <va-button id="open-top-left-dropdown" ref="btn">Dropdown</va-button>
      <vuestic-dropdown-new position="TL" target="open-top-left-dropdown">
        <span>Top-Left</span>
      </vuestic-dropdown-new>
    </div>
    <div class="demo-container__item">
      <div class="demo-container__item-title">Dropdown bottom-right</div>
      <va-button id="open-bottom-right-dropdown" ref="btn">Dropdown</va-button>
      <vuestic-dropdown-new position="BR" target="open-bottom-right-dropdown">
        <span>Bottom-Right</span>
      </vuestic-dropdown-new>
    </div>
    <div class="demo-container__item">
      <div class="demo-container__item-title">Dropdown bottom-left</div>
      <va-button id="open-bottom-left-dropdown" ref="btn">Dropdown</va-button>
      <vuestic-dropdown-new position="BL" target="open-bottom-left-dropdown">
        <span>Bottom-Left</span>
      </vuestic-dropdown-new>
    </div>

    <div class="demo-container__item">
      <div class="demo-container__item-title">Dropdown noFade</div>
      <va-button id="open-no-fade-dropdown" ref="btn">Dropdown</va-button>
      <vuestic-dropdown-new position="BL" :no-fade="true" target="open-no-fade-dropdown">
        <span>No Fade</span>
      </vuestic-dropdown-new>
    </div>

    <div class="demo-container__item">
      <div class="demo-container__item-title">Dropdown with Title</div>
      <va-button id="open-with-title-dropdown" ref="btn">Dropdown</va-button>
      <vuestic-dropdown-new title="Title" message="Content" target="open-with-title-dropdown"/>
    </div>

    <div class="demo-container__item">
      <div class="demo-container__item-title">Absolute Dropdown</div>
      <va-button id="open-absolute-dropdown" ref="btn">Dropdown</va-button>
      <vuestic-dropdown-new absolute target="open-absolute-dropdown">
        <span>Absolute</span>
      </vuestic-dropdown-new>
    </div>

    <div class="demo-container__item">
      <div class="demo-container__item-title">Max Width Dropdown</div>
      <va-button id="open-max-width-dropdown" ref="btn">Dropdown</va-button>
      <vuestic-dropdown-new max-width="150px" target="open-max-width-dropdown">
        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum officia cumque nam assumenda debitis minima</span>
      </vuestic-dropdown-new>
    </div>

    <div class="demo-container__item">
      <div class="demo-container__item-title">Disabled Dropdown</div>
      <va-button id="open-disabled-dropdown" ref="btn">Dropdown</va-button>
      <vuestic-dropdown-new disabled target="open-disabled-dropdown">
        <span>Disabled</span>
      </vuestic-dropdown-new>
    </div>

    <div class="demo-container__item">
      <div class="demo-container__item-title">Dropdown with model</div>
      <va-button id="open-model-dropdown" @click="toggleNewDropdown" ref="btn">Dropdown</va-button>
      <vuestic-dropdown-new
        v-model="newDropdownVal"
        target="open-model-dropdown"
      >
        <span>With model</span>
      </vuestic-dropdown-new>
    </div>

    <div class="demo-container__item">
      <div class="demo-container__item-title">Nested Dropdown</div>
      <va-button id="open-nested-parent-dropdown" ref="btn">Dropdown</va-button>
      <vuestic-dropdown-new target="open-nested-parent-dropdown">
        <div class="nested-dropdown">
          <button id="open-nested-child-dropdown">Click Me!</button>
        </div>
      </vuestic-dropdown-new>
      <vuestic-dropdown-new target="open-nested-child-dropdown">
        <span>Hi! I am nested inside!</span>
      </vuestic-dropdown-new>
    </div>

    <div class="demo-container__item">
      <div class="demo-container__item-title">Hover Dropdown</div>
      <va-button id="open-hover-dropdown" ref="btn">Dropdown</va-button>
      <vuestic-dropdown-new trigger-mode="hover" target="open-hover-dropdown">
        <span>Hover</span>
      </vuestic-dropdown-new>
    </div>

    <div class="demo-container__item">
      <div class="demo-container__item-title">Focus Dropdown</div>
      <va-button id="open-focus-dropdown" ref="btn">Dropdown</va-button>
      <vuestic-dropdown-new trigger-mode="focus" target="open-focus-dropdown">
        <span>Focus</span>
      </vuestic-dropdown-new>
    </div>

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
  </div>
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

<style lang="scss" scoped>
.demo-container {
  &__item-title {
    font-weight: bold;
    text-align: center;
  }
}
.nested-dropdown {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
