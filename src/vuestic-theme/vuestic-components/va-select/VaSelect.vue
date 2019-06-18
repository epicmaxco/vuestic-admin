<template>
  <va-dropdown
    :position="position"
    :disabled="disabled"
    className="va-select__dropdown"
    :style="{width}"
    :max-height="maxHeight"
    keepAnchorWidth
    ref="dropdown"
  >
    <ul
      class="va-select__options-list"
      :style="{'max-height': this.maxHeight}"
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
        <va-icon v-show="option.icon" :icon="option.icon" class="mr-1"/>
        <span>{{getText(option)}}</span>
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
      slot="anchor"
      :tabindex="1"
      class="va-select"
      :class="{
        'va-select--loading': loading
      }"
    >
      <label
        class="va-select__label"
        aria-hidden="true"
      >{{label}}</label>
      <div
          class="va-select__input"
          :style="inputWrapperStyles"
          v-if="!visible || !searchable || (multiple && visible) || disabled"
        >
          <span
            class="va-select__tags"
            v-if="multiple && valueProxy.length <= max"
          >
            <va-chip
              v-for="option in valueProxy"
              :key="getKey(option)"
            >
              {{getText(option)}}
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
          @click.native.stop="clear()"
        />
        <spring-spinner
          :color="$themes.success"
          v-if="loading"
          :size="24"
          class="va-select__loading"
        />
      <i
        class="icon va-icon fa va-select__open-icon"
        :class="{'fa-chevron-down': !visible || (visible && disabled), 'fa-chevron-up': visible && !disabled}"
      />
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
export default {
  name: 'va-select',
  components: { VaIcon, SpringSpinner, VaDropdown, VaChip },
  data () {
    return {
      search: '',
      mounted: false,
    }
  },
  props: {
    value: {},
    label: String,
    placeholder: String,
    options: {
      type: Array,
      default: () => [],
    },
    position: {
      type: String,
      default: 'bottom',
      validator: position => Object.keys(positions).includes(position),
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
    visible (val) {
      if (val && this.searchable) {
        this.$refs.search.focus()
      }
    },
  },
  computed: {
    visible () {
      return this.mounted ? this.$refs.dropdown.isClicked : false
    },
    displayedText () {
      if (!this.valueProxy) {
        return ''
      }
      if (this.multiple) {
        return this.valueProxy.length ? `${this.valueProxy.length} items selected` : ''
      }
      // We try to find a match from options, if we don't find any - we take value.
      // This way select can display value even when options are not loaded yet.
      const selectedOption = this.valueProxy || this.selectedOption
      const isString = typeof selectedOption === 'string'
      return isString ? selectedOption : selectedOption[this.textBy]
    },
    selectedOption () {
      return (!this.value || this.multiple) ? null : this.options.find(option => this.compareOptions(option, this.value)) || null
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
    inputWrapperStyles () {
      let paddingRight = 1.5
      if (this.showClearIcon) {
        paddingRight += 2
      }
      return { paddingRight: `${paddingRight}rem` }
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
      return typeof option === 'string' ? option : option[this.textBy]
    },
    getKey (option) {
      return typeof option === 'string' ? option : option[this.keyBy]
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
      return this.multiple ? this.valueProxy.includes(option) : this.valueProxy === option
    },
    selectOption (option) {
      this.search = ''
      const isSelected = this.isSelected(option)
      const value = this.value || []

      if (this.multiple) {
        this.valueProxy = isSelected
          ? value.filter(optionSelected => option !== optionSelected)
          : [...value, option]
      } else {
        this.valueProxy = typeof option === 'string' ? option : { ...option }
        this.search = ''
      }
      this.$refs.dropdown.updatePopper()
    },
    clear () {
      this.valueProxy = this.multiple ? [] : this.clearValue
      this.search = ''
    },
  },
  mounted () {
    this.mounted = true
  },
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

.va-select {
  cursor: pointer;
  background-color: $light-gray3;
  display: flex;
  align-items: flex-end;
  position: relative;
  width: 100%;
  min-height: 2.375rem;
  border-color: $brand-secondary;
  border-style: solid;
  border-width: 0 0 thin 0;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;

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
    bottom: 0.875rem;
    left: 0.5rem;
    margin-bottom: 0.5rem;
    max-width: calc(100% - 0.25rem);
    @include va-ellipsis();
    transform-origin: top left;
  }

  &__input-wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    justify-content: stretch;

    &-block {
      display: block;

      .va-select__input {
        padding-right: 1.5rem;
      }
    }
  }

  &__input {
    border: none;
    background: transparent;
    padding: 0.25rem 0.5rem;

    &:focus {
      outline: none;
    }
  }

  &__placeholder {
    opacity: .5;
  }

  &__clear-icon {
    color: $va-link-color-secondary;
    width: 1.5rem;
    height: 1.5rem;
    padding: .25rem;
    position: absolute;
    top: .4375rem;
    right: 1.5rem;
    margin: auto;
  }

  &__open-icon {
    @extend .va-select__clear-icon;
    right: .5rem;
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
    width: 100%;
    background-color: $light-gray3;
    list-style: none;
    margin: 0;
    padding: 0;
    overflow-y: auto;
    box-shadow: $datepicker-box-shadow;
    border-radius: .5rem;

    &.no-options {
      padding: .5rem;
    }
  }

  &__option {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: .375rem .5rem .375rem .5rem;

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
