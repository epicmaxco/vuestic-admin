<template>
  <va-dropdown
    :position="computedPosition"
    :trigger-mode="searchable ? 'click' : 'focus'"
    :disabled="disabled"
    :className="`va-select__dropdown va-select__dropdown-position-${position}`"
    :max-width="width"
    :max-height="maxHeight"
  >
    <ul
      class="va-select__options-list"
      :style="{
        'width': this.width,
        'max-height': this.maxHeight
      }"
      ref="options"
    >
      <li
        v-for="(option, index) in filteredOptions"
        :key="index"
        class="va-select__option"
        @click.stop="selectValue(option, index)"
        :class="{
          'va-select__option-selected': isOptionSelected(option, index),
          'va-select__option-highlighted': isOptionHightlighted(option, index)
        }"
      >
        <i class="icon va-icon fa va-select__option__icon mr-1" :class="option.icon"/>
        <span>{{option.text}}</span>
        <span v-show="isOptionHightlighted(option, index)" class="va-select__option__hightlight-text">Press enter to select</span>
        <i v-show="isOptionSelected(option) && !isOptionHightlighted(option, index)" class="icon va-icon fa fa-check va-select__option__selected-icon"/>
      </li>
    </ul>
    <div
      slot="actuator"
      :tabindex="1"
      class="va-select"
      :class="{
        [`va-select-position-${position}`]: position,
        [`va-select-${size}`]: size
      }"
      :style="{'width': width}"
      ref="actuator"
      @keydown.down.prevent="pointerForward()"
      @keydown.up.prevent="pointerBackward()"
      @keydown.enter.prevent="selectValue(filteredOptions[pointer], pointer)"
      @keyup.esc.prevent="$refs.actuator.blur()"
    >
      <p v-if="label" class="title">{{label}}</p>
      <input
        v-if="searchable && isFocused"
        :value="search"
        class="va-select__input"
        @input="updateSearch($event.target.value)"
      />
      <div
        v-else
        class="va-select__input"
      >
        <ul
          class="va-select__tags"
          v-if="multiple && valueProxy.length <= max"
        >
          <li v-for="item in valueProxy" :key="item.value">
            {{item.text}}
          </li>
        </ul>
        <span v-else-if="displayedValue !== ''">{{displayedValue}}</span>
        <span v-else class="va-select__placeholder">{{placeholder}}</span>
      </div>
      <div class="va-select__icons" :class="{'va-select__icons-two': showClearIcon}">
        <i v-if="showClearIcon" @click.prevent.stop="clear" class="icon va-icon fa fa-times-circle mr-1"/>
        <i class="icon va-icon fa" :class="{'fa-chevron-down': !isOpen, 'fa-chevron-up': isOpen}"/>
      </div>
    </div>
  </va-dropdown>
</template>

<script>
import VaDropdown from '../va-dropdown/VaDropdown'

const positions = {
  'top': 'T',
  'bottom': 'B'
}
const sizes = ['sm', 'md', 'lg']
export default {
  name: 'va-select',
  components: { VaDropdown },
  props: {
    options: Array,
    value: {
      default: [],
      required: true,
    },
    placeholder: String,
    searchable: Boolean,
    position: {
      type: String,
      default: 'bottom',
      validator: position => Object.keys(positions).indexOf(position) >= 0
    },
    max: {
      type: Number,
      default: 5
    },
    multiple: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    label: String,
    size: {
      type: String,
      default: 'md',
      validator: size => sizes.indexOf(size) >= 0
    },
    width: {
      type: String,
      default: '400px'
    },
    maxHeight: {
      type: String,
      default: '128px'
    }
  },
  data () {
    return {
      isOpen: false,
      search: '',
      pointer: 0
    }
  },
  computed: {
    filteredOptions () {
      const formatedOptions = this.options ? this.options.map(option => option.value ? { ...option } : { text: option, value: option }) : []
      const filteredOptions = formatedOptions.filter(option => (`${option.text.toLowerCase()}`.indexOf(this.search.toLowerCase()) !== -1 || option.text.indexOf(this.search) !== -1))
      return this.searchable ? filteredOptions : formatedOptions
    },
    displayedValue () {
      return this.multiple ? `${this.valueProxy.length} items selected` : (this.valueProxy ? this.valueProxy.text : '')
    },
    showClearIcon () {
      return this.valueProxy && !this.multiple && !this.disabled
    },
    computedPosition () {
      return positions[this.position]
    },
    valueProxy: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    updateSearch (val) {
      this.search = val
    },
    selectValue (selectedItem, index) {
      if (this.multiple) {
        const index = Array.findIndex(this.valueProxy, item => item.value === selectedItem.value)
        if (index === -1) {
          this.valueProxy.push(selectedItem)
          this.search = ''
          this.setScrollPosition()
        } else {
          this.valueProxy.splice(index, 1)
        }
      } else {
        this.pointer = index
        this.valueProxy = selectedItem
        this.search = ''
        this.$refs.actuator.blur()
        this.setScrollPosition()
      }
    },
    isOptionSelected (option) {
      return this.multiple ? this.value.indexOf(option) !== -1 : this.value.value === option.value
    },
    isOptionHightlighted (option, index) {
      return this.pointer === index
    },
    isFocused () {
      return document.activeElement === this.$refs.actuator
    },
    clear () {
      this.valueProxy = ''
      this.search = ''
    },
    pointerForward () {
      if (this.pointer < this.filteredOptions.length - 1) {
        this.pointer++
        this.setScrollPosition()
      }
    },
    pointerBackward () {
      if (this.pointer > 0) {
        this.pointer--
        this.setScrollPosition()
      }
    },
    setScrollPosition () {
      const optionEl = this.$refs.options.childNodes[this.pointer]
      const parentEl = optionEl.parentNode.parentNode

      parentEl.scrollTop = optionEl.offsetTop
    }
  }
}
</script>

<style lang="scss">
  .va-select {
    height: 38px;
    cursor: pointer;
    background-color: $light-gray3;
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid $brand-secondary;
    border-radius: 0 .5rem 0 0;
    padding: 0 .5rem;
    &:focus {
      outline: none;
    }
    &-position-top {
      border-bottom: none;
      border-top: 1px solid $brand-secondary;
      border-radius: 0 0 .5rem 0;
    }
    &__input {
      border: none;
      background: transparent;
      width: calc(100% - 34px);
      &:focus {
        outline: none;
      }
    }
    &__placeholder {
      opacity: .5;
    }
    &__icons {
      margin-left: auto;
      color: $va-link-color-secondary;
    }
    &__dropdown {
      outline: none;
      &.va-select__dropdown-position-top {
        box-shadow: 0 -2px 3px 0 rgba(98, 106, 119, 0.25);
      }
    }
    &__options-list {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    &__option {
      cursor: pointer;
      display: flex;
      padding: .375rem 1.5rem .375rem .5rem;
      &:hover {
        background-color: $vue-light-green;
      }
      &-selected, &-highlighted {
        color: $vue-green
      }
      &__hightlight-text, &__selected-icon {
        margin-left: auto;
      }
    }
    &__dropdown {
      margin: 0;
      padding: 0;
      background: $light-gray3;
      border-radius: .5rem;
      box-shadow: 0 2px 3px 0 rgba(98, 106, 119, 0.25);
    }
  }
</style>
