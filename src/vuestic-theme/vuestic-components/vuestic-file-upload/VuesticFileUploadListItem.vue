<template>
    <div class="file-upload-list__item file-upload-list__item--undo row" v-if="removed">
        <div class="col-md-12">
            {{ $t('fileUpload.fileDeleted') }}
            <button type="button"
                    class="btn-text btn-text--primary"
                    @click="recoverFile">
                {{ $t('fileUpload.undo') }}?
            </button>
        </div>
    </div>

    <div class="file-upload-list__item row" v-else>
        <div class="file-upload-list__item-name col-md-4">
            {{ file.name }}
        </div>
        <div class="file-upload-list__item-size col-md-1">
            {{ file.size }}
        </div>
        <div class="file-upload-list__item-date col-md-5">
            <span>{{ $t('fileUpload.uploadedOn')}} {{ file.date }}</span>
        </div>
        <div class="file-upload-list__item-buttons col-md-2 d-flex">
            <button type="button"
                    class="btn-text btn-text--primary">
                {{ $t('fileUpload.preview') }}
            </button>
            <button type="button"
                    class="btn-text btn-text--primary"
                    @click="removeFile">
                {{ $t('fileUpload.remove') }}
            </button>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'vuestic-file-upload-list-item',
    data () {
      return {
        removed: false
      }
    },
    props: {
      file: {
        type: Object
      }
    },
    methods: {
      removeFile () {
        this.removed = true
        setTimeout(() => {
          if (this.removed) {
            this.$emit('remove')
            this.removed = false
          }
        }, 2000)
      },
      recoverFile () {
        this.removed = false
      }
    },
    mounted () {
      console.log(this.file)
    }
  }
</script>

<style lang='scss' scoped>
    @import '../../../sass/_variables.scss';

    .file-upload-list {
        &__item {
            & + .file-upload-list__item {
                margin-top: 8px;
            }
            height: 40px;
            display: flex;
            background-color: $white;
            box-shadow: $sidebar-box-shadow;
            margin: 0 15px;
            padding: 8px 10px;
            &-size {
                color: $gray-light;
            }
            &-date {
                color: $gray-light;
            }
            &--undo {
                background: none;
                box-shadow: none;
            }
        }
    }
</style>