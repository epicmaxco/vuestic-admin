<template>
  <div class="tags">
    <div class="flex md12">
      <vuestic-widget :headerText="$t('chips.chips')">
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
      </vuestic-widget>
    </div>

    <div class="flex md12">
      <vuestic-widget :headerText="$t('chips.badges')">
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
      </vuestic-widget>
    </div>

    <div class="flex md12">
      <vuestic-widget :headerText="$t('chips.tags')">
        <va-tag closeable>
          Paid
        </va-tag>
        <va-tag closeable color="info">
          Info
        </va-tag>
        <va-tag closeable color="danger">
          Danger
        </va-tag>
        <va-tag closeable color="warning">
          On Hold
        </va-tag>
        <va-tag closeable color="gray">
          Processing
        </va-tag>
        <va-tag closeable color="dark">
          New Label
        </va-tag>
      </vuestic-widget>
    </div>

  </div>
</template>

<script>
export default {
  name: 'tags'
}
</script>
