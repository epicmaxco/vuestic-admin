<template>
  <div class="row" style="padding-top: 10px; padding-right: 30px">
    <div class="col-md-3">
            <span
              class="vuestic-color-item dot"
              @click="handlerClick"
              :style="{background: normalizedColor}"/>
    </div>
    <div class="col-md-8">
      <div class="form-group">
        <div class="input-group">
          <label>{{normalizedColor}}</label>
          <i class="bar"></i>
        </div>
      </div>
    </div>
      <div class="col-md-12" v-if="isShown === true">
        <vuestic-advanced-color-picker :value="value"
                                       @input="onModelChange"></vuestic-advanced-color-picker>
      </div>
  </div>
</template>

<script>

  import VuesticAdvancedColorPicker from './VuesticAdvancedColorPicker'

  export default {
    name: 'vuestic-color-input',
    components: {
      VuesticAdvancedColorPicker
    },
    props: {
      value: {
        default: ''
      },
      show: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        color: '#FFF',
        mutableShow: this.show
      }
    },
    computed: {
      isShown () {
        return this.mutableShow
      },
      normalizedColor: function () {
        if (this.value.hex) {
          return this.value.hex
        }
        return this.value
      }
    },
    methods: {
      handlerClick () {
        if (this.mutableShow) {
          this.mutableShow = false
        } else {
          this.mutableShow = true
        }
      },
      onModelChange (model) {
        this.$emit('input', model)
      }
    }
  }
</script>

<style lang="scss">
  .vuestic-color-item {
    list-style: none;
    width: 15px;
    height: 15px;
    float: left;
    margin-right: 5px;
    margin-bottom: 5px;
    position: relative;
    cursor: pointer;
  }

  .dot {
    margin-left: 10px;
    height: 15px;
    width: 15px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
  }

  .custom-input {
    width: 64px;
    height: 18px;
    background-color: #dddddd;
  }

</style>
