<template>
  <div class="demo-container">
    <div class="demo-container__item"
         style="width: 1200px; margin-top: 20px; margin-left: 20px;"
    >
      <table class="table table-bordered test-table">
        <tr>
          <th>Description</th>
          <th>Va Icon</th>
        </tr>
        <tr>
          <td>Exact Size</td>
          <td>
            <va-icon icon="iconicstroke iconicstroke-info"/>
          </td>
        </tr>
        <tr>
          <td>
            Size presets
          </td>
          <td>
            <div class="row d-flex align-items-center">
              <div class="col-6">
                <va-icon icon="iconicstroke iconicstroke-info" small/>
                <span style="margin-left: 30px; font-size: 16px;">Small</span>
              </div>
              <div class="col-6">
                <va-icon icon="iconicstroke iconicstroke-info" large/>
                <span style="margin-left: 30px; font-size: 16px;">Large</span>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            Keep size
          </td>
          <td>
            <div class="row d-flex align-items-center">
              <div class="col-6">
                <va-icon icon="iconicstroke iconicstroke-info" size="40px"/>
                <span style="margin-left: 30px; font-size: 16px;">Size: 40px</span>
              </div>
              <div class="col-6">
                <va-icon icon="iconicstroke iconicstroke-info" :size="60"/>
                <span style="margin-left: 30px; font-size: 16px;">Size: 60</span>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            Colored
          </td>
          <td>
            <div class="row">
              <div class="col-2">
                <va-icon icon="iconicstroke iconicstroke-info" color="info"/>
                <span style="margin-left: 30px; font-size: 16px;">Info</span>
              </div>
              <div class="col-2">
                <va-icon icon="iconicstroke iconicstroke-info" color="warning"/>
                <span style="margin-left: 30px; font-size: 16px;">Warning</span>
              </div>
              <div class="col-2">
                <va-icon icon="iconicstroke iconicstroke-info" color="danger"/>
                <span style="margin-left: 30px; font-size: 16px;">Danger</span>
              </div>
              <div class="col-2">
                <va-icon icon="iconicstroke iconicstroke-info" color="success"/>
                <span style="margin-left: 30px; font-size: 16px;">Success</span>
              </div>
              <div class="col-2">
                <va-icon icon="iconicstroke iconicstroke-info" color="gray"/>
                <span style="margin-left: 30px; font-size: 16px;">Gray</span>
              </div>
              <div class="col-2">
                <va-icon icon="iconicstroke iconicstroke-info" color="dark"/>
                <span style="margin-left: 30px; font-size: 16px;">Dark</span>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            Rotation
          </td>
          <td>
            <div class="row">
              <div class="col-4">
                <va-icon icon="iconicstroke iconicstroke-info" :rotation="90"/>
                <span style="margin-left: 30px; font-size: 16px;">90 deg</span>
              </div>
              <div class="col-4">
                <va-icon icon="iconicstroke iconicstroke-info" :rotation="180"/>
                <span style="margin-left: 30px; font-size: 16px;">180 deg</span>
              </div>
              <div class="col-4">
                <va-icon icon="iconicstroke iconicstroke-info" :rotation="270"/>
                <span style="margin-left: 30px; font-size: 16px;">270 deg</span>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            Fixed Width
          </td>
          <td>
            <div>
              <button class="btn btn-secondary">
                <va-icon icon="iconicstroke iconicstroke-info" fixed-width/>
                Some
                <va-icon icon="iconicstroke iconicstroke-info" fixed-width/>
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            Different Iconsets
          </td>
          <td>
            <div>
              <div class="row">
                <div class="col-4">
                  <va-icon icon="iconicstroke iconicstroke-hash" fixed-width/>
                  <span style="margin-left: 30px; font-size: 16px;">Iconic</span>
                </div>
                <div class="col-4">
                  <va-icon icon="glyphicon glyphicon-star" fixed-width/>
                  <span style="margin-left: 30px; font-size: 16px;">Glyphicon</span>
                </div>
                <div class="col-4">
                  <va-icon icon="maki maki-belowground-rail" fixed-width/>
                  <span style="margin-left: 30px; font-size: 16px;">Maki</span>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <va-icon icon="entypo entypo-note" fixed-width/>
                  <span style="margin-left: 30px; font-size: 16px;">Entypo</span>
                </div>
                <div class="col-4">
                  <va-icon icon="brandico brandico-facebook" fixed-width/>
                  <span style="margin-left: 30px; font-size: 16px;">Brandico</span>
                </div>
                <div class="col-4">
                  <va-icon icon="fa fa-anchor" fixed-width/>
                  <span style="margin-left: 30px; font-size: 16px;">Font Awesome</span>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            Colored Different Size Icons
          </td>
          <td>
            <div class="row d-flex align-items-center">
              <div class="col-2">
                <va-icon icon="iconicstroke iconicstroke-info" large color="info"/>
                <span style="margin-left: 30px; font-size: 16px;">Info</span>
              </div>
              <div class="col-2">
                <va-icon icon="iconicstroke iconicstroke-info" small color="warning"/>
                <span style="margin-left: 30px; font-size: 16px;">Warning</span>
              </div>
              <div class="col-2">
                <va-icon icon="iconicstroke iconicstroke-info" :size="35" color="danger"/>
                <span style="margin-left: 30px; font-size: 16px;">Danger</span>
              </div>
              <div class="col-2">
                <va-icon icon="iconicstroke iconicstroke-info" :size="10" color="success"/>
                <span style="margin-left: 30px; font-size: 16px;">Success</span>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            Fixed Width Icon with Rotation
          </td>
          <td>
            <div>
              <div class="row">
                <div class="col-4">
                  <va-icon icon="iconicstroke iconicstroke-info" fixed-width :rotation="60"/>
                  <span style="margin-left: 30px; font-size: 16px;">Iconic</span>
                </div>
                <div class="col-4">
                  <va-icon icon="iconicstroke iconicstroke-info" fixed-width :rotation="110"/>
                  <span style="margin-left: 30px; font-size: 16px;">Glyphicon</span>
                </div>
                <div class="col-4">
                  <va-icon icon="iconicstroke iconicstroke-info" fixed-width :rotation="200"/>
                  <span style="margin-left: 30px; font-size: 16px;">Maki</span>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
             Different Icon Sizes with Rotation
          </td>
          <td>
            <div>
              <div class="row d-flex align-items-center">
                <div class="col-3">
                  <va-icon icon="iconicstroke iconicstroke-info" small :rotation="45"/>
                  <span style="margin-left: 30px; font-size: 16px;">Iconic</span>
                </div>
                <div class="col-3">
                  <va-icon icon="iconicstroke iconicstroke-info" large :rotation="90"/>
                  <span style="margin-left: 30px; font-size: 16px;">Glyphicon</span>
                </div>
                <div class="col-3">
                  <va-icon icon="iconicstroke iconicstroke-info" :size="40" :rotation="120"/>
                  <span style="margin-left: 30px; font-size: 16px;">Maki</span>
                </div>
                <div class="col-3">
                  <va-icon icon="iconicstroke iconicstroke-info" :size="60" :rotation="210"/>
                  <span style="margin-left: 30px; font-size: 16px;">Maki</span>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            Different Iconsets with Rotation
          </td>
          <td>
            <div>
              <div class="row">
                <div class="col-3">
                  <va-icon icon="iconicstroke iconicstroke-hash" :rotation="45"/>
                  <span style="margin-left: 30px; font-size: 16px;">Iconic</span>
                </div>
                <div class="col-3">
                  <va-icon icon="maki maki-belowground-rail" :rotation="70"/>
                  <span style="margin-left: 30px; font-size: 16px;">Glyphicon</span>
                </div>
                <div class="col-3">
                  <va-icon icon="brandico brandico-facebook" :rotation="125"/>
                  <span style="margin-left: 30px; font-size: 16px;">Maki</span>
                </div>
                <div class="col-3">
                  <va-icon icon="fa fa-anchor" :rotation="160"/>
                  <span style="margin-left: 30px; font-size: 16px;">Maki</span>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            Colored Different Size Icons with Rotation
          </td>
          <td>
            <div class="row d-flex align-items-center">
              <div class="col-2">
                <va-icon icon="iconicstroke iconicstroke-info" large :rotation="45" color="info"/>
                <span style="margin-left: 30px; font-size: 16px;">Info</span>
              </div>
              <div class="col-2">
                <va-icon icon="iconicstroke iconicstroke-info" small :rotation="70" color="warning"/>
                <span style="margin-left: 30px; font-size: 16px;">Warning</span>
              </div>
              <div class="col-2">
                <va-icon icon="iconicstroke iconicstroke-info" :size="35" :rotation="125" color="danger"/>
                <span style="margin-left: 30px; font-size: 16px;">Danger</span>
              </div>
              <div class="col-2">
                <va-icon icon="iconicstroke iconicstroke-info" :size="10" :rotation="160" color="success"/>
                <span style="margin-left: 30px; font-size: 16px;">Success</span>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import VaIcon from './VaIcon.vue'

export default {
  components: {
    VaIcon
  }
}
</script>
