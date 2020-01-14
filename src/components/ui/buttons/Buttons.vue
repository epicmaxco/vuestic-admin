<template>
  <div class="buttons">
    <div class="row">
      <div class="flex xs12">
        <va-card
          class="larger-padding"
          :title="$t('buttons.types')"
        >
          <div class="row">
            <div class="flex">
              <va-button> {{ $t('buttons.default') }}</va-button>
              <va-button disabled> {{ $t('buttons.disabled') }}</va-button>
              <va-button outline> {{ $t('buttons.outline') }}</va-button>
              <va-button outline disabled> {{ $t('buttons.disabled') }}</va-button>
              <va-button flat> {{ $t('buttons.flat') }}</va-button>
              <va-button flat disabled> {{ $t('buttons.disabled') }}</va-button>
            </div>
          </div>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card
          class="larger-padding"
          :title="$t('buttons.size')"
        >
          <div class="row">
            <div class="flex">
              <va-button small> {{ $t('buttons.small') }}</va-button>
              <va-button> {{ $t('buttons.normal') }}</va-button>
              <va-button large> {{ $t('buttons.large') }}</va-button>
            </div>
          </div>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card
          class="larger-padding"
          :title="$t('buttons.tags')"
        >
          <div class="row">
            <div class="flex">
              <va-button> {{ $t('buttons.button') }}</va-button>
              <va-button
                href="http://epic-spinners.epicmax.co/"
              >
                {{ $t('buttons.a-link') }}
              </va-button>
              <va-button
                :to="{ name: 'charts' }"
              >
                {{ $t('buttons.router-link') }}
              </va-button>
            </div>
          </div>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card
          class="larger-padding"
          :title="$t('buttons.advanced')"
        >
          <div class="row">
            <div class="flex">
              <va-button icon="ion-md-close ion"> {{ $t('buttons.button') }}</va-button>
              <va-button icon-right="ion-ios-arrow-down arrow-down"> {{ $t('buttons.button') }}</va-button>
              <va-button
                icon="ion-md-close ion"
                icon-right="ion-ios-arrow-down arrow-down">
                {{ $t('buttons.button') }}
              </va-button>
              <va-button icon="ion-md-close ion"/>
            </div>
          </div>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card
          class="larger-padding"
          :title="$t('buttons.colors')"
        >
          <div class="row">
            <div class="flex">
              <va-button color="danger"> {{ $t('buttons.danger') }}</va-button>
              <va-button color="info"> {{ $t('buttons.info') }}</va-button>
              <va-button color="dark"> {{ $t('buttons.dark') }}</va-button>
              <va-button color="warning"> {{ $t('buttons.warning') }}</va-button>
              <va-button color="success"> {{ $t('buttons.success') }}</va-button>
              <va-button color="gray"> {{ $t('buttons.gray') }}</va-button>
            </div>
          </div>
          <div class="row">
            <div class="flex">
              <va-button outline color="danger"> {{ $t('buttons.danger') }}</va-button>
              <va-button outline color="info"> {{ $t('buttons.info') }}</va-button>
              <va-button outline color="dark"> {{ $t('buttons.dark') }}</va-button>
              <va-button outline color="warning"> {{ $t('buttons.warning') }}</va-button>
              <va-button outline color="success"> {{ $t('buttons.success') }}</va-button>
              <va-button outline color="gray"> {{ $t('buttons.gray') }}</va-button>
            </div>
          </div>
          <div class="row">
            <div class="flex">
              <va-button flat color="danger"> {{ $t('buttons.danger') }}</va-button>
              <va-button flat color="info"> {{ $t('buttons.info') }}</va-button>
              <va-button flat color="dark"> {{ $t('buttons.dark') }}</va-button>
              <va-button flat color="warning"> {{ $t('buttons.warning') }}</va-button>
              <va-button flat color="success"> {{ $t('buttons.success') }}</va-button>
              <va-button flat color="gray"> {{ $t('buttons.gray') }}</va-button>
            </div>
          </div>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card
          class="larger-padding"
          :title="$t('buttons.buttonGroups')"
        >
          <div class="row">
            <div class="flex xs12 xl6">
              <va-button-group>
                <va-button large> One</va-button>
                <va-button large> Two</va-button>
                <va-button large> Three</va-button>
              </va-button-group>
            </div>
            <div class="flex xs12 xl6">
              <va-button-group>
                <va-button outline small color="danger" icon="maki maki-art-gallery"> First</va-button>
                <va-button outline small color="danger"> Second</va-button>
                <va-button outline small color="danger"> Third</va-button>
              </va-button-group>
            </div>
            <div class="flex xs12 xl6">
              <va-button-group>
                <va-button flat color="gray" icon="glyphicon glyphicon-envelope">
                  First
                </va-button>
                <va-button flat color="gray" icon="entypo entypo-user"> Second</va-button>
                <va-button flat color="gray" icon="ion ion-ios-alarm"> Third</va-button>
              </va-button-group>
            </div>
            <div class="flex xs12 xl6">
              <va-button-group>
                <va-button color="dark"> One</va-button>
                <va-button color="dark"> Two</va-button>
                <va-button color="dark"> Three</va-button>
                <va-button color="dark" icon="ion-ios-arrow-down arrow-down"/>
              </va-button-group>
            </div>
            <div class="flex xs12 xl6">
              <va-button-group>
                <va-button outline large color="info"> First</va-button>
                <va-button outline large color="info" icon-right="glyphicon glyphicon-pencil"> Second</va-button>
                <va-button outline large color="info"> Third</va-button>
              </va-button-group>
            </div>
            <div class="flex xs12 xl6">
              <va-button-group>
                <va-button flat small color="warning" icon="glyphicon glyphicon-envelope"/>
                <va-button flat small color="warning" icon="entypo entypo-user"/>
                <va-button flat small color="warning" icon-right="ion ion-ios-alarm"> Update</va-button>
              </va-button-group>
            </div>
          </div>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card
          class="larger-padding"
          :title="$t('buttons.buttonToggles')"
        >
          <div class="row">
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
          </div>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card
          class="larger-padding"
          :title="$t('buttons.pagination')"
        >
          <div class="row">
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
                :icon="{ boundary: 'fa fa-bell-slash', direction: 'fa fa-volume-off' }"
                :icon-right="{ boundary: 'fa fa-bell', direction: 'fa fa-volume-up' }"
                color="success"/>
            </div>
          </div>
        </va-card>
      </div>
      <div class="flex xs12">
        <va-card
          class="larger-padding"
          :title="$t('buttons.buttonsDropdown')"
        >
          <div class="row">
            <div class="flex">
              <va-button-dropdown
                :label="$t('buttons.default')"
              > {{ $t('buttons.content') }}</va-button-dropdown>
              <va-button-dropdown
                split
                :label="$t('buttons.split')"
              > {{ $t('buttons.content') }}</va-button-dropdown>
              <va-button-dropdown
                split
                split-to="/"
                :label="$t('buttons.splitTo')"
              > {{ $t('buttons.content') }}</va-button-dropdown>
              <va-button-dropdown
                :label="$t('buttons.customIcon')"
                icon="iconicstroke iconicstroke-info"
              > {{ $t('buttons.content') }}</va-button-dropdown>
              <va-button-dropdown
                disabled
                :label="$t('buttons.disabled')"
              > {{ $t('buttons.content') }}</va-button-dropdown>
              <va-button-dropdown
                color="warning"
                :label="$t('buttons.warning')"
              > {{ $t('buttons.content') }}</va-button-dropdown>
            </div>
          </div>
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
