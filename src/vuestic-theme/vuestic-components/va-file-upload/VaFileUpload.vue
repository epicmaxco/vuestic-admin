<template>
  <div
    class="va-file-upload"
    :class="{'va-file-upload--dropzone': dropzone}"
  >
    <div
      class="va-file-upload__field"
      :class="{'va-file-upload-container__field--dropzone': dropzone}"
    >
      <div
        class="va-file-upload__field__text"
        v-if="dropzone"
      >
        {{ $t('fileUpload.dragNdropFiles') }}
      </div>
      <va-button class="va-file-upload__field__button">
        {{ $t('fileUpload.uploadFile') }}
      </va-button>
      <input
        type="file"
        class="va-file-upload__field__input"
        ref="fieldInput"
        :accept="fileTypes"
        :multiple="type !== 'single'"
        @change="changeFieldValue"
      >
    </div>
    <div class="va-file-upload__main">
      <va-file-upload-list
        v-if="files.length"
        :type="type"
        :files="files"
        @remove="removeFile"
        @remove-single="removeSingleFile"
      />
      <va-modal
        v-model="modal"
        hideDefaultActions
        :title="$t('fileUpload.modalTitle')"
        :message="$t('fileUpload.modalText')"
      />
    </div>
  </div>
</template>

<script>
import VaFileUploadList from './VaFileUploadList'

export default {
  name: 'va-file-upload',
  components: {
    VaFileUploadList,
  },
  props: {
    type: {
      type: String,
      default: 'list',
      validator (value) {
        return ['list', 'gallery', 'single'].includes(value)
      },
    },
    fileTypes: {
      type: String,
      default: '',
    },
    dropzone: {
      type: Boolean,
    },
    value: {
      default: () => [],
      required: true,
    },
  },
  data () {
    return {
      modal: false,
    }
  },
  methods: {
    changeFieldValue (e) {
      this.uploadFile(e)
      this.$refs.fieldInput.value = ''
    },
    uploadFile (e) {
      let files = e.target.files || e.dataTransfer.files

      // type validation
      if (this.fileTypes) {
        files = this.validateFileTypes(files)
      }
      this.files = [...this.files, ...files]
    },
    removeFile (index) {
      this.files.splice(index, 1)
    },
    removeSingleFile () {
      this.files = []
    },
    validateFileTypes (files) {
      return [...files].filter(file => {
        const fileName = file.name
        const extn = fileName.substring(fileName.lastIndexOf('.') + 1)
          .toLowerCase()
        if (!this.fileTypes.includes(extn)) {
          this.modal = true
        }
        return this.fileTypes.includes(extn)
      })
    },
  },
  computed: {
    files: {
      get () {
        return this.value
      },
      set (files) {
        this.$emit('input', files)
      },
    },
  },
}
</script>

<style lang='scss'>
@import '../../vuestic-sass/resources/resources';

.va-file-upload {
  position: relative;

  &--dropzone {
    background-color: $lighter-green;
    padding: 1.5rem 2rem;
    overflow: hidden;
    border-radius: .375rem;
  }

  &__field {
    padding-bottom: 1rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: 576px) {
      &--dropzone {
        flex-direction: column;
        padding: 0;
      }
    }

    &__button {
      margin: 0;
    }

    &--dropzone {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 10rem;
      padding: 0 2rem;
      transition: height .2s;
      overflow: visible;
    }

    &__text {
      padding-right: 10px;
    }

    &__input {
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      min-height: 10rem;
      min-width: 100%;
      color: transparent;
      opacity: 0;
      filter: alpha(opacity=0);
      cursor: pointer;
    }
  }
}

// Maybe we should create new component for text button
.btn-text {
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  padding: 0;

  & + & {
    margin-left: 1.5rem;
  }

  &--primary {
    color: $vue-green;

    &:hover {
      opacity: 0.6;
    }
  }

  &--secondary {
    color: $white;
  }
}

@media (max-width: 576px) {
  .va-file-upload {
    &--dropzone {
      padding: 0 1rem;
    }
  }
}
</style>
