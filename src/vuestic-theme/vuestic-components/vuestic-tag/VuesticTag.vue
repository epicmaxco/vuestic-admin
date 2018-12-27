<template>
  <span class="vuestic-tag" :class="tagClass">
    {{ name }}
    <span class="vuestic-tag-button"
          v-if="removable"
          @click="remove"
    >
      <i class="ion-md-close ion"></i>
    </span>
  </span>
</template>

<script>
export default {
  name: 'vuestic-tag',
  data () {
    return {
      deleted: false,
    }
  },
  props: {
    name: {
      type: String,
    },
    removable: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'primary',
    },
  },
  computed: {
    tagClass () {
      return `vuestic-tag-${this.type} ${this.deleted ? 'vuestic-tag-deleted' : ''}`
    },
  },
  methods: {
    remove () {
      this.deleted = true
      setTimeout(() => {
        this.$emit('remove')
        this.deleted = false
      }, 500)
    },
  },
}
</script>

<style lang="scss">
.vuestic-tag {
  height: 32px;
  border-radius: 16px;
  padding: 5px 14px;
  color: $text-gray;
  border: solid 2px transparent;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  opacity: 1;
  &:not(:last-child) {
    margin-right: 15px;
  }
  &-deleted {
    opacity: 0;
    transition: all 0.5s ease;
  }
}

.vuestic-tag-primary {
  border-color: theme-color("primary");
  .vuestic-tag-button {
    color: theme-color("primary");
    &:hover {
      color: lighten(theme-color("primary"), 15%);
    }
    &:focus, &:active {
      color: darken(theme-color("primary"), 15%);
    }
  }
}

.vuestic-tag-danger {
  border-color: theme-color("danger");
  .vuestic-tag-button {
    color: theme-color("danger");
    &:hover {
      color: lighten(theme-color("danger"), 15%);
    }
    &:focus, &:active {
      color: darken(theme-color("danger"), 15%);
    }
  }
}

.vuestic-tag-info {
  border-color: theme-color("info");
  .vuestic-tag-button {
    color: theme-color("info");
    &:hover {
      color: lighten(theme-color("info"), 15%);
    }
    &:focus, &:active {
      color: darken(theme-color("info"), 15%);
    }
  }
}

.vuestic-tag-dark {
  border-color: theme-color("dark");
  .vuestic-tag-button {
    color: theme-color("dark");
    &:hover {
      color: lighten(theme-color("dark"), 35%);
    }
    &:focus, &:active {
      color: darken(theme-color("dark"), 15%);
    }
  }
}

.vuestic-tag-warning {
  border-color: theme-color("warning");
  .vuestic-tag-button {
    color: theme-color("warning");
    &:hover {
      color: lighten(theme-color("warning"), 15%);
    }
    &:focus, &:active {
      color: darken(theme-color("warning"), 15%);
    }
  }
}

.vuestic-tag-pale {
  border-color: theme-color("pale");
  .vuestic-tag-button {
    color: theme-color("pale");
    &:hover {
      color: lighten(theme-color("pale"), 5%);
    }
    &:focus, &:active {
      color: darken(theme-color("pale"), 15%);
    }
  }
}

.vuestic-tag-button {
  font-size: 1.2rem;
  margin-left: 7px;
  cursor: pointer;
}
</style>
