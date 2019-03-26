<template>
  <div class="tags">
    <div class="flex md12">
      <va-card :title="$t('chips.chips')">
        <div class="va-row mb-3">
          <va-chip>
            Success chip
          </va-chip>
          <va-chip color="info">
            Info chip
          </va-chip>
          <va-chip color="danger">
            Danger chip
          </va-chip>
          <va-chip color="warning">
            Warning chip
          </va-chip>
          <va-chip color="gray">
            Gray chip
          </va-chip>
          <va-chip color="dark">
            Dark chip
          </va-chip>
        </div>
        <div class="va-row">
          <va-chip outline>
            Success chip
          </va-chip>
          <va-chip outline color="info">
            Info chip
          </va-chip>
          <va-chip outline color="danger">
            Danger chip
          </va-chip>
          <va-chip outline color="warning">
            Warning chip
          </va-chip>
          <va-chip outline color="gray">
            Gray chip
          </va-chip>
          <va-chip outline color="dark">
            Dark chip
          </va-chip>
        </div>
      </va-card>
    </div>

    <div class="flex md12">
      <va-card :title="$t('chips.badges')">
        <div class="va-row mb-3">
          <va-badge>
            Paid
          </va-badge>
          <va-badge color="info">
            Info
          </va-badge>
          <va-badge color="danger">
            Danger
          </va-badge>
          <va-badge color="warning">
            On Hold
          </va-badge>
          <va-badge color="gray">
            Processing
          </va-badge>
          <va-badge color="dark">
            New Label
          </va-badge>
        </div>
        <div class="va-row">
          <va-badge outline>
            Paid
          </va-badge>
          <va-badge outline color="info">
            Info
          </va-badge>
          <va-badge outline color="danger">
            Danger
          </va-badge>
          <va-badge outline color="warning">
            On Hold
          </va-badge>
          <va-badge outline color="gray">
            Processing
          </va-badge>
          <va-badge outline color="dark">
            New Label
          </va-badge>
        </div>
      </va-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tags'
}
</script>
