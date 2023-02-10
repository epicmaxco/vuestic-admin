<template>
  <div class="not-found-pages">
    <va-card class="mb-8">
      <va-card-title> Do you have any questions? </va-card-title>
      <va-card-content>
        <va-input class="m-3">
          <template #prepend>
            <va-icon name="search" />
          </template>
        </va-input>
      </va-card-content>
    </va-card>

    <va-card>
      <va-card-title> Frequently Asked Questions </va-card-title>
      <va-card-content>
        <va-accordion class="m-3">
          <va-collapse header="First question">
            <div class="p-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo veniam provident voluptates consequuntur
              nostrum cumque possimus unde asperiores magnam rem.
            </div>
          </va-collapse>
          <va-collapse header="Second question">
            <div class="p-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo veniam provident voluptates consequuntur
              nostrum cumque possimus unde asperiores magnam rem.
            </div>
          </va-collapse>
          <va-collapse header="Third question">
            <div class="p-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo veniam provident voluptates consequuntur
              nostrum cumque possimus unde asperiores magnam rem.
            </div>
          </va-collapse>
          <va-collapse header="Fourth question">
            <div class="p-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo veniam provident voluptates consequuntur
              nostrum cumque possimus unde asperiores magnam rem.
            </div>
          </va-collapse>
          <va-collapse header="Fifth question">
            <div class="p-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo veniam provident voluptates consequuntur
              nostrum cumque possimus unde asperiores magnam rem.
            </div>
          </va-collapse>
        </va-accordion>
      </va-card-content>
    </va-card>
  </div>
</template>
