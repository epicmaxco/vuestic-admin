<template>
  <va-card
    class="file-upload-list-item"
    :stripe="removed ? '' : 'success'"
    no-margin
    no-padding
    :class="{'file-upload-list-item--undo': removed}"
  >
    <va-file-upload-undo @recover="recoverFile" v-if="removed"/>
    <div class="file-upload-list-item__content" v-else>
      <div class="file-upload-list-item__name ellipsis">
        {{ file.name }}
      </div>
      <div class="file-upload-list-item__size">
        {{ file.size }}
      </div>
      <va-button outline @click="removeFile" color="danger" small>
        Delete
      </va-button>
    </div>
  </va-card>
</template>

<script>
import VaFileUploadUndo from './VaFileUploadUndo'
import VaButton from '../va-button/VaButton'
import VaCard from '../va-card/VaCard'

export default {
  name: 'va-file-upload-list-item',
  components: {
    VaCard,
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

  &__content {
    display: flex;
    align-items: center;
  }

  &__size {
    color: $gray-light;
  }

  &--undo {
    background: none;
    box-shadow: none;
  }
}
</style>
