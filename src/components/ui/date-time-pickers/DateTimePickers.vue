<template>
  <div class="date-pickers">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget header-text="Date & Time Pickers">
          <div class="row">
            <div class="col-sm-4">
              <vuestic-date-time-picker
                :id="'simple'"
                :name="'Simple Date'"
                :type="'simple'"
              ></vuestic-date-time-picker>
            </div>
            <div class="col-sm-4">
              <vuestic-date-time-picker
                :id="'month'"
                :name="'Month'"
                :type="'month'"
                :format="'MMMM YYYY'"
              ></vuestic-date-time-picker>
            </div>
          </div>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'date-time-pickers'
  }
</script>

<style lang="scss" scoped>

</style>
