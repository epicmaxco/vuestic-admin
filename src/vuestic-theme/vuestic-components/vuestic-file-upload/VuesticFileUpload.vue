<template>
    <div class="vuestic-file-upload"
        :class="{'vuestic-file-upload--dropzone': dropzone}"
    >
        <VuesticFileUploadContainer
            :type="type"
            :fileTypes="fileTypes"
            :dropzone="dropzone"
            :short="!!files.length"
            :multiple="multiple"
            @upload="uploadFile"
        >
            <VuesticFileUploadList
                v-if="files.length"
                :type="type"
                :files="files"
                @remove="removeFile"
            />
        </VuesticFileUploadContainer>
    </div>
</template>

<script>
  import VuesticFileUploadList from './VuesticFileUploadList'
  import VuesticFileUploadContainer from './VuesticFileUploadContainer'

  export default {
    name: 'vuestic-file-upload',
    components: {
      VuesticFileUploadList: VuesticFileUploadList,
      VuesticFileUploadContainer: VuesticFileUploadContainer
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
          return ['list', 'gallery', 'single'].indexOf(value) !== -1
        }
      },
      dropzone: {
        type: Boolean,
        default: false
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
        &--dropzone {
            background-color: $lighter-green;
            padding: 0 30px;
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