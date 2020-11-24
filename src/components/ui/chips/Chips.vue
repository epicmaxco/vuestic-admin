// TODO: fix naming
<template>
  <div class="row">
    <div class="flex xs12">
      <va-card>
        <va-card-title>{{ $t('chips.chips') }}</va-card-title>
        <va-card-content class="row">
          <div class="flex xs12">
            <div class="row">
              <div class="flex xs12">
                <!-- TODO: use chip instead tag (latest build) -->
                <va-tag class="mb-2 mr-2" color="primary">Primary chip</va-tag>
                <va-tag class="mb-2 mr-2" color="secondary">Secondary chip</va-tag>
                <va-tag class="mb-2 mr-2" color="success">Success chip</va-tag>
                <va-tag class="mb-2 mr-2" color="info">Info chip</va-tag>
                <va-tag class="mb-2 mr-2" color="danger">Danger chip</va-tag>
                <va-tag class="mb-2 mr-2" color="warning">Warning chip</va-tag>
                <va-tag class="mb-2 mr-2" color="gray">Gray chip</va-tag>
                <va-tag class="mb-2 mr-2" color="dark">Dark chip</va-tag>
              </div>
            </div>
          </div>
        </va-card-content>
      </va-card>
    </div>

    <div class="flex xs12">
      <va-card>
        <va-card-title>{{ $t('chips.badges') }}</va-card-title>
        <va-card-content class="row">
          <div class="flex xs12">
            <div class="row">
              <div class="flex xs12">
                <va-badge class="mb-2 mr-2" color="primary" text="Primary badge" />
                <va-badge class="mb-2 mr-2" color="secondary" text="Secondary badge" />
                <va-badge class="mb-2 mr-2" color="success" text="Success badge" />
                <va-badge class="mb-2 mr-2" color="info" text="Info badge" />
                <va-badge class="mb-2 mr-2" color="danger" text="Danger badge" />
                <va-badge class="mb-2 mr-2" color="warning" text="Warning badge" />
                <va-badge class="mb-2 mr-2" color="gray" text="Gray badge" />
                <va-badge class="mb-2 mr-2" color="dark" text="Dark badge" />
              </div>
            </div>
            <div class="row">
              <div class="flex xs12">
                <va-badge class="mb-2 mr-2" color="primary" text="Primary badge" transparent />
                <va-badge class="mb-2 mr-2" color="secondary" text="Secondary badge" transparent />
                <va-badge class="mb-2 mr-2" color="success" text="Success badge" transparent />
                <va-badge class="mb-2 mr-2" color="info" text="Info badge" transparent />
                <va-badge class="mb-2 mr-2" color="danger" text="Danger badge" transparent />
                <va-badge class="mb-2 mr-2" color="warning" text="Warning badge" transparent />
                <va-badge class="mb-2 mr-2" color="gray" text="Gray badge" transparent />
                <va-badge class="mb-2 mr-2" color="dark" text="Dark badge" transparent />
              </div>
            </div>
          </div>
        </va-card-content>
      </va-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chips',
}
</script>
