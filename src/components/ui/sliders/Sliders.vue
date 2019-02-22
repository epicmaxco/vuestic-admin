<template>
  <div class="sliders">
    <div class="flex md12">
      <vuestic-widget :headerText="$t('sliders.slider')">
        <div class="va-row">
          <div class="flex xs12 lg6 xl4 mb-2">
            <div class="title mb-3">Simple</div>
            <va-slider
              v-model="value"
            />
          </div>
          <div class="flex xs12 lg6 xl4 mb-2">
            <div class="title title--danger mb-3">Value</div>
            <va-slider
              color="danger"
              value-visible
              v-model="value"
            />
          </div>
          <div class="flex d-flex align--end xs12 lg6 xl4 mb-2">
            <va-slider
              label="Label"
              color="info"
              value-visible
              v-model="value"
            />
          </div>
          <div class="flex d-flex align--end xs12 lg6 xl4 mb-2">
            <va-slider
              label="Label"
              :invert-label="true"
              color="warning"
              value-visible
              v-model="value"
            />
          </div>
          <div class="flex xs12 lg6 xl4 mb-2">
            <div class="title mb-3">Label + Icon</div>
            <va-slider
              icon="fa fa-music"
              v-model="value"
            />
          </div>
          <div class="flex xs12 lg6 xl4 mb-2">
            <div class="title title--danger mb-3">Label + Icon</div>
            <va-slider
              color="danger"
              icon-right="fa fa-check-circle"
              value-visible
              v-model="value"
            />
          </div>
          <div class="flex xs12 lg6 xl4 mb-2">
            <div class="title mb-3">Pins</div>
            <va-slider
              pins
              :step="20"
              v-model="value"
            />
          </div>
          <div class="flex xs12 lg6 xl4 mb-2">
            <div class="title title--warning mb-3">Pins & Value</div>
            <va-slider
              pins
              :step="10"
              color="warning"
              value-visible
              v-model="value"
            />
          </div>
          <div class="flex xs12 lg6 xl4 mb-2">
            <div class="va-row d-flex align--start">
              <div class="flex xs10 lg9 xl9">
                <div class="title mb-3">Value Input</div>
                <va-slider
                  value-visible
                  v-model="value"
                />
              </div>
              <div class="flex xs1 lg2 xl2 offset--xs1 offset--lg1 offset--xl1">
                <div class="form-group">
                  <div class="input-group">
                    <input id="simple-input" v-model="value" required/>
                    <label class="control-label" for="simple-input">
                      Slider Label
                    </label>
                    <va-icon icon="bar"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex xs12 lg6 xl4 mb-2">
            <va-slider
              color="info"
              icon="fa fa-volume-off"
              icon-right="fa fa-volume-up"
              v-model="value"
            />
          </div>
        </div>
      </vuestic-widget>
    </div>
    <div class="flex md12">
      <vuestic-widget :headerText="$t('sliders.range')">
        <div class="va-row">
          <div class="flex xs12 lg6 xl4 mb-2">
            <div class="title mb-3">Simple</div>
            <va-slider
              range
              v-model="value2"
            />
          </div>
          <div class="flex xs12 lg6 xl4 mb-2">
            <div class="title title--danger mb-3">Value</div>
            <va-slider
              range
              color="danger"
              value-visible
              v-model="value2"
            />
          </div>
          <div class="flex d-flex align--end xs12 lg6 xl4 mb-2">
            <va-slider
              range
              label="Label"
              color="info"
              value-visible
              v-model="value2"
            />
          </div>
          <div class="flex d-flex align--end xs12 lg6 xl4 mb-2">
            <va-slider
              range
              label="Label"
              :invert-label="true"
              color="warning"
              value-visible
              v-model="value2"
            />
          </div>
          <div class="flex xs12 lg6 xl4 mb-2">
            <div class="title mb-3">Label + Icon</div>
            <va-slider
              range
              icon="fa fa-music"
              v-model="value2"
            />
          </div>
          <div class="flex xs12 lg6 xl4 mb-2">
            <div class="title title--danger mb-3">Label + Icon</div>
            <va-slider
              range
              color="danger"
              icon-right="fa fa-check-circle"
              value-visible
              v-model="value2"
            />
          </div>
          <div class="flex xs12 lg6 xl4 mb-2">
            <div class="title mb-3">Pins</div>
            <va-slider
              range
              pins
              :step="20"
              v-model="value2"
            />
          </div>
          <div class="flex xs12 lg6 xl4 mb-2">
            <div class="title title--warning mb-3">Pins & Value</div>
            <va-slider
              range
              pins
              :step="10"
              color="warning"
              value-visible
              v-model="value2"
            />
          </div>
          <div class="flex xs12 lg6 xl4 mb-2">
            <div class="va-row d-flex align--center">
              <div class="flex xs1 lg2 xl2">
                <div class="form-group">
                  <div class="input-group">
                    <input id="simple-input2" v-model="value2[0]" required/>
                    <label class="control-label" for="simple-input2">
                      Range Label1
                    </label>
                    <va-icon icon="bar"/>
                  </div>
                </div>
              </div>
              <div class="flex xs8 xl6 lg6 offset--xs1 offset--lg1 offset--xl1">
                <va-slider
                  v-model="value2"
                />
              </div>
              <div class="flex xs1 lg2 xl2 offset--xs1 offset--lg1 offset--xl1">
                <div class="form-group">
                  <div class="input-group">
                    <input id="simple-input3" v-model="value2[1]" required/>
                    <label class="control-label" for="simple-input3">
                      Range Label2
                    </label>
                    <va-icon icon="bar"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex xs12 lg6 xl4 mb-2">
            <va-slider
              range
              color="info"
              icon="fa fa-volume-off"
              icon-right="fa fa-volume-up"
              v-model="value2"
            />
          </div>
        </div>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sliders',
  data () {
    return {
      value: 90,
      value2: [20, 60]
    }
  },
}
</script>
