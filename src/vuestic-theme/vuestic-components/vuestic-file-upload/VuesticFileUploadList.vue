<template>
  <div
    class="vuestic-file-upload"
    :class="`vuestic-file-upload-${type}`"
  >
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
        <div
          class="flex xl2 lg3 sm4"
          v-for="(file, index) in filesList"
          :key="file.name"
        >
          <vuestic-file-upload-gallery-item
            :file="file"
            @remove="$emit('remove', index)"
          />
        </div>
      </div>
    </template>
    <vuestic-file-upload-single-item
      v-if="type === 'single' && filesList.length"
      :file="filesList[filesList.length - 1]"
      @remove="$emit('remove-single')"
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
    VuesticFileUploadSingleItem: VuesticFileUploadSingleItem,
  },
  props: {
    type: {
      type: String,
    },
    files: {
      default: null,
    },
  },
  computed: {
    filesList () {
      return this.files.map(this.convertFile)
    },
  },
  methods: {
    convertFile (file) {
      return {
        name: file.name,
        size: this.formatSize(file.size),
        date: this.formatDate(new Date()),
        image: file,
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
        year: 'numeric',
      })
    },
  },
}
</script>

<style lang='scss'>
.vuestic-file-upload {
  &-list {
    padding-bottom: 2rem;
  }

  &-gallery {
    padding: 0 0 1rem;
  }
}
</style>
