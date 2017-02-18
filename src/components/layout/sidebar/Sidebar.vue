<template>
 <aside class="sidebar">
   <router-link to="/charts" aria-expanded="show" @click.native="show = !show">
     <span class="icon is-small"><i class="fa fa-bar-chart-o"></i></span>
     Charts
     <span class="icon is-small is-angle"><i class="fa fa-angle-down"></i></span>
   </router-link>
   <expanding>
     <ul v-show="show">
       <li>
         <router-link to="/charts/chartjs">
           ChartJs
         </router-link>
       </li>
       <li>
         <router-link to="/charts/chartist">
           Chartist
         </router-link>
       </li>
       <li>
         <router-link to="/charts/peity">
           Peity
         </router-link>
       </li>
       <li>
         <router-link to="/charts/plotly">
           Plotly
         </router-link>
       </li>
     </ul>
   </expanding>
 </aside>
</template>

<script>
  import Expanding from 'vue-bulma-expanding'

  export default {
    name: 'sidebar',
    components: {
      Expanding
    },
    data () {
      return {
        show: false
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/_variables.scss";

  .sidebar {
    position: absolute;
    width: $sidebar-width;
    top: $sidebar-top;
    left: $sidebar-left;
    background: $sidebar-bg;
  }
</style>
