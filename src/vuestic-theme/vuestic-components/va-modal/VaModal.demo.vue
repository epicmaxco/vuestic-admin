<template>
<VbDemo>
  <VbContainer title="Position">
    <p>
      <button @click="showModalPositionCenter = !showModalPositionCenter">show modal position center (default)</button>
      <va-modal
        v-model="showModalPositionCenter"
        :message="message"
      />
    </p>
    <p>
      <button @click="showModalPositionTop = !showModalPositionTop">show modal position top</button>
      <va-modal
        v-model="showModalPositionTop"
        title="Simple Popup, Full Width"
        :message="message"
        position="top"
      />
    </p>
    <p>
      <button @click="showModalPositionRight = !showModalPositionRight">show modal position right</button>
      <va-modal
        v-model="showModalPositionRight"
        title="Simple Popup, Full Width"
        :message="message"
        position="right"
      />
    </p>
    <p>
      <button @click="showModalPositionBottom = !showModalPositionBottom">show modal position bottom</button>
      <va-modal
        v-model="showModalPositionBottom"
        title="Simple Popup, Full Width"
        :message="message"
        okText="Accept"
        cancelText="Decline"
        position="bottom"
      />
    </p>
    <p>
      <button @click="showModalPositionLeft = !showModalPositionLeft">show modal position left</button>
      <va-modal
        v-model="showModalPositionLeft"
        title="Simple Popup, Full Width"
        :message="message"
        position="left"
      />
    </p>
  </VbContainer>
  <VbContainer>
    <h4>modal size</h4>
    <p>
      <button @click="showModalSizeSmall = !showModalSizeSmall">show modal size small</button>
      <va-modal
        v-model="showModalSizeSmall"
        title="Simple Popup, Full Width"
        :message="message"
        size="small"
      />
    </p>
    <p>
      <button @click="showModalSizeMedium = !showModalSizeMedium">show modal size medium (default)</button>
      <va-modal
        v-model="showModalSizeMedium"
        title="Simple Popup, Full Width"
        :message="message"
      />
    </p>
    <p>
      <button @click="showModalSizeLarge = !showModalSizeLarge">show modal size large</button>
      <va-modal
        v-model="showModalSizeLarge"
        title="Simple Popup, Full Width"
        :message="message"
        size="large"
      />
    </p>
  </VbContainer>
  <VbContainer>
    <h4>closeButton - is close icon show on the top right</h4>
    <p>
      <button @click="showModalWithCloseButton = !showModalWithCloseButton">Show modal with close button (default)</button>
      <va-modal
        title="Title"
        :message="message"
        v-model="showModalWithCloseButton"
      />
    </p>
    <p>
      <button @click="showModalWithoutCloseButton = !showModalWithoutCloseButton">Show modal without close button</button>
      <va-modal
        title="Title"
        message="message"
        v-model="showModalWithoutCloseButton"
        :close-button="false"
      />
    </p>
  </VbContainer>
  <VbContainer>
    <h4>fullscreen, slots use, custom action</h4>
    <button @click="showFullScreenModal = !showFullScreenModal">Show modal</button>
    <va-modal
      v-model="showFullScreenModal"
      :fullscreen="true"
    >
      <template slot="header">
        <h2>Step 2. Centered Layout</h2>
      </template>
      <slot>
        <div>{{message}}</div>
      </slot>
      <template slot="actions">
        <button @click="customActionClick">Custom action</button>
      </template>
    </va-modal>
  </VbContainer>
  <VbContainer>
    <h4>mobile-fullscreen: false</h4>
    <button @click="showModalNotMobileFullScreen = !showModalNotMobileFullScreen">Show modal</button>
    <va-modal
      v-model="showModalNotMobileFullScreen"
      :mobile-fullscreen="false"
      title="Step 2. Centered Layout"
      :message="message"
    />
  </VbContainer>
  <VbContainer>
    <h4>no-outside-dismiss</h4>
    <button @click="showModalNoOutsideDismiss = !showModalNoOutsideDismiss">Show modal</button>
    <va-modal
      v-model="showModalNoOutsideDismiss"
      :no-outside-dismiss="true"
      title="Step 2. Centered Layout"
      :message="message"
    />
  </VbContainer>
  <VbContainer>
    <h4>no-esc-dismiss</h4>
    <button @click="showModalNoEscDismiss = !showModalNoEscDismiss">Show modal</button>
    <va-modal
      v-model="showModalNoEscDismiss"
      :no-esc-dismiss="true"
      title="Step 2. Centered Layout"
      :message="message"
    />
  </VbContainer>
  <VbContainer>
    <h4>several lays</h4>
    <button @click="showModalFirstLay = !showModalFirstLay">Show modal</button>
    <va-modal
      v-model="showModalFirstLay"
      title="Several lays"
      :message="message"
    >
      <slot>
        <button @click="showModalSecondLay = !showModalSecondLay">Show modal</button>
        <va-modal
          v-model="showModalSecondLay"
          title="Several lays"
          :message="message"
        />
      </slot>
    </va-modal>
  </VbContainer>
  <VbContainer title="fixed layout && onOk, onCancel functions">
    <button @click="showFixedLayoutModal = !showFixedLayoutModal">Show modal</button>
    <va-modal
      v-model="showFixedLayoutModal"
      :fixedLayout="true"
      v-on:ok="onOk"
      v-on:cancel="onCancel"
      :message="message + message + message + message + message + message + message + message + message + message + message + message + message + message + message + message"
    >
      <template slot="header"><p>Step 2. Centered Layout</p></template>
    </va-modal>
  </VbContainer>
  <VbContainer>
    <h4>long message</h4>
    <button @click="showModalLongMessage = !showModalLongMessage">Show modal</button>
    <va-modal
      v-model="showModalLongMessage"
      title="Several lays"
      :message="message + message + message + message + message + message"
    />
  </VbContainer>
</VbDemo>
</template>

<script>
import VaModal from './VaModal'

export default {
  components: { VaModal },
  data () {
    return {
      showModalPositionCenter: false,
      showModalPositionTop: false,
      showModalPositionRight: false,
      showModalPositionBottom: false,
      showModalPositionLeft: false,
      showModalSizeSmall: false,
      showModalSizeMedium: false,
      showModalSizeLarge: false,
      showFullScreenModal: false,
      showActionsModal: false,
      showFixedLayoutModal: false,
      showModalWithCloseButton: false,
      showModalWithoutCloseButton: false,
      showModalNotMobileFullScreen: false,
      showModalNoOutsideDismiss: false,
      showModalNoEscDismiss: false,
      showModalFirstLay: false,
      showModalSecondLay: false,
      showModalLongMessage: false,
      message: 'About 64% of all on-line teens say that do things online that they wouldn’t want their parents to know about.   11% of all adult internet users visit dating websites and spend their time Some of the classify their behavior as “cyber affair”   More then 60% of employees use company PC for the personal needs during their work hours as long as 80 minutes per day.',
    }
  },
  methods: {
    onOk () {
      // eslint-disable-next-line no-console
      console.log('OK')
    },
    onCancel () {
      // eslint-disable-next-line no-console
      console.log('Cancel')
    },
    customActionClick () {
      // eslint-disable-next-line no-console
      console.log('custom action click')
    }
  }
}
</script>
