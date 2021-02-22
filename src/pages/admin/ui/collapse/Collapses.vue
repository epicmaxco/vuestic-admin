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
              <va-expand class="mb-4" :header="$t('collapse.firstHeader')">
                <div class="pa-3">
                  <p class="display-3">{{ $t('collapse.content.title') }}</p>
                  <div>
                    {{ $t('collapse.content.text') }}
                  </div>
                </div>
              </va-expand>
              <va-expand :header="$t('collapse.secondHeader')">
                <div class="pa-3">
                  <p class="display-3">{{ $t('collapse.content.title') }}</p>
                  <div>
                    {{ $t('collapse.content.text') }}
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
              <va-expand class="mb-4" :header="$t('collapse.firstHeader')" color="success" color-all>
                <div class="pa-3">
                  <p class="display-3">{{ $t('collapse.content.title') }}</p>
                  <div>
                    {{ $t('collapse.content.text') }}
                  </div>
                </div>
              </va-expand>
              <va-expand :header="$t('collapse.secondHeader')" color="warning" color-all>
                <div class="pa-3">
                  <p class="display-3">{{ $t('collapse.content.title') }}</p>
                  <div>
                    {{ $t('collapse.content.text') }}
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
                    {{ $t('collapse.firstHeader') }}
                  </va-button>
                </span>
                <div class="pa-3">
                  <p class="display-3">{{ $t('collapse.content.title') }}</p>
                  <div>
                    {{ $t('collapse.content.text') }}
                  </div>
                </div>
              </va-expand>
              <va-expand>
                <span slot="header">
                  <va-button style="width: 100%;">
                    {{ $t('collapse.secondHeader') }}
                  </va-button>
                </span>
                <div>
                  <p class="display-3">{{ $t('collapse.content.title') }}</p>
                  <div class="pa-3">
                    {{ $t('collapse.content.text') }}
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
