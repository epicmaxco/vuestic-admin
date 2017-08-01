<template>
  <div class="form-elements">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget headerText="Inputs">
          <form>

            <div class="row">
              <div class="col-md-4">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" required/>
                      <label class="control-label" for="simple-input">Text input</label><i class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group with-icon-right"
                       :class="{'has-error': errors.has('successfulEmail'), 'valid': isSuccessfulEmailValid}">
                    <div class="input-group">
                      <input
                        id="successfulEmail"
                        name="successfulEmail"
                        v-model="successfulEmail"
                        v-validate="'required|email'"
                        required/>
                      <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                      <i class="fa fa-check valid-icon icon-right input-icon"></i>
                      <label class="control-label" for="successfulEmail">Email (validated with success)</label><i
                      class="bar"></i>
                      <small v-show="errors.has('successfulEmail')" class="help text-danger">
                        {{ errors.first('successfulEmail') }}
                      </small>
                    </div>
                  </div>
                  <div class="form-group with-icon-right" :class="{'has-error': errors.has('wrongEmail')}">
                    <div class="input-group">
                      <input
                        id="wrongEmail"
                        name="wrongEmail"
                        v-model="wrongEmail"
                        v-validate="'required|email'"
                        required/>
                      <i class="fa fa-exclamation-triangle icon-right input-icon" v-show="errors.has('wrongEmail')"></i>
                      <label class="control-label" for="wrongEmail">Email (validated)</label><i class="bar"></i>
                      <small v-show="errors.has('wrongEmail')" class="help text-danger">{{ errors.first('wrongEmail')
                        }}
                      </small>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <textarea type="text" id="simple-textarea" required></textarea>
                      <label class="control-label" for="simple-textarea">Textarea</label><i class="bar"></i>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div class="col-md-4">
                <fieldset>
                  <div class="form-group with-icon-left">
                    <div class="input-group">
                      <input id="input-icon-left" name="input-icon-left" required/>
                      <i class="fa fa-envelope-o icon-left input-icon"></i>
                      <label class="control-label" for="input-icon-left">Input with icon</label><i class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group with-icon-right">
                    <div class="input-group">
                      <input v-model="clearableText" id="clear-input" name="clear-input" required/>
                      <i class="fa fa-times icon-right input-icon pointer" @click="clear('clearableText')"></i>
                      <label class="control-label" for="clear-input" role="button">Input with clear button</label><i
                      class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="inputWithDescription" required title=""/>
                      <label class="control-label" for="simple-input">Text input (with description)</label><i
                      class="bar"></i>
                      <small class="help text-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </small>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div class="col-md-4">
                <fieldset>
                  <div class="form-group form-group-w-btn">
                    <div class="input-group">
                      <input id="input-w-btn" required/>
                      <label class="control-label" for="input-w-btn">Input with button</label><i class="bar"></i>
                    </div>
                    <div class="btn btn-micro btn-primary">UPLOAD</div>
                  </div>
                  <div class="form-group form-group-w-btn">
                    <div class="input-group">
                      <input id="input-w-btn-round" required/>
                      <label class="control-label" for="input-w-btn-round">Input with round button</label><i
                      class="bar"></i>
                    </div>
                    <div class="btn btn-primary btn-with-icon btn-micro rounded-icon">
                      <div class="btn-with-icon-content">
                        <i class="ion-android-cloud-outline ion"></i>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>

          </form>
        </vuestic-widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <vuestic-widget headerText="Selects">
          <form>
            <div class="row">
              <div class="col-md-4">
                <fieldset>
                  <vuestic-simple-select
                    label="Simple select"
                    v-model="simpleSelectModel"
                    v-bind:options="simpleOptions">
                  </vuestic-simple-select>
                  <vuestic-simple-select
                    label="Country select"
                    v-model="chosenCountry"
                    v-bind:options="countriesList">
                  </vuestic-simple-select>
                </fieldset>
              </div>
              <div class="col-md-4">
                <fieldset>
                  <vuestic-multi-select
                    label="Mutliselect"
                    v-model="multiSelectModel"
                    v-bind:options="simpleOptions">
                  </vuestic-multi-select>
                  <vuestic-multi-select
                    label="Country multiselect"
                    v-model="multiSelectCountriesModel"
                    v-bind:options="countriesList">
                  </vuestic-multi-select>
                </fieldset>
              </div>
            </div>
          </form>
        </vuestic-widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <vuestic-widget headerText="Checkboxes, Radios, Swithces">
          <form>
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
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
  import VuesticSwitch from '../../../components/vuestic-components/vuestic-switch/VuesticSwitch'
  import VuesticSimpleSelect from '../../../components/vuestic-components/vuestic-simple-select/VuesticSimpleSelect'
  import VuesticMultiSelect from '../../../components/vuestic-components/vuestic-multi-select/VuesticMultiSelect'
  import CountriesList from '../CountriesList'

  export default {
    name: 'form-elements',
    components: {
      VuesticSwitch,
      VuesticSimpleSelect,
      VuesticMultiSelect
    },
    computed: {
      isSuccessfulEmailValid () {
        let isValid = false
        if (this.fields.successfulEmail) {
          isValid = this.fields.successfulEmail.validated && this.fields.successfulEmail.valid
        }
        return isValid
      }
    },
    data () {
      return {
        isMale: true,
        countriesList: CountriesList,
        chosenCountry: '',
        clearableText: '',
        successfulEmail: 'andrei@dreamsupport.io',
        wrongEmail: 'andrei@dreamsupport',
        simpleOptions: ['First option', 'Second option', 'Third option'],
        simpleSelectModel: '',
        multiSelectModel: [],
        multiSelectCountriesModel: []
      }
    },
    methods: {
      clear (field) {
        this[field] = ''
      }
    },
    mounted () {
      this.$validator.validateAll()
    }
  }
</script>

<style lang="scss">
  .abc-checkbox, .abc-radio {
    display: flex !important;
    justify-content: flex-start;
  }

  input[type=checkbox]:disabled + label, input[type=radio]:disabled + label,
  input[type=checkbox]:disabled, input[type=radio]:disabled {
    cursor: not-allowed;
  }
</style>
