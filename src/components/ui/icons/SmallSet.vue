<template>
  <div class="small-set">
    {{name}}
    <div class="set-content">
      <div class="overlay"><a :href="href"><div class="btn btn-primary btn-sm">ok</div></a></div>
      <div>
        <template v-for="subList in subLists">
          <div class="row">
            <div class="col-sm-2" v-for="icon in subList">
              <div class="icon">
                <i :class="iconClass(icon)" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import Widget from '../../common/widget/Widget'
  export default {
    components: {Widget},
    name: 'small-set',
    props: {
      set: {
        type: Object,
        required: true
      },
      href: String
    },
    methods: {
      iconClass: function (icon) {
        return this.prefix + ' ' + this.prefix + '-' + icon
      }
    },
    computed: {
      subLists: function () {
        let list = this.set.lists[0].list
        console.log(list)
        let subLists = []
        subLists.push(list.slice(0, 6))
        subLists.push(list.slice(6, 12))
        subLists.push(list.slice(12, 18))
        return subLists
      },
      prefix: function () {
        return this.set.prefix
      },
      name: function () {
        return this.set.name
      }
    }
  }

</script>
<style lang="scss">
  @import "../../../sass/_variables.scss";
  .small-set {

    .set-content {
      background-color: $light-gray;
      > div {
        padding: 1rem;
        div[class^="col"] {
          padding: 0;
          margin: 1rem 0;
          .icon {
            text-align: center;
          }
        }
      }

      .overlay {
        padding: 0;
        margin: 0;
        width: 90%;
        height: 90%;
        position: absolute;
        visibility: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
      }

      &:hover {
        .overlay {
          visibility: visible;
        }
      }

    }
  }
</style>
