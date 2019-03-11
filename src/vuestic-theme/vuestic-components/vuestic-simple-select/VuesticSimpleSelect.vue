<template>
  <div
    class="va-select mb-1"
    :class="{
      'va-select-active': isOpen,
      'va-select-disabled': disabled,
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
          <span v-else>{{displayedValue}}</span>
        </div>
        <i v-if="valueProxy && !multiple && !disabled" @click="clear" class="icon va-icon fa fa-times-circle va-select__clear"/>
      </div>
    </div>
    <ul class="va-select__options-list" v-show="isOpen" @focus="open" tabindex="-1">
      <li
        v-for="(option, index) in filteredOptions"
        :key="index"
        class="va-select__option"
        @click.stop="selectValue(option)"
        :class="{'va-select__option-selected': isOptionSelected(option)}"
      >
        <span>{{option.text}}</span>
        <i v-show="isOptionSelected(option)" class="icon va-icon fa fa-check"/>
      </li>
    </ul>
  </div>
</template>

<script>
// TODO: Use badge component for selected item in multiple select
import Dropdown from 'vuestic-directives/Dropdown'
import Scrollbar from '../vuestic-scrollbar/VuesticScrollbar.vue'

const positions = ['top', 'top right', 'right', 'right bottom', 'bottom', 'left bottom', 'left', 'left top']
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
    label: String,
    size: {
      type: String,
      default: 'md',
      validator: size => sizes.indexOf(size) >= 0
    },
    width: {
      type: String,
      default: '400px'
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
      return this.options ? this.options.map(option => option.value ? option : { text: option, value: option }) : []
    },
    displayedValue () {
      return this.multiple ? `${this.valueProxy.length} items selected` : (this.valueProxy ? this.valueProxy.text : this.placeholder)
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
  &__input-wrapper {
    height: 38px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    background-color: $light-gray3;
    border-radius: 8px;
  }
  &__input {
    display: flex;
    vertical-align: middle;
    input {
      border: none;
      background: transparent;
      &:focus {
        outline: none;
      }
    }
  }
  &__clear {
    margin-left: auto;
  }
  &__tags {
    list-style: none;
    display: flex;
  }
  &__options-list {
    list-style: none;
    padding: 0;
    max-height: 128px;
    overflow-y: auto;
    margin-top: 1px;
    background: $light-gray3;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 2px 3px 0 rgba(98, 106, 119, 0.25);
  }
  &__option {
    cursor: pointer;
    display: flex;
    padding: 6px 8px;
    &:hover {
      background-color: $vue-light-green;
    }
    &-selected {
      color: $vue-green;
    }
    .icon {
      margin-left: auto;
    }
  }
}
</style>
