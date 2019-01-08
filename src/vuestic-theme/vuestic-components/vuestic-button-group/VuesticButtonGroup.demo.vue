<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 1500px;">
      <div style="margin-top: 50px;">
        <h4>Button Groups</h4>
        <vuestic-button-group>
          <vuestic-button color="success">
            <img slot="icon" src="../../../assets/icons/baseline-white-brush-24-px.svg"/>
            Button 1
          </vuestic-button>
          <vuestic-button color="success">
            <img slot="icon" src="../../../assets/icons/baseline-white-color-lens-24-px.svg"/>
            Button 2
          </vuestic-button>
          <vuestic-button color="success">
            <img slot="icon" src="../../../assets/icons/baseline-white-edit-24-px.svg"/>
            Button 3
          </vuestic-button>
        </vuestic-button-group>
        <vuestic-button-group>
          <vuestic-button color="warning">
            <img slot="icon" src="../../../assets/icons/baseline-white-color-lens-24-px.svg"/>
            Button 1
          </vuestic-button>
          <vuestic-button color="info">
            Button 2
          </vuestic-button>
          <vuestic-button color="danger">
            Button 3
          </vuestic-button>
        </vuestic-button-group>
        <vuestic-button-group>
          <vuestic-button outline color="success">
            Button 1
          </vuestic-button>
          <vuestic-button outline color="success">
            <img slot="icon" src="../../../assets/icons/baseline-brush-24-px.svg"/>
            Button 2
          </vuestic-button>
          <vuestic-button outline color="success">
            Button 3
          </vuestic-button>
        </vuestic-button-group>
        <vuestic-button-group>
          <vuestic-button color="danger">
            Button 1
          </vuestic-button>
          <vuestic-button color="danger">
            Button 2
          </vuestic-button>
          <vuestic-button color="danger">
            Button 3
          </vuestic-button>
          <vuestic-button color="danger">
            Button 4
          </vuestic-button>
        </vuestic-button-group>
        <vuestic-button-group>
          <vuestic-button color="dark">
            <img slot="icon" src="../../../assets/icons/baseline-white-brush-24-px.svg"/>
          </vuestic-button>
          <vuestic-button color="dark">
            <img slot="icon" src="../../../assets/icons/baseline-white-color-lens-24-px.svg"/>
          </vuestic-button>
          <vuestic-button color="dark">
            <img slot="icon" src="../../../assets/icons/baseline-white-edit-24-px.svg"/>
          </vuestic-button>
        </vuestic-button-group>
        <vuestic-button-group>
          <vuestic-button color="warning">
            <img slot="icon" src="../../../assets/icons/baseline-white-brush-24-px.svg"/>
          </vuestic-button>
          <vuestic-button color="warning">
            <img slot="icon" src="../../../assets/icons/baseline-white-edit-24-px.svg"/>
          </vuestic-button>
          <vuestic-button color="warning">
            Button 3
          </vuestic-button>
        </vuestic-button-group>
        <vuestic-button-group>
          <vuestic-button color="info">
            Button 1
          </vuestic-button>
          <vuestic-button color="info">
            Button 2
          </vuestic-button>
          <vuestic-button color="info">
            Button 3
          </vuestic-button>
        </vuestic-button-group>
      </div>
    </div>
  </div>
</template>

<script>
import VuesticButton from './../vuestic-button/VuesticButton'
import VuesticButtonGroup from './VuesticButtonGroup'

export default {
  components: {
    VuesticButton,
    VuesticButtonGroup
  }
}
</script>
