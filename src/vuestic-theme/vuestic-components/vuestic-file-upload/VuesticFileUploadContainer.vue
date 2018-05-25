<template>
  <div class="vuestic-file-upload-container">
    <div class="vuestic-file-upload-field"
         :class="{'vuestic-file-upload-field--dropzone': dropzone}">
      <div class="vuestic-file-upload-field-text"
           v-if="dropzone">
        {{ $t('fileUpload.dragNdropFiles') }}
      </div>
      <button type="button" class="btn btn-primary btn-micro">
        {{ $t('fileUpload.uploadFile') }}
      </button>
      <input type="file"
             title=" "
             class="vuestic-file-upload-field-input"
             :accept="acceptedFormats"
             :multiple="type !== 'single'"
             @change="$emit('upload', $event)"
      >
    </div>
    <div class="vuestic-file-upload-main">
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vuestic-file-upload-container',
    props: {
      dropzone: {
        type: Boolean,
        default: false
      },
      short: {
        type: Boolean
      },
      fileTypes: {
        type: String
      },
      type: {
        type: String
      },
    },
    computed: {
      acceptedFormats () {
        return this.type === 'gallery' && !this.fileTypes ? 'image/x-png, image/gif, image/jpeg' : this.fileTypes
      }
    }
  }
</script>

<style lang='scss'>
  @import '../../../sass/_variables.scss';

  .vuestic-file-upload-container {
    position: relative;
  }

  .vuestic-file-upload-field {
    padding: 0 0 20px;
    overflow: hidden;
    display: inline-block;
    position: relative;
    &--dropzone {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 150px;
      padding: 0 30px;
      transition: height .2s;
      overflow: visible;
      position: static;
    }
    &-text {
      padding-right: 10px;
    }
    &-input {
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      font-size: 999px;
      min-height: 100%;
      min-width: 100%;
      color: transparent;
      opacity: 0;
      filter: alpha(opacity=0);
      text-align: right;
      cursor: pointer;
    }
  }

  @media (max-width: 576px) {
    .vuestic-file-upload-field {
      &--dropzone {
        flex-direction: column;
        padding: 0;
      }
    }
  }
</style>