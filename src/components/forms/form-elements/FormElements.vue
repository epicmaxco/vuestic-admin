<template>
  <div class="form-elements">
    <div class="row">
      <div class="col-md-12">
        <widget class="chart-widget"  header-text="Inputs">
            <form role="form">

              <div class="row">
                <div class="col-md-4">
                  <fieldset>
                    <div class="form-group">
                      <input type="text" id="simple-input" required="required"/>
                      <label class="control-label" for="simple-input">Text input</label><i class="bar"></i>
                    </div>
                    <div class="form-group">
                      <textarea type="text" id="simple-textarea" required="required"></textarea>
                      <label class="control-label" for="simple-textarea">Textarea</label><i class="bar"></i>
                    </div>
                  </fieldset>
                  <div class="form-group with-icon-right" :class="{'has-error': errors.has('email')}">
                    <input type="text" id="email" name="email" v-validate="'required|email'" required="required"/>
                    <i class="fa fa-exclamation-triangle icon-right input-icon" v-show="errors.has('email')"></i>
                    <label class="control-label" for="email">Email (validated)</label><i class="bar"></i>
                    <small v-show="errors.has('email')" class="help text-danger">{{ errors.first('email') }}</small>
                  </div>
                </div>

                <div class="col-md-4">
                  <fieldset>
                    <div class="form-group with-icon-left">
                      <input type="text" id="input-icon-left" name="input-icon-left" required="required"/>
                      <i class="fa fa-envelope-o icon-left input-icon"></i>
                      <label class="control-label" for="input-icon-left">Input with icon</label><i class="bar"></i>
                    </div>
                  </fieldset>
                </div>
              </div>

            </form>
        </widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <widget class="chart-widget"  header-text="Checkboxes, Radios, Swithces">
          <form role="form">
            <div class="row">
              <div class="col-md-3">
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

              <div class="col-md-3">
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

              <div class="col-md-3">
                <fieldset>
                  <div class="radio abc-radio abc-radio-primary">
                    <input type="radio" name="radio1" id="radio1" value="option1" checked>
                    <label for="radio1">
                      <span class="abc-label-text">Radio</span>
                    </label>
                  </div>

                  <div class="radio abc-radio abc-radio-primary">
                    <input type="radio" name="radio1" id="radio2" value="option2">
                    <label for="radio2">
                      <span class="abc-label-text">Radio</span>
                    </label>
                  </div>
                </fieldset>

                <fieldset>
                  <div class="radio abc-radio abc-radio-primary">
                    <input type="radio" name="radio3" id="radio3" value="option3" disabled>
                    <label for="radio3">
                      <span class="abc-label-text">Disabled Radio</span>
                    </label>
                  </div>

                  <div class="radio abc-radio abc-radio-primary">
                    <input type="radio" name="radio4" id="radio4" value="option4" checked disabled>
                    <label for="radio4">
                      <span class="abc-label-text">Disabled Radio</span>
                    </label>
                  </div>
                </fieldset>
              </div>

              <div class="col-md-3">
                <fieldset>
                  <vuestic-switch v-model="isMale">
                    <span slot="trueTitle">Male</span>
                    <span slot="falseTitle">Female</span>
                  </vuestic-switch>
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
  import VuesticSwitch from 'components/common/vuestic-switch/VuesticSwitch'

  export default {
    name: 'form-elements',
    components: {
      Widget,
      VuesticSwitch
    },
    data () {
      return {
        isMale: true
      }
    }
  }
</script>

<style lang="scss">

</style>
