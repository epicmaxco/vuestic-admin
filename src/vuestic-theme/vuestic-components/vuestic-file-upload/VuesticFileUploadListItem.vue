<template>
  <div class="file-upload-list-item file-upload-list-item--undo row" v-if="removed">
    <div class="col-md-12">
      <vuestic-file-upload-undo
        @recover="recoverFile"
      />
    </div>
  </div>

  <div class="file-upload-list-item row" v-else>
    <div class="file-upload-list-item-name col-lg-4 col-12">
      {{ file.name }}
    </div>
    <div class="file-upload-list-item-size col-lg-3 col-xl-2 col-12">
      {{ file.size }}
    </div>
    <div class="file-upload-list-item-date col-lg-5 col-xl-4 col-12">
      <span>{{ $t('fileUpload.uploadedOn')}} {{ file.date }}</span>
    </div>
    <div class="file-upload-list-item-buttons col-xl-2 col-12 d-flex">
      <button type="button"
              class="btn-text btn-text--primary">
        {{ $t('fileUpload.preview') }}
      </button>
      <button type="button"
              class="btn-text btn-text--primary"
              @click="removeFile">
        {{ $t('fileUpload.delete') }}
      </button>
    </div>
  </div>
</template>

<script>
  import VuesticFileUploadUndo from './VuesticFileUploadUndo'

  export default {
    name: 'vuestic-file-upload-list-item',
    components: {
      VuesticFileUploadUndo: VuesticFileUploadUndo
    },
    props: {
      file: {
        type: Object
      }
    },
    data () {
      return {
        removed: false
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
    }
  }
</script>

<style lang='scss' scoped>
  @import '../../../sass/_variables.scss';
  @import "~bootstrap/scss/mixins/breakpoints";

  .file-upload-list-item {
    & + & {
      margin-top: 8px;
    }
    min-height: 40px;
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
    &-buttons {
      display: flex;
      justify-content: flex-end;
    }
    &--undo {
      background: none;
      box-shadow: none;
    }
  }

  @media (max-width: 1200px) {
    .file-upload-list-item {
      &-buttons {
        margin-top: 10px;
        justify-content: flex-start;
      }
    }
  }
</style>