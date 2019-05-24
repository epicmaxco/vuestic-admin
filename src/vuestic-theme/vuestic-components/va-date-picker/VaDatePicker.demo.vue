<template>
  <VbDemo>
    <VbCard style="max-width: 600px; width: 100%;">
      <table class="table table-bordered">
        <tr>
          <th>Description</th>
          <th>VaDatePicker</th>
        </tr>
        <tr>
          <td>Default</td>
          <td>
            <va-date-picker
              label="Default"
              v-model="simple"
            />
          </td>
        </tr>
        <tr>
          <td>Placeholder</td>
          <td>
            <va-date-picker
              label="Default with placeholder"
              placeholder="Custom placeholder"
              v-model="placeholder"
            />
          </td>
        </tr>
        <tr>
          <td>Disabled days</td>
          <td>
            <va-date-picker
              label="Today disabled"
              :config="disabledDayConfig"
              v-model="disabledDay"
            />
          </td>
        </tr>
        <tr>
          <td>Date rage</td>
          <td>
            <va-date-picker
              label="Date range"
              v-model="range"
              :config="{mode: 'range'}"
            />
          </td>
        </tr>
        <tr>
          <td>Day time</td>
          <td>
            <va-date-picker
              label="Day time"
              v-model="dayTime"
              :config="{enableTime: true}"
            />
          </td>
        </tr>
        <tr>
          <td>Multiple</td>
          <td>
            <va-date-picker
              label="Multiple"
              v-model="multiple"
              :config="{mode: 'multiple'}"
            />
          </td>
        </tr>
        <tr>
          <td>Show week days</td>
          <td>
            <va-date-picker
              label="Show week days in dropdown"
              v-model="weekDays"
              weekDays
            />
          </td>
        </tr>
        <tr>
          <td>Success / Error</td>
          <td>
            <va-date-picker
              label="Default"
              v-model="simple2"
              success
            />
            <br>
            <va-date-picker
              label="Default"
              v-model="simple3"
              error
            />
          </td>
        </tr>
        <tr>
          <td>Disabled</td>
          <td>
            <va-date-picker
              label="Disabled"
              v-model="simple4"
              disabled
            />
          </td>
        </tr>
        <tr>
          <td>Inline</td>
          <td>
            <va-date-picker
              label="Inline"
              :config="{inline: true}"
              v-model="inline"
            />
          </td>
        </tr>
      </table>
    </VbCard>
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
      simple2: '2019-03-08',
      simple3: '2019-03-09',
      simple4: '2019-03-09',
      placeholder: '',
      disabledDay: '',
      range: '2019-03-07 to 2019-03-20',
      dayTime: '2018-05-08 14:10',
      multiple: '2019-03-07, 2019-03-20',
      weekDays: '2019-03-07',
      inline: '2019-03-07',
      disabledDayConfig: {
        disable: [new Date()],
      },
    }
  },
}
</script>
