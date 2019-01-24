<template>
  <VbDemo>
    <VbContainer>
      <table class="table table-bordered test-table">
        <tr>
          <th>Description</th>
          <th>Va Icon</th>
        </tr>
        <tr>
          <td>Exact Size</td>
          <td>
            <VbContainer>
              <va-icon icon="iconicstroke iconicstroke-info"/>
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>
            Size presets
          </td>
          <td>
            <VbContainer>
              <va-icon style="margin-right: 20px;" icon="iconicstroke iconicstroke-info" small/>
              <va-icon style="margin-right: 20px;" icon="iconicstroke iconicstroke-info" large/>
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>
            Keep size
          </td>
          <td>
            <VbContainer title="Size in px">
              <va-icon icon="iconicstroke iconicstroke-info" size="40px"/>
            </VbContainer>
            <VbContainer title="Size as number">
              <va-icon icon="iconicstroke iconicstroke-info" :size="60"/>
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>
            Colored
          </td>
          <td>
            <VbContainer>
              <va-icon style="margin-right: 20px;" icon="iconicstroke iconicstroke-info" color="info"/>
              <va-icon style="margin-right: 20px;" icon="iconicstroke iconicstroke-info" color="warning"/>
              <va-icon style="margin-right: 20px;" icon="iconicstroke iconicstroke-info" color="danger"/>
              <va-icon style="margin-right: 20px;" icon="iconicstroke iconicstroke-info" color="success"/>
              <va-icon style="margin-right: 20px;" icon="iconicstroke iconicstroke-info" color="gray"/>
              <va-icon style="margin-right: 20px;" icon="iconicstroke iconicstroke-info" color="dark"/>
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>
            Rotation
          </td>
          <td>
            <VbContainer>
              <va-icon style="margin-right: 20px;" icon="iconicstroke iconicstroke-info" :rotation="45"/>
              <va-icon style="margin-right: 20px;" icon="iconicstroke iconicstroke-info" :rotation="180"/>
              <va-icon style="margin-right: 20px;" icon="iconicstroke iconicstroke-info" :rotation="270"/>
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>
            Fixed Width
          </td>
          <td>
            <VbContainer>
              <button class="btn btn-secondary">
                <va-icon icon="iconicstroke iconicstroke-info" fixed-width/>
                Some
                <va-icon icon="iconicstroke iconicstroke-info" fixed-width/>
              </button>
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>
            Different Iconsets
          </td>
          <td>
            <VbContainer title="Iconic">
              <va-icon style="margin-right: 20px;" icon="iconicstroke iconicstroke-hash"/>
              <va-icon style="margin-right: 20px;" icon="iconicstroke iconicstroke-at"/>
              <va-icon style="margin-right: 20px;" icon="iconicstroke iconicstroke-arrow-left"/>
              <va-icon style="margin-right: 20px;" icon="iconicstroke iconicstroke-home"/>
              <va-icon style="margin-right: 20px;" icon="iconicstroke iconicstroke-umbrella"/>
            </VbContainer>
            <VbContainer title="Glyphicon">
              <va-icon style="margin-right: 20px;" icon="glyphicon glyphicon-star"/>
              <va-icon style="margin-right: 20px;" icon="glyphicon glyphicon-glass"/>
              <va-icon style="margin-right: 20px;" icon="glyphicon glyphicon-search"/>
              <va-icon style="margin-right: 20px;" icon="glyphicon glyphicon-asterisk"/>
              <va-icon style="margin-right: 20px;" icon="glyphicon glyphicon-cloud"/>
            </VbContainer>
            <VbContainer title="Maki">
              <va-icon style="margin-right: 20px;" icon="maki maki-belowground-rail"/>
              <va-icon style="margin-right: 20px;" icon="maki maki-bicycle"/>
              <va-icon style="margin-right: 20px;" icon="maki maki-cafe"/>
              <va-icon style="margin-right: 20px;" icon="maki maki-art-gallery"/>
              <va-icon style="margin-right: 20px;" icon="maki maki-airfield"/>
            </VbContainer>
            <VbContainer title="Entypo">
              <va-icon style="margin-right: 20px;" icon="entypo entypo-note"/>
              <va-icon style="margin-right: 20px;" icon="entypo entypo-star"/>
              <va-icon style="margin-right: 20px;" icon="entypo entypo-users"/>
              <va-icon style="margin-right: 20px;" icon="entypo entypo-video"/>
              <va-icon style="margin-right: 20px;" icon="entypo entypo-heart"/>
            </VbContainer>
            <VbContainer title="Brandico">
              <va-icon style="margin-right: 20px;" icon="brandico brandico-facebook"/>
              <va-icon style="margin-right: 20px;" icon="brandico brandico-twitter"/>
              <va-icon style="margin-right: 20px;" icon="brandico brandico-twitter"/>
              <va-icon style="margin-right: 20px;" icon="brandico brandico-googleplus-rect"/>
              <va-icon style="margin-right: 20px;" icon="brandico brandico-github-text"/>
            </VbContainer>
            <VbContainer title="Font Awesome">
              <va-icon style="margin-right: 20px;" icon="fa fa-anchor"/>
              <va-icon style="margin-right: 20px;" icon="fa fa-area-chart"/>
              <va-icon style="margin-right: 20px;" icon="fa fa-arrows"/>
              <va-icon style="margin-right: 20px;" icon="fa fa-address-book"/>
              <va-icon style="margin-right: 20px;" icon="fa fa-adjust"/>
            </VbContainer>
          </td>
        </tr>
      </table>
    </VbContainer>
  </VbDemo>
</template>
