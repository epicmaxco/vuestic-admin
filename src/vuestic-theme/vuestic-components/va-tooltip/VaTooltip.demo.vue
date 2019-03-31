<template>
  <VbDemo>
    <VbContainer style="width: 100%" title="Tooltip with title and icon">
      <table class="table table-bordered">
        <tr>
          <th>Description</th>
          <th>Va Tooltip</th>
        </tr>
        <tr>
          <td>placement</td>
          <td>
            <div class="va-row">
              <div class="flex md6">
                <va-tooltip
                  :options="{
                placement: 'right',
                show: true
              }"
                  message="This tooltip is amazing:D"
                >
                  <va-button>
                    Right tooltip
                  </va-button>
                </va-tooltip>
                <va-tooltip
                  :options="{
                placement: 'left',
                show: true
              }"
                  class="ml-5"
                  message="This tooltip is amazing:D"
                >
                  <va-button>
                    Left tooltip
                  </va-button>
                </va-tooltip>
              </div>
              <div class="va-row flex md6">
                <va-tooltip
                  :options="{
                placement: 'bottom',
                show: true
              }"
                  message="This tooltip is amazing:D"
                >
                  <va-button>
                    Bottom tooltip
                  </va-button>
                </va-tooltip>
                <va-tooltip
                  :options="{
                placement: 'top',
                show: true
              }"
                  message="This tooltip is amazing:D"
                >
                  <va-button>
                    Top tooltip
                  </va-button>
                </va-tooltip>
              </div>
            </div>
          </td>
        </tr>
        <td>theme</td>
        <td>
          <va-tooltip
            color="success"
            :options="{
                placement: 'right',
                show: true
              }"
            message="This tooltip is amazing:D"
          >
            <va-button>
              success
            </va-button>
          </va-tooltip>
          <va-tooltip
            color="info"
            :options="{
                placement: 'right',
                show: true
              }"
            message="This tooltip is amazing:D"
          >
            <va-button>
              info
            </va-button>
          </va-tooltip>
          <va-tooltip
            color="danger"
            :options="{
                placement: 'right',
                show: true
              }"
            message="This tooltip is amazing:D"
          >
            <va-button>
              danger
            </va-button>
          </va-tooltip>
          <va-tooltip
            color="warning"
            :options="{
                placement: 'right',
                show: true
              }"
            message="This tooltip is amazing:D"
          >
            <va-button>
              warning
            </va-button>
          </va-tooltip>
          <va-tooltip
            color="gray"
            :options="{
                placement: 'right',
                show: true
              }"
            message="This tooltip is amazing:D"
          >
            <va-button>
              gray
            </va-button>
          </va-tooltip>
          <va-tooltip
            color="dark"
            :options="{
                placement: 'right',
                show: true
              }"
            message="This tooltip is amazing:D"
          >
            <va-button>
              dark
            </va-button>
          </va-tooltip>
        </td>
        <tr>
          <td>icon</td>
          <td>
            <va-tooltip
              :options="{
                placement: 'right',
                show: true
              }"
              icon="fa fa-print"
              message="This tooltip is amazing:D"
            >
              <va-button>
                tooltip with icon
              </va-button>
            </va-tooltip>
          </td>
        </tr>
        <tr>
          <td>title</td>
          <td>
            <va-tooltip
              :options="{
                placement: 'right',
                show: true
              }"
              title="Awesome title"
              message="This tooltip is amazing:D"
            >
              <va-button>
                tooltip with title
              </va-button>
            </va-tooltip>
          </td>
        </tr>
      </table>
    </VbContainer>
  </VbDemo>
</template>

<script>
import VaTooltip from './VaTooltip'

export default {
  components: {
    VaTooltip
  },
  data () {
    return {
      placementRight: 'right',
      placementLeft: 'left',
      placementBottom: 'bottom',
      placementTop: 'top',
      options: {
        placement: 'right',
        show: true,
        autoHide: false
      },
      icons: [
        'fa fa-print', 'fa fa-star'
      ],
      colors: [
        'success', 'info', 'danger', 'warning', 'gray', 'dark'
      ],
      tooltip1: {
        title: 'Hey folks!',
        message: 'This tooltip is amazing:D',
        icon: 'fa fa-print',
        color: 'warning',
      }
    }
  }
}
</script>
