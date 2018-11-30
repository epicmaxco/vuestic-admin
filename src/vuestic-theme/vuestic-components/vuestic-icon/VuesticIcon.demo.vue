<template>
  <div class="demo-container">
    <div class="demo-container__item"
         style="width: 900px; margin-top: 20px; margin-left: 20px;"
    >
      <table class="table table-bordered test-table">
        <tr>
          <th>Description</th>
          <th>Vuestic Icon</th>
        </tr>
        <tr>
          <td>Exact Size</td>
          <td>
            <vuestic-icon icon="iconicstroke iconicstroke-info"/>
          </td>
        </tr>
        <tr>
          <td>
            Size presets
          </td>
          <td>
            <div>
              <vuestic-icon icon="iconicstroke iconicstroke-info" small/>
              <span style="margin-left: 30px; font-size: 16px;">Small</span>
            </div>
            <div>
              <vuestic-icon icon="iconicstroke iconicstroke-info" large/>
              <span style="margin-left: 30px; font-size: 16px;">Large</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            Keep size
          </td>
          <td>
            <div>
              <vuestic-icon icon="iconicstroke iconicstroke-info" :size="20"/>
              <span style="margin-left: 30px; font-size: 16px;">Size: 20</span>
            </div>
            <div>
              <vuestic-icon icon="iconicstroke iconicstroke-info" size="40px"/>
              <span style="margin-left: 30px; font-size: 16px;">Size: 40px</span>
            </div>
            <div>
              <vuestic-icon icon="iconicstroke iconicstroke-info" :size="60"/>
              <span style="margin-left: 30px; font-size: 16px;">Size: 60</span>
            </div>
            <div>
              <vuestic-icon icon="iconicstroke iconicstroke-info" size="80px"/>
              <span style="margin-left: 30px; font-size: 16px;">Size: 80px</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            Colored
          </td>
          <td>
            <div>
              <vuestic-icon icon="iconicstroke iconicstroke-info" large color="info"/>
              <span style="margin-left: 30px; font-size: 16px;">Info</span>
            </div>
            <div>
              <vuestic-icon icon="iconicstroke iconicstroke-info" large color="warning"/>
              <span style="margin-left: 30px; font-size: 16px;">Warning</span>
            </div>
            <div>
              <vuestic-icon icon="iconicstroke iconicstroke-info" large color="danger"/>
              <span style="margin-left: 30px; font-size: 16px;">Danger</span>
            </div>
            <div>
              <vuestic-icon icon="iconicstroke iconicstroke-info" large color="success"/>
              <span style="margin-left: 30px; font-size: 16px;">Success</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            Fixed Width
          </td>
          <td>
            <div>
              <vuestic-icon icon="iconicstroke iconicstroke-info" color="info" fixed-width/>
              <span style="margin-left: 30px; font-size: 16px;">Item 1</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            Different Iconsets
          </td>
          <td>
            <div>
              <div>
                <vuestic-icon icon="iconicstroke iconicstroke-hash" fixed-width/>
                <span style="margin-left: 30px; font-size: 16px;">Iconic</span>
              </div>
              <div>
                <vuestic-icon icon="glyphicon glyphicon-star" fixed-width/>
                <span style="margin-left: 30px; font-size: 16px;">Glyphicon</span>
              </div>
              <div>
                <vuestic-icon icon="maki maki-belowground-rail" fixed-width/>
                <span style="margin-left: 30px; font-size: 16px;">Maki</span>
              </div>
              <div>
                <vuestic-icon icon="entypo entypo-note" fixed-width/>
                <span style="margin-left: 30px; font-size: 16px;">Entypo</span>
              </div>
              <div>
                <vuestic-icon icon="brandico brandico-facebook" fixed-width/>
                <span style="margin-left: 30px; font-size: 16px;">Brandico</span>
              </div>
              <div>
                <vuestic-icon icon="fa fa-anchor" fixed-width/>
                <span style="margin-left: 30px; font-size: 16px;">Font Awesome</span>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import VuesticIcon from './VuesticIcon.vue'

export default {
  components: {
    VuesticIcon
  }
}
</script>
