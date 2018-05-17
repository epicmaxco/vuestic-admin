<template>
  <div class="col nav-item dropdown navbar-dropdown" v-dropdown>
    <a class="nav-link dropdown-toggle" href="#" @click.prevent="closeMenu">
      <slot></slot>
    </a>
    <div class="dropdown-menu">
      <div class="dropdown-menu-content">
        <a v-for="(option, id) in options" :key="id" class="dropdown-item" href="#">
          <span class="ellipsis">{{ $t(`messages.${option.name}`, { name: option.details.name})}}</span>
        </a>
        <div class="dropdown-item plain-link-item">
          <a class="plain-link" href="#">{{'messages.all' | translate}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'message-dropdown',

    props: {
      options: {
        type: Array,
        required: true
      }
    },

    computed: {
      ...mapActions(['closeMenu'])
    },

    methods: {
      ...mapActions([
        'closeMenu'
      ])
    }
  }
</script>
