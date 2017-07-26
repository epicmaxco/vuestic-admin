<template>
  <widget>
    <div class="vuestic-tabs">
      <nav class="nav nav-pills justify-content-between">
        <div class="nav-item" :class="{active: names.indexOf(name) == 0}" v-for="name in names">
          <span class="nav-link" :id="'#' + toUnderScore(name)"><h5>{{name}}</h5></span>
        </div>
      </nav>
      <div class="tab-content">
        <div class="tab-pane" :class="{active: names.indexOf(name) == 0}" :id="toUnderScore(name)" v-for="name in names">
          <slot :name="name"></slot>
        </div>
      </div>
    </div>
  </widget>
</template>

<script>

  import Widget from 'components/common/widget/Widget.vue'

  export default {
    components: {Widget},
    name: 'vuestic-tabs',
    props: ['names'],
    methods: {
      toUnderScore (string) {
        string = string.toLowerCase().split('').map(char => {
          if (char === ' ') return '_'
          else return char
        }).join('')
        return string
      },
      setActive ({navItem, id}) {
        let tabPanes = this.tabContent.getElementsByClassName('tab-pane')
        let navItems = this.nav.getElementsByClassName('nav-item')
        for (let tabPane of tabPanes) {
          tabPane.className = 'tab-pane'
        }
        for (let navItem of navItems) {
          navItem.className = 'nav-item'
        }
        document.getElementById(id).className = 'tab-pane active'
        navItem.className = 'nav-item active'
      }
    },
    mounted () {
      this.tabContent = this.$el.getElementsByClassName('tab-content')[0]
      this.nav = this.$el.getElementsByClassName('nav')[0]

      let navItems = this.nav.getElementsByClassName('nav-item')

      for (let navItem of navItems) {
        let id = navItem.getElementsByClassName('nav-link')[0].getAttribute('id').slice(1)
        let item = {
          navItem: navItem,
          id: id
        }
        navItem.addEventListener('click', (e) => {
          this.setActive(item)
        })
      }
    },
    destroyed () {
    },
    data () {
      return {
        tabContent: {},
        nav: {}
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/variables";

  $vuestic-tabs-padding: 2.25rem - $widget-padding 4.1875rem - $widget-padding
  2.375rem - $widget-padding 5rem - $widget-padding;
  $vuestic-tabs-content-padding-t: 4.75rem;

  .vuestic-tabs {
    padding: $vuestic-tabs-padding;

    background-color: white;
    .nav-item {
      text-align: center;
      &:hover {
        cursor: pointer;
      }
      .nav-link {
        padding: 0;
        color: $gray;
      }
      &.active {
        .nav-link {
          color: $vue-darkest-blue;
        }
        border-bottom: $brand-primary solid .125rem;
      }
    }
    .tab-content {
      padding-top: $vuestic-tabs-content-padding-t;
    }
  }
</style>
