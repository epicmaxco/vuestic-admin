<template>
    <div class="vuestic-file-upload">
        <VuesticFileUploadDropzone
            :type="type"
            :fileTypes="fileTypes"
            @upload="uploadFile"
            :short="!!files.length"
        >
            <VuesticFileUploadList
                    v-if="files.length"
                    :type="type"
                    :files="files"
                    @remove="removeFile"
            />
        </VuesticFileUploadDropzone>
    </div>
</template>

<script>
  import VuesticFileUploadList from './VuesticFileUploadList'
  import VuesticFileUploadDropzone from './VuesticFileUploadDropzone'

  export default {
    name: 'vuestic-file-upload',
    components: {
      VuesticFileUploadList: VuesticFileUploadList,
      VuesticFileUploadDropzone: VuesticFileUploadDropzone
    },
    props: {
      fileTypes: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'list',
        validator: function (value) {
          return ['list', 'gallery'].indexOf(value) !== -1
        }
      },
      multiple: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        files: []
      }
    },
    methods: {
      uploadFile (e) {
        const files = e.target.files || e.dataTransfer.files
        this.files.push(...files)
      },
      removeFile (index) {
        this.files.splice(index, 1)
      }
    },
  }
</script>

<style lang='scss'>
    @import '../../../sass/_variables.scss';

    .vuestic-file-upload {
        background-color: $lighter-green;
    }

    // Maybe we should create new component for text button
    .btn-text {
        border: none;
        background: none;
        outline: none;
        cursor: pointer;
        padding: 0;
        & + .btn-text {
            margin-left: 24px;
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
</style>