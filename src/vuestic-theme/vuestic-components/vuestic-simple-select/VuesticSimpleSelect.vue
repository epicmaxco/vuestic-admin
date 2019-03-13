<template>
  <div
    class="va-select mb-1"
    :class="{
      'va-select-active': isOpen,
      'va-select-disabled': disabled,
      [`va-select-position-${position}`]: position,
      [`va-select-${size}`]: size
     }"
    :style="{'width': width}"
    :tabindex="1"
    @focus="open()"
    @blur="close()"
    @keyup.esc="close()"
  >
    <div class="va-select__input-wrapper">
      <p v-if="label" class="title va-select__label mb-0">{{label}}</p>
      <div class="va-select__input">
        <input
          v-if="searchable"
          :placeholder="placeholder"
          :value="search"
          @input="updateSearch($event.target.value)"
          class="va-select__input__search"
        />
        <div v-else class="va-select__input__value">
          <ul class="va-select__tags" v-if="multiple && valueProxy.length <= max">
            <li v-for="item in valueProxy" :key="item.value">
              {{item.text}}
            </li>
          </ul>
          <span v-else-if="displayedValue !== ''">{{displayedValue}}</span>
          <span v-else class="va-select__placeholder">{{placeholder}}</span>
        </div>
      </div>
      <div class="va-select__icons" :class="{'va-select__icons-two': showClearIcon}">
        <i v-if="showClearIcon" @click.prevent="clear" class="icon va-icon fa fa-times-circle mr-1"/>
        <i class="icon va-icon fa" :class="{'fa-chevron-down': !isOpen, 'fa-chevron-up': isOpen}"/>
      </div>
    </div>
    <ul
      class="va-select__options-list"
      @focus="open"
      tabindex="-1"
      :style="{'max-height': maxHeight}"
      v-show="isOpen"
    >
      <li
        v-for="(option, index) in filteredOptions"
        :key="index"
        class="va-select__option"
        @click.stop="selectValue(option)"
        :class="{'va-select__option-selected': isOptionSelected(option)}"
      >
        <i class="icon va-icon fa va-select__option__icon mr-1" :class="option.icon"/>
        <span>{{option.text}}</span>
        <i v-show="isOptionSelected(option)" class="icon va-icon fa fa-check va-select__option__selected-icon"/>
      </li>
    </ul>
  </div>
</template>

<script>
// TODO: Use badge component for selected item in multiple select
import Dropdown from 'vuestic-directives/Dropdown'
import Scrollbar from '../vuestic-scrollbar/VuesticScrollbar.vue'

const positions = ['top', 'bottom']
const sizes = ['sm', 'md', 'lg']

export default {
  name: 'vuestic-simple-select',
  components: {
    Scrollbar,
  },
  directives: {
    dropdown: Dropdown,
  },
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
      validator: position => positions.indexOf(position) >= 0
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
      search: ''
    }
  },
  watch: {
    search () {
      this.$emit('search-change', this.search)
    }
  },
  computed: {
    filteredOptions () {
      const formatedOptions = this.options ? this.options.map(option => option.value ? { ...option } : { text: option, value: option }) : []
      const filteredOptions = formatedOptions.filter(option => (`${option.value}`.indexOf(this.search) !== -1 || option.text.indexOf(this.search) !== -1))
      return this.searchable ? filteredOptions : formatedOptions
    },
    displayedValue () {
      return this.multiple ? `${this.valueProxy.length} items selected` : (this.valueProxy ? this.valueProxy.text : '')
    },
    showClearIcon () {
      return this.valueProxy && !this.multiple && !this.disabled
    },
    valueProxy: {
      get () {
        return this.value
      },
      set (value) {
        return this.$emit('input', value)
      }
    }
  },
  methods: {
    open () {
      if (!this.disabled) {
        this.isOpen = true
      }
    },
    close () {
      this.isOpen = false
    },
    updateSearch (val) {
    },
    selectValue (selectedItem) {
      if (this.multiple) {
        const index = Array.findIndex(this.valueProxy, item => item.value === selectedItem.value)
        if (index === -1) {
          this.valueProxy.push(selectedItem)
        } else {
          this.valueProxy.splice(index, 1)
        }
      } else {
        this.valueProxy = selectedItem
        this.close()
      }
    },
    isOptionSelected (option) {
      return this.multiple ? this.value.indexOf(option) !== -1 : this.value.value === option.value
    },
    clear () {
      this.valueProxy = ''
    }
  }
}
</script>

<style lang="scss">
.va-select {
  min-width: 149px;
  position: relative;
  &:focus {
    outline: none;
  }
  &-active {
    .va-select__input-wrapper {
      border-bottom: 1px solid $brand-secondary;
    }
  }
  &-disabled {
    .va-select__input-wrapper {
      cursor: default;
    }
  }
  &-position{
    &-top {
      &.va-select-active {
        .va-select__input-wrapper {
          border-top: 1px solid $brand-secondary;
          border-bottom: none;
        }
      }
      .va-select__options-list {
        bottom: 100%;
        margin-bottom: 1px;
        box-shadow: 0 -2px 3px 0 rgba(98, 106, 119, 0.25);
        border-radius: .5rem .5rem 0 0;
      }
    }
  }
  &__input-wrapper {
    height: 38px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    background-color: $light-gray3;
    border-radius: .5rem;
    padding: 0 2rem 0 .5rem;
    position: relative;
  }
  &__input {
    display: flex;
    align-items: center;
    height: 100%;
    input {
      border: none;
      background: transparent;
      &:focus {
        outline: none;
      }
    }
  }
  &__placeholder {
    opacity: .5;
  }
  &__icons {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1.5rem;
    height: 1.5rem;
    right: 8px;
    margin: auto;
    font-size: 1rem;
    text-align: center;
    line-height: 1.5rem;
    color: $va-link-color-secondary;
    &-two {
      width: 3.25rem;
    }
  }
  &__tags {
    list-style: none;
    display: flex;
  }
  &__options-list {
    list-style: none;
    padding: 0;
    overflow-y: auto;
    margin-top: 1px;
    background: $light-gray3;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 2px 3px 0 rgba(98, 106, 119, 0.25);
    position: absolute;
    width: 100%;
    z-index: 1;
  }
  &__option {
    cursor: pointer;
    display: flex;
    padding: 6px 8px;
    align-items: center;
    &:hover {
      background-color: $vue-light-green;
    }
    &-selected {
      color: $vue-green;
    }
    &__selected-icon {
      margin-left: auto;
    }
  }
}
</style>
