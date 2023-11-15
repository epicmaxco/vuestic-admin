<template>
  <div class="text-textPrimary">
    <h1 class="page-title">Choose your plan</h1>
    <div class="py-4 text-lg leading-[26px]">
      If you need more info about our pricing, please check
      <span class="text-primary underline">Pricing Guidelines</span>.
    </div>
    <div class="flex flex-col p-4 bg-backgroundSecondary">
      <div class="flex justify-center">
        <va-button-select v-model="selectedDuration" :options="['Monthly', 'Annual']" />
      </div>
      <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-x-6 md:space-y-0 mt-6">
        <va-card
          v-for="plan in pricingPlans"
          :key="plan.model"
          class="flex w-[326px] md:w-[349px] h-fit p-6 rounded-[13px]"
          :class="{
            'md:!py-10 !bg-backgroundCardSecondary': plan.model === 'Advanced',
            '!bg-backgroundCardPrimary': plan.model !== 'Advanced',
            'ring-2 ring-primary ring-offset-2': plan.model === selectedPlan,
          }"
        >
          <div class="space-y-8 md:space-y-10" :class="{ '!space-y-10': plan.model === 'Advanced' }">
            <div class="space-y-4 text-center">
              <h2 class="pricing-plan-card-title">
                {{ plan.title }}
              </h2>
              <va-badge v-for="badge in plan.badges" :key="badge" :text="badge" color="primary" :style="badgeStyles" />
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
                <va-icon v-if="feature.isAvailable" name="mso-check" color="primary" size="20px" />
                <va-icon v-else name="mso-block" color="backgroundBorder" size="20px" />
              </div>
            </div>
            <div class="flex justify-center">
              <va-button
                :disabled="plan.model === selectedPlan"
                :style="selectButtonStyles"
                @click="selectPlan(plan.model)"
              >
                Select
              </va-button>
            </div>
          </div>
        </va-card>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  import { useToast } from 'vuestic-ui'

  import { badgeStyles, selectButtonStyles } from './styles'

  import { pricingPlans } from './options'

  import VaButtonSelect from '../../components/va-button-select/VaButtonSelect.vue'

  const { init } = useToast()

  const selectedDuration = ref<string>('Annual')
  const selectedPlan = ref<string>()

  const selectPlan = (planModel: string) => {
    init({ message: 'You successfully changed payment plan!', color: 'success' })
    selectedPlan.value = planModel
  }
</script>
