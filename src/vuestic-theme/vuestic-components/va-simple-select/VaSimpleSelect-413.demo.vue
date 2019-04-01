<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 500px;">
      <va-simple-select
        label="Position"
        v-model="value"
        option-key="description"
        :options="imagePositions"
      />
    </div>
  </div>
</template>

<script>
// Repro for https://github.com/epicmaxco/vuestic-admin/issues/413
// Probably not needed for 2.0

import VaSimpleSelect from './VaSimpleSelect'

export default {
  components: { VaSimpleSelect },
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
