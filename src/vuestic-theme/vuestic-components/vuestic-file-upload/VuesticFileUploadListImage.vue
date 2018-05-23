<template>
    <div class="col-md-2" v-if="removed">
        <div class="file-upload-list__image file-upload-list__image--undo">
            {{ $t('fileUpload.fileDeleted') }}
            <button type="button"
                    class="btn-text btn-text--primary"
                    @click="recoverImage">
                {{ $t('fileUpload.undo') }}?
            </button>
        </div>
    </div>

    <div class="col-md-2" v-else>
        <div class="file-upload-list__image">
            <div class="file-upload-list__image-wrap">
                <img :src="previewImage" alt="">
            </div>
            <div class="file-upload-list__image-overlay">
                <div class="file-upload-list__image-name">
                    {{ file.name }}
                </div>
                <div class="file-upload-list__image-size">
                    {{ file.size }}
                </div>
                <button type="button"
                        class="btn-text btn-text--secondary file-upload-list__image-button"
                        @click="removeImage">
                    {{ $t('fileUpload.deleteFile') }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'vuestic-file-upload-list-image',
    data () {
      return {
        previewImage: '',
        removed: false
      }
    },
    props: {
      file: {
        default: {}
      }
    },
    methods: {
      removeImage () {
        this.removed = true
        setTimeout(() => {
          if (this.removed) {
            this.$emit('remove')
            this.removed = false
          }
        }, 2000)
      },
      recoverImage () {
        this.removed = false
      },
      convertToImg () {
        const reader = new FileReader()

        reader.readAsDataURL(this.file.image)
        reader.onload = (e) => {
          this.previewImage = e.target.result
        }
      }
    },
    mounted () {
      this.convertToImg()
    },
  }
</script>

<style lang='scss' scoped>
    @import '../../../sass/_variables.scss';

    .file-upload-list__image {
        position: relative;
        &:hover {
            .file-upload-list__image-overlay {
                display: flex;
            }
        }
        &-overlay {
            display: none;
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            flex-direction: column;
            padding: 8px;
            background-color: $vue-green;
            z-index: 1;
        }
        &-wrap {
            position: relative;
            width: 100%;
            padding-top: 100%;
            img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }
        &-name {
            color: $vue-darkest-blue;
        }
        &-size {
            color: $vue-darkest-blue;
        }
        &-button {
            margin-top: auto;
            text-align: left;
        }
    }
</style>