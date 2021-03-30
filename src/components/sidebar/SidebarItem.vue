<template>
  <router-link custom :to="to" v-slot="{ navigate }">
    <div
      class="sidebar-item" 
      :style="computedStyle" 
      @click="navigate"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <va-icon v-if="doShowIcon" :name="icon" class="sidebar-item__icon"/>
      <div v-if="doShowTitle" class="sidebar-item__title">
        {{ title }}
      </div>
      <va-icon v-if="doShowExpandIcon" class="sidebar-item__expand-icon" :name="expandIconName" />
      <slot />
    </div>
  </router-link>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
import { useColor } from 'vuestic-ui'

export default defineComponent({
  name: 'SidebarItem',
  props: {
    title: { type: String, required: false, default: undefined },
    to: {
      type: [String, Object] as PropType<string | Record<string, any>>, 
      default: {} 
    },
    icon: { type: [String], default: undefined },
    groupExpanded: { type: Boolean, default: undefined },
    active: { type: Boolean, default: false },
    minimized: { type: Boolean, default: false, }
  },
  setup(props) {
    const getColor = useColor()
    const isHovered = ref(false)

    const doShowIcon = computed(() => props.icon !== undefined)
    const doShowTitle = computed(() => props.title !== undefined)
    const doShowExpandIcon = computed(() => props.groupExpanded !== undefined)
    const expandIconName = computed(() => props.groupExpanded ? 'expand_less' : 'expand_more')

    const computedStyle = computed(() => {
      const style: Record<string, string> = {} 

      if (props.active) {
        style['border-color'] = getColor('primary'),
        style['background-color'] = 'rgba(0,0,0,.125)'
      }

      if (isHovered.value) {
        style['background-color'] = getColor('navbar')
      } else {
        // style.color = getColor('primary')
      }

      return style
    })

    return { doShowExpandIcon, doShowIcon, doShowTitle, expandIconName, computedStyle, isHovered }
  },
})
</script>

<style lang="scss" scoped>
.sidebar-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  min-height: 3rem;
  text-decoration: none;
  border-left: 0.25rem solid transparent;
  padding: 0 0.5rem;
  padding-right: 0.75rem;
  & > * {
    margin-right: 0.5rem;
    &:last-child {
      margin-right: 0;
    }
  }
  &__icon {
    width: 1.5rem;
    height: 1.5rem;
    text-align: center;
  }
  &__title {
    flex-grow: 1;
  }
  &__expand-icon {
    padding: 0.5rem;
  }
}
</style>