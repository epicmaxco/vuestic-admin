<template>
  <div class="file-upload-list-item file-upload-list-item--undo row" v-if="removed">
    <div class="col-md-12">
      <vuestic-file-upload-undo
        @recover="recoverFile"
      />
    </div>
  </div>

  <div class="file-upload-list-item row" v-else>
    <div class="file-upload-list-item-name col-lg-3 col-xl-3 col-12">
      {{ file.name }}
    </div>
    <div class="file-upload-list-item-size col-lg-3 col-xl-3 col-12">
      {{ file.size }}
    </div>
    <div class="file-upload-list-item-date col-lg-4 col-xl-4 col-12">
      <span>{{ $t('fileUpload.uploadedOn')}} {{ file.date }}</span>
    </div>
    <div class="file-upload-list-item-buttons col-lg-2 col-xl-2 col-12 d-flex">
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
    showFilePreview () {

    },
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

<style lang='scss'>
  .file-upload-list-item {
    & + & {
      margin-top: 0.5rem;
    }
    min-height: 2.7rem;
    display: flex;
    background-color: $white;
    box-shadow: $sidebar-box-shadow;
    margin: 0 1rem;
    padding: 0.1rem 0.1rem;
    &-name {
      margin: auto;
    }
    &-size {
      margin: auto;
      color: $gray-light;
    }
    &-date {
      margin: auto;
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
        margin-top: 0.7rem;
        justify-content: flex-start;
      }
    }
  }
</style>
