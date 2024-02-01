<template>
  <VaCard class="mb-6">
    <VaCardContent>
      <h2 class="page-sub-title">Membership tier</h2>
      <template v-for="(plan, index) in plans" :key="plan.id">
        <div class="flex items-center justify-between md:justify-items-stretch">
          <div
            class="flex grow flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-1 justify-between items-start md:items-center"
          >
            <div class="flex items-center md:w-48">
              <div class="font-bold">{{ plan.name }}</div>
              <VaBadge v-if="plan.type === 'current'" class="ml-2" color="success" text="Selected" />
            </div>
            <div class="md:w-48">
              <p class="mb-1">{{ plan.padletsTotal }} padlets</p>
              <p>{{ plan.uploadLimit }}&nbsp;/upload</p>
            </div>
            <div class="md:w-48">
              <template v-if="plan.priceMonth">
                <p class="mb-1">{{ plan.priceMonth }}&nbsp;/month</p>
                <p>{{ plan.priceYear }}&nbsp;/year</p>
              </template>
              <p v-else>Free</p>
            </div>
          </div>
          <div class="md:w-48 flex justify-end">
            <div v-if="plan.type === 'current'" class="font-bold">{{ plan.padletsUsed }} padlets used</div>
            <VaButton v-else-if="plan.type === 'upgrade'" @click="switchPlan(plan.id)">Upgrade</VaButton>
            <VaButton v-else preset="primary" @click="switchPlan(plan.id)">Downgrade</VaButton>
          </div>
        </div>

        <VaDivider v-if="index !== plans.length - 1" />
      </template>
    </VaCardContent>
  </VaCard>
</template>

<script lang="ts" setup>
import { useToast } from 'vuestic-ui'
import { reactive } from 'vue'

const { init } = useToast()

type MembershipTier = {
  id: string
  name: string
  type: 'upgrade' | 'downgrade' | 'current'
  padletsUsed: number
  padletsTotal: string
  priceMonth?: string
  priceYear?: string
  uploadLimit: string
}

const plans = reactive<MembershipTier[]>([
  {
    id: '1',
    name: 'Platinum',
    type: 'upgrade',
    padletsUsed: 0,
    padletsTotal: 'Unlimited',
    priceMonth: '$9.99',
    priceYear: '$99.99',
    uploadLimit: '500MB',
  },
  {
    id: '2',
    name: 'Gold',
    type: 'current',
    padletsUsed: 19,
    padletsTotal: '20',
    priceMonth: '$6.99',
    priceYear: '$69.99',
    uploadLimit: '100MB',
  },
  {
    id: '3',
    name: 'Neon',
    type: 'downgrade',
    padletsUsed: 0,
    padletsTotal: '3',
    priceMonth: undefined,
    priceYear: undefined,
    uploadLimit: '20MB',
  },
])

const switchPlan = (planId: string) => {
  plans.forEach((item, index) => {
    if (item.id === planId) {
      // Set the selected plan to 'current'
      item.type = 'current'
    } else {
      // Determine if other plans are an 'upgrade' or 'downgrade'
      const selectedIndex = plans.findIndex((plan) => plan.id === planId)
      item.type = index < selectedIndex ? 'upgrade' : 'downgrade'
    }
  })
  init({
    message: "You've successfully changed the membership tier",
    color: 'success',
  })
}
</script>
