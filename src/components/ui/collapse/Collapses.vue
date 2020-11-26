// TODO: fix naming
<template>
  <div class="collapse-page">
    <div class="row">
      <div class="flex xs12">
        <va-card>
          <va-card-title>{{ $t('collapse.basic') }}</va-card-title>
          <va-card-content>
            <!-- TODO: use accordion instead expand group & collapse instead expand (latest build) -->
            <va-expand-group>
              <va-expand class="mb-4" header="Expand This Block">
                <div class="pa-2">
                  <p class="display-3">Great Things</p>
                  <div>
                    There is something about parenthood that gives us a sense of
                    history and a deeply rooted desire to send on into the next
                    generation the great things we have discovered about life.
                  </div>
                </div>
              </va-expand>
              <va-expand header="Another Block">
                <div class="pa-2">
                  <p class="display-3">Great Things</p>
                  <div>
                    There is something about parenthood that gives us a sense of
                    history and a deeply rooted desire to send on into the next
                    generation the great things we have discovered about life.
                  </div>
                </div>
              </va-expand>
            </va-expand-group>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card>
          <va-card-title>{{ $t('collapse.collapseWithBackground') }}</va-card-title>
          <va-card-content>
            <va-expand-group>
              <va-expand class="mb-4" header="Expand This Block" color="primary" color-all>
                <div class="pa-2">
                  <p class="display-3">Great Things</p>
                  <div>
                    There is something about parenthood that gives us a sense of
                    history and a deeply rooted desire to send on into the next
                    generation the great things we have discovered about life.
                  </div>
                </div>
              </va-expand>
              <va-expand header="Another Block" color="warning" color-all>
                <div class="pa-2">
                  <p class="display-3">Great Things</p>
                  <div>
                    There is something about parenthood that gives us a sense of
                    history and a deeply rooted desire to send on into the next
                    generation the great things we have discovered about life.
                  </div>
                </div>
              </va-expand>
            </va-expand-group>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card>
          <va-card-title>{{ $t('collapse.collapseWithCustomHeader') }}</va-card-title>
          <va-card-content>
            <va-expand-group>
              <va-expand class="mb-4" >
                <span slot="header">
                  <va-button style="width: 100%;">
                    Expand This Block
                  </va-button>
                </span>
                <div class="pa-2">
                  <p class="display-3">Great Things</p>
                  <div>
                    There is something about parenthood that gives us a sense of
                    history and a deeply rooted desire to send on into the next
                    generation the great things we have discovered about life.
                  </div>
                </div>
              </va-expand>
              <va-expand>
                <span slot="header">
                  <va-button style="width: 100%;">
                    Another Block
                  </va-button>
                </span>
                <div>
                  <p class="display-3">Great Things</p>
                  <div class="pa-2">
                    There is something about parenthood that gives us a sense of
                    history and a deeply rooted desire to send on into the next
                    generation the great things we have discovered about life.
                  </div>
                </div>
              </va-expand>
            </va-expand-group>
          </va-card-content>
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
