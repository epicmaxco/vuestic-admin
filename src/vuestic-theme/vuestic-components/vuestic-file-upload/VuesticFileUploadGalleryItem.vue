<template>
  <div v-if="removed" class="file-upload-gallery-item">
    <vuestic-file-upload-undo
      class="file-upload-gallery-item-undo"
      @recover="recoverImage"
    />
  </div>

  <div v-else class="file-upload-gallery-item" :class="notGalleryItemClass">
    <img :src="previewImage" alt="" class="file-upload-gallery-item-image">
    <div class="file-upload-gallery-item-overlay">
      <div class="file-upload-gallery-item-name" :title="file.name">
        {{ file.name }}
      </div>
      <div class="file-upload-gallery-item-size">
        {{ file.size }}
      </div>
      <button type="button"
              class="btn-text btn-text--secondary file-upload-gallery-item-button"
              @click="removeImage">
        {{ $t('fileUpload.deleteFile') }}
      </button>
    </div>
  </div>
</template>

<script>
import VuesticFileUploadUndo from './VuesticFileUploadUndo'

export default {
  name: 'file-upload-gallery-item',
  components: {
    VuesticFileUploadUndo: VuesticFileUploadUndo,
  },
  data () {
    return {
      previewImage: '',
      removed: false,
    }
  },
  props: {
    file: {
      default: {},
    },
  },
  watch: {
    file () {
      this.convertToImg()
    },
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
      const imageFileTypes = ['/png', '/jpg', '/jpeg', '/gif']
      reader.readAsDataURL(this.file.image)
      reader.onload = (e) => {
        for (let i = 0; i < imageFileTypes.length; i++) {
          if (e.target.result.indexOf(imageFileTypes[i]) >= 0) {
            this.previewImage = e.target.result
          }
        }
      }
    },
  },
  computed: {
    notGalleryItemClass: function () {
      return {
        'file-upload-gallery-item_not-image': !this.previewImage,
      }
    },
  },
  mounted () {
    this.convertToImg()
  },
}
</script>

<style lang='scss'>
.file-upload-gallery-item {
  position: relative;
  width: 100%;
  padding-top: 100%;
  margin-bottom: 1rem;

  &:hover {
    .file-upload-gallery-item-overlay {
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
    padding: 0.5rem;
    background: rgba($vue-green, 0.8);
    z-index: 1;
  }

  &-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }

  &-name {
    color: $vue-darkest-blue;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &-size {
    color: $vue-darkest-blue;
  }

  &-button {
    margin-top: auto;
    text-align: left;
  }

  &-undo {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.7rem 0 0;
  }
}

.file-upload-gallery-item_not-image {
  .file-upload-gallery-item-overlay {
    display: flex;
  }
}

</style>
