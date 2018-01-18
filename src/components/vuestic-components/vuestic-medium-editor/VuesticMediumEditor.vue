<template>
  <div class="vuestic-medium-editor">
    <slot></slot>
  </div>
</template>

<script>
  import MediumEditor from 'medium-editor'

  export default {
    name: 'vuestic-medium-editor',

    data () {
      return {
        editor: null
      }
    },

    mounted () {
      this.initEditor()
    },

    beforeDestroy () {
      this.destroyEditor()
    },

    methods: {
      initEditor () {
        this.editor = new MediumEditor(this.$el, {
          buttonLabels: 'fontawesome',
          autoLink: true,
          toolbar: {
            buttons: [
              'bold',
              'italic',
              'underline',
              'anchor',
              'h1',
              'h2',
              'h3'
            ]
          }
        })

        this.$emit('initialized', this.editor)
      },

      destroyEditor () {
        this.editor.destroy()
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../sass/_variables.scss';
  @import "../../../sass/mixins";
  @import "../../../../node_modules/bootstrap/scss/mixins/buttons";
  @import "../../../../node_modules/medium-editor/src/sass/medium-editor";


  $medium-editor-button-size: $btn-padding-y * 2 + $font-size-base * $btn-line-height;


  .vuestic-medium-editor {
    &:focus {
      outline: none;
    }
  }

  .medium-editor-toolbar {
    background-color: $brand-primary;
    border-radius: $btn-border-radius;
    max-width: 80%;

    .medium-editor-toolbar-actions {
      border-radius: $btn-border-radius;
      box-shadow: $btn-box-shadow;
      overflow: hidden;
    }

    li {
      background-color: $brand-primary;
      overflow: hidden;
      button {
        @include theme-button-variant($white, $brand-primary, $btn-border, $btn-box-shadow);
        padding: $btn-padding-y $btn-group-button-padding-x;
        font-size: $font-size-base;
        line-height: $btn-line-height;
        height: $medium-editor-button-size;
        box-shadow: none;
        border-radius: 0;

        &.hover {
          background-color: lighten($brand-primary, 10%) !important;
          color: $white;
        }

        &.focus, &.medium-editor-button-active {
          background-color: darken($brand-primary, 15%);
          color: $white;
        }
      }
    }
  }

  .medium-editor-toolbar-form {
    background: $brand-primary;
    border-radius: $btn-border-radius;
    color: $white;
    overflow: hidden;

    .medium-editor-toolbar-input {
      background: $brand-primary;
      box-sizing: border-box;
      color: $white;
      height: $medium-editor-button-size;
      padding-left: 16px;
      width: 220px;

      &::-webkit-input-placeholder {
        color: rgba($white, .8);
      }
      &:-moz-placeholder { /* Firefox 18- */
        color: rgba($white, .8);
      }
      &::-moz-placeholder {  /* Firefox 19+ */
        color: rgba($white, .8);
      }
      &:-ms-input-placeholder {
        color: rgba($white, .8);
      }
    }

    a {
      color: $white;
      transform: translateY(2px);
    }

    .medium-editor-toolbar-close {
      margin-right: 16px;
    }
  }

  .medium-toolbar-arrow-under:after {
    border-color: $brand-primary transparent transparent transparent;
    top: $medium-editor-button-size;
  }

  .medium-toolbar-arrow-over:before {
    border-color: transparent transparent $brand-primary transparent;
  }

  .medium-editor-toolbar-anchor-preview {
    background: $brand-primary;
    border-radius: $btn-border-radius;
    padding: $btn-padding-y $btn-padding-x;
    font-size: $font-size-base;
    line-height: $btn-line-height;

    .medium-editor-toolbar-anchor-preview {
      margin: 0;
    }
  }

  .medium-editor-anchor-preview {
    max-width: 50%;
    a {
      color: $white;
      text-decoration: none;
    }
  }

</style>
