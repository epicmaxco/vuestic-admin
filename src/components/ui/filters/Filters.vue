<template>
  <div class="filters-page">
    <vuestic-widget>
      <div class="row">
        <div class="col-md-12">
          <vuestic-collapse noHeader>
            <span slot="header">
              Show filters
            </span>
            <div slot="body">
              Inputs here
            </div>
          </vuestic-collapse>
        </div>
      </div>
    </vuestic-widget>
    <vuestic-widget>
      <div class="table-responsive">
        <table class="table table-striped first-td-padding">
          <thead>
          <tr>
            <td>{{'tables.headings.name' | translate}}</td>
            <td>{{'tables.headings.email' | translate}}</td>
            <td>{{'tables.headings.city' | translate}}</td>
            <td align="right">{{'tables.headings.score' | translate}}</td>
            <td></td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in itemsFiltered" v-bind:key="item">
            <td>{{ item.itemName }}</td>
            <td>{{ item.itemEmail }}</td>
            <td>{{ item.itemCity }}</td>
            <td align="right">{{ item.itemScore }}</td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>
    </vuestic-widget>
    <vuestic-widget>
      <div class="row filters-page__filter-bar-container">
        <filter-bar
          @filter="filterName"
          class="filters-page__filter-bar"
        />
        <filter-bar
          @filter="filterEmail"
          class="filters-page__filter-bar"
        />
        <filter-bar
          @filter="onFilterInputName"
          class="filters-page__filter-bar"
        />
      </div>
      <div class="filters-page__tags">
        <vuestic-tag
          v-if="name"
          :name="`Name: ${ name }`"
          removable
          @remove="onFilterRemove"
        />
        <vuestic-tag
          v-if="email"
          :name="`Email: ${ email }`"
          removable
          @remove="user = undefined"
        />
      </div>
    </vuestic-widget>
  </div>
</template>

<script>
import VuesticWidget
  from '../../../vuestic-theme/vuestic-components/vuestic-widget/VuesticWidget'
import FilterBar
  from '../../../vuestic-theme/vuestic-components/vuestic-datatable/datatable-components/FilterBar.vue'
import { SpringSpinner } from 'epic-spinners'

export default {
  name: 'filters',
  components: { VuesticWidget, FilterBar, SpringSpinner },
  data () {
    return {
      name: '',
      email: '',
      user: 'Nancy',
      items: [
        {
          itemName: 'Matthew McCormick',
          itemEmail: 'matthew30@mail.ol',
          itemCity: 'Vancouver',
          itemScore: 93
        },
        {
          itemName: 'Nancy Bo',
          itemEmail: 'nancy@boonweb.com',
          itemCity: 'Washington',
          itemScore: 280
        },
        {
          itemName: 'Frederiko Lopez',
          itemEmail: 'fr.lopez@webmail.sp',
          itemCity: 'Barcelona',
          itemScore: 16
        },
        {
          itemName: 'Stanley Hummer',
          itemEmail: 'mr_winner_2999@gmail.cb',
          itemCity: 'Manchester',
          itemScore: 57
        },
        {
          itemName: 'Lendley Wintz',
          itemEmail: '9938198146@mailster.io',
          itemCity: 'Wien',
          itemScore: 113
        },
        {
          itemName: 'Barbara Noz',
          itemEmail: 'barbaranoz@mailster.io',
          itemCity: 'Brussels',
          itemScore: 68
        },
        {
          itemName: 'Matthew McCormick',
          itemEmail: 'matthew30@mail.ol',
          itemCity: 'Vancouver',
          itemScore: 93
        },
        {
          itemName: 'ancy Bo',
          itemEmail: 'nancy@boonweb.com',
          itemCity: 'Washington',
          itemScore: 280
        }
      ],
      sortedList: [
        {
          itemName: 'Matthew McCormick',
          itemEmail: 'matthew30@mail.ol',
          itemCity: 'Vancouver',
          itemScore: 93
        },
        {
          itemName: 'Nancy Bo',
          itemEmail: 'nancy@boonweb.com',
          itemCity: 'Washington',
          itemScore: 280
        },
        {
          itemName: 'Frederiko Lopez',
          itemEmail: 'fr.lopez@webmail.sp',
          itemCity: 'Barcelona',
          itemScore: 16
        },
        {
          itemName: 'Stanley Hummer',
          itemEmail: 'mr_winner_2999@gmail.cb',
          itemCity: 'Manchester',
          itemScore: 57
        },
        {
          itemName: 'Lendley Wintz',
          itemEmail: '9938198146@mailster.io',
          itemCity: 'Wien',
          itemScore: 113
        },
        {
          itemName: 'Barbara Noz',
          itemEmail: 'barbaranoz@mailster.io',
          itemCity: 'Brussels',
          itemScore: 68
        },
        {
          itemName: 'Matthew McCormick',
          itemEmail: 'matthew30@mail.ol',
          itemCity: 'Vancouver',
          itemScore: 93
        },
        {
          itemName: 'ancy Bo',
          itemEmail: 'nancy@boonweb.com',
          itemCity: 'Washington',
          itemScore: 280
        }
      ],
    }
  },
  methods: {
    onFilterInputName (val) {
    },
    onFilterRemove () {
      this.onFilterInputName('')
    },
    filterName (val) {
      if (val.length <= this.name.length) {
        this.name = val
        this.itemsFiltered = this.items.filter(item => item.itemName.toUpperCase().search(this.name.toUpperCase()) !== -1)
      } else {
        this.name = val
        this.itemsFiltered = this.itemsFiltered.filter(item => item.itemName.toUpperCase().search(this.name.toUpperCase()) !== -1)
      }
    },
    filterEmail (val) {
      if (val.length < this.email.length) {
        this.email = val
        this.itemsFiltered = this.items.filter(item => item.itemEmail.toUpperCase().search(this.email.toUpperCase()) !== -1)
      } else {
        this.email = val
        this.itemsFiltered = this.itemsFiltered.filter(item => item.itemEmail.toUpperCase().search(this.email.toUpperCase()) !== -1)
      }
    }
  },
  computed: {
    itemsFiltered: {
      get: function () {
        if (this.sortedList.length > 0) {
          return this.sortedList
        } else {
          return this.items
        }
      },
      set: function (sortedList) {
        this.sortedList = sortedList
      }
    }
  }
}
</script>

<style lang="scss">
.filters-page {
  &__tags {
    display: flex;
  }
  &__filter-bar {
    margin: 1.5rem;
    width: 300px;
  }
  &__filter-bar-container {
    justify-content: space-between;
  }
}
</style>
