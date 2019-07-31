<template>
  <VbDemo>
    <va-list fit style="maxWidth: 400px" class="ma-2">
      <va-list-label>
        Basic
      </va-list-label>

      <va-item>
        <va-item-section avatar>
          <va-avatar>
            <img src="https://randomuser.me/api/portraits/women/5.jpg">
          </va-avatar>
        </va-item-section>

        <va-item-section>
          <va-item-label>
            Audrey Clay
          </va-item-label>

          <va-item-label caption>
            644 Vermont Court, Freelandville, Kentucky, 2619
          </va-item-label>
        </va-item-section>

        <va-item-section side>
          <va-icon name="fa fa-eye" color="gray" />
        </va-item-section>
      </va-item>

      <va-list-separator></va-list-separator>

      <va-item>
        <va-item-section avatar>
          <va-avatar>
            <img src="https://randomuser.me/api/portraits/men/3.jpg">
          </va-avatar>
        </va-item-section>

        <va-item-section>
          <va-item-label>
            Aguirre Klein
          </va-item-label>

          <va-item-label caption>
            626 Carroll Street, Roulette, Ohio, 1477
          </va-item-label>
        </va-item-section>

        <va-item-section side>
          <va-icon name="fa fa-eye" color="gray" />
        </va-item-section>
      </va-item>

      <va-list-separator spaced></va-list-separator>

      <va-list-label color="warning">
        Warning
      </va-list-label>

      <va-item>
        <va-item-section avatar>
          <va-avatar>
            <img src="https://randomuser.me/api/portraits/men/1.jpg">
          </va-avatar>
        </va-item-section>

        <va-item-section>
          <va-item-label>
            Tucker Kaufman
          </va-item-label>

          <va-item-label caption>
            887 Winthrop Street, Tryon, Florida, 3912
          </va-item-label>
        </va-item-section>

        <va-item-section side>
          <va-icon name="fa fa-eye" color="gray" />
        </va-item-section>
      </va-item>
    </va-list>

    <va-list fit style="maxWidth: 400px" class="ma-2">
      <va-list-label>
        Aligned, Clickable
      </va-list-label>

      <va-item clickable>
        <va-item-section side>
          <va-icon name="fa fa-star" color="warning" />
        </va-item-section>

        <va-item-section avatar>
          <va-avatar>
            <img src="https://randomuser.me/api/portraits/women/5.jpg">
          </va-avatar>
        </va-item-section>

        <va-item-section>
          <va-item-label>
            Audrey Clay
          </va-item-label>

          <va-item-label caption>
            644 Vermont Court, Freelandville, Kentucky, 2619
          </va-item-label>
        </va-item-section>

        <va-item-section side>
          <va-icon name="fa fa-eye" color="gray" />
        </va-item-section>
      </va-item>

      <va-list-separator></va-list-separator>

      <va-item clickable>
        <va-item-section side>
        </va-item-section>

        <va-item-section avatar>
          <va-avatar>
            <img src="https://randomuser.me/api/portraits/men/3.jpg">
          </va-avatar>
        </va-item-section>

        <va-item-section>
          <va-item-label>
            Aguirre Klein
          </va-item-label>

          <va-item-label caption>
            626 Carroll Street, Roulette, Ohio, 1477
          </va-item-label>
        </va-item-section>

        <va-item-section side>
          <va-icon name="fa fa-eye" color="gray" />
        </va-item-section>
      </va-item>
    </va-list>

    <va-list fit style="maxWidth: 400px" class="ma-2">
      <va-list-label>
        Router Support
      </va-list-label>

      <va-item to="/foo">
        <va-item-section avatar>
          <va-avatar>
            <img src="https://randomuser.me/api/portraits/women/5.jpg">
          </va-avatar>
        </va-item-section>

        <va-item-section>
          <va-item-label>
            Audrey Clay
          </va-item-label>

          <va-item-label caption>
            644 Vermont Court, Freelandville, Kentucky, 2619
          </va-item-label>
        </va-item-section>

        <va-item-section side>
          <va-icon name="fa fa-eye" color="gray" />
        </va-item-section>
      </va-item>

      <va-list-separator></va-list-separator>

      <va-item to="/bar">
        <va-item-section avatar>
          <va-avatar>
            <img src="https://randomuser.me/api/portraits/men/3.jpg">
          </va-avatar>
        </va-item-section>

        <va-item-section>
          <va-item-label>
            Aguirre Klein
          </va-item-label>

          <va-item-label caption>
            626 Carroll Street, Roulette, Ohio, 1477
          </va-item-label>
        </va-item-section>

        <va-item-section side>
          <va-icon name="fa fa-eye" color="gray" />
        </va-item-section>
      </va-item>
    </va-list>

    <va-list fit style="maxWidth: 400px" class="ma-2">
      <va-list-label>
        Selectable
      </va-list-label>

      <va-item>
        <va-item-section side>
          <va-checkbox v-model="check1" />
        </va-item-section>

        <va-item-section>
          <va-item-label>
            Audrey Clay
          </va-item-label>
        </va-item-section>
      </va-item>

      <va-item>
        <va-item-section side>
          <va-checkbox v-model="check2" />
        </va-item-section>

        <va-item-section>
          <va-item-label>
            Aguirre Klein
          </va-item-label>
        </va-item-section>
      </va-item>
    </va-list>
  </VbDemo>
</template>

<script>
import VaList from './VaList'
import VaListLabel from './VaListLabel'
import VaItem from './VaItem'
import VaItemSection from './VaItemSection'
import VaListSeparator from './VaListSeparator'
import VaCheckbox from '../va-checkbox/VaCheckbox'
import VaItemLabel from './VaItemLabel'
import VaAvatar from '../va-avatar/VaAvatar'
import VaIcon from '../va-icon/VaIcon'

export default {
  components: { VaIcon, VaAvatar, VaItemLabel, VaCheckbox, VaListSeparator, VaItemSection, VaItem, VaListLabel, VaList },
  data () {
    return {
      appBanners: false,
      banners: false,
      check1: true,
      check2: false,
    }
  },
}
</script>

<style lang="scss">

</style>
