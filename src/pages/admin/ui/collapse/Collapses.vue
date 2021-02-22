// TODO: fix naming
<template>
  <div class="collapse-page">
    <div class="row">
      <div class="flex xs12">
        <va-card>
          <va-card-title>{{ $t("collapse.basic") }}</va-card-title>
          <va-card-content>
            <!-- TODO: use accordion instead expand group & collapse instead expand (latest build) -->
            <va-collapse v-model="doShowCollapses[0]" class="mb-4" :header="$t('collapse.firstHeader')">
              <div class="pa-3">
                <p class="display-3">{{ $t("collapse.content.title") }}</p>
                <div>
                  {{ $t("collapse.content.text") }}
                </div>
              </div>
            </va-collapse>
            <va-collapse v-model="doShowCollapses[1]" :header="$t('collapse.secondHeader')">
              <div class="pa-3">
                <p class="display-3">{{ $t("collapse.content.title") }}</p>
                <div>
                  {{ $t("collapse.content.text") }}
                </div>
              </div>
            </va-collapse>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card>
          <va-card-title>{{ $t("collapse.collapseWithBackground") }}</va-card-title>
          <va-card-content>
            <va-collapse v-model="doShowCollapses[2]"
              class="mb-4"
              :header="$t('collapse.firstHeader')"
              color="success"
              color-all
            >
              <div class="pa-3">
                <p class="display-3">{{ $t("collapse.content.title") }}</p>
                <div>
                  {{ $t("collapse.content.text") }}
                </div>
              </div>
            </va-collapse>
            <va-collapse v-model="doShowCollapses[3]"
              :header="$t('collapse.secondHeader')"
              color="warning"
              color-all
            >
              <div class="pa-3">
                <p class="display-3">{{ $t("collapse.content.title") }}</p>
                <div>
                  {{ $t("collapse.content.text") }}
                </div>
              </div>
            </va-collapse>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card>
          <va-card-title>{{ $t("collapse.collapseWithCustomHeader") }}</va-card-title>
          <va-card-content>
            <va-collapse v-model="doShowCollapses[4]" class="mb-4">
              <template #header>
                <va-button style="width: 100%;">
                  {{ $t("collapse.firstHeader") }}
                </va-button>
              </template>
              <div class="pa-3">
                <p class="display-3">{{ $t("collapse.content.title") }}</p>
                <div>
                  {{ $t("collapse.content.text") }}
                </div>
              </div>
            </va-collapse>
            <va-collapse v-model="doShowCollapses[5]">
              <template #header>
                <va-button style="width: 100%;">
                  {{ $t("collapse.secondHeader") }}
                </va-button>
              </template>
              <div>
                <p class="display-3">{{ $t("collapse.content.title") }}</p>
                <div class="pa-3">
                  {{ $t("collapse.content.text") }}
                </div>
              </div>
            </va-collapse>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "collapses",

  data() {
    return {
      doShowCollapses: [false, false, false, false, false, false],
    }
  }
};
</script>
