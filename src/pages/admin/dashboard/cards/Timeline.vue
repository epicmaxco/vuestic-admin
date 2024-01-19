<script setup lang="ts">
import VaTimelineItem from '../../../../components/va-timeline-item.vue'
</script>

<template>
  <VaCard class="p-4">
    <VaCardTitle class="flex justify-between">
      <h1 class="card-title text-secondary font-bold uppercase">Timeline</h1>
    </VaCardTitle>
    <VaCardContent class="">
      <table>
        <tbody>
          <VaTimelineItem date="25m ago">
            <RouterLink class="va-link" to="/users">Donald</RouterLink> updated the status of
            <RouterLink class="va-link" to="/users">Refund #1234</RouterLink> to awaiting customer response
          </VaTimelineItem>
          <VaTimelineItem date="1h ago">
            <RouterLink class="va-link" to="/users">Lycy Peterson</RouterLink> was added to the group, group name is
            Overtake
          </VaTimelineItem>
          <VaTimelineItem date="2h ago">
            <RouterLink class="va-link" to="/users">Joseph Rust</RouterLink> opened new showcase
            <RouterLink class="va-link" to="/users">Mannat #112233</RouterLink> with theme market
          </VaTimelineItem>
          <VaTimelineItem date="3d ago">
            <RouterLink class="va-link" to="/users">Donald</RouterLink> updated the status to awaiting customer response
          </VaTimelineItem>
          <VaTimelineItem date="Nov 14, 2023">
            <RouterLink class="va-link" to="/users">Lycy Peterson</RouterLink> was added to the group
          </VaTimelineItem>
        </tbody>
      </table>
    </VaCardContent>
  </VaCard>
</template>
