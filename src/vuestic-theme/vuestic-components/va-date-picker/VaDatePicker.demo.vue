<template>
  <VbDemo>
    <VbContainer title="Simple datepicker">
      <va-date-picker
        v-model="simple"
      />
      {{simple}}
    </VbContainer>
    <VbContainer title="Datepicker with date range">
      <va-date-picker
        v-model="range"
        :config="{mode: 'range'}"
      />
      {{range}}
    </VbContainer>
    <VbContainer title="Datepicker with time">
      <va-date-picker
        v-model="dayTime"
        :config="{enableTime: true}"
        enableTime
      />
      {{dayTime}}
    </VbContainer>
    <VbContainer title="Multiple datepicker">
      <va-date-picker
        v-model="multiple"
        :config="{mode: 'multiple'}"
      />
      {{multiple}}
    </VbContainer>
    <VbContainer title="Datepicker with days of week">
      <va-date-picker
        v-model="weekDays"
        :config="{mode: 'multiple'}"
        weekDays
      />
      {{weekDays}}
    </VbContainer>
    <VbContainer title="Inline datepicker">
      <va-date-picker
        v-model="inline"
        :config="{inline: true}"
      />
      {{inline}}
    </VbContainer>
  </VbDemo>
</template>

<script>
import VaDatePicker from './VaDatePicker.vue'

export default {
  components: {
    VaDatePicker,
  },
  data () {
    return {
      simple: '2019-03-07',
      range: '2019-03-07 to 2019-03-20',
      dayTime: '2019-03-07',
      multiple: '2019-03-07, 2019-03-20',
      weekDays: '2019-03-07',
      inline: '2019-03-07',
    }
  },
}
</script>
