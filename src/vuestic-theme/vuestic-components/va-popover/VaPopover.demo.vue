<template>
  <VbDemo>
    <VbCard style="max-width: 800px; width: 100%;">
      <table class="table table-bordered">
        <tr>
          <th>Description</th>
          <th>VaPopover</th>
        </tr>
        <tr>
          <td>Placement<br> (default - bottom)</td>
          <td>
            <va-popover
              placement="top"
              message="Placement Top"
            >
              <va-button>Top</va-button>
            </va-popover>

            <va-popover
              placement="right"
              message="Placement Right"
            >
              <va-button>Right</va-button>
            </va-popover>

            <va-popover
              placement="left"
              message="Placement Left"
            >
              <va-button>Left</va-button>
            </va-popover>

            <va-popover
              message="Placement Bottom"
            >
              <va-button>Bottom</va-button>
            </va-popover>
          </td>
        </tr>
        <tr>
          <td>With icon</td>
          <td>
            <va-popover
              placement="right"
              icon="fa fa-gear"
              message="Popover with icon"
            >
              <va-button>Hover me</va-button>
            </va-popover>
          </td>
        </tr>
        <tr>
          <td>With Title</td>
          <td>
            <va-popover
              placement="right"
              title="Popover title"
              message="Popover text"
            >
              <va-button>Hover me</va-button>
            </va-popover>
          </td>
        </tr>
        <tr>
          <td>With Icon & Title</td>
          <td>
            <va-popover
              placement="right"
              title="Popover title"
              icon="fa fa-gear"
              message="Popover dummy text"
            >
              <va-button>Hover me</va-button>
            </va-popover>
          </td>
        </tr>
        <tr>
          <td>Background</td>
          <td>
            <va-popover
              placement="right"
              message="Popover dummy text"
              color="warning"
            >
              <va-button color="warning">Hover me</va-button>
            </va-popover>

            <va-popover
              placement="right"
              message="Popover dummy text"
              color="info"
            >
              <va-button color="info">Hover me</va-button>
            </va-popover>

            <va-popover
              placement="right"
              message="Popover dummy text"
              color="danger"
            >
              <va-button color="danger">Hover me</va-button>
            </va-popover>

            <va-popover
              placement="right"
              message="Popover dummy text"
              color="dark"
            >
              <va-button color="dark">Hover me</va-button>
            </va-popover>

            <va-popover
              placement="right"
              message="Popover dummy text"
              color="gray"
            >
              <va-button color="gray">Hover me</va-button>
            </va-popover>

            <va-popover
              placement="right"
              message="Popover dummy text"
            >
              <va-button>Hover me</va-button>
            </va-popover>
          </td>
        </tr>
        <tr>
          <td>Trigger - click</td>
          <td>
            <va-popover
              placement="right"
              message="Popover dummy text"
              trigger="click"
            >
              <va-button>Click me</va-button>
            </va-popover>
          </td>
        </tr>
        <tr>
          <td>Default open</td>
          <td>
            <va-popover
              placement="right"
              message="Popover dummy text"
              open
            >
              <va-button>Hover me</va-button>
            </va-popover>
          </td>
        </tr>
      </table>
    </VbCard>
  </VbDemo>
</template>

<script>
import VaPopover from './VaPopover'

export default {
  components: {
    VaPopover,
  },
  data () {

  },
}
</script>
