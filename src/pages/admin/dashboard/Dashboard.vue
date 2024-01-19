
<script lang="ts" setup>
import RevenueUpdates from './RevenueUpdates.vue'
import ProjectTable from './ProjectTable.vue'
import RevenueByLocationMap from './RevenueByLocationMap.vue'
import DataSection from './DataSection.vue'
import YearlyBreakup from './cards/YearlyBreakup.vue'
import MonthlyEarnings from './cards/MonthlyEarnings.vue'
import RegionRevenue from './cards/RegionRevenue.vue'
import Timeline from './cards/Timeline.vue'
</script>

<template>
  <h1 class="h1">Dashboard</h1>
  <section class="flex flex-col gap-4">
    <div class="flex flex-col md:flex-row gap-4">
      <RevenueUpdates class="w-full md:w-2/3" />
      <div class="flex flex-col gap-4 w-full md:w-1/3">
        <YearlyBreakup />
        <MonthlyEarnings />
      </div>
    </div>
    <DataSection />
    <div class="flex flex-col md:flex-row gap-4">
      <RevenueByLocationMap class="w-full md:w-3/5" />
      <RegionRevenue class="w-full md:w-2/5" />
    </div>
    <div class="flex flex-col md:flex-row gap-4">
      <ProjectTable class="w-full md:w-1/2" />
      <Timeline class="w-full md:w-1/2" />
    </div>
  </section>
</template>
