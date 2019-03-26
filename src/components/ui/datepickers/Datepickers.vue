<template>
  <div class="datepickers">
    <div class="va-row">

      <div class="small-set flex lg6 xs12">
        <va-card :title="$t('datepickers.dateOfBirth')">
          <va-date-picker
            v-model="simple"
          />
        </va-card>
      </div>

      <div class="small-set flex lg6 xs12">
        <va-card :title="$t('datepickers.daysOfTheWeek')">
          <va-date-picker
            v-model="weekDays"
            weekDays
          />
        </va-card>
      </div>
    </div>
    <div class="va-row">

      <div class="small-set flex lg6 xs12">
        <va-card :title="$t('datepickers.setupMeeting')">
          <va-date-picker
            enableTime
            v-model="dayTime"
          />
        </va-card>
      </div>

      <div class="small-set flex lg6 xs12">
        <va-card :title="$t('datepickers.upcomingVacation')">
          <va-date-picker
            mode="range"
            v-model="range"
          />
        </va-card>
      </div>
    </div>
    <div class="va-row">
      <div class="small-set flex lg6 xs12">
        <va-card :title="$t('datepickers.multipleAndDisabledDates')">
          <va-date-picker
            mode="multiple"
            :disable="disable"
            v-model="multipleDates"
          />
        </va-card>
      </div>
      <div class="small-set flex lg6 xs12">
        <va-card :title="$t('datepickers.inline')">
          <va-date-picker
            mode="multiple"
            :disable="disable"
            inline
            v-model="inline"
          />
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'datepickers',
  data () {
    return {
      simple: '2019-03-07',
      weekDays: '2019-03-07',
      range: '2019-03-07 to 2019-03-20',
      disable: ['2019-03-12', '2019-03-16', '2019-03-23', '2019-03-18', '2019-03-04'],
      dayTime: '2019-03-07',
      multipleDates: '2019-03-07, 2019-03-20',
      inline: '2019-03-07, 2019-03-20'
    }
  },
}
</script>
