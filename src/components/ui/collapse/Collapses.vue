<template>
  <div class="collapse-page">
    <div class="row">
      <div class="flex xs12">
        <va-card :title="$t('collapse.basic')">
          <va-accordion>
            <va-collapse>
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
            <va-collapse>
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
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card :title="$t('collapse.collapseWithBackground')">
          <va-accordion>
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
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card :title="$t('collapse.collapseWithCustomHeader')">
          <va-accordion>
            <va-collapse customHeader>
              <span slot="header">
                <va-button style="width: 100%;">
                  Expand This Block
                </va-button>
              </span>
              <div slot="body">
                <p class="display-3">Great Things</p>
                <div>
                  There is something about parenthood that gives us a sense of
                  history and a deeply rooted desire to send on into the next
                  generation the great things we have discovered about life.
                </div>
              </div>
            </va-collapse>
            <va-collapse customHeader>
              <span slot="header">
                <va-button style="width: 100%;">
                  Another Block
                </va-button>
              </span>
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
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'collapses',
}
</script>
