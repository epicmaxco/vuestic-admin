<template>
  <div ref="editorElement" class="va-medium-editor content">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref, onMounted, onBeforeUnmount } from 'vue'
import MediumEditor from 'medium-editor'

const props = withDefaults(
  defineProps<{
    editorOptions?: {
      buttonLabels: string
      autoLink: boolean
      toolbar: {
        buttons: string[]
      }
    }
  }>(),
  {
    editorOptions: () => ({
      buttonLabels: 'fontawesome',
      autoLink: true,
      toolbar: {
        buttons: ['bold', 'italic', 'underline', 'anchor', 'h1', 'h2', 'h3'],
      },
    }),
  },
)

const emit = defineEmits<{
  (e: 'initialized', editor: typeof MediumEditor): void
}>()

const editorElement: Ref<null | HTMLElement> = ref(null)
let editor: typeof MediumEditor | null = null

onMounted(() => {
  if (!editorElement.value) {
    return
  }

  editor = new MediumEditor(editorElement.value, props.editorOptions)
  emit('initialized', editor)
})

onBeforeUnmount(() => {
  if (editor) {
    editor.destroy()
  }
})
</script>

<style lang="scss">
@import 'medium-editor/src/sass/medium-editor';
@import 'variables';

$medium-editor-shadow: var(--va-box-shadow);
$medium-editor-background-color: var(--va-divider);
$medium-editor-text-color: var(--va-dark);
$medium-editor-active-background-color: var(--va-primary);
$medium-editor-active-text-color: var(--va-white);

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
  box-shadow: $medium-editor-shadow;
  background-color: $medium-editor-background-color;
  border-radius: 1.5rem;
  height: 44px;
  line-height: 42px;
}

.medium-editor-toolbar-anchor-preview {
  a {
    padding: 0 2rem;
    margin: 0;
    line-height: 44px;
  }
}

.medium-editor-toolbar {
  box-shadow: $medium-editor-shadow;

  .medium-editor-toolbar-actions {
    overflow: hidden;
    height: 44px;
  }

  .medium-editor-action {
    margin: 0;
    border: 0;
    padding: 0.375rem 1rem;
    height: 44px;
    background-color: $medium-editor-background-color;
    box-shadow: none;
    border-radius: 0;

    i {
      color: $medium-editor-text-color;
    }

    &.medium-editor-button-active {
      background-color: $medium-editor-active-background-color;
      color: $medium-editor-active-text-color;

      i {
        color: $medium-editor-active-text-color;
      }
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
  color: $medium-editor-text-color;
  overflow: hidden;

  a {
    color: $medium-editor-text-color;
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
  border-color: $medium-editor-background-color transparent transparent transparent;
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
    color: $medium-editor-text-color;
    text-decoration: none;
  }
}
</style>
