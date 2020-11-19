<template>
  <div class="row">
    <div class="flex xs12">
      <va-card>
        <va-card-title>{{ $t('tags.tags') }}</va-card-title>
        <va-card-content class="row">
          <div class="flex xs12">
            <div class="row">
              <div class="flex xs12">
                <va-tag class="mb-2 ml-1 mr-1" color="primary">Primary tag</va-tag>
                <va-tag class="mb-2 ml-1 mr-1" color="secondary">Secondary tag</va-tag>
                <va-tag class="mb-2 ml-1 mr-1" color="success">Success tag</va-tag>
                <va-tag class="mb-2 ml-1 mr-1" color="info">Info tag</va-tag>
                <va-tag class="mb-2 ml-1 mr-1" color="danger">Danger tag</va-tag>
                <va-tag class="mb-2 ml-1 mr-1" color="warning">Warning tag</va-tag>
                <va-tag class="mb-2 ml-1 mr-1" color="gray">Gray tag</va-tag>
                <va-tag class="mb-2 ml-1 mr-1" color="dark">Dark tag</va-tag>
              </div>
            </div>
          </div>
        </va-card-content>
      </va-card>
    </div>

    <div class="flex xs12">
      <va-card>
        <va-card-title>{{ $t('tags.badges') }}</va-card-title>
        <va-card-content class="row">
          <div class="flex xs12">
            <div class="row">
              <div class="flex xs12">
                <va-badge class="mb-2 ml-1 mr-1" color="primary" text="Primary badge" />
                <va-badge class="mb-2 ml-1 mr-1" color="secondary" text="Secondary badge" />
                <va-badge class="mb-2 ml-1 mr-1" color="success" text="Success badge" />
                <va-badge class="mb-2 ml-1 mr-1" color="info" text="Info badge" />
                <va-badge class="mb-2 ml-1 mr-1" color="danger" text="Danger badge" />
                <va-badge class="mb-2 ml-1 mr-1" color="warning" text="Warning badge" />
                <va-badge class="mb-2 ml-1 mr-1" color="gray" text="Gray badge" />
                <va-badge class="mb-2 ml-1 mr-1" color="dark" text="Dark badge" />
              </div>
            </div>
            <div class="row">
              <div class="flex xs12">
                <va-badge class="mb-2 ml-1 mr-1" color="primary" outline text="Primary badge" />
                <va-badge class="mb-2 ml-1 mr-1" color="secondary" outline text="Secondary badge" />
                <va-badge class="mb-2 ml-1 mr-1" color="success" outline text="Success badge" />
                <va-badge class="mb-2 ml-1 mr-1" color="info" outline text="Info badge" />
                <va-badge class="mb-2 ml-1 mr-1" color="danger" outline text="Danger badge" />
                <va-badge class="mb-2 ml-1 mr-1" color="warning" outline text="Warning badge" />
                <va-badge class="mb-2 ml-1 mr-1" color="gray" outline text="Gray badge" />
                <va-badge class="mb-2 ml-1 mr-1" color="dark" outline text="Dark badge" />
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
  name: 'tags',
}
</script>
