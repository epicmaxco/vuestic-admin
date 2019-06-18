<template>
  <va-card title="Awesome table">
    <div class="va-row justify--space-between align--center mb-2">
      <div class="flex sm4 xs12">
        <va-input
          class="mb-0"
          v-model="search"
          :placeholder="$t('dashboard.table.search')"
        >
          <va-icon
            slot="prepend"
            color="gray"
            icon="fa fa-search"
          />
        </va-input>
      </div>
      <div class="flex sm8 table-buttons">
        <div class="va-row justify--end align--center">
          <va-checkbox
            :label="$t('dashboard.table.verified')"
            v-model="checkbox"
            class="mr-3"
          />
          <va-button-group>
            <va-button color="success">
              {{ $t('dashboard.table.brief') }}
            </va-button>
            <va-button outline color="success">
              {{ $t('dashboard.table.detailed') }}
            </va-button>
          </va-button-group>
          <va-button>{{ $t('dashboard.table.export') }}</va-button>
          <va-button
            color="gray"
            icon-right="ion-ios-arrow-down arrow-down"
          >
            6 {{ $t('dashboard.table.perPage') }}
          </va-button>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
        <tr>
          <td>{{ $t('tables.headings.name') }}</td>
          <td>{{ $t('tables.headings.email') }}</td>
          <td>{{ $t('tables.headings.submits') }}</td>
          <td>{{ $t('tables.headings.status') }}</td>
          <td>{{ $t('tables.headings.country') }}</td>
          <td></td>
        </tr>
        </thead>
        <tbody>
          <tr
            v-for="(user, idx) in tableData"
            :key="idx"
            :class="user.color ? `table-${user.color}` : ''"
          >
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.submits }}</td>
            <td>
              <span
                class="badge badge-pill text-white"
                :class="badgeColor[user.status]"
              >
                {{ user.status }}
              </span>
            </td>
            <td>{{ user.country }}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="va-row justify--center pb-2">
      <va-pagination
        v-model="activePage"
        :visible-pages="2"
        :pages="20"
        color="gray"
      />
    </div>
  </va-card>
</template>

<script>
export default {
  name: 'DashboardTable',
  data () {
    return {
      search: '',
      activePage: 1,
      checkbox: true,
      badgeColor: {
        read: 'badge-info',
        paid: 'badge-primary',
        processing: 'badge-warning',
      },
      tableData: [{
        color: '',
        name: 'Jonathan Patterson',
        email: 'janet.purdy@yahoo.co',
        submits: '5',
        status: 'read',
        country: 'Peru',
      }, {
        color: 'success',
        name: 'Anthony Soto',
        email: 'abshire_jarrod@yahoo',
        submits: '189',
        status: 'paid',
        country: 'Somalia',
      }, {
        color: '',
        name: 'Ruth Wheeler',
        email: 'abdiel.cartwright@sc',
        submits: '5',
        status: 'read',
        country: 'Liechtenstein',
      }, {
        color: '',
        name: 'Derrick Castro',
        email: 'myrtle_bernhard@mann',
        submits: '18',
        status: 'processing',
        country: 'Mexico',
      }, {
        color: 'danger',
        name: 'Ivan Cooper',
        email: 'reina.kilback@hotmai',
        submits: '0',
        status: 'processing',
        country: 'Morocco',
      }, {
        color: '',
        name: 'Harvey Curry',
        email: 'hermiston_boyd@durga',
        submits: '25',
        status: 'paid',
        country: 'Cambodia',
      }],
    }
  },
}
</script>

<style lang="scss" scoped>
  .table-buttons {
    @include media-breakpoint-down(lg) {
      display: none;
    }
  }
</style>
