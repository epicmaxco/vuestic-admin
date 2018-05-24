<template>
    <div class="vuestic-file-upload__dropzone">
        <div class="vuestic-file-upload__dropzone-label"
            :class="{'vuestic-file-upload__dropzone-label--short': short}">
            {{ $t('fileUpload.dragNdropFiles') }}
        </div>
        <input type="file"
               title=" "
               class="vuestic-file-upload__dropzone-input"
               :accept="acceptedFormats"
               multiple
               @change="$emit('upload', $event)"
        >

        <div class="vuestic-file-upload__dropzone-main">
            <slot/>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'vuestic-file-upload-dropzone',
    props: {
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

<style lang='scss' scoped>
    @import '../../../sass/_variables.scss';

    .vuestic-file-upload__dropzone {
        position: relative;
        overflow: hidden;
        cursor: pointer;
        &-label {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 150px;
            transition: height .2s;
            &--short {
                height: 70px;
            }
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
</style>