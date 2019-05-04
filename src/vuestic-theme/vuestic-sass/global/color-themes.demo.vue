<template>
  <VbDemo>
    <VbCard title="All of these share `info` theme">
      <va-button class="mb-5" color="info">
        Default Button
      </va-button>
      <va-notification class="mb-5" color="info">
        <va-badge color="info"> Info</va-badge>
        You successfully read this important alert message.
      </va-notification>
      <va-progress-bar class="mb-5" indeterminate color="info"/>
      <va-slider
        class="mb-5"
        :value="60"
        value-visible
        label="Label"
        color="info"
        icon-right="fa fa-volume-up"
      />
      <va-rating class="mb-5" color="info" :value="3">
        Default Button
      </va-rating>
      <va-tree-root color="info">
        <va-tree-category label="Electronics">
          <va-tree-node>Cellphones</va-tree-node>
          <va-tree-node>Camera Body Kits</va-tree-node>
          <va-tree-node>External HDDs</va-tree-node>
        </va-tree-category>
        <va-tree-category isOpen label="Products">
          <va-tree-category label="Cables">
            <va-tree-node>Audio</va-tree-node>
            <va-tree-node>Video</va-tree-node>
            <va-tree-node>Optical</va-tree-node>
          </va-tree-category>
          <va-tree-node>Monitors</va-tree-node>
          <va-tree-node>Keyboards</va-tree-node>
        </va-tree-category>
        <va-tree-category label="Apparel">
          <va-tree-node>Jackets</va-tree-node>
          <va-tree-node>Pants</va-tree-node>
          <va-tree-node>Skirts</va-tree-node>
        </va-tree-category>
      </va-tree-root>
    </VbCard>
    <VbCard title="Change `info` color">
      <va-color-picker-input v-model="$themes.info" mode="advanced"/>
    </VbCard>
  </VbDemo>
</template>

<script>
import VaButton from './../../vuestic-components/va-button/VaButton'
import VaNotification
  from './../../vuestic-components/va-notification/VaNotification'
import VaProgressBar
  from './../../vuestic-components/va-progress-bar/progress-types/VaProgressBar'
import VaPaletteCustom
  from '../../vuestic-components/va-color-picker/VaPaletteCustom'
import VaColorPickerInput
  from '../../vuestic-components/va-color-picker/VaColorPickerInput'
import VaRating from '../../vuestic-components/va-rating/VaRating'
import SquareWithIcon from '../../vuestic-components/va-tree-view/SquareWithIcon/SquareWithIcon'
import VaTreeRoot from '../../vuestic-components/va-tree-view/VaTreeRoot'
import VaTreeCategory from '../../vuestic-components/va-tree-view/VaTreeCategory'
import VaTreeNode from '../../vuestic-components/va-tree-view/VaTreeNode'

export default {
  components: {
    VaTreeNode,
    VaTreeCategory,
    VaTreeRoot,
    SquareWithIcon,
    VaRating,
    VaColorPickerInput,
    VaButton,
    VaNotification,
    VaProgressBar,
    VaPaletteCustom,
  },
}
</script>
