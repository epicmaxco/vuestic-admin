<template>
  <div class="dropdowns">
    <div class="va-row">
      <div class="flex md12">
        <vuestic-widget :headerText="$t('dropdown.default')">
          <div class="va-row btn-margin-row">
            <div
              class="flex sm6 lg6 xl3 mb4 justify--center"
              v-for="(dropdown, index) in dropdowns"
              :key="index"
            >
                <va-dropdown
                  :position="dropdown.position"
                >
                  <va-button
                    type="button" class="theme-toggle"
                    slot="actuator" icon-right="ion-ios-arrow-down arrow-down">
                    {{$t(`dropdown.${dropdown.text}`)}}
                  </va-button>
                  <div class="q-popover__container">
                    <a
                      class="dropdown-item"
                      href="#"
                      v-for="(link, index) in links"
                      :key="index"
                    >{{ link }}</a>
                    <div class="flex lg6"></div>
                  </div>
                </va-dropdown>
            </div>
          </div>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dropdowns',
  data () {
    return {
      links: [
        'Action',
        'Another action',
        'Something else here',
      ],
      dropdowns: [
        {
          text: 'top',
          position: 'T',
        },
        {
          text: 'right',
          position: 'R',
        },
        {
          text: 'bottom',
          position: 'B',
        },
        {
          text: 'left',
          position: 'L',
        },
      ],
    }
  },
}
</script>
