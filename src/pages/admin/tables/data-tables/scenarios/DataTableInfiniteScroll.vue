<!--<template>-->
<!--  <va-card :title="t('tables.infiniteScroll')">-->
<!--    <div ref="scrollable" class="data-table-infinite-scroll&#45;&#45;container" @scroll="onScroll">-->
<!--      <va-data-table :fields="fields" :data="users" api-mode no-pagination>-->
<!--        <template #marker="props">-->
<!--          <va-icon name="fa fa-circle" :color="props.rowData.color" size="8px" />-->
<!--        </template>-->
<!--      </va-data-table>-->

<!--      <div class="justify-center m-4">-->
<!--        <spring-spinner v-if="loading" :animation-duration="2000" :size="60" :color="theme.variables.primary" />-->
<!--      </div>-->
<!--    </div>-->
<!--  </va-card>-->
<!--</template>-->

<!--<script>-->
<!--  // import { SpringSpinner } from 'epic-spinners'-->
<!--  import users from '../data/users.json'-->
<!--  import { useGlobalConfig } from 'vuestic-ui'-->
<!--  import { defineComponent } from 'vue'-->

<!--  export default {-->
<!--    components: {-->
<!--      SpringSpinner: defineComponent({ template: '<div>LOADER PLACEHOLDER</div>' }),-->
<!--    },-->
<!--    data() {-->
<!--      return {-->
<!--        users: [],-->
<!--        loading: false,-->
<!--        offset: 0,-->
<!--      }-->
<!--    },-->
<!--    computed: {-->
<!--      theme() {-->
<!--        return useGlobalConfig().getGlobalConfig().colors-->
<!--      },-->
<!--      fields() {-->
<!--        return [-->
<!--          {-->
<!--            name: '__slot:marker',-->
<!--            width: '30px',-->
<!--            dataClass: 'text-center',-->
<!--          },-->
<!--          {-->
<!--            name: 'fullName',-->
<!--            title: this.t('tables.headings.name'),-->
<!--          },-->
<!--          {-->
<!--            name: 'email',-->
<!--            title: this.t('tables.headings.email'),-->
<!--          },-->
<!--          {-->
<!--            name: 'country',-->
<!--            title: this.t('tables.headings.country'),-->
<!--          },-->
<!--        ]-->
<!--      },-->
<!--    },-->
<!--    created() {-->
<!--      this.loadMore()-->
<!--    },-->
<!--    methods: {-->
<!--      loadMore() {-->
<!--        this.loading = true-->

<!--        this.readUsers().then((users) => {-->
<!--          this.users = this.users.concat(users)-->
<!--          this.loading = false-->
<!--        })-->
<!--      },-->
<!--      readUsers() {-->
<!--        return new Promise((resolve) => {-->
<!--          setTimeout(() => {-->
<!--            resolve(users.slice(0, 10))-->
<!--          }, 600)-->
<!--        })-->
<!--      },-->
<!--      onScroll(e) {-->
<!--        if (this.loading) {-->
<!--          return-->
<!--        }-->

<!--        const { target } = e-->

<!--        if (target.offsetHeight + target.scrollTop === target.scrollHeight) {-->
<!--          this.loadMore()-->
<!--        }-->
<!--      },-->
<!--    },-->
<!--  }-->
<!--</script>-->

<!--<style lang="scss">-->
<!--  .data-table-infinite-scroll&#45;&#45;container {-->
<!--    height: 300px;-->
<!--    overflow-y: auto;-->
<!--  }-->
<!--</style>-->
