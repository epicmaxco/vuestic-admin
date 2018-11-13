<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 1500px;">
      <div style="margin-top: 50px;">
        <vuestic-button :color="'vuestic-button--success'">
          <img slot="icon"
               src="../../../assets/icons/plus-icon-def.svg"/>
          Default Button
        </vuestic-button>
        <vuestic-button large :color="'vuestic-button--info'">
          <img slot="icon" src="../../../assets/icons/plus-icon-lg.svg"/>
          Large Button
        </vuestic-button>
        <vuestic-button small :color="'vuestic-button--danger'">
          <img slot="icon" src="../../../assets/icons/plus-icon-sm.svg"/>
          Mini Button
        </vuestic-button>
        <vuestic-button tag="button" :color="'vuestic-button--warning'">
          <img slot="icon-right" src="../../../assets/icons/dropdown-icon-def.svg"/>
          Default Button
        </vuestic-button>
        <vuestic-button large :color="'vuestic-button--gray'">
          <img slot="icon-right" src="../../../assets/icons/dropdown-icon-lg.svg"/>
          Large Button
        </vuestic-button>
        <vuestic-button small :color="'vuestic-button--dark'">
          <img slot="icon-right" src="../../../assets/icons/dropdown-icon-sm.svg"/>
          Mini Button
        </vuestic-button>
      </div>
      <div style="margin-top: 50px;">
        <vuestic-button outline :color="'vuestic-button--success'">
          <span>Default Button</span>
        </vuestic-button>
        <vuestic-button large outline :color="'vuestic-button--info'">
          <span>Large Button</span>
        </vuestic-button>
        <vuestic-button small outline :color="'vuestic-button--danger'">
          <span>Mini Button</span>
        </vuestic-button>
        <vuestic-button outline :color="'vuestic-button--warning'">
          <span>Default Button</span>
        </vuestic-button>
        <vuestic-button large outline :color="'vuestic-button--gray'">
          <span>Large Button</span>
        </vuestic-button>
        <vuestic-button small outline :color="'vuestic-button--dark'">
          <span>Mini Button</span>
        </vuestic-button>
      </div>
      <div style="margin-top: 50px;">
        <vuestic-button flat :color="'vuestic-button--success'">
          <span>Default Button</span>
        </vuestic-button>
        <vuestic-button large flat :color="'vuestic-button--info'">
          <span>Large Button</span>
        </vuestic-button>
        <vuestic-button small flat :color="'vuestic-button--danger'">
          <span>Mini Button</span>
        </vuestic-button>
        <vuestic-button flat :color="'vuestic-button--warning'">
          <span>Default Button</span>
        </vuestic-button>
        <vuestic-button large flat :color="'vuestic-button--gray'">
          <span>Large Button</span>
        </vuestic-button>
        <vuestic-button small flat :color="'vuestic-button--dark'">
          <span>Mini Button</span>
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
