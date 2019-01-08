<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 1500px;">
      <table class="table table-bordered test-table">
        <tr>
          <th>Description</th>
          <th>Vuestic Button</th>
        </tr>
        <tr>
          <td>Types</td>
          <td>
            <div class="row">
              <div class="col-4">
                <vuestic-button color="success">
                  Default Button
                </vuestic-button>
              </div>
              <div class="col-4">
                <vuestic-button outline color="success">
                  Outline Button
                </vuestic-button>
              </div>
              <div class="col-4">
                <vuestic-button flat color="success">
                  Flat Button
                </vuestic-button>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            Sizes
          </td>
          <td>
            <div class="row">
              <div class="col-4">
                <vuestic-button color="success">
                  Default Button
                </vuestic-button>
              </div>
              <div class="col-4">
                <vuestic-button large color="success">
                  Large Button
                </vuestic-button>
              </div>
              <div class="col-4">
                <vuestic-button small color="success">
                  Small Button
                </vuestic-button>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            Colors
          </td>
          <td>
            <div class="row">
              <div class="col-2">
                <vuestic-button color="success">
                  Success Button
                </vuestic-button>
              </div>
              <div class="col-2">
                <vuestic-button color="info">
                  Info Button
                </vuestic-button>
              </div>
              <div class="col-2">
                <vuestic-button color="danger">
                  Danger Button
                </vuestic-button>
              </div>
              <div class="col-2">
                <vuestic-button color="warning">
                  Warning Button
                </vuestic-button>
              </div>
              <div class="col-2">
                <vuestic-button color="gray">
                  Gray Button
                </vuestic-button>
              </div>
              <div class="col-2">
                <vuestic-button color="dark">
                  Dark Button
                </vuestic-button>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <vuestic-button outline color="success">
                  Success Button
                </vuestic-button>
              </div>
              <div class="col-2">
                <vuestic-button outline color="info">
                  Info Button
                </vuestic-button>
              </div>
              <div class="col-2">
                <vuestic-button outline color="danger">
                  Danger Button
                </vuestic-button>
              </div>
              <div class="col-2">
                <vuestic-button outline color="warning">
                  Warning Button
                </vuestic-button>
              </div>
              <div class="col-2">
                <vuestic-button outline color="gray">
                  Gray Button
                </vuestic-button>
              </div>
              <div class="col-2">
                <vuestic-button outline color="dark">
                  Dark Button
                </vuestic-button>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <vuestic-button flat color="success">
                  Success Button
                </vuestic-button>
              </div>
              <div class="col-2">
                <vuestic-button flat color="info">
                  Info Button
                </vuestic-button>
              </div>
              <div class="col-2">
                <vuestic-button flat color="danger">
                  Danger Button
                </vuestic-button>
              </div>
              <div class="col-2">
                <vuestic-button flat color="warning">
                  Warning Button
                </vuestic-button>
              </div>
              <div class="col-2">
                <vuestic-button flat color="gray">
                  Gray Button
                </vuestic-button>
              </div>
              <div class="col-2">
                <vuestic-button flat color="dark">
                  Dark Button
                </vuestic-button>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>Disabled state</td>
          <td>
            <div class="row">
              <div class="col-4">
                <vuestic-button disabled color="success">
                  Default Button
                </vuestic-button>
              </div>
              <div class="col-4">
                <vuestic-button disabled outline color="success">
                  Outline Button
                </vuestic-button>
              </div>
              <div class="col-4">
                <vuestic-button disabled flat color="success">
                  Flat Button
                </vuestic-button>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            Button tags
          </td>
          <td>
            <div class="row">
              <div class="col-4">
                <vuestic-button color="success">
                  Default Button
                </vuestic-button>
              </div>
              <div class="col-4">
                <vuestic-button href="http://epic-spinners.epicmax.co/" color="success">
                  A-link Button
                </vuestic-button>
              </div>
              <div class="col-4">
                <vuestic-button :to="{ name: 'charts' }" color="success">
                  Router-link Button
                </vuestic-button>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            With icons
          </td>
          <td>
            <div class="row">
              <div class="col-4">
                <vuestic-button color="success">
                  <vuestic-icon-plus slot="icon"/>
                  Plus Button
                </vuestic-button>
              </div>
              <div class="col-4">
                <vuestic-button color="success">
                  Dropdown button
                  <vuestic-icon-dropdown slot="icon-right"/>
                </vuestic-button>
              </div>
              <div class="col-4">
                <vuestic-button color="success">
                  <vuestic-icon-plus slot="icon"/>
                  Mixed button
                  <vuestic-icon-dropdown slot="icon-right"/>
                </vuestic-button>
              </div>
              <div class="col-4">
                <vuestic-button color="success">
                  <span slot="icon">A</span>
                  Button with left icon
                </vuestic-button>
              </div>
              <div class="col-4">
                <vuestic-button color="success">
                  Button with right icon
                  <span slot="icon-right">B</span>
                </vuestic-button>
              </div>
              <div class="col-4">
                <vuestic-button color="success">
                  <span slot="icon">A</span>
                  Button with two icons
                  <span slot="icon-right">B</span>
                </vuestic-button>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>

import VuesticButton from './VuesticButton'
import VuesticIconPlus from './../vuestic-icon/VuesticIconPlus'
import VuesticIconDropdown from './../vuestic-icon/VuesticIconDropdown'

export default {
  components: {
    VuesticButton,
    VuesticIconPlus,
    VuesticIconDropdown
  }
}
</script>
