<template>
  <div
    v-if="removed"
    class="file-upload-gallery-item"
    :class="{'file-upload-gallery-item--undo': removed}"
  >
    <va-file-upload-undo
      class="file-upload-gallery-item--undo"
      @recover="recoverImage"
    />
  </div>

  <div
    v-else
    class="file-upload-gallery-item"
    :class="{'file-upload-gallery-item_not-image': !this.previewImage}"
  >
    <img :src="previewImage" alt="" class="file-upload-gallery-item__image">
    <div class="file-upload-gallery-item__overlay">
      <div class="file-upload-gallery-item__name" :title="file.name">
        {{ file.name }}
      </div>
      <va-icon
        icon="ion ion-md-trash"
        color="danger"
        class="file-upload-gallery-item__delete"
        @click.native="removeImage"
      />
    </div>
  </div>
</template>

<script>
import VaFileUploadUndo from './VaFileUploadUndo'
import VaButton from '../va-button/VaButton'
import VaIcon from '../va-icon/VaIcon'

export default {
  name: 'file-upload-gallery-item',
  components: {
    VaIcon,
    VaButton,
    VaFileUploadUndo,
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
  mounted () {
    this.convertToImg()
  },
}
</script>

<style lang='scss'>
@import '../../vuestic-sass/resources/resources';

$max-image-size: 8.5714rem;
.file-upload-gallery-item {
  position: relative;
  margin-bottom: 1rem;
  margin-left: .5rem;
  width: $max-image-size;
  height: $max-image-size;
  box-shadow: $card-box-shadow;
  border-radius: .375rem;
  overflow: hidden;

  &:first-of-type {
    margin-left: 0;
  }
  &:hover {
    .file-upload-gallery-item__overlay {
      display: flex;
    }
  }

  &__overlay {
    display: none;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    max-width: $max-image-size;
    max-height: $max-image-size;
    flex-direction: column;
    padding: 0.5rem;
    background: rgba($vue-green, 0.8);
    z-index: 1;
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: $max-image-size;
    max-height: $max-image-size;
    object-fit: cover;
  }

  &__name {
    color: $vue-darkest-blue;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: .875rem;
  }

  &__delete {
    cursor: pointer;
    font-size: 1.5rem;
    margin-top: auto;
  }

  &--undo {
    box-shadow: none;
    .file-upload-gallery-item--undo {
      padding: .5rem;
      span {
        margin-right: .5rem;
      }
      .va-button {
        margin: 0;
      }
    }
  }
}

.file-upload-gallery-item_not-image {
  .file-upload-gallery-item__overlay {
    display: flex;
  }
}

</style>
