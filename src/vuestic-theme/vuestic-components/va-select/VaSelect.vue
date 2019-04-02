<template>
  <va-dropdown
    :position="computedPosition"
    :trigger-mode="searchable || multiple ? 'click' : 'focus'"
    :disabled="disabled"
    className="va-select__dropdown"
    :max-width="width"
    :max-height="maxHeight"
    @triggerVisibility="triggerVisibility"
    :visible="visible"
  >
    <ul
      class="va-select__options-list"
      :style="{'max-height': this.maxHeight}"
      ref="options"
    >
      <li
        v-for="option in filteredOptions"
        :key="getKey(option)"
        class="va-select__option"
        @click.stop="selectOption(option)"
        :class="{
          'va-select__option--selected': isSelected(option),
        }"
      >
        <!--'va-select__option&#45;&#45;highlighted': isOptionHightlighted(option)-->
        <!--<i class="icon va-icon fa va-select__option__icon mr-1" :class="option.icon"/>-->
        <span>{{getText(option)}}</span>
        <!--<span v-show="isOptionHightlighted(option, index)" class="va-select__option__hightlight-text">Press enter to select</span>-->
        <i v-show="isSelected(option)" class="icon va-icon fa fa-check va-select__option__selected-icon"/>
      </li>
    </ul>
    <div
      class="va-select__options-list no-options"
      v-if="!filteredOptions.length"
    >
      {{noOptionsText}}
    </div>

    <div
      slot="actuator"
      :tabindex="1"
      class="va-select"
      :class="{
        'va-select--loading': loading
      }"
      :style="{'width': width}"
      ref="actuator"
      @keydown.down.prevent="pointerForward()"
      @keydown.up.prevent="pointerBackward()"
      @keyup.esc.prevent="$refs.actuator.blur()"
    >
      <!--@keydown.enter.prevent="selectValue(filteredOptions[pointer], pointer)"-->

      <label v-if="label" class="va-select__label">{{label}}</label>
      <div class="va-select__input-wrapper" :class="{'va-select__input-wrapper-block': multiple && visible && searchable}">
        <div
          class="va-select__input"
          v-if="!visible || !searchable || (multiple && visible) || disabled"
        >
          <span
            class="va-select__tags"
            v-if="multiple && valueProxy.length <= max"
          >
            <va-chip
              v-for="(selectedOption) in selectedOptionList"
              :key="getKey(selectedOption)"
            >
              {{getText(selectedOption)}}
            </va-chip>
          </span>
          <span v-else-if="displayedText">{{displayedText}}</span>
          <span v-else class="va-select__placeholder">{{placeholder}}</span>
        </div>
        <input
          v-if="searchable"
          :placeholder="placeholder"
          :value="search"
          class="va-select__input"
          @input="updateSearch($event.target.value)"
          ref="search"
          :style="inputStyles"
        />
        <va-icon
          v-if="showClearIcon"
          class="va-select__clear-icon mr-1"
          icon="fa fa-times-circle"
          @click.prevent.stop="clear()"
        />
        <spring-spinner
          :color="$themes.success"
          v-if="loading"
          :size="24"
          class="va-select__loading"
        />
      </div>
      <i class="icon va-icon fa va-select__open-icon" :class="{'fa-chevron-down': !visible || (visible && disabled), 'fa-chevron-up': visible && !disabled}"/>
    </div>
  </va-dropdown>
</template>

<script>
import VaDropdown from '../va-dropdown/VaDropdown'
import VaChip from '../va-chip/VaChip'
import { SpringSpinner } from 'epic-spinners'
import VaIcon from '../va-icon/VaIcon'

