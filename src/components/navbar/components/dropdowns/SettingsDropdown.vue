<template>
  <va-dropdown class="settings-dropdown" position="bottom" boundary-body :offset="[13, 0]">
    <template #anchor>
      <va-icon name="vuestic-iconset-settings flex text-[1.4rem]" class="settings-dropdown__icon" />
    </template>

    <va-dropdown-content class="settings-dropdown__content pl-8 pr-8 pt-2 pb-2">
      <div class="settings-dropdown__content-label mt-2 mb-4" :style="{ color: colors.primary }">
        {{ t('dashboard.navigationLayout') }}
      </div>
      <va-button-toggle
        v-model="isTopBarProxy"
        outline
        :options="options"
        class="settings-dropdown__control mb-2"
        size="small"
      />
    </va-dropdown-content>
  </va-dropdown>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useColors } from 'vuestic-ui'

  const { colors } = useColors()
  const { t } = useI18n()

  const props = defineProps<{
    isTopBar: boolean
  }>()

  const emit = defineEmits<{
    (e: 'update:isTopBar', value: boolean): void
  }>()

  const options = ref([
    { label: t('dashboard.sideBarButton'), value: String(false) }, // NOTE: boolean is unsupported for va-dropdown
    { label: t('dashboard.topBarButton'), value: String(true) },
  ])

  const isTopBarProxy = computed({
    get() {
      return String(props.isTopBar)
    },
    set() {
      emit('update:isTopBar', props.isTopBar)
    },
  })
</script>

<style lang="scss">
  .settings-dropdown {
    cursor: pointer;

    &__icon {
      position: relative;
      display: flex;
      align-items: center;
    }

    &__content {
      &-label {
        margin-bottom: 0.5rem;
      }
    }

    &__control {
      .va-button-group {
        margin: 0;
      }
    }

    .va-dropdown__anchor {
      display: inline-block;
    }
  }
</style>
