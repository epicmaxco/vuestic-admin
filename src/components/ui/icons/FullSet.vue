<template>
  <div class="setOfIcons">

    <div class="search">
      <h2>{{set.name}}</h2>
      <input v-model="selector"/>
    </div>

    <div class="range">
      <input type="range" min="20" max="40" v-on:input="changeIconSize()"
             v-model.number="iconSize" id="iconSizeRange" /> {{iconSize}}px
    </div>
    <template v-for="list in validatedLists">
      <widget :headerText="list.name">
        <span v-if="list.icons.length === 0">No icons found</span>
        <template v-for="i in Math.floor(list.icons.length/12+1)">
          <div class="row">
            <div class="col-lg-1 col-md-2 col-sm-3 col-xs-4" v-for="j in 12" v-if="list.icons[(i-1)*12 + j-1]">
              <div class="icon">
                <span :class="iconClass(list.icons[(i-1)*12 + j-1])" aria-hidden="true"
                      :style="'font-size: '+iconSize+'px'"></span>
                <div class="iconText">{{list.icons[(i-1)*12 + j-1]}}</div>
              </div>
            </div>
          </div>
        </template>
      </widget>
    </template>
  </div>
</template>

<script>
  import Widget from '../../common/widget/Widget'
  import {mapGetters} from 'vuex'

  export default {
    components: {Widget},
    name: 'full-set',
    props: ['nameOfSet'],
    methods: {
      iconClass (icon) {
        return this.set.prefix + ' ' + this.set.prefix + '-' + icon
      },
      changeIconSize (icon) {

      }
    },
    computed: {
      ...mapGetters([
        'setOfIconsByName'
      ]),
      set () {
        return this.setOfIconsByName(this.nameOfSet)
      },
      validatedLists () {
        if (this.selector === '') {
          return this.set.lists
        }
        let result = [{name: 'Found Icons', icons: []}]
        this.set.lists.forEach(list => {
          list.icons.forEach(icon => {
            if (icon.match(this.selector)) {
              result[0].icons.push(icon)
            }
          })
        })
        return result
      }
    },
    data: function () {
      return {
        selector: '',
        iconSize: 20
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/_variables.scss";

  @import url(http://weloveiconfonts.com/api/?family=brandico|entypo|fontelico|iconicfill|iconicstroke|maki|openwebicons|typicons|zocial);

  /* brandico */
  [class*="brandico-"]:before {
    font-family: 'brandico', sans-serif;
    font-style: normal;
  }

  /* entypo */
  [class*="entypo-"]:before {
    font-family: 'entypo', sans-serif;
    font-style: normal;
  }

  /* fontelico */
  [class*="fontelico-"]:before {
    font-family: 'fontelico', sans-serif;
    font-style: normal;
  }

  /* iconicfill */
  [class*="iconicfill-"]:before {
    font-family: 'IconicFill', sans-serif;
    font-style: normal;
  }

  /* iconicstroke */
  [class*="iconicstroke-"]:before {
    font-family: 'IconicStroke', sans-serif;
    font-style: normal;
  }

  /* maki */
  [class*="maki-"]:before {
    font-family: 'maki', sans-serif;
    font-style: normal;
  }

  /* openwebicons */
  [class*="openwebicons-"]:before {
    font-family: 'OpenWeb Icons', sans-serif;
    font-style: normal;
  }

  /* typicons */
  [class*="typicons-"]:before {
    font-family: 'Typicons', sans-serif;
    font-style: normal;
  }

  /* zocial */
  [class*="zocial-"]:before {
    font-family: 'zocial', sans-serif;
  }

  .setOfIcons {
    .search {
      text-align: center;
    }

    .range {
      text-align: center;
    }

    .row {
      text-align: center;
      div[class^='col'] {
        padding: 0;
        margin: 0 0 .5rem;
        &:hover{
          color: $brand-primary;
        }
        .icon {
          height: 100%;
          padding: 1rem 0 0;
          margin: 0 0 .5rem;
          .iconText {
            font-size: .6rem;
            text-align: center;
          }
          i {
            /*font-size: 1.30rem;*/
          }
        }
      }
    }
  }
</style>

