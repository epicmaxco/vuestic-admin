<template>
  <div
    class="file-upload-list-item d-flex"
    :class="{'file-upload-list-item--undo': removed}"
  >
    <div
      class="va-row"
      v-if="removed"
    >
      <div class="flex md12">
        <va-file-upload-undo @recover="recoverFile"/>
      </div>
    </div>

    <div class="va-row align--center" v-else>
      <div class="file-upload-list-item__name flex xs12 lg3 ellipsis">
        {{ file.name }}
      </div>
      <div class="file-upload-list-item__size flex xs12 lg3">
        {{ file.size }}
      </div>
      <div class="file-upload-list-item__date flex xs12 lg4">
        <span>Uploaded on {{ file.date }}</span>
      </div>
      <div class="file-upload-list-item__button-container flex xs12 lg2">
        <va-button outline @click="removeFile" color="danger" small>
          Delete
        </va-button>
      </div>
    </div>
  </div>
</template>

<script>
import VaFileUploadUndo from './VaFileUploadUndo'
import VaButton from '../va-button/VaButton'

export default {
  name: 'va-file-upload-list-item',
  components: {
    VaButton,
    VaFileUploadUndo,
  },
  props: {
    file: {
      type: Object,
    },
  },
  data () {
    return {
      removed: false,
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
    },
  },
}
</script>

<style lang='scss'>
@import '../../vuestic-sass/resources/resources';

.file-upload-list-item {
  & + & {
    margin-top: 0.5rem;
  }

  background-color: $white;
  box-shadow: $sidebar-box-shadow;
  padding: 0.6rem 1rem;

  &__size {
    margin: auto;
    color: $gray-light;
  }

  &__date {
    margin: auto;
    color: $gray-light;
  }

  &--undo {
    background: none;
    box-shadow: none;
  }

  @include media-breakpoint-up(lg) {
    &__button-container {
      text-align: right;
    }
  }
}
</style>
