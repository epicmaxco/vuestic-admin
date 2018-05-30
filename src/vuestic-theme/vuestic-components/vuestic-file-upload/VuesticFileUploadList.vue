<template>
  <div :class="`vuestic-file-upload-${type}`">
    <template v-if="type === 'list'">
      <vuestic-file-upload-list-item
          v-for="(file, index) in filesList"
          :key="file.name"
          :file="file"
          @remove="$emit('remove', index)"
      />
    </template>
    <template v-if="type === 'gallery'">
      <div class="row">
        <vuestic-file-upload-gallery-item
            v-for="(file, index) in filesList"
            :key="file.name"
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
        return this.files.map(this.convertFile)
      },
    },
    methods: {
      removeListItem (index) {
        console.log(index)
        this.$emit('remove', index)
      },
      convertFile (file) {
        return {
          name: file.name,
          size: this.formatSize(file.size),
          date: this.formatDate(file.lastModifiedDate),
          image: file
        }
      },
      formatSize (bytes) {
        if (bytes === 0) return '0 Bytes'
        const k = 1024
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
      },
      formatDate (date) {
        if (!date) return ''
        return date.toLocaleDateString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        })
      }
    }
  }
</script>

<style lang='scss'>
  @import '../../../sass/_variables.scss';

  .vuestic-file-upload {
    &-list {
      padding-bottom: 2rem;
      margin: 0 -1rem;
    }
    &-gallery {
      padding: 0 0 1rem;
    }
  }
</style>