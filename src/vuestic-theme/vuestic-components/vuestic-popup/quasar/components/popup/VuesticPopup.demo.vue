<template>
  <div class="demo-container">
    <div class="demo-container__item">
      anchor position
      <div class="anchor">
        bottom right
        <vuestic-popup
          anchor="bottom right"
          v-model="anchorBottomRight"
        >
          bottom right
        </vuestic-popup>
      </div>
      <div class="anchor">
        center middle
        <vuestic-popup
          anchor="center middle"
          v-model="anchorCenterMiddle"
        >
          center middle
        </vuestic-popup>
      </div>
      <div class="anchor">
        top left
        <vuestic-popup
          anchor="top left"
          v-model="anchorTopLeft"
        >
          top left
        </vuestic-popup>
      </div>
    </div>
    <div class="demo-container__item">
      self position
      <div class="anchor">
        bottom right
        <vuestic-popup
          self="bottom right"
          v-model="selfBottomRight"
        >
          bottom right
        </vuestic-popup>
      </div>
      <div class="anchor">
        center middle
        <vuestic-popup
          self="center middle"
          v-model="selfCenterMiddle"
        >
          center middle
        </vuestic-popup>
      </div>
      <div class="anchor">
        top left
        <vuestic-popup
          self="top left"
          v-model="selfTopLeft"
        >
          top left
        </vuestic-popup>
      </div>
    </div>
    <div class="demo-container__item">
      anchor click
      <div class="anchor">
        true
        <vuestic-popup
          v-model="anchorClickTrue"
          :anchorClick="true"
        >
          anchor click true
        </vuestic-popup>
      </div>
      <div class="anchor">
        false
        <vuestic-popup
          v-model="anchorClickFalse"
          :anchorClick="false"
        >
          anchor click false
        </vuestic-popup>
      </div>
    </div>
    <div class="demo-container__item">
      no focus
      <div class="anchor">
        true
        <input type="text">
        <vuestic-popup
          v-model="noFocusTrue"
          :noFocus="true"
        >
          <input type="text" placeholder="no focus">
        </vuestic-popup>
      </div>
      <div class="anchor">
        false
        <input type="text">
        <vuestic-popup
          v-model="noFocusFalse"
          :noFocus="false"
        >
          <input type="text" placeholder="no focus">
        </vuestic-popup>
      </div>
    </div>
    <div class="demo-container__item">
      no refocus (test doesn't work)
      <div class="anchor">
        true
        <vuestic-popup
          v-model="noRefocusTrue"
          :noRefocus="true"
        >
          <input type="text" placeholder="no refocus">
        </vuestic-popup>
      </div>
      <div class="anchor">
        false
        <vuestic-popup
          v-model="noRefocusFalse"
          :noRefocus="false"
        >
          <input type="text" placeholder="no refocus">
        </vuestic-popup>
      </div>
    </div>
    <div class="demo-container__item">
      max height
      <div class="anchor">
        true
        <vuestic-popup
          v-model="maxHeightUnset"
        >
          <p v-for="n in 30" :key="n">{{n}} item</p>
        </vuestic-popup>
      </div>
      <div class="anchor">
        true
        <vuestic-popup
          v-model="maxHeightSet"
          maxHeight="100px"
        >
          <p v-for="n in 30" :key="n">{{n}} item</p>
        </vuestic-popup>
      </div>
    </div>
    <div class="demo-container__item">
      touch position
      <div class="anchor">
        true
        <vuestic-popup
          v-model="touchPosition"
          touchPosition
        >
          disable
        </vuestic-popup>
      </div>
    </div>
    <div class="demo-container__item">
      fit
      <div class="anchor">
        true
        <vuestic-popup
          v-model="fitUnset"
          :fit="false"
        >
          <p v-for="n in 4" :key="n">{{n}}</p>
        </vuestic-popup>
      </div>
      <div class="anchor">
        true
        <vuestic-popup
          v-model="fitSet"
          :fit="true"
        >
          <p v-for="n in 4" :key="n">{{n}}</p>
        </vuestic-popup>
      </div>
    </div>
    <div class="demo-container__item">
      disable
      <div class="anchor">
        true
        <vuestic-popup
          v-model="disable"
          disable
        >
          disable
        </vuestic-popup>
      </div>
    </div>
    <div class="demo-container__item">
      offset
      <div class="anchor">
        true
        <vuestic-popup
          v-model="offset"
          :offset="[14, -114]"
        >
          offset
        </vuestic-popup>
      </div>
    </div>
    <div class="demo-container__item">
      cover
      <div class="anchor">
        true
        <vuestic-popup
          v-model="cover"
          cover
        >
          cover cover cover cover cover
        </vuestic-popup>
      </div>
    </div>
    <div class="demo-container__item">
      persistent
      <div class="anchor">
        true
        <vuestic-popup
          v-model="persistent"
          persistent
        >
          persistent
        </vuestic-popup>
      </div>
    </div>
    <div class="demo-container__item">
      keep on screen
      <div class="anchor">
        true
        <vuestic-popup
          v-model="keepOnScreen"
          keepOnScreen
        >
          keep on screen
        </vuestic-popup>
      </div>
    </div>
    <div class="demo-container__item">
      Event test {{eventTest}}
      <button @click="$refs.eventTest.show('eventTest text')">Show</button>
      <button @click="$refs.eventTest.hide('eventTest text')">Hide</button>
      <button @click="$refs.eventTest.toggle('eventTest text')">Toggle</button>
      <div class="anchor">
        true
        <vuestic-popup
          ref="eventTest"
          v-model="eventTest"
          persistent
          @show="event => log('show event', event)"
          @hide="event => log('hide event', event)"
        >
          keep on screen
        </vuestic-popup>
      </div>
    </div>
    <div class="demo-container__item">
      close overlay
      <div class="anchor">
        true
        <vuestic-popup
          v-model="closeOverlay"
        >
          <test-component v-close-overlay>Close</test-component>
        </vuestic-popup>
      </div>
    </div>
  </div>
</template>

<script>
import VuesticPopup from './VuesticPopup.vue'
import { logMixin } from '../../mixins/logMixin'
import { closeOverlay } from '../../directives/closeOverlay'

export default {
  mixins: [logMixin],
  directives: {
    'close-overlay': closeOverlay,
  },
  components: {
    VuesticPopup,
    TestComponent: {
      render (h) {
        return h('div', 'Test component')
      },
    },
  },
  data () {
    return {
      anchorBottomRight: false,
      anchorCenterMiddle: false,
      anchorTopLeft: false,
      selfBottomRight: false,
      selfCenterMiddle: false,
      selfTopLeft: false,
      anchorClickTrue: false,
      anchorClickFalse: false,
      noFocusTrue: false,
      noFocusFalse: false,
      noRefocusTrue: false,
      noRefocusFalse: false,
      maxHeightSet: false,
      maxHeightUnset: false,
      touchPosition: false,
      fitUnset: false,
      fitSet: false,
      disable: false,
      offset: false,
      cover: false,
      persistent: false,
      keepOnScreen: false,
      closeOverlay: false,
      eventTest: false,
    }
  },
}
</script>

<style scoped>
.anchor {
  width: 50px;
  height: 50px;
  border: solid 1px red;
  background-color: #4ae387;
}
</style>