const positions = {
  'top': 'T',
  'bottom': 'B',
}
const sizes = ['sm', 'md', 'lg']
export default {
  name: 'va-select',
  components: { VaIcon, SpringSpinner, VaDropdown, VaChip },
  data () {
    return {
      search: '',
      pointer: 0,
      visible: false,
    }
  },
  props: {
    label: String,
    placeholder: String,
    options: {
      type: Array,
      default: () => [],
    },
    value: {},
    position: {
      type: String,
      default: 'bottom',
      validator: position => Object.keys(positions).indexOf(position) >= 0,
    },
    max: {
      type: Number,
      default: 5,
    },
    searchable: Boolean,
    multiple: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    loading: Boolean,
    size: {
      type: String,
      default: 'md',
      validator: size => sizes.indexOf(size) >= 0,
    },
    width: {
      type: String,
      default: '400px',
    },
    maxHeight: {
      type: String,
      default: '128px',
    },
    keyBy: {
      type: String,
      default: 'id',
    },
    textBy: {
      type: String,
      default: 'text',
    },
    clearValue: {
      default: null,
    },
    noOptionsText: {
      type: String,
      default: 'Items not found',
    },
  },
  watch: {
    search (val) {
      this.$emit('update-search', val)
    },
  },
  computed: {
    displayedText () {
      if (!this.value) {
        return ''
      }

      if (this.multiple) {
        if (!this.value.length) {
          return ''
        }
        return `${this.valueProxy.length} items selected`
      }

      // We try to find a match from options, if we don't find any - we take value.
      // This way select can display value even when options are not loaded yet.
      const selectedOption = this.selectedOption || this.value
      const isString = typeof selectedOption === 'string'
      return isString ? selectedOption : selectedOption[this.textBy]
    },
    selectedOptionList () {
      if (!this.value || !this.multiple) {
        return []
      }

      // TODO Probably worth optimizing with index.
      return this.options.filter(option => {
        this.value.find(
          selectedOption => this.compareOptions(option, selectedOption),
        )
      })
    },
    selectedOption () {
      if (!this.value || this.multiple) {
        return null
      }

      return this.options.find(option => this.compareOptions(option, this.value)) || null
    },
    filteredOptions () {
      if (!this.search) {
        return this.options
      }

      return this.options.filter(option => {
        const optionText = this.getText(option).toUpperCase()
        const search = this.search.toUpperCase()
        return optionText.includes(search)
      })
    },
    showClearIcon () {
      if (this.disabled) {
        return false
      }
      return this.multiple ? this.value.length : this.value
    },
    computedPosition () {
      return positions[this.position]
    },
    inputStyles () {
      return this.visible && this.searchable && !this.disabled
        ? { width: '100%' }
        : { width: '0', position: 'absolute', padding: '0' }
    },
    valueProxy: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      },
    },
  },
  methods: {
    getText (option) {
      if (typeof option === 'string') {
        return option
      }
      return option[this.textBy]
    },
    getKey (option) {
      if (typeof option === 'string') {
        return option
      }
      return option[this.keyBy]
    },
    updateSearch (val) {
      this.search = val
    },
    compareOptions (one, two) {
      // identity check works nice for strings and exact matches.
      if (one === two) {
        return true
      }
      if (typeof this.value === 'string') {
        return false
      }
      return one[this.keyBy] === two[this.keyBy]
    },
    isSelected (option) {
      if (this.multiple) {
        return this.selectedOptionList.includes(option)
      } else {
        return this.selectedOption === option
      }
    },
    selectOption (option) {
      this.search = ''
      const isSelected = this.isSelected(option)
      const value = this.value || []

      if (this.multiple) {
        if (isSelected) {
          // TODO Probably worth optimizing a bit.
          this.valueProxy = value.filter(optionSelected => option !== optionSelected)
        } else {
          this.valueProxy = [...value, option]
          this.setScrollPosition()
        }
      } else {
        // I not getting what that was for.
        // this.pointer = index

        this.valueProxy = option
        this.search = ''

        // This looks cryptic.
        if (this.searchable) {
          this.$children[0].hide()
        } else {
          this.$refs.actuator.blur()
        }

        this.setScrollPosition()
      }
    },
    isOptionHightlighted (option, index) {
      return this.pointer === index
    },
    clear () {
      this.valueProxy = this.multiple ? [] : this.clearValue
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
    },
    triggerVisibility (val) {
      this.visible = val
      // focus on search input if dropdown is open
      if (val && this.searchable && !this.disabled) {
        this.$refs.search.focus()
      }
    },
  },
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

.va-select {
  min-height: 38px;
  cursor: pointer;
  background-color: $light-gray3;
  width: 100%;
  border-bottom: 1px solid $brand-secondary;
  border-radius: 0 .5rem 0 0;
  padding: .5rem 1.5rem .5rem .5rem;
  position: relative;

  &--disabled {

  }

  &:focus {
    outline: none;
  }

  &--loading {
    .va-select__clear-icon,
    .va-select__open-icon {
      opacity: .2;
    }
  }

  &__label {
    @include va-title();
    position: absolute;
    margin: 0;
  }

  &__input-wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: stretch;

    &-block {
      display: block;

      .va-select__input {
        padding-right: 1.5rem;
      }

      .va-select__clear-icon {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 1.5rem;
        margin: auto;
        height: 16px;
      }
    }
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
    & > .va-chip:last-of-type {
      margin-top: .125rem;
    }
  }

  &__loading {
    position: absolute;
    right: .5rem;
    top: 0;
    bottom: 0;
    margin: auto;
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

    &.no-options {
      padding: .5rem;
    }
  }

  &__option {
    cursor: pointer;
    display: flex;
    padding: .375rem 1.5rem .375rem .5rem;

    &:hover {
      background-color: $vue-light-green;
    }

    &--selected, &--highlighted {
      color: $vue-green
    }

    &__hightlight-text, &__selected-icon {
      margin-left: auto;
    }
  }
}
</style>
