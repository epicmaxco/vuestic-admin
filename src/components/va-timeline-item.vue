<template>
  <tr class="va-timeline-item">
    <td class="va-timeline-item__icon-cell">
      <div class="va-timeline-item__icon">
        <VaIcon name="schedule" size="22px" color="backgroundBorder" />
      </div>
    </td>
    <td class="va-timeline-item__content-cell">
      <div class="va-timeline-item__content">
        <slot />
      </div>
    </td>
    <td class="va-timeline-item__date-cell">
      <slot name="date">
        {{ $props.date }}
      </slot>
    </td>
  </tr>
</template>

<script setup lang="ts">
defineProps({
  date: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss" scoped>
.va-timeline-item {
  display: table-row;

  &__icon-cell {
    vertical-align: top;
    height: 1px;
    padding-right: 1rem;
  }

  &__icon {
    width: 24px;
    position: relative;
    display: inline-flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;

    &::after {
      content: '';
      width: 2px;
      height: 100%;
      background: var(--va-background-border);
    }
  }

  &__content {
    margin-bottom: 1rem;
  }

  &__content-cell {
    width: 100%;
  }

  &__date-cell {
    vertical-align: top;
    color: var(--va-secondary);
    text-wrap: nowrap;
    white-space: nowrap;
    padding-left: 0.5rem;
    text-align: end;
  }

  &:last-child {
    .va-timeline-item__icon {
      &::after {
        background: transparent;
      }
    }
  }
}
</style>
