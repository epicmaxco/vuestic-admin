<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-color-dropdown>
        <div slot="toggle">
          {Square}
        </div>
        <div class="content">
          [palette]
        </div>
      </vuestic-color-dropdown>
    </div>
  </div>
</template>

<script>
import VuesticColorDropdown from './VuesticColorDropdown'

export default {
  components: {
    VuesticColorDropdown,
  },
}
</script>
