<template>
  <div class="dropdown" v-dropdown>
    <button class="btn btn-primary dropdown-toggle theme-toggle " type="button" id="dropdownMenuButton"
            data-toggle="dropdown">
      10 PER PAGE
      <i class="ion-chevron-down arrow-down"></i>
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#">5 PER PAGE</a>
      <a class="dropdown-item" href="#">20 PER PAGE</a>
      <a class="dropdown-item" href="#">30 PER PAGE</a>
    </div>
  </div>
</template>

<script>
  import Dropdown from 'directives/Dropdown'

  export default {
    directives: {
      Dropdown
    }
  }
</script>
