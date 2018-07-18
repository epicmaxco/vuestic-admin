<template>
  <div class="tags-page">
    <div class="row">

      <div class="col-md-12">
        <vuestic-widget :headerText="$t('tags.tags')">
          <div class="row btn-margin-row">
            <div class="col-sm-4 col-lg-2 d-flex">
              <vuestic-tag :name="$t('tags.type.default')"/>
            </div>
            <div class="col-sm-4 col-lg-2 d-flex">
              <vuestic-tag :name="$t('tags.type.danger')" type="danger"/>
            </div>
            <div class="col-sm-4 col-lg-2 d-flex">
              <vuestic-tag :name="$t('tags.type.info')" type="info"/>
            </div>
            <div class="col-sm-4 col-lg-2 d-flex">
              <vuestic-tag :name="$t('tags.type.dark')" type="dark"/>
            </div>
            <div class="col-sm-4 col-lg-2 d-flex">
              <vuestic-tag :name="$t('tags.type.warning')" type="warning"/>
            </div>
            <div class="col-sm-4 col-lg-2 d-flex">
              <vuestic-tag :name="$t('tags.type.pale')" type="pale"/>
            </div>
          </div>
        </vuestic-widget>
      </div>

      <div class="col-md-12">
        <vuestic-widget :headerText="$t('tags.tagsGroup')">
          <vuestic-tag-group v-model="tags"/>
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
        tags: [
          'Ford',
          'Toyota',
          'Volkswagen',
          'Opel',
          'Honda',
          'Porsche'
        ]
      }
    }
  }
</script>
