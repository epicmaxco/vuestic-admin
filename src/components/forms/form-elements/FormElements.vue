<template>
  <div class="form-elements">
    <div class="row">
      <div class="col-md-12">
        <widget class="chart-widget"  header-text="Checkboxes, Radios, Swithces">
          <form role="form">
            <div class="row">
              <div class="col-md-4">
                <fieldset>
                  <div class="abc-checkbox abc-checkbox-primary">
                    <input id="checkbox1" type="checkbox">
                    <label for="checkbox1">
                      <span class="abc-label-text">Subscribe to newsletter</span>
                    </label>
                  </div>
                  <div class="abc-checkbox abc-checkbox-primary">
                    <input id="checkbox2" type="checkbox" checked>
                    <label for="checkbox2">
                      <span class="abc-label-text">Subscribe to newsletter</span>
                    </label>
                  </div>
                  <div class="abc-checkbox abc-checkbox-primary">
                    <input id="checkbox3" type="checkbox" disabled>
                    <label for="checkbox3">
                      <span class="abc-label-text">Subscribe to newsletter</span>
                    </label>
                  </div>
                  <div class="abc-checkbox abc-checkbox-primary">
                    <input id="checkbox4" type="checkbox" disabled checked>
                    <label for="checkbox4">
                      <span class="abc-label-text">Subscribe to newsletter</span>
                    </label>
                  </div>
                </fieldset>
              </div>

              <div class="col-md-4">
                <fieldset>
                  <div class="abc-checkbox abc-checkbox-primary abc-checkbox-circle">
                    <input id="checkbox7" type="checkbox">
                    <label for="checkbox7">
                      <span class="abc-label-text">Subscribe to newsletter</span>
                    </label>
                  </div>
                  <div class="abc-checkbox abc-checkbox-primary abc-checkbox-circle">
                    <input id="checkbox8" type="checkbox" checked>
                    <label for="checkbox8">
                      <span class="abc-label-text">Subscribe to newsletter</span>
                    </label>
                  </div>
                  <div class="abc-checkbox abc-checkbox-primary abc-checkbox-circle">
                    <input id="checkbox9" type="checkbox" disabled>
                    <label for="checkbox9">
                      <span class="abc-label-text">Subscribe to newsletter</span>
                    </label>
                  </div>
                  <div class="abc-checkbox abc-checkbox-primary abc-checkbox-circle">
                    <input id="checkbox10" type="checkbox" checked disabled>
                    <label for="checkbox10">
                      <span class="abc-label-text">Subscribe to newsletter</span>
                    </label>
                  </div>
                </fieldset>
              </div>

            </div>
          </form>
        </widget>
      </div>
    </div>
  </div>
</template>

<script>
  import Widget from 'components/common/widget/Widget'

  export default {
    name: 'form-elements',
    components: {
      Widget
    }
  }
</script>

<style lang="scss">

</style>
