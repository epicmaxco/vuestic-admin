<template>
  <va-content class="typography content">
    <div class="row">
      <div class="flex xs12">
        <va-card>
          <va-card-title>{{ t('typography.primary') }}</va-card-title>
          <va-card-content>
            <div class="mb-4">
              <h1>Display 1 Heading</h1>
              <p>
                Of all of the celestial bodies that capture our attention and fascination as astronomers, none has a
                greater influence on life on planet Earth than it’s own satellite, the moon. When you think about it.
              </p>
            </div>
            <div class="mb-4">
              <h2>Display 2 Heading</h2>
              <p>
                None has a greater influence on life on planet Earth than it’s own satellite, the moon. When you think
                about it.
              </p>
            </div>
            <div class="mb-4">
              <h3>Display 3 Heading</h3>
              <p>
                Let’s talk about meat fondue recipes and what you need to know first. Meat fondue also known as oil
                fondue is a method of cooking all kinds of meats, poultry, and seafood in a pot of heated oil.
              </p>
            </div>
            <div class="mb-4">
              <h4>Display 4 Heading</h4>
              <p>
                There is something about parenthood that gives us a sense of history and a deeply rooted desire to send
                on into the next generation the great things we have discovered about life.
              </p>
            </div>
            <div class="mb-4">
              <h5>Display 5 Heading</h5>
              <p>
                There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope.
                It’s exciting to think about setting up your own viewing station.
              </p>
            </div>
            <div class="mb-4">
              <p>
                Of all of the celestial bodies that capture our attention and fascination as astronomers, none has a
                greater influence on life on planet Earth than it’s own satellite, the moon. When you think about it.
              </p>
            </div>
            <div class="mb-4">
              <div class="text--secondary">
                Of all of the celestial bodies that capture our attention and fascination as astronomers, none has a
                greater influence on life on planet Earth than it’s own satellite, the moon. When you think about it.
              </div>
            </div>
            <div class="mb-4">
              <pre class="code-snippet">
&lt;p class=“code-snippet”>
  This is a wonderful example.
  &lt;a href=“#” onClick=“”>Read more&lt;/a>
&lt;/p></pre
              >
              <p>
                Of all of the celestial bodies that capture our attention and fascination as astronomers,
                <span class="text--code">currentColor</span> none has a greater influence on life on planet Earth than
                it’s own satellite, the moon.
              </p>
            </div>
          </va-card-content>
        </va-card>
      </div>
      <div class="flex xs12">
        <va-card>
          <va-card-title>{{ t('typography.secondary') }}</va-card-title>
          <va-card-content>
            <p class="display-3">Lists</p>
            <ol class="va-ordered">
              <li>
                Of all of the celestial bodies that capture our attention and fascination as astronomers, none has a
                greater influence.
              </li>
              <li>Earth than it’s own satellite, the moon. When you think about it.</li>
              <li>Attention and fascination as.</li>
            </ol>
            <ol class="va-ordered">
              <li>Coffee</li>
              <li>
                Tea
                <ol class="va-ordered">
                  <li>
                    Black tea
                    <ol class="va-ordered">
                      <li>Brooke Bond</li>
                      <li>Lipton</li>
                    </ol>
                  </li>
                  <li>
                    Green tea
                    <ol class="va-ordered">
                      <li>Greenfield</li>
                      <li>Tess</li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li>Milk</li>
            </ol>
            <ul class="va-unordered">
              <li>
                Of all of the celestial bodies that capture our attention and fascination as astronomers, none has a
                greater influence.
              </li>
              <li>Earth than it’s own satellite, the moon. When you think about it.</li>
              <li>Attention and fascination as .</li>
            </ul>
            <ul class="va-unordered">
              <li>Coffee</li>
              <li>
                Tea
                <ul class="va-unordered">
                  <li>
                    Black tea
                    <ul class="va-unordered">
                      <li>Brooke Bond</li>
                      <li>Lipton</li>
                    </ul>
                  </li>
                  <li>
                    Green tea
                    <ul class="va-unordered">
                      <li>Greenfield</li>
                      <li>Tess</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Milk</li>
            </ul>
            <p class="display-3">Links</p>
            <div class="mb-4">
              <a href="/default" class="link mr-4" @click.prevent> Default Link </a>
              <a href="/secondary" class="link-secondary" @click.prevent> Secondary Link </a>
            </div>
            <div class="mb-4">
              <p class="display-3">Other Elements</p>
              <p>
                None has a greater influence on
                <span class="text--highlighted">highlighted text</span>
                life on planet Earth than it’s own satellite, the selected chunk of text. When you think about it.
              </p>
            </div>
            <div class="mb-4">
              <blockquote class="va-blockquote" :style="{ borderColor: theme.primary }">
                <p>
                  BQ: Let’s talk about meat fondue recipes and what you need to know first. Meat fondue also known as
                  oil fondue is a method of cooking all kinds.
                </p>
                <p>
                  <i>— Mister Lebowski</i>
                </p>
              </blockquote>
            </div>
            <div class="mb-4">
              <div class="text-block">
                <p class="display-3">Display-3 Heading</p>
                <span
                  >Of all of the celestial bodies that capture our attention and fascination as astronomers, none has a
                  greater influence on life on planet Earth than it’s own satellite, the moon. When you think about
                  it.</span
                >
              </div>
            </div>
            <div class="mb-4">
              <table class="va-table">
                <thead>
                  <tr>
                    <th v-for="(data, index) in tableData[0]" :key="index">{{ data }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(rowData, rowIndex) in tableData.slice(1)" :key="rowIndex">
                    <td v-for="(itemData, colIndex) in rowData" :key="colIndex">
                      {{ itemData }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </va-content>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useGlobalConfig } from 'vuestic-ui'

  const { t } = useI18n()
  const { getGlobalConfig } = useGlobalConfig()

  const tableData = ref([
    ['Id', 'FooBar type', 'Actions'],
    ['1', 'Zebra', 'Delete'],
    ['2', 'Not Zebra', 'Remove'],
    ['3', 'Very Zebra', 'Eradicate'],
  ])

  const theme = computed(() => getGlobalConfig().colors!)
</script>

<style lang="scss" scoped>
  .text--secondary {
    color: var(--va-secondary);
  }
</style>
