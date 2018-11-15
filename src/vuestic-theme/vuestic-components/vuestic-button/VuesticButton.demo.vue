<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 1500px;">
      <div style="margin-top: 50px;">
        <h4>Buttons</h4>
        <vuestic-button :color="'success'">
          <img slot="icon" src="../../../assets/icons/plus-icon-def.svg"/>
          Default Button
        </vuestic-button>
        <vuestic-button large :color="'info'">
          <img slot="icon" src="../../../assets/icons/plus-icon-lg.svg"/>
          Large Button
        </vuestic-button>
        <vuestic-button small :color="'danger'">
          <img slot="icon" src="../../../assets/icons/plus-icon-sm.svg"/>
          Mini Button
        </vuestic-button>
        <vuestic-button tag="button" :color="'warning'">
          <img slot="icon-right" src="../../../assets/icons/dropdown-icon-def.svg"/>
          Default Button
        </vuestic-button>
        <vuestic-button large :color="'gray'">
          <img slot="icon-right" src="../../../assets/icons/dropdown-icon-lg.svg"/>
          Large Button
        </vuestic-button>
        <vuestic-button small :color="'dark'">
          <img slot="icon-right" src="../../../assets/icons/dropdown-icon-sm.svg"/>
          Mini Button
        </vuestic-button>
      </div>
      <div style="margin-top: 50px;">
        <h4>Links</h4>
        <vuestic-button :href="'http://epic-spinners.epicmax.co/'" outline :color="'success'">
          <span>Default Button</span>
        </vuestic-button>
        <vuestic-button :href="'http://epic-spinners.epicmax.co/'" large outline :color="'info'">
          <span>Large Button</span>
        </vuestic-button>
        <vuestic-button :href="'http://epic-spinners.epicmax.co/'" small outline :color="'danger'">
          <span>Mini Button</span>
        </vuestic-button>
        <vuestic-button :href="'http://epic-spinners.epicmax.co/'" outline :color="'warning'">
          <span>Default Button</span>
        </vuestic-button>
        <vuestic-button :href="'http://epic-spinners.epicmax.co/'" large outline :color="'gray'">
          <span>Large Button</span>
        </vuestic-button>
        <vuestic-button :href="'http://epic-spinners.epicmax.co/'" small outline :color="'dark'">
          <span>Mini Button</span>
        </vuestic-button>
      </div>
      <div style="margin-top: 50px;">
        <h4>Router links</h4>
        <vuestic-button :to="{ name: 'charts' }" flat :color="'success'">
          Default Button
        </vuestic-button>
        <vuestic-button :to="{ name: 'charts' }" flat large :tag="'router-link'" :color="'info'">
          Large Button
        </vuestic-button>
        <vuestic-button :to="{ name: 'charts' }" flat small :tag="'router-link'" :color="'danger'">
          Mini Button
        </vuestic-button>
        <vuestic-button :to="{ name: 'charts' }" flat :tag="'router-link'" :color="'warning'">
          Default Button
        </vuestic-button>
        <vuestic-button :to="{ name: 'charts' }" flat large :tag="'router-link'" :color="'gray'">
          Large Button
        </vuestic-button>
        <vuestic-button :to="{ name: 'charts' }" flat small :color="'dark'" :tag="'router-link'">
          Mini Button
        </vuestic-button>
      </div>
    </div>
  </div>
</template>

<script>

import VuesticButton from './VuesticButton'

export default {
  components: {
    VuesticButton
  }
}
</script>
