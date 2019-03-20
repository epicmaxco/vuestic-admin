<template>
  <div class="datepickers">
    <div class="va-row">

      <div class="small-set flex lg6 xs12">
        <vuestic-widget :headerText="$t('datepickers.dateOfBirth')">
          <va-date-picker
            v-model="simple"
          />
        </vuestic-widget>
      </div>

      <div class="small-set flex lg6 xs12">
        <vuestic-widget :headerText="$t('datepickers.daysOfTheWeek')">
          <va-date-picker
            v-model="weekDays"
            weekDays
          />
        </vuestic-widget>
      </div>
    </div>
    <div class="va-row">

      <div class="small-set flex lg6 xs12">
        <vuestic-widget :headerText="$t('datepickers.setupMeeting')">
          <va-date-picker
            enableTime
            v-model="dayTime"
          />
        </vuestic-widget>
      </div>

      <div class="small-set flex lg6 xs12">
        <vuestic-widget :headerText="$t('datepickers.upcomingVacation')">
          <va-date-picker
            mode="range"
            v-model="range"
          />
        </vuestic-widget>
      </div>
    </div>
    <div class="small-set flex lg6 xs12">
      <vuestic-widget :headerText="$t('datepickers.multipleAndDisabledDates')">
        <va-date-picker
          mode="multiple"
          :disable="disable"
          v-model="multipleDates"
        />
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
import VaDatePicker
  from '../../../vuestic-theme/vuestic-components/va-date-picker/VaDatePicker'
export default {
  name: 'datepickers',
  components: { VaDatePicker },
  data () {
    return {
      simple: '2019-03-07',
      weekDays: '2019-03-07',
      range: '2019-03-07 to 2019-03-20',
      disable: ['2019-03-12', '2019-03-16', '2019-03-23', '2019-03-18', '2019-03-04'],
      dayTime: '2019-03-07',
      multipleDates: '2019-03-07, 2019-03-20',
    }
  },
}
</script>
