<template>
  <va-dropdown
    :position="computedPosition"
    :trigger-mode="searchable || multiple ? 'click' : 'focus'"
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
        [`va-select-${size}`]: size,
        'va-select-loading': loading
      }"
      :style="{'width': width}"
      ref="actuator"
      @keydown.down.prevent="pointerForward()"
      @keydown.up.prevent="pointerBackward()"
      @keydown.enter.prevent="selectValue(filteredOptions[pointer], pointer)"
      @keyup.esc.prevent="$refs.actuator.blur()"
    >
      <p v-if="label" class="title va-select__label">{{label}}</p>
      <div class="va-select__input-wrapper">
        <input
          v-if="searchable"
          :placeholder="placeholder"
          :value="search"
          class="va-select__input"
          @input="updateSearch($event.target.value)"
        />
        <div
          v-else
          class="va-select__input"
        >
          <span
            class="va-select__tags"
            v-if="multiple && valueProxy.length <= max"
          >
            <va-chip
              v-for="(item, index) in valueProxy"
              :key="index"
            >
              {{item.text}}
            </va-chip>
          </span>
          <span v-else-if="displayedValue !== ''">{{displayedValue}}</span>
          <span v-else class="va-select__placeholder">{{placeholder}}</span>
        </div>
        <i v-if="showClearIcon" @click.prevent.stop="clear" class="icon va-icon fa fa-times-circle mr-1 va-select__clear-icon"/>
        <spring-spinner v-if="loading" :size="24" class="va-select__loading"/>
      </div>
      <i class="icon va-icon fa va-select__open-icon" :class="{'fa-chevron-down': !isFocused, 'fa-chevron-up': isFocused}"/>
    </div>
  </va-dropdown>
</template>

<script>
import VaDropdown from '../va-dropdown/VaDropdown'
import VaChip from '../va-chip/VaChip'
import SpringSpinner from 'epic-spinners/src/components/lib/SpringSpinner'

const positions = {
  'top': 'T',
  'bottom': 'B'
}
const sizes = ['sm', 'md', 'lg']
export default {
  name: 'va-select',
  components: { SpringSpinner, VaDropdown, VaChip },
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
    },
    loading: Boolean,
    noOptionsText: 'Items not found'
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
      return (this.multiple ? this.valueProxy.length : this.valueProxy) && !this.disabled
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
      this.valueProxy = this.multiple ? [] : ''
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
    min-height: 38px;
    cursor: pointer;
    background-color: $light-gray3;
    width: 100%;
    border-bottom: 1px solid $brand-secondary;
    border-radius: 0 .5rem 0 0;
    padding: .5rem 1.5rem .5rem .5rem;
    position: relative;
    &:focus {
      outline: none;
    }
    &-position-top {
      border-bottom: none;
      border-top: 1px solid $brand-secondary;
      border-radius: 0 0 .5rem 0;
    }
    &-loading {
      .va-select__clear-icon,
      .va-select__open-icon {
        opacity: .2;
      }
    }
    &__label {
      position: absolute;
      margin: 0;
    }
    &__input-wrapper {
      display: flex;
      align-items: center;
      height: 100%;
      justify-content: stretch;
    }
    &__input {
      border: none;
      background: transparent;
      &:focus {
        outline: none;
      }
    }
    &__placeholder {
      opacity: .5;
    }
    &__clear-icon {
      color: $va-link-color-secondary;
      margin-left: auto;
      width: 16px;
    }
    &__open-icon {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      right: .5rem;
      height: 1rem;
      color: $va-link-color-secondary;
    }
    &__tags {
      & > .va-chip {
        margin-bottom: .125rem;
      }
    }
    &__loading {
      position: absolute;
      right: .5rem;
      top: 0;
      bottom: 0;
      margin: auto;
      .spring-spinner-rotator {
        border-right-color: $vue-green !important;
        border-top-color: $vue-green !important;
      }
    }
    &__dropdown {
      outline: none;
      margin: 0;
      padding: 0;
      background: $light-gray3;
      border-radius: .5rem;
      box-shadow: 0 2px 3px 0 rgba(98, 106, 119, 0.25);
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
  }
</style>
