<template>
  <div class="not-found-pages">
    <div class="row mb-4">
      <va-card class="flex xs12">
        <va-card-title>
          Do you have any questions?
        </va-card-title>
        <va-card-content>
          <va-input>
            <template #prepend>
              <va-icon name="search" />
            </template>
          </va-input>
        </va-card-content>
      </va-card>
    </div>
    <div class="row">
      <va-card class="flex xs12">
        <va-card-title>
          Frequently Asked Questions
        </va-card-title>
        <va-card-content>
          <va-expand-group>
            <va-expand class="mb-4" header="First question">
              <div class="pa-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo veniam provident voluptates consequuntur nostrum cumque possimus unde asperiores magnam rem.
              </div>
            </va-expand>
            <va-expand class="mb-4" header="Second question">
              <div class="pa-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo veniam provident voluptates consequuntur nostrum cumque possimus unde asperiores magnam rem.
              </div>
            </va-expand>
            <va-expand class="mb-4" header="Third question">
              <div class="pa-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo veniam provident voluptates consequuntur nostrum cumque possimus unde asperiores magnam rem.
              </div>
            </va-expand>
            <va-expand class="mb-4" header="Fourth question">
              <div class="pa-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo veniam provident voluptates consequuntur nostrum cumque possimus unde asperiores magnam rem.
              </div>
            </va-expand>
            <va-expand class="mb-4" header="Fifth question">
              <div class="pa-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo veniam provident voluptates consequuntur nostrum cumque possimus unde asperiores magnam rem.
              </div>
            </va-expand>
          </va-expand-group>
        </va-card-content>
      </va-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'faq-page',
  data () {
    return {
    }
  },
}
</script>
