<template>
  <div class="sets-list row">
    <div class="col-md-12">
      <div class="row">
        <div class="col-lg-4">
          <vuestic-widget :headerText="$t('dateTimePicker.basic')">
            <div class="form-group">
              <div class="input-group">
                <vuestic-date-picker
                  id="date-picker-basic"
                  v-model="simple"
                />
                <label class="control-label" for="date-picker-basic">{{ $t('dateTimePicker.basic') }}</label>
                <i class="bar"></i>
              </div>
            </div>
          </vuestic-widget>
        </div>
        <div class="col-lg-4">
          <vuestic-widget :headerText="$t('dateTimePicker.time')">
            <div class="form-group">
              <div class="input-group">
                <vuestic-date-picker
                  id="date-picker-time"
                  :config="{enableTime: true}"
                  v-model="time"
                />
                <label class="control-label" for="date-picker-time">{{ $t('dateTimePicker.time') }}</label>
                <i class="bar"></i>
              </div>
            </div>
          </vuestic-widget>
        </div>
        <div class="col-lg-4">
          <vuestic-widget :headerText="$t('dateTimePicker.range')">
            <div class="form-group">
              <div class="input-group">
                <vuestic-date-picker
                  id="date-picker-range"
                  :config="{mode: 'range'}"
                  v-model="range"
                />
                <label class="control-label" for="date-picker-range">{{ $t('dateTimePicker.range') }}</label>
                <i class="bar"></i>
              </div>
            </div>
          </vuestic-widget>
        </div>
        <div class="col-lg-4">
          <vuestic-widget :headerText="$t('dateTimePicker.multiple')">
            <div class="form-group">
              <div class="input-group">
                <vuestic-date-picker
                  id="date-picker-multiple"
                  :config="{mode: 'multiple'}"
                  v-model="multiple"
                />
                <label class="control-label" for="date-picker-multiple">{{ $t('dateTimePicker.multiple') }}</label>
                <i class="bar"></i>
              </div>
            </div>
          </vuestic-widget>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VuesticWidget
    from '../../../vuestic-theme/vuestic-components/vuestic-widget/VuesticWidget.vue'
  import VuesticDatePicker from '../../../vuestic-theme/vuestic-components/vuestick-date-picker/VuesticDatePicker.vue'

  export default {
    name: 'date-time-pickers',
    data () {
      return {
        simple: '2018-06-12',
        time: '2018-04-26 12:20',
        range: '2018-04-10 to 2018-04-18',
        multiple: '2018-04-25, 2018-04-27',
      }
    },
    components: {
      VuesticDatePicker,
      VuesticWidget
    },
  }
</script>

<style lang="scss">

</style>
