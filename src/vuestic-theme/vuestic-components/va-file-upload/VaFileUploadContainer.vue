<template>
  <div class="va-file-upload-container">
    <div
      class="va-file-upload-container__field"
      :class="{'va-file-upload-container__field--dropzone': dropzone}"
      :style="dropzoneStyle"
    >
      <div
        class="va-file-upload-container__field__text"
        v-if="dropzone"
      >
        {{ $t('fileUpload.dragNdropFiles') }}
      </div>
      <va-button>
        {{ $t('fileUpload.uploadFile') }}
      </va-button>
      <input
        type="file"
        class="va-file-upload-container__field__input"
        ref="fieldInput"
        :accept="fileTypes"
        :multiple="type !== 'single'"
        @change="changeFieldValue"
      >
    </div>
    <div class="va-file-upload-container__main">
      <slot/>
    </div>
  </div>
</template>

<script>
import { getHoverColor } from '../../../services/color-functions'

export default {
  name: 'va-file-upload-container',
  props: {
    dropzone: {
      type: Boolean,
      default: false,
    },
    fileTypes: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  computed: {
    dropzoneStyle () {
      if (!this.dropzone) return

      return {
        backgroundColor: getHoverColor(this.$themes.primary),
      }
    },
  },
  methods: {
    changeFieldValue (e) {
      this.$emit('upload', e)
      this.$refs.fieldInput.value = ''
    },
  },
}
</script>

<style lang='scss'>
.va-file-upload-container {
  position: relative;

  &__field {
    padding: 0 0 1.3rem;
    overflow: hidden;
    display: inline-block;
    position: relative;

    @media (max-width: 576px) {
      &--dropzone {
        flex-direction: column;
        padding: 0;
      }
    }

    &--dropzone {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 10rem;
      padding: 0 2rem;
      transition: height .2s;
      overflow: visible;
      position: static;
    }

    &__text {
      padding-right: 10px;
    }

    &__input {
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      min-height: 10rem;
      min-width: 100%;
      color: transparent;
      opacity: 0;
      filter: alpha(opacity=0);
      cursor: pointer;
    }
  }
}

</style>
