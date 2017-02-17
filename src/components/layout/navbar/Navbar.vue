<template>
  <nav class="navbar app-navbar navbar-toggleable-md">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Navbar</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#"><span class="i-nav-messages"></span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><span class="i-nav-notification"></span></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'navbar'
  }
</script>

<style lang="scss">
  @import "../../../sass/_variables.scss";

  .navbar.app-navbar {
    height: $top-nav-height;
    padding-left: $nav-padding-left;
    padding-right: $nav-padding-right;
    background-color: $top-nav-bg;
  }
</style>
