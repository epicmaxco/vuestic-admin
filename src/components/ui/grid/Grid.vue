<template>
  <div class="ui-grid">
    <widget headerText="non-responsive(???)">
      <div class="row">
        <div v-for="i in 3" class="col"><div>.col</div></div>
      </div>
      <div class="row">
        <div v-for="i in 6" class="col"><div>.col</div></div>
      </div>
      <div class="row">
        <div v-for="i in 12" class="col"><div>.col</div></div>
      </div>
    </widget>

    <widget headerText="responsive">
      <div class="row">
        <div v-for="i in 3" class="col-md-4"><div>.col-md-4</div></div>
      </div>
      <div class="row">
        <div v-for="i in 6" class="col-md-2"><div>.col-md-2</div></div>
      </div>
      <div class="row">
        <div v-for="i in 12" class="col-md-1"><div>.col-md-1</div></div>
      </div>
    </widget>

    <widget headerText="mobile and desktop">
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <div>.col-md-3 .col-sm-8</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-sm-8">
          <div>.col-md-3 .col-sm-8</div>
        </div>
        <div class="col-md-9 col-sm-4">
          <div>.col-md-9 .col-sm-4</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-2">
          <div>.col-md-4 .col-sm-2</div>
        </div>
        <div class="col-md-4 col-sm-8">
          <div>.col-md-4 .col-sm-8</div>
        </div>
        <div class="col-md-4 col-sm-2">
          <div>.col-md-4 .col-sm-2</div>
        </div>
      </div>
    </widget>

    <widget headerText="offsets">
      <div class="row">
        <div class="col-md-6 offset-md-6 col-sm-6">
          <div>.col-md-6 .offset-md-6 .col-sm-6</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div>.col-md-6 .offset-md-3</div>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <div>.col-4</div>
        </div>
        <div class="col-4 offset-4">
          <div>.col-4 .offset-8</div>
        </div>
      </div>
    </widget>
  </div>
</template>

<script>
  import Widget from 'components/common/widget/Widget'

  export default {
    name: 'grid',
    components: {
      Widget
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/_variables.scss";
  .ui-grid {
    .row {
      div[class^=col] {
        padding: 0;
        div {
          margin: .5rem .25rem;
          min-height: 3rem;
          color: $white;
          text-align: center;
          background-color: $brand-primary;
          border-radius: 0.5rem;
        }
      }
    }
  }

</style>
