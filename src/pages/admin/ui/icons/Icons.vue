<template>
  <div class="icons">
    <router-view :sets="sets"></router-view>
  </div>
</template>

<script>
  export default {
    name: "Icons",
    data() {
      return {
        setsPath: "./sets/",
      };
    },
    computed: {
      sets() {
        const sets = import.meta.globEager("./sets/*.json", {});
        return Object.values(sets).map((module) => {
          this.addFilteredListsTo(module.default);
          return module.default;
        });
      },
    },
    methods: {
      addFilteredListsTo(set) {
        // This allows us to add icons to icon set.
        const list = set.lists[0].icons;
        const filteredLists = [];
        filteredLists.push(list.slice(0, 6));
        filteredLists.push(list.slice(6, 8));
        filteredLists.push(list.slice(8, 14));
        set.filteredLists = filteredLists;
      },
    },
  };
</script>
