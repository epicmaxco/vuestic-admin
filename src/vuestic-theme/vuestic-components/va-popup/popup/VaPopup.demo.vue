<template>
  <div class="demo-container">
    <div class="demo-container__item">
      anchor position
      <div class="anchor">
        bottom right
        <va-popup
          anchor="bottom right"
          v-model="anchorBottomRight"
        >
          bottom right
        </va-popup>
      </div>
      <div class="anchor">
        center middle
        <va-popup
          anchor="center middle"
          v-model="anchorCenterMiddle"
        >
          center middle
        </va-popup>
      </div>
      <div class="anchor">
        top left
        <va-popup
          anchor="top left"
          v-model="anchorTopLeft"
        >
          top left
        </va-popup>
      </div>
    </div>
    <div class="demo-container__item">
      self position
      <div class="anchor">
        bottom right
        <va-popup
          self="bottom right"
          v-model="selfBottomRight"
        >
          bottom right
        </va-popup>
      </div>
      <div class="anchor">
        center middle
        <va-popup
          self="center middle"
          v-model="selfCenterMiddle"
        >
          center middle
        </va-popup>
      </div>
      <div class="anchor">
        top left
        <va-popup
          self="top left"
          v-model="selfTopLeft"
        >
          top left
        </va-popup>
      </div>
    </div>
    <div class="demo-container__item">
      anchor click
      <div class="anchor">
        true
        <va-popup
          v-model="anchorClickTrue"
          :anchorClick="true"
        >
          anchor click true
        </va-popup>
      </div>
      <div class="anchor">
        false
        <va-popup
          v-model="anchorClickFalse"
          :anchorClick="false"
        >
          anchor click false
        </va-popup>
      </div>
    </div>
    <div class="demo-container__item">
      no focus
      <div class="anchor">
        true
        <input type="text">
        <va-popup
          v-model="noFocusTrue"
          :noFocus="true"
        >
          <input type="text" placeholder="no focus">
        </va-popup>
      </div>
      <div class="anchor">
        false
        <input type="text">
        <va-popup
          v-model="noFocusFalse"
          :noFocus="false"
        >
          <input type="text" placeholder="no focus">
        </va-popup>
      </div>
    </div>
    <div class="demo-container__item">
      no refocus (test doesn't work)
      <div class="anchor">
        true
        <va-popup
          v-model="noRefocusTrue"
          :noRefocus="true"
        >
          <input type="text" placeholder="no refocus">
        </va-popup>
      </div>
      <div class="anchor">
        false
        <va-popup
          v-model="noRefocusFalse"
          :noRefocus="false"
        >
          <input type="text" placeholder="no refocus">
        </va-popup>
      </div>
    </div>
    <div class="demo-container__item">
      max height
      <div class="anchor">
        true
        <va-popup
          v-model="maxHeightUnset"
        >
          <p v-for="n in 30" :key="n">{{n}} item</p>
        </va-popup>
      </div>
      <div class="anchor">
        true
        <va-popup
          v-model="maxHeightSet"
          maxHeight="100px"
        >
          <p v-for="n in 30" :key="n">{{n}} item</p>
        </va-popup>
      </div>
    </div>
    <div class="demo-container__item">
      touch position
      <div class="anchor">
        true
        <va-popup
          v-model="touchPosition"
          touchPosition
        >
          disable
        </va-popup>
      </div>
    </div>
    <div class="demo-container__item">
      fit
      <div class="anchor">
        true
        <va-popup
          v-model="fitUnset"
          :fit="false"
        >
          <p v-for="n in 4" :key="n">{{n}}</p>
        </va-popup>
      </div>
      <div class="anchor">
        true
        <va-popup
          v-model="fitSet"
          :fit="true"
        >
          <p v-for="n in 4" :key="n">{{n}}</p>
        </va-popup>
      </div>
    </div>
    <div class="demo-container__item">
      disable
      <div class="anchor">
        true
        <va-popup
          v-model="disable"
          disable
        >
          disable
        </va-popup>
      </div>
    </div>

    <div class="demo-container__item">
      Redraws on content change
      <div class="anchor">
        <va-popup>
          <button @click="redrawContentSize = redrawContentSize - 20">-</button>
          <button @click="redrawContentSize = redrawContentSize + 20">+</button>
          <div
            :style="{
              width: redrawContentSize + 'px',
              height: redrawContentSize + 'px',
              backgroundColor: '#14bb14',
            }"
          />
          <span v-for="number in redrawContentSize / 10" :key="number">{{number}}</span>
        </va-popup>
      </div>
    </div>
    <div class="demo-container__item">
      offset
      <div class="anchor">
        true
        <va-popup
          v-model="offset"
          :offset="[14, -114]"
        >
          offset
        </va-popup>
      </div>
    </div>
    <div class="demo-container__item">
      cover
      <div class="anchor">
        true
        <va-popup
          v-model="cover"
          cover
        >
          cover cover cover cover cover
        </va-popup>
      </div>
    </div>
    <div class="demo-container__item">
      persistent
      <div class="anchor">
        true
        <va-popup
          v-model="persistent"
          persistent
        >
          persistent
        </va-popup>
      </div>
    </div>
    <div class="demo-container__item">
      keep on screen
      <div class="anchor">
        true
        <va-popup
          v-model="keepOnScreen"
          keepOnScreen
        >
          keep on screen
        </va-popup>
      </div>
    </div>
    <div class="demo-container__item">
      Event test {{eventTest}}
      <va-button @click="$refs.eventTest.show('eventTest text')">
        Show
      </va-button>
      <va-button @click="$refs.eventTest.show('eventTest text')">
        Hide
      </va-button>
      <va-button @click="$refs.eventTest.toggle('eventTest text')">
        Toggle
      </va-button>
      <div class="anchor">
        true
        <va-popup
          ref="eventTest"
          v-model="eventTest"
          persistent
          @show="event => $va.log('show event', event)"
          @hide="event => $va.log('hide event', event)"
        >
          keep on screen
        </va-popup>
      </div>
    </div>
    <div class="demo-container__item">
      close overlay
      <div class="anchor">
        true
        <va-popup
          v-model="closeOverlay"
        >
          <test-component v-close-overlay>Close</test-component>
        </va-popup>
      </div>
    </div>
  </div>
</template>

<script>
import VaPopup from './VaPopup.vue'
import VaButton from '../../va-button/VaButton'
import { closeOverlay } from '../directives/closeOverlay'

export default {
  directives: {
    'close-overlay': closeOverlay,
  },
  components: {
    VaPopup,
    VaButton,
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

      redrawContentSize: 50,
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
