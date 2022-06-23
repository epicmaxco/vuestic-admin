<template>
  <tr>
    <td class="color">
      <va-color-indicator :color="theme[colorName]" />
    </td>
    <td>
      {{ colorName }}
    </td>
  </tr>
</template>

<script>
  import { useColors } from "vuestic-ui";

  export default {
    props: {
      colorName: { type: String, required: true },
    },
    setup() {
      const { getColors } = useColors();

      return { getColors };
    },
    computed: {
      theme() {
        return this.getColors();
      },
    },
  };
</script>

<style lang="scss" scoped>
  .color {
    width: 16px;
    height: 16px;
    &-bordered {
      border: 1px solid var(--va-gray);
      border-radius: 50%;
    }
  }
  td {
    color: var(--va-gray);
    padding: 0.25rem 0.5rem;
    box-sizing: border-box;
    vertical-align: middle;
    &:first-child {
      padding-right: 0;
    }
  }
</style>
