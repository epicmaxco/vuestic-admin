<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-dropdown>
        <div slot="toggle">
          {Square}
        </div>
        <div class="content">
          [palette]
        </div>
      </vuestic-dropdown>
    </div>
  </div>
</template>

<script>
import VuesticDropdown from './VuesticDropdown'

export default {
  components: {
    VuesticDropdown,
  },
}
</script>
