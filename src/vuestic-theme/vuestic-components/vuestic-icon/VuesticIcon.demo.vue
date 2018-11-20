<template>
  <div class="demo-container">
    <div class="demo-container__item" style="margin-top: 20px; margin-left: 20px;">
      <vuestic-icon :icon="'vuestic-i vuestic-i-comments'" :color="'info'" large/>
    </div>
    <div class="demo-container__item" style="margin-top: 20px; margin-left: 20px;">
      <vuestic-icon :icon="'vuestic-i vuestic-i-components'" :color="'danger'" small/>
    </div>
    <div class="demo-container__item" style="margin-top: 20px; margin-left: 20px;">
      <vuestic-icon :icon="'vuestic-i vuestic-i-dashboard'" :color="'success'" :size="60"/>
    </div>
    <div class="demo-container__item" style="margin-top: 20px; margin-left: 20px;">
      <vuestic-icon :icon="'vuestic-i vuestic-i-extras'" :color="'warning'" large/>
    </div>
    <div class="demo-container__item" style="margin-top: 20px; margin-left: 20px;">
      <vuestic-icon :icon="'vuestic-i vuestic-i-files'" :color="'gray'" small/>
    </div>
    <div class="demo-container__item" style="margin-top: 20px; margin-left: 20px;">
      <vuestic-icon :icon="'vuestic-i vuestic-i-forms'" :color="'dark'" :size="'80px'"/>
    </div>
    <div class="demo-container__item" style="width: 900px; margin-top: 20px; margin-left: 20px;">
      <h4>Fixed Width</h4>
      <div v-for="(item, key) in icons" :key="key">
        <vuestic-icon :icon="item.icon" :color="'info'" fixed-width/>
        <span style="margin-left: 30px;">{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import VuesticIcon from './VuesticIcon.vue'

export default {
  components: {
    VuesticIcon,
  },
  computed: {
    icons: () => {
      return [
        { icon: 'fontelico fontelico-emo-beer', text: 'Item 1' },
        { icon: 'fontelico fontelico-emo-devil', text: 'Item 2' },
        { icon: 'fontelico fontelico-emo-surprised', text: 'Item 3' }
      ]
    },
  },
}
</script>
