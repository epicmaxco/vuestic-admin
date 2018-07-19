<template>
  <div class="tags-page">
    <div class="row">

      <div class="col-md-12">
        <vuestic-widget :headerText="$t('tags.default')">
          <vuestic-tag-group v-model="tags"/>
        </vuestic-widget>
      </div>

      <div class="col-md-12">
        <vuestic-widget :headerText="$t('tags.removable')">
          <vuestic-tag-group v-model="removableTags" removable/>
        </vuestic-widget>
      </div>

      <div class="col-md-12">
        <vuestic-widget :headerText="$t('tags.colored')">
            <vuestic-tag-group v-model="coloredTags" removable/>
        </vuestic-widget>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'tags',
    data () {
      return {
        tagss: [],
        tags: [
          'Ford',
          'Toyota',
          'Volkswagen',
          'Opel',
          'Honda',
          'Porsche'
        ],
        removableTags: [
          'Ford',
          'Toyota',
          'Volkswagen',
          'Opel',
          'Honda',
          'Porsche'
        ],
        coloredTags: [
          {
            name: 'Potato',
            type: 'primary'
          },
          {
            name: 'Tomato',
            type: 'danger'
          },
          {
            name: 'Sweet corn',
            type: 'info'
          },
          {
            name: 'Carrot',
            type: 'dark'
          },
          {
            name: 'Broccoli',
            type: 'warning'
          },
          {
            name: 'Green bean',
            type: 'pale'
          }
        ]
      }
    }
  }
</script>
