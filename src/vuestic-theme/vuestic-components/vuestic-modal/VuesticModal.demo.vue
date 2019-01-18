<template>
<div class="demo-container">
  <div class="demo-container__item">
    <p>simple modal with title and message props</p>
    <button @click="triggerSimpleModal">Show modal</button>
    <p>modal position</p>
    <div>
      <vuestic-radio-button value="center" v-model="modalPosition" option="center"/>
      <vuestic-radio-button value="top" v-model="modalPosition" option="top"/>
      <vuestic-radio-button value="right" v-model="modalPosition" option="right"/>
      <vuestic-radio-button value="bottom" v-model="modalPosition" option="bottom"/>
      <vuestic-radio-button value="left" v-model="modalPosition" option="left"/>
    </div>
    <p>modal size</p>
    <div>
      <vuestic-radio-button value="small" v-model="modalSize" option="small"/>
      <vuestic-radio-button value="medium" v-model="modalSize" option="medium" label="medium (default)"/>
      <vuestic-radio-button value="large" v-model="modalSize" option="large"/>
    </div>
    <vuestic-modal
      v-model="isModalShow"
      title="Simple Popup, Full Width"
      message="About 64% of all on-line teens say that do things online that they wouldn’t want their parents to know about.   11% of all adult internet users visit dating websites and spend their time Some of the classify their behavior as “cyber affair”   More then 60% of employees use company PC for the personal needs during their work hours as long as 80 minutes per day."
      okText="Accept"
      cancelText="Decline"
      :position="modalPosition"
      :size="modalSize"
    />
  </div>
  <div class="demo-container__item">
    <p>fullscreen modal with, slots use</p>
    <button @click="triggerFullscreenModal">Show modal</button>
    <vuestic-modal
      v-model="isFullScreenModalShow"
      :fullscreen="true">
      <template slot="header">
        <h2>Step 2. Centered Layout</h2>
      </template>
      <slot>
        <div>About 64% of all on-line teens say that do things online that they wouldn’t want their parents to know about.   11% of all adult internet users visit dating websites and spend their time Some of the classify their behavior as “cyber affair”   More then 60% of employees use company PC for the personal needs during their work hours as long as 80 minutes per day.</div>
      </slot>
    </vuestic-modal>
  </div>
  <div class="demo-container__item">
    <p>no-outside-dismiss, no-esc-dismiss, max-width: 800px, max-height: 250px, with scroll</p>
    <button @click="triggerActionsModal">Show modal</button>
    <vuestic-modal
      v-model="isActionsModalShow"
      :no-outside-dismiss="true"
      :no-esc-dismiss="true"
      max-width="800px"
      max-height="250px"
      title="Step 2. Centered Layout"
      message="About 64% of all on-line teens say that do things online that they wouldn’t want their parents to know about.   11% of all adult internet users visit dating websites and spend their time Some of the classify their behavior as “cyber affair”   More then 60% of employees use company PC for the personal needs during their work hours as long as 80 minutes per day. About 64% of all on-line teens say that do things online that they wouldn’t want their parents to know about.   11% of all adult internet users visit dating websites and spend their time Some of the classify their behavior as “cyber affair”   More then 60% of employees use company PC for the personal needs during their work hours as long as 80 minutes per day."
    />
  </div>
  <div class="demo-container__item">
    <p>fixed layout && onOk, onCancel functions</p>
    <button @click="triggerFixedLayoutModal">Show modal</button>
    <vuestic-modal
      v-model="isFixedLayoutModalShow"
      max-width="800px"
      max-height="250px"
      :fixedLayout="true"
      v-on:ok="onOk"
      v-on:cancel="onCancel"
      message="About 64% of all on-line teens say that do things online that they wouldn’t want their parents to know about.   11% of all adult internet users visit dating websites and spend their time Some of the classify their behavior as “cyber affair”   More then 60% of employees use company PC for the personal needs during their work hours as long as 80 minutes per day. About 64% of all on-line teens say that do things online that they wouldn’t want their parents to know about.   11% of all adult internet users visit dating websites and spend their time Some of the classify their behavior as “cyber affair”   More then 60% of employees use company PC for the personal needs during their work hours as long as 80 minutes per day."
    >
      <template slot="header"><p>Step 2. Centered Layout</p></template>
    </vuestic-modal>
  </div>
</div>
</template>

<script>
import VuesticModal from './VuesticModal'
import VuesticRadioButton from '../vuestic-radio-button/VuesticRadioButton'

export default {
  components: { VuesticRadioButton, VuesticModal },
  data () {
    return {
      isModalShow: false,
      isFullScreenModalShow: false,
      isActionsModalShow: false,
      isFixedLayoutModalShow: false,
      modalPosition: 'center',
      modalSize: 'medium'
    }
  },
  methods: {
    triggerSimpleModal () {
      this.isModalShow = !this.isModalShow
    },
    triggerFullscreenModal () {
      this.isFullScreenModalShow = !this.isFullScreenModalShow
    },
    triggerActionsModal () {
      this.isActionsModalShow = !this.isActionsModalShow
    },
    triggerFixedLayoutModal () {
      this.isFixedLayoutModalShow = !this.isFixedLayoutModalShow
    },
    onOk () {
      alert('OK')
    },
    onCancel () {
      alert('Cancel')
    }
  }
}
</script>
