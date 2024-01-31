<template>
  <h1 class="page-title">Choose your plan</h1>
  <div class="py-4 text-lg leading-[26px]">
    If you need more info about our pricing, please check
    <span class="text-primary underline">Pricing Guidelines</span>.
  </div>
  <div class="flex flex-col p-4 bg-backgroundSecondary">
    <div class="flex justify-center">
      <VaButtonToggle
        v-model="selectedDuration"
        color="background-element"
        border-color="background-element"
        :options="[
          { label: 'Monthly', value: 'Monthly' },
          { label: 'Annual', value: 'Annual' },
        ]"
      />
    </div>
    <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-x-6 md:space-y-0 mt-6">
      <VaCard
        v-for="plan in pricingPlans"
        :key="plan.model"
        :class="{
          'md:!py-10 !bg-backgroundCardSecondary': plan.model === 'Advanced',
          '!bg-backgroundCardPrimary': plan.model !== 'Advanced',
          'ring-2 ring-primary ring-offset-2': plan.model === selectedPlan,
        }"
        class="flex w-[326px] md:w-[349px] h-fit p-6 rounded-[13px]"
      >
        <div :class="{ '!space-y-10': plan.model === 'Advanced' }" class="space-y-8 md:space-y-10">
          <div class="space-y-4 text-center">
            <h2 class="pricing-plan-card-title">
              {{ plan.title }}
            </h2>
            <VaBadge v-for="badge in plan.badges" :key="badge" :style="badgeStyles" :text="badge" color="primary" />
            <p class="text-lg leading-[26px] text-secondary">
              {{ plan.description }}
            </p>
            <div class="flex space-x-1 justify-center items-baseline text-lg leading-[26px]">
              <span>$</span
              ><span class="text-[32px] md:text-5xl leading-[110%] md:leading-[56px] font-bold">{{
                selectedDuration === 'Annual' ? plan.price : plan.priceMonth
              }}</span
              ><span>/ {{ selectedDuration === 'Annual' ? 'year' : 'mo' }}</span>
            </div>
          </div>
          <div class="space-y-6">
            <div
              v-for="feature in plan.features"
              :key="feature.description"
              class="flex justify-between items-center text-lg leading-[26px]"
            >
              <p :class="{ 'text-secondary': !feature.isAvailable }">
                {{ feature.description }}
              </p>
              <VaIcon v-if="feature.isAvailable" color="primary" name="mso-check" size="20px" />
              <VaIcon v-else color="backgroundBorder" name="mso-block" size="20px" />
            </div>
          </div>
          <div class="flex justify-center">
            <VaButton
              :disabled="plan.model === selectedPlan"
              :style="selectButtonStyles"
              @click="createModal(plan.model)"
            >
              Select
            </VaButton>
          </div>
        </div>
      </VaCard>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useToast, useModal } from 'vuestic-ui'

import { badgeStyles, selectButtonStyles } from './styles'

import { pricingPlans } from './options'

const { init } = useToast()
const { init: initModal } = useModal()

const selectedDuration = ref<string>('Annual')
const selectedPlan = ref<string>()

const createModal = (planModel: string) => {
  initModal({
    message: 'Are you sure you want to change plan?',
    mobileFullscreen: false,
    maxWidth: '380px',
    size: 'small',
    onOk: () => selectPlan(planModel),
  })
}

const selectPlan = (planModel: string) => {
  init({ message: 'You successfully changed payment plan!', color: 'success' })
  selectedPlan.value = planModel
}
</script>
