<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 1500px;">
      <div style="margin-top: 50px;">
        <vuestic-button :color="'vuestic-button--success'">
          <img src="../../../assets/icons/plus-icon-def.svg"/>
          <span slot="title">Default Button</span>
        </vuestic-button>
        <vuestic-button large :color="'vuestic-button--info'">
          <img src="../../../assets/icons/plus-icon-lg.svg"/>
          <span slot="title">Large Button</span>
        </vuestic-button>
        <vuestic-button small :color="'vuestic-button--danger'">
          <img src="../../../assets/icons/plus-icon-sm.svg"/>
          <span slot="title">Mini Button</span>
        </vuestic-button>
        <vuestic-button tag="button" :color="'vuestic-button--warning'">
          <span slot="title">Default Button</span>
        </vuestic-button>
        <vuestic-button large :color="'vuestic-button--gray'">
          <span slot="title">Large Button</span>
        </vuestic-button>
        <vuestic-button small :color="'vuestic-button--dark'">
          <span slot="title">Mini Button</span>
        </vuestic-button>
      </div>
      <div style="margin-top: 50px;">
        <vuestic-button outline :color="'vuestic-button--success'">
          <span slot="title">Default Button</span>
        </vuestic-button>
        <vuestic-button large outline :color="'vuestic-button--info'">
          <span slot="title">Large Button</span>
        </vuestic-button>
        <vuestic-button small outline :color="'vuestic-button--danger'">
          <span slot="title">Mini Button</span>
        </vuestic-button>
        <vuestic-button outline :color="'vuestic-button--warning'">
          <span slot="title">Default Button</span>
        </vuestic-button>
        <vuestic-button large outline :color="'vuestic-button--gray'">
          <span slot="title">Large Button</span>
        </vuestic-button>
        <vuestic-button small outline :color="'vuestic-button--dark'">
          <span slot="title">Mini Button</span>
        </vuestic-button>
      </div>
      <div style="margin-top: 50px;">
        <vuestic-button flat :color="'vuestic-button--success'">
          <span slot="title">Default Button</span>
        </vuestic-button>
        <vuestic-button large flat :color="'vuestic-button--info'">
          <span slot="title">Large Button</span>
        </vuestic-button>
        <vuestic-button small flat :color="'vuestic-button--danger'">
          <span slot="title">Mini Button</span>
        </vuestic-button>
        <vuestic-button flat :color="'vuestic-button--warning'">
          <span slot="title">Default Button</span>
        </vuestic-button>
        <vuestic-button large flat :color="'vuestic-button--gray'">
          <span slot="title">Large Button</span>
        </vuestic-button>
        <vuestic-button small flat :color="'vuestic-button--dark'">
          <span slot="title">Mini Button</span>
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
