<template>
    <div
        :class="`vuestic-file-upload-${type}`">
        <template v-if="type === 'list'">
            <vuestic-file-upload-list-item
                    v-for="(file, index) in filesList"
                    :key="index"
                    :file="file"
                    @remove="$emit('remove', index)"
            />
        </template>
        <template v-if="type === 'gallery'">
            <div class="row">
                <vuestic-file-upload-gallery-item
                    v-for="(file, index) in filesList"
                    :key="index"
                    :file="file"
                    @remove="$emit('remove', index)"
                />
            </div>
        </template>

        <vuestic-file-upload-single-item
            v-if="type === 'single' && filesList.length"
            :file="filesList[0]"
            @remove="$emit('remove', 0)"
        />
    </div>
</template>

<script>
  import VuesticFileUploadListItem from './VuesticFileUploadListItem'
  import VuesticFileUploadGalleryItem from './VuesticFileUploadGalleryItem'
  import VuesticFileUploadSingleItem from './VuesticFileUploadSingleItem'

  export default {
    name: 'vuestic-file-upload-list',
    components: {
      VuesticFileUploadListItem: VuesticFileUploadListItem,
      VuesticFileUploadGalleryItem: VuesticFileUploadGalleryItem,
      VuesticFileUploadSingleItem: VuesticFileUploadSingleItem
    },
    props: {
      type: {
        type: String
      },
      files: {
        default: null
      }
    },
    computed: {
      filesList () {
        let filesList = []
        if (this.files.length) {
          // console.log(this.files)
          for (let i = 0; i < this.files.length; i++) {
            let file = this.files[i]
            let convertedFile = {
              name: file.name,
              size: this.formatBytes(file.size),
              date: file.lastModifiedDate.toLocaleDateString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })
            }

            if (this.type === 'gallery') {
              convertedFile.image = file
            }
            filesList.push(convertedFile)
          }
        }

        return filesList
      },
    },
    methods: {
      formatBytes (bytes) {
        if (bytes === 0) return '0 Bytes'
        let k = 1024
        let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        let i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
      },
    }
  }
</script>

<style lang='scss' scoped>
    @import '../../../sass/_variables.scss';

    .vuestic-file-upload {
        &-list {
            padding-bottom: 30px;
            margin: 0 -15px;
        }
        &-gallery {
            padding: 0 0 15px;
        }
    }
</style>