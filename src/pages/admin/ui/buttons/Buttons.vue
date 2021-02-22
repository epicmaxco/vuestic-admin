<template>
  <div class="buttons">
    <div class="row">
      <div class="flex xs12">
        <va-card class="larger-padding">
          <va-card-title>{{$t('buttons.types')}}</va-card-title>
          <va-card-content class="row">
            <div class="flex">
              <va-button class="mr-2 mb-2" > {{ $t('buttons.default') }}</va-button>
              <va-button class="mr-2 mb-2" disabled> {{ $t('buttons.disabled') }}</va-button>
              <va-button class="mr-2 mb-2" outline> {{ $t('buttons.outline') }}</va-button>
              <va-button class="mr-2 mb-2" outline disabled> {{ $t('buttons.disabled') }}</va-button>
              <va-button class="mr-2 mb-2" flat> {{ $t('buttons.flat') }}</va-button>
              <va-button class="mr-2 mb-2" flat disabled> {{ $t('buttons.disabled') }}</va-button>
            </div>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card class="larger-padding">
          <va-card-title>{{$t('buttons.size')}}</va-card-title>
          <va-card-content class="row">
            <div class="flex">
              <va-button class="mr-2 mb-2" size="small"> {{ $t('buttons.small') }}</va-button>
              <va-button class="mr-2 mb-2"> {{ $t('buttons.normal') }}</va-button>
              <va-button class="mr-2 mb-2" size="large"> {{ $t('buttons.large') }}</va-button>
            </div>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card class="larger-padding">
          <va-card-title>{{$t('buttons.tags')}}</va-card-title>
          <va-card-content class="row">
            <div class="flex">
              <va-button class="mr-2 mb-2"> {{ $t('buttons.button') }}</va-button>
              <va-button
                class="mr-2 mb-2"
                href="http://epic-spinners.epicmax.co/"
              >
                {{ $t('buttons.a-link') }}
              </va-button>
              <va-button
                class="mr-2 mb-2"
                :to="{ name: 'charts' }"
              >
                {{ $t('buttons.router-link') }}
              </va-button>
            </div>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card class="larger-padding">
          <va-card-title>{{$t('buttons.advanced')}}</va-card-title>
          <va-card-content class="row">
            <div class="flex">
              <!-- <va-button class="mr-2 mb-2" icon="ion_md_close"> {{ $t('buttons.button') }}</va-button>
              <va-button class="mr-2 mb-2" icon-right="ion_arrow_down"> {{ $t('buttons.button') }}</va-button>
              <va-button
                class="mr-2 mb-2"
                icon="ion_md_close"
                icon-right="ion_arrow_down">
                {{ $t('buttons.button') }}
              </va-button>
              <va-button class="mr-2 mb-2" icon="ion_md_close"/> -->
            </div>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card class="larger-padding">
          <va-card-title>{{$t('buttons.colors')}}</va-card-title>
          <va-card-content>
            <div class="row">
              <div class="flex">
                <va-button class="mr-2 mb-2" color="danger"> {{ $t('buttons.danger') }}</va-button>
                <va-button class="mr-2 mb-2" color="info"> {{ $t('buttons.info') }}</va-button>
                <va-button class="mr-2 mb-2" color="dark"> {{ $t('buttons.dark') }}</va-button>
                <va-button class="mr-2 mb-2" color="warning"> {{ $t('buttons.warning') }}</va-button>
                <va-button class="mr-2 mb-2" color="success"> {{ $t('buttons.success') }}</va-button>
                <va-button class="mr-2 mb-2" color="gray"> {{ $t('buttons.gray') }}</va-button>
              </div>
            </div>
            <div class="row">
              <div class="flex">
                <va-button class="mr-2 mb-2" outline color="danger"> {{ $t('buttons.danger') }}</va-button>
                <va-button class="mr-2 mb-2" outline color="info"> {{ $t('buttons.info') }}</va-button>
                <va-button class="mr-2 mb-2" outline color="dark"> {{ $t('buttons.dark') }}</va-button>
                <va-button class="mr-2 mb-2" outline color="warning"> {{ $t('buttons.warning') }}</va-button>
                <va-button class="mr-2 mb-2" outline color="success"> {{ $t('buttons.success') }}</va-button>
                <va-button class="mr-2 mb-2" outline color="gray"> {{ $t('buttons.gray') }}</va-button>
              </div>
            </div>
            <div class="row">
              <div class="flex">
                <va-button class="mr-2 mb-2" flat color="danger"> {{ $t('buttons.danger') }}</va-button>
                <va-button class="mr-2 mb-2" flat color="info"> {{ $t('buttons.info') }}</va-button>
                <va-button class="mr-2 mb-2" flat color="dark"> {{ $t('buttons.dark') }}</va-button>
                <va-button class="mr-2 mb-2" flat color="warning"> {{ $t('buttons.warning') }}</va-button>
                <va-button class="mr-2 mb-2" flat color="success"> {{ $t('buttons.success') }}</va-button>
                <va-button class="mr-2 mb-2" flat color="gray"> {{ $t('buttons.gray') }}</va-button>
              </div>
            </div>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card class="larger-padding">
          <va-card-title>{{$t('buttons.buttonGroups')}}</va-card-title>
          <va-card-content class="row">
            <div class="flex xs12 xl6">
              <va-button-group>
                <va-button size="large"> One</va-button>
                <va-button size="large"> Two</va-button>
                <va-button size="large"> Three</va-button>
              </va-button-group>
            </div>
            <div class="flex xs12 xl6">
              <va-button-group>
                <!-- <va-button outline size="small" color="danger" icon="maki_art_gallery"> First</va-button> -->
                <va-button outline size="small" color="danger"> Second</va-button>
                <va-button outline size="small" color="danger"> Third</va-button>
              </va-button-group>
            </div>
            <div class="flex xs12 xl6">
              <va-button-group>
                <!-- <va-button flat color="gray" icon="glyphicon_envelope"> First</va-button> -->
                <!-- <va-button flat color="gray" icon="entypo_user"> Second</va-button>
                <va-button flat color="gray" icon="ion_ios_alarm"> Third</va-button> -->
              </va-button-group>
            </div>
            <div class="flex xs12 xl6">
              <va-button-group>
                <va-button color="dark"> One</va-button>
                <va-button color="dark"> Two</va-button>
                <va-button color="dark"> Three</va-button>
                <!-- <va-button color="dark" icon="ion_arrow_down"/> -->
              </va-button-group>
            </div>
            <div class="flex xs12 xl6">
              <va-button-group>
                <va-button outline size="large" color="info"> First</va-button>
                <!-- <va-button outline size="large" color="info" icon-right="glyphicon_pencil"> Second</va-button> -->
                <va-button outline size="large" color="info"> Third</va-button>
              </va-button-group>
            </div>
            <div class="flex xs12 xl6">
              <va-button-group>
                <!-- <va-button flat size="small" color="warning" icon="glyphicon_envelope"/> -->
                <!-- <va-button flat size="small" color="warning" icon="entypo_user"/> -->
                <!-- <va-button flat size="small" color="warning" icon-right="ion_ios_alarm"> Update</va-button> -->
              </va-button-group>
            </div>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card class="larger-padding">
          <va-card-title>{{$t('buttons.buttonToggles')}}</va-card-title>
          <va-card-content class="row">
            <div class="flex xs12 lg6">
              <va-button-toggle
                v-model="model"
                :options="options"
              />
            </div>
            <div class="flex xs12 lg6">
              <va-button-toggle
                outline
                v-model="model"
                :options="options"
                color="danger"
              />
            </div>
            <div class="flex xs12 lg6">
              <va-button-toggle
                flat
                v-model="model"
                :options="options"
                color="gray"
              />
            </div>
            <div class="flex xs12 lg6">
              <va-button-toggle
                v-model="model"
                :options="options"
                color="dark"
              />
            </div>
            <div class="flex xs12 lg6">
              <va-button-toggle
                outline
                v-model="model"
                :options="options"
                color="info"
              />
            </div>
            <div class="flex xs12 lg6">
              <va-button-toggle
                flat
                v-model="model"
                :options="options"
                color="warning"
              />
            </div>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card class="larger-padding">
          <va-card-title>{{$t('buttons.pagination')}}</va-card-title>
          <va-card-content class="row">
            <div class="flex xs12 xl6">
              <va-pagination
                v-model="activePage"
                :visible-pages="3"
                :pages="20"
              />
            </div>
            <div class="flex xs12 xl6">
              <va-pagination
                v-model="activePage"
                :visible-pages="4"
                :pages="15"
                color="danger"
              />
            </div>
            <div class="flex xs12 xl6">
              <va-pagination
                v-model="activePage"
                :pages="5"
                disabled
              />
            </div>
            <div class="flex xs12 xl6">
              <va-pagination
                v-model="activePage"
                :pages="10"
                :visible-pages="3"
                :icon="{ boundary: 'bell_slash', direction: 'volume_off' }"
                :icon-right="{ boundary: 'bell', direction: 'volume_up' }"
                color="success"/>
            </div>
          </va-card-content>
        </va-card>
      </div>
      <div class="flex xs12">
        <va-card class="larger-padding">
          <va-card-title>{{$t('buttons.buttonsDropdown')}}</va-card-title>
          <va-card-content class="row">
            <div class="flex">
              <va-button-dropdown
                class="mr-2 mb-2"
                :label="$t('buttons.default')"
              > {{ $t('buttons.content') }}</va-button-dropdown>
              <va-button-dropdown
                class="mr-2 mb-2"
                split
                :label="$t('buttons.split')"
              > {{ $t('buttons.content') }}</va-button-dropdown>
              <va-button-dropdown
                class="mr-2 mb-2"
                split
                split-to="/"
                :label="$t('buttons.splitTo')"
              > {{ $t('buttons.content') }}</va-button-dropdown>
              <!-- <va-button-dropdown
                class="mr-2 mb-2"
                :label="$t('buttons.customIcon')"
                icon="iconicstroke_info"
              > {{ $t('buttons.content') }}</va-button-dropdown> -->
              <va-button-dropdown
                class="mr-2 mb-2"
                disabled
                :label="$t('buttons.disabled')"
              > {{ $t('buttons.content') }}</va-button-dropdown>
              <va-button-dropdown
                class="mr-2 mb-2"
                color="warning"
                :label="$t('buttons.warning')"
              > {{ $t('buttons.content') }}</va-button-dropdown>
            </div>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'buttons',
  data () {
    return {
      options: [
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'two' },
        { label: 'Three', value: 'three' },
      ],
      model: 'three',
      activePage: 4,
    }
  },
}
</script>

<style lang="scss">
  .va-button-dropdown {
    display: inline-block;
  }
</style>
