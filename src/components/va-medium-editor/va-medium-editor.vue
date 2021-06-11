<template>
  <div class="va-medium-editor content" ref="editorElement">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, onMounted, onBeforeUnmount } from 'vue'
import MediumEditor from 'medium-editor'

export default defineComponent({
  name: 'va-medium-editor',
  props: {
    editorOptions: {
      type: Object,
      default: () => ({
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
        }
      })
    }
  },
  setup(props, { emit }) {
    const editorElement: Ref<null | HTMLElement> = ref(null)
    let editor: typeof MediumEditor | null = null

    onMounted(() => {
      if (!editorElement.value) { return; }

      editor = new MediumEditor(editorElement.value, props.editorOptions)
      emit('initialized', editor)
    })

    onBeforeUnmount(() => {
      if (editor) {
        editor.destroy()
      }
    })

    return {
      editorElement
    }
  },
})
</script>

<style lang="scss">
@import "~medium-editor/src/sass/medium-editor";
@import 'variables';

.va-medium-editor {
  margin-bottom: var(--va-medium-editor-margin-bottom);
  min-width: var(--va-medium-editor-min-width);
  max-width: var(--va-medium-editor-max-width);

  &:focus {
    outline: none;
  }

  &.content {
    i {
      font-style: italic;
    }
  }
}

// isn't a part of the .va-medium-editor, so can't be places inside it
.medium-editor-toolbar,
.medium-editor-toolbar-form,
.medium-editor-toolbar-actions,
.medium-editor-toolbar-anchor-preview {
  box-shadow: 0 0.125rem 0.19rem 0 0 var(--va-primary);
  background-color: var(--va-secondary);
  border-radius: 1.5rem;
  height: 44px;
  line-height: 42px;
}

.medium-editor-toolbar {
  max-width: var(--va-medium-editor-toolbar-max-width);
  box-shadow: var(--va-medium-editor-toolbar-box-shadow);

  .medium-editor-toolbar-actions {
    overflow: hidden;
  }

  .medium-editor-action {
    margin: 0;
    border: 0;
    padding: 0.375rem 1rem;
    height: 44px;
    background-color: var(--va-secondary);
    box-shadow: none;
    border-radius: 0;

    i {
      color: var(--va-white);
    }

    &.medium-editor-button-active {
      background-color: var(--va-primary);
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
  color: var(--va-white);
  overflow: hidden;

  a {
    color: var(--va-white);
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

.medium-toolbar-arrow-under::after {
  border-color: var(--va-secondary) transparent transparent transparent;
  top: 100%;
}

.medium-toolbar-arrow-over::before {
  border-color: transparent transparent var(--va-primary) transparent;
}

.medium-editor-toolbar-anchor-preview {
  // @include va-button($btn-padding-y-nrm, $btn-padding-x-nrm, $btn-font-size-nrm, $btn-line-height-nrm, $btn-border-radius-nrm);

  .medium-editor-toolbar-anchor-preview {
    margin: 0;
  }
}

.medium-editor-anchor-preview {
  max-width: 50%;

  a {
    color: var(--va-white);
    text-decoration: none;
  }
}
</style>