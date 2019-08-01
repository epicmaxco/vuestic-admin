<template>
  <div class="va-medium-editor content">
    <slot/>
  </div>
</template>

<script>
import MediumEditor from 'medium-editor'

export default {
  name: 'va-medium-editor',

  props: {
    editorOptions: {
      type: Object,
      default: () => {
        return {
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
              'h3',
            ],
          },
        }
      },
    },
  },

  data () {
    return {
      editor: null,
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
      this.editor = new MediumEditor(this.$el, this.editorOptions)
      this.$emit('initialized', this.editor)
    },

    destroyEditor () {
      this.editor.destroy()
    },
  },
}
</script>

<style lang="scss">
@import "@/vuestic-theme/vuestic-sass/resources/resources.scss";
@import "~medium-editor/src/sass/medium-editor";

.va-medium-editor{
  margin-bottom: 2.25rem;
  min-width: 6rem;
  max-width: 600px;

  &:focus {
    outline: none;
  }
}

// isn't a part of the .va-medium-editor, so can't be places inside it
.medium-editor-toolbar,
.medium-editor-toolbar-form,
.medium-editor-toolbar-actions,
.medium-editor-toolbar-anchor-preview {
  box-shadow: $btn-box-shadow 0 #77cea4;
  background-color: $brand-primary;
  border-radius: $btn-border-radius-nrm;
}

.medium-editor-toolbar {
  max-width: 90%;
  box-shadow: none;

  .medium-editor-toolbar-actions {
    overflow: hidden;
  }

  .medium-editor-action {
    margin: 0;
    border: $btn-border;
    padding: $btn-padding-y-nrm 1rem;
    height: $medium-editor-button-size;
    background-color: #40e583;
    box-shadow: none;
    border-radius: 0;

    i {
      color: $white;
    }

    &.medium-editor-button-active {
      background-color: darken($brand-primary, 15%);
    }
  }

  & > .medium-editor-action:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0;
  }

  & > .medium-editor-action + .medium-editor-action {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 0;
  }
}

.medium-editor-toolbar-form {
  color: $white;
  overflow: hidden;

  a {
    color: $white;
    transform: translateY(1px);
  }

  input {
    margin-left: 4px !important;
    transform: translateY(-2px);
    border-radius: 13px;
  }

  .medium-editor-toolbar-close {
    margin-right: 1rem;
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
  @include va-button($btn-padding-y-nrm, $btn-padding-x-nrm, $btn-font-size-nrm, $btn-line-height-nrm, $btn-border-radius-nrm);

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
