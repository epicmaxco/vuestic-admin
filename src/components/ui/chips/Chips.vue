<template>
  <div class="row">
    <div class="flex xs12">
      <va-card :title="$t('chips.chips')">
        <div class="row">
          <div class="flex xs12">
            <div class="row">
              <div class="flex xs12">
                <va-chip class="mb-2" color="primary">Primary chip</va-chip>
                <va-chip class="mb-2" color="secondary">Secondary chip</va-chip>
                <va-chip class="mb-2" color="success">Success chip</va-chip>
                <va-chip class="mb-2" color="info">Info chip</va-chip>
                <va-chip class="mb-2" color="danger">Danger chip</va-chip>
                <va-chip class="mb-2" color="warning">Warning chip</va-chip>
                <va-chip class="mb-2" color="gray">Gray chip</va-chip>
                <va-chip class="mb-2" color="dark">Dark chip</va-chip>
              </div>
            </div>
          </div>
        </div>
      </va-card>
    </div>

    <div class="flex xs12">
      <va-card :title="$t('chips.badges')">
        <div class="row">
          <div class="flex xs12">
            <div class="row">
              <div class="flex xs12">
                <va-badge class="mb-2" color="primary">Primary badge</va-badge>
                <va-badge class="mb-2" color="secondary">Secondary badge</va-badge>
                <va-badge class="mb-2" color="success">Success badge</va-badge>
                <va-badge class="mb-2" color="info">Info badge</va-badge>
                <va-badge class="mb-2" color="danger">Danger badge</va-badge>
                <va-badge class="mb-2" color="warning">Warning badge</va-badge>
                <va-badge class="mb-2" color="gray">Gray badge</va-badge>
                <va-badge class="mb-2" color="dark">Dark badge</va-badge>
              </div>
            </div>
            <div class="row">
              <div class="flex xs12">
                <va-badge class="mb-2" color="primary" outline>Primary badge</va-badge>
                <va-badge class="mb-2" color="secondary" outline>Secondary badge</va-badge>
                <va-badge class="mb-2" color="success" outline>Success badge</va-badge>
                <va-badge class="mb-2" color="info" outline>Info badge</va-badge>
                <va-badge class="mb-2" color="danger" outline>Danger badge</va-badge>
                <va-badge class="mb-2" color="warning" outline>Warning badge</va-badge>
                <va-badge class="mb-2" color="gray" outline>Gray badge</va-badge>
                <va-badge class="mb-2" color="dark" outline>Dark badge</va-badge>
              </div>
            </div>
          </div>
        </div>
      </va-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chips',
}
</script>
