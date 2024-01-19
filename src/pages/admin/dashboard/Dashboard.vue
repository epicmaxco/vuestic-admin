<template>
  <h1 class="h1">Dashboard</h1>
  <section class="flex flex-col gap-4">
    <div class="flex flex-row gap-4">
      <RevenueUpdates class="w-2/3" />
      <div class="flex flex-col gap-4 w-1/3">
        <YearlyBreakup />
        <MonthlyEarnings />
      </div>
    </div>
    <!-- <DataSection class="col-span-8" />
    <RevenueByLocationMap class="col-span-5" />
    <div class="col-span-3">todo</div>
    <ProjectTable class="col-span-4" />
    <div class="col-span-4">todo</div> -->
  </section>
</template>

<script lang="ts" setup>
import RevenueUpdates from './RevenueUpdates.vue'
import ProjectTable from './ProjectTable.vue'
import RevenueByLocationMap from './RevenueByLocationMap.vue'
import DataSection from './DataSection.vue'
import YearlyBreakup from './YearlyBreakup.vue'
import MonthlyEarnings from './cards/MonthlyEarnings.vue'
</script>
