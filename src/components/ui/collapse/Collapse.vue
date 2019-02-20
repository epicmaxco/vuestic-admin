<template>
  <div class="collapse-page">
    <vuestic-widget :headerText="$t('collapse.basic')">
      <va-accordion>
        <va-collapse>
          <span slot="header"> Expandable Area </span>
          <div slot="body">
            <p class="display-3">Great Things</p>
            <div>
              There is something about parenthood that gives us a sense of
              history and a deeply rooted desire to send on into the next
              generation the great things we have discovered about life.
            </div>
          </div>
        </va-collapse>
        <va-collapse>
          <span slot="header"> Expandable Area </span>
          <div slot="body">
            <p class="display-3">Great Things</p>
            <div>
              There is something about parenthood that gives us a sense of
              history and a deeply rooted desire to send on into the next
              generation the great things we have discovered about life.
            </div>
          </div>
        </va-collapse>
      </va-accordion>
    </vuestic-widget>
    <vuestic-widget :headerText="$t('collapse.collapseWithBackground')">
      <va-accordion expand>
        <va-collapse withBackground>
          <span slot="header"> Expand This Block </span>
          <div slot="body">
            <p class="display-3">Great Things</p>
            <div>
              There is something about parenthood that gives us a sense of
              history and a deeply rooted desire to send on into the next
              generation the great things we have discovered about life.
            </div>
          </div>
        </va-collapse>
        <va-collapse withBackground>
          <span slot="header"> Another Block </span>
          <div slot="body">
            <p class="display-3">Great Things</p>
            <div>
              There is something about parenthood that gives us a sense of
              history and a deeply rooted desire to send on into the next
              generation the great things we have discovered about life.
            </div>
          </div>
        </va-collapse>
      </va-accordion>
    </vuestic-widget>
    <vuestic-widget :headerText="$t('collapse.collapseWithCustomHeader')">
      <va-accordion>
        <va-collapse customHeader>
          <span slot="header">
            <va-button>
              Expand this block
            </va-button>
          </span>
          <div slot="body">
            <div>
              Expand three content
            </div>
          </div>
        </va-collapse>
        <va-collapse customHeader>
          <span slot="header">
            <va-button>
              Expand this block
            </va-button>
          </span>
          <div slot="body">
            <div>
              Expand this block
            </div>
          </div>
        </va-collapse>
      </va-accordion>
    </vuestic-widget>
  </div>
</template>

<script>
export default {
  name: 'collapse',
}
</script>

<style lang="scss">
.collapse-page {
}
</style>
