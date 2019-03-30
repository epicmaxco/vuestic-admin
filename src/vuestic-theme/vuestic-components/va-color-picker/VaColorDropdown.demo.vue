<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <va-color-dropdown>
        <div slot="toggle">
          {Square}
        </div>
        <div class="content">
          [palette]
        </div>
      </va-color-dropdown>
    </div>
  </div>
</template>

<script>
import VaColorDropdown from './VaColorDropdown'

export default {
  components: {
    VaColorDropdown,
  },
}
</script>
