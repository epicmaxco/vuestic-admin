<template>
  <div class="tabs">
    <nav class="nav nav-pills justify-content-between">
      <div class="nav-item" :class="{active: names.indexOf(name) == 0}" v-for="name in names">
        <a class="nav-link" :href="'#' + toUnderScore(name)"><h5>{{name}}</h5></a>
      </div>
    </nav>

    <div class="tab-content">
      <div class="tab-pane" :class="{active: names.indexOf(name) == 0}" :id="toUnderScore(name)" v-for="name in names">
        <slot :name="name"></slot>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'tabs',
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
        let id = navItem.getElementsByClassName('nav-link')[0].getAttribute('href').slice(1)
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
  @import "../../sass/variables";

  .tabs {
    padding-left: 80px;
    padding-top: 36px;
    padding-right: 67px;
    background-color: white;
    .nav-item {
      text-align: center;
      a {
        padding: 0;
        color: #adb3b9;
      }
      &.active {
        a {
          color: #34495e;
        }
        border-bottom: $brand-primary solid 2px;
      }
    }
    .tab-content {
      padding-top: 76px;
      padding-bottom: 38px;
    }
  }
</style>
