<template>
  <div
    v-if="removed"
    class="va-file-upload-gallery-item"
    :class="{'va-file-upload-gallery-item--undo': removed}"
  >
    <va-file-upload-undo
      class="va-file-upload-gallery-item--undo"
      @recover="recoverImage"
    />
  </div>

  <div
    v-else
    class="va-file-upload-gallery-item"
    :class="{'file-upload-gallery-item_not-image': !this.previewImage}"
  >
    <img :src="previewImage" alt="" class="va-file-upload-gallery-item__image">
    <div
      class="va-file-upload-gallery-item__overlay"
      :style="overlayStyles"
    >
      <div class="va-file-upload-gallery-item__name" :title="file.name">
        {{ file.name }}
      </div>
      <va-icon
        name="material-icons"
        color="danger"
        class="va-file-upload-gallery-item__delete"
        @click.native="removeImage"
      >delete_outline</va-icon>
    </div>
  </div>
</template>

<script>
import VaFileUploadUndo from './VaFileUploadUndo'
import VaButton from '../va-button/VaButton'
import VaIcon from '../va-icon/VaIcon'
import { hex2rgb } from '../../../services/color-functions'

export default {
  name: 'va-file-upload-gallery-item',
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
    color: {
      type: String,
      default: 'success',
    },
  },
  watch: {
    file () {
      this.convertToImg()
    },
  },
  computed: {
    overlayStyles () {
      return {
        backgroundColor: hex2rgb(this.color, 0.7).css,
      }
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
      }, 200000)
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
.va-file-upload-gallery-item {
  position: relative;
  margin-bottom: 1rem;
  margin-right: .5rem;
  width: $max-image-size;
  height: $max-image-size;
  box-shadow: $card-box-shadow;
  border-radius: .375rem;
  overflow: hidden;

  &:last-of-type {
    margin-right: 0;
  }
  &:hover {
    .va-file-upload-gallery-item__overlay {
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
    background: rgba($lighter-green, 0.8);
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
    .va-file-upload-gallery-item--undo {
      padding: .5rem;
      display: flex;
      flex-direction: column;
      font-size: .875rem;
      height: 100%;
      justify-content: space-between;
      align-items: flex-start;
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
