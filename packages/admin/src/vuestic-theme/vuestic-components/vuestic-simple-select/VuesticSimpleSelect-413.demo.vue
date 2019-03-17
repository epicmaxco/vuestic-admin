<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 500px;">
      <vuestic-simple-select
        label="Position"
        v-model="value"
        option-key="description"
        :options="imagePositions"
      />
    </div>
  </div>
</template>

<script>
// Fixes https://github.com/epicmaxco/vuestic-admin/issues/413

import VuesticSimpleSelect from './VuesticSimpleSelect'

export default {
  name: 'my-component',
  components: { VuesticSimpleSelect },
  data: () => {
    return {
      value: null,
      imagePositions: [
        {
          id: '1',
          description: '1',
        },
        {
          id: '2',
          description: '2',
        },
      ],
    }
  },
}
</script>
