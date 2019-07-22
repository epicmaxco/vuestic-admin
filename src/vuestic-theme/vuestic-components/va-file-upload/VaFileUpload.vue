<template>
  <div class="va-file-upload"
       :class="{'va-file-upload--dropzone': dropzone}">
    <va-file-upload-container
      :type="type"
      :fileTypes="fileTypes"
      :dropzone="dropzone"
      @upload="uploadFile"
    >
      <va-file-upload-list
        v-if="files.length"
        :type="type"
        :files="files"
        @remove="removeFile"
        @remove-single="removeSingleFile"
      />
      <va-modal ref="mediumModal" :no-buttons="true">
        <div slot="title">{{ $t('fileUpload.modalTitle') }}</div>
        <div>
          {{ $t('fileUpload.modalText') }}
        </div>
      </va-modal>
    </va-file-upload-container>
  </div>
</template>

<script>
import VaFileUploadList from './VaFileUploadList'
import VaFileUploadContainer from './VaFileUploadContainer'

export default {
  name: 'va-file-upload',
  components: {
    VaFileUploadList,
    VaFileUploadContainer,
  },
  props: {
    type: {
      type: String,
      default: 'list',
      validator (value) {
        return ['list', 'gallery', 'single'].indexOf(value) !== -1
      },
    },
    fileTypes: {
      type: String,
      default: '',
    },
    dropzone: {
      type: Boolean,
      default: false,
    },
    value: {
      default: () => [],
    },
  },
  methods: {
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
        if (this.fileTypes.indexOf(extn) === -1) {
          this.$refs.mediumModal.open()
        }
        return this.fileTypes.indexOf(extn) !== -1
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
.va-file-upload {
  &--dropzone {
    overflow: hidden;
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
