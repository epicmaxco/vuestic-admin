<template>
<div class="row">
  <div class="flex xs12">
    <va-card :title="$t('chips.chips')">
      <div class="row">
        <div class="flex xs12">
          <div class="row mb-2">
            <va-chip class="ma-2" color="primary">Primary chip</va-chip>
            <va-chip class="ma-2" color="secondary">Secondary chip</va-chip>
            <va-chip class="ma-2" color="success">Success chip</va-chip>
            <va-chip class="ma-2" color="info">Info chip</va-chip>
            <va-chip class="ma-2" color="danger">Danger chip</va-chip>
            <va-chip class="ma-2" color="warning">Warning chip</va-chip>
            <va-chip class="ma-2" color="gray">Gray chip</va-chip>
            <va-chip class="ma-2" color="dark">Dark chip</va-chip>
          </div>
          <div class="row">
            <va-chip class="ma-2" color="primary" outline>Primary chip</va-chip>
            <va-chip class="ma-2" color="secondary" outline>Secondary chip</va-chip>
            <va-chip class="ma-2" color="success" outline>Success chip</va-chip>
            <va-chip class="ma-2" color="info" outline>Info chip</va-chip>
            <va-chip class="ma-2" color="danger" outline>Danger chip</va-chip>
            <va-chip class="ma-2" color="warning" outline>Warning chip</va-chip>
            <va-chip class="ma-2" color="gray" outline>Gray chip</va-chip>
            <va-chip class="ma-2" color="dark" outline>Dark chip</va-chip>
          </div>
        </div>
      </div>
    </va-card>
  </div>

  <div class="flex xs12">
    <va-card :title="$t('chips.badges')">
      <div class="row">
        <div class="flex xs12">
          <div class="row mb-2">
            <va-badge class="ma-2" color="primary">Primary badge</va-badge>
            <va-badge class="ma-2" color="secondary">Secondary badge</va-badge>
            <va-badge class="ma-2" color="success">Success badge</va-badge>
            <va-badge class="ma-2" color="info">Info badge</va-badge>
            <va-badge class="ma-2" color="danger">Danger badge</va-badge>
            <va-badge class="ma-2" color="warning">Warning badge</va-badge>
            <va-badge class="ma-2" color="gray">Gray badge</va-badge>
            <va-badge class="ma-2" color="dark">Dark badge</va-badge>
          </div>
          <div class="row">
            <va-badge class="ma-2" color="primary" outline>Primary badge</va-badge>
            <va-badge class="ma-2" color="secondary" outline>Secondary badge</va-badge>
            <va-badge class="ma-2" color="success" outline>Success badge</va-badge>
            <va-badge class="ma-2" color="info" outline>Info badge</va-badge>
            <va-badge class="ma-2" color="danger" outline>Danger badge</va-badge>
            <va-badge class="ma-2" color="warning" outline>Warning badge</va-badge>
            <va-badge class="ma-2" color="gray" outline>Gray badge</va-badge>
            <va-badge class="ma-2" color="dark" outline>Dark badge</va-badge>
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
