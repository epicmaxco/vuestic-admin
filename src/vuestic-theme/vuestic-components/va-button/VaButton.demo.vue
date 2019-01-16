<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 100%;">
      <table class="table table-bordered">
        <tr>
          <th>Description</th>
          <th>Vuestic Button</th>
        </tr>
        <tr>
          <td>Types</td>
          <td>
            <va-button color="success">
              Default Button
            </va-button>
            <va-button outline color="success">
              Outline Button
            </va-button>
            <va-button flat color="success">
              Flat Button
            </va-button>
          </td>
        </tr>
        <tr>
          <td>Sizes</td>
          <td>
            <va-button color="success">
              Default Button
            </va-button>
            <va-button large color="success">
              Large Button
            </va-button>
            <va-button small color="success">
              Small Button
            </va-button>
          </td>
        </tr>
        <tr>
          <td>Primary Button Colors</td>
          <td>
            <div>
              <va-button color="success">
                Success Button
              </va-button>
              <va-button color="info">
                Info Button
              </va-button>
              <va-button color="danger">
                Danger Button
              </va-button>
              <va-button color="warning">
                Warning Button
              </va-button>
              <va-button color="gray">
                Gray Button
              </va-button>
              <va-button color="dark">
                Dark Button
              </va-button>
            </div>
          </td>
        </tr>
        <tr>
          <td>Outline Button Colors</td>
          <td>
            <div>
              <va-button color="success">
                Success Button
              </va-button>
              <va-button color="info">
                Info Button
              </va-button>
              <va-button color="danger">
                Danger Button
              </va-button>
              <va-button color="warning">
                Warning Button
              </va-button>
              <va-button color="gray">
                Gray Button
              </va-button>
              <va-button color="dark">
                Dark Button
              </va-button>
            </div>
            <div>
              <va-button outline color="success">
                Success Button
              </va-button>
              <va-button outline color="info">
                Info Button
              </va-button>
              <va-button outline color="danger">
                Danger Button
              </va-button>
              <va-button outline color="warning">
                Warning Button
              </va-button>
              <va-button outline color="gray">
                Gray Button
              </va-button>
              <va-button outline color="dark">
                Dark Button
              </va-button>
            </div>
            <div>
              <va-button flat color="success">
                Success Button
              </va-button>
              <va-button flat color="info">
                Info Button
              </va-button>
              <va-button flat color="danger">
                Danger Button
              </va-button>
              <va-button flat color="warning">
                Warning Button
              </va-button>
              <va-button flat color="gray">
                Gray Button
              </va-button>
              <va-button flat color="dark">
                Dark Button
              </va-button>
            </div>
          </td>
        </tr>
        <tr>
          <td>Disabled state</td>
          <td>
            <va-button disabled color="success">
              Default Button
            </va-button>
            <va-button disabled outline color="success">
              Outline Button
            </va-button>
            <va-button disabled flat color="success">
              Flat Button
            </va-button>
          </td>
        </tr>
        <tr>
          <td>Button tags</td>
          <td>
            <va-button color="success">
              Default Button
            </va-button>
            <va-button
              href="http://epic-spinners.epicmax.co/"
              color="success"
            >
              A-link Button
            </va-button>
            <va-button
              :to="{ name: 'charts' }"
              color="success"
            >
              Router-link Button
            </va-button>
          </td>
        </tr>
        <tr>
          <td>Primary Buttons With icons</td>
          <td>
            <va-button
              color="success"
              icon="brandico brandico-facebook"
            >
              Plus Button
            </va-button>
            <va-button
              color="success"
              icon-right="iconicstroke iconicstroke-info"
            >
              Dropdown button
            </va-button>
            <va-button
              color="success"
              icon="brandico brandico-facebook"
              icon-right="iconicstroke iconicstroke-info"
            >
              Mixed button
            </va-button>
          </td>
        </tr>
        <tr>
          <td>Outline Buttons With icons</td>
          <td>
            <va-button
              outline
              color="success"
              icon="brandico brandico-facebook"
            >
              Plus Button
            </va-button>
            <va-button
              outline
              color="success"
              icon-right="iconicstroke iconicstroke-info"
            >
              Dropdown button
            </va-button>
            <va-button
              outline
              color="success"
              icon="brandico brandico-facebook"
              icon-right="iconicstroke iconicstroke-info"
            >
              Mixed button
            </va-button>
          </td>
        </tr>
        <tr>
          <td>Flat Buttons With icons</td>
          <td>
            <va-button
              flat
              color="success"
              icon="brandico brandico-facebook"
            >
              Plus Button
            </va-button>
            <va-button
              flat
              color="success"
              icon-right="iconicstroke iconicstroke-info"
            >
              Dropdown button
            </va-button>
            <va-button
              flat
              color="success"
              icon="brandico brandico-facebook"
              icon-right="iconicstroke iconicstroke-info"
            >
              Mixed button
            </va-button>
          </td>
        </tr>
        <tr>
          <td>Large Buttons With icons</td>
          <td>
            <va-button
              large
              color="success"
              icon="brandico brandico-facebook"
            >
              Plus Button
            </va-button>
            <va-button
              outline large
              color="success"
              icon-right="iconicstroke iconicstroke-info"
            >
              Dropdown button
            </va-button>
            <va-button
              flat large
              color="success"
              icon="brandico brandico-facebook"
              icon-right="iconicstroke iconicstroke-info"
            >
              Mixed button
            </va-button>
          </td>
        </tr>
        <tr>
          <td>Small Buttons With icons</td>
          <td>
            <va-button
              small
              color="success"
              icon="brandico brandico-facebook"
            >
              Plus Button
            </va-button>
            <va-button
              outline small
              color="success"
              icon-right="iconicstroke iconicstroke-info"
            >
              Dropdown button
            </va-button>
            <va-button
              flat small
              color="success"
              icon="brandico brandico-facebook"
              icon-right="iconicstroke iconicstroke-info"
            >
              Mixed button
            </va-button>
          </td>
        </tr>
        <tr>
          <td>All Buttons Without Title</td>
          <td>
            <va-button icon="ion-md-close ion"/>
            <va-button large icon="ion-md-close ion"/>
            <va-button small icon="ion-md-close ion"/>
            <va-button outline icon="ion-md-close ion"/>
            <va-button outline large icon="ion-md-close ion"/>
            <va-button outline small icon="ion-md-close ion"/>
            <va-button flat icon="ion-md-close ion"/>
            <va-button flat large icon="ion-md-close ion"/>
            <va-button flat small icon="ion-md-close ion"/>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import VaButton from './VaButton'

export default {
  components: {
    VaButton,
  },
}
</script>
