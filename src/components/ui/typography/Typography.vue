<template>
  <div class="ui-typography">
    <vuestic-widget>
      <div class="va-row column">
        <div class="md12 flex">
          <div class="ui-typography__item">
            <p class="display-1 text--bold">display-1 Heading</p>
            <p class="display-5 ui-typography__item">Of all of the celestial bodies that capture our
              attention and fascination as astronomers, none has a greater influence
              on life on planet Earth than it’s own satellite, the moon. When
              you think about it.</p>
          </div>
          <div class="ui-typography__item">
            <p class="display-2 text--bold">display-2 Heading</p>
            <p class="display-5 ui-typography__item">None has a greater influence on life on planet
              Earth than it’s own satellite, the moon. When you think about it.</p>
          </div>
          <div class="ui-typography__item">
            <p class="display-3 text--bold">display-3 Heading</p>
            <p class="display-5 ui-typography__item">Let’s talk about meat fondue recipes and what you
              need to know first. Meat fondue also known as oil fondue is a method
              of cooking all kinds of meats, poultry, and seafood in a pot of
              heated oil.</p>
          </div>
          <div class="ui-typography__item">
            <p class="display-4 text--bold">display-4 Heading</p>
            <p class="display-5 ui-typography__item">There is something about parenthood that gives us
              a sense of history and a deeply rooted desire to send on into the
              next generation the great things we have discovered about life.</p>
          </div>
          <div class="ui-typography__item">
            <p class="display-5 text--bold">display-5 Heading</p>
            <p class="display-5 ui-typography__item">
              There is a moment in the life of any aspiring astronomer that it is
              time to buy that first telescope. It’s exciting to think about
              setting up your own viewing station.
            </p>
          </div>
          <div class="ui-typography__item">
            <p class="code-snippet">
              &lt;p&gt class=“code_snippet”> <br/>
              &emsp;This is a wonderful example.<br/>
              &emsp; &lt;a&gt href=“#” onClick=“”>Read more&lt;/a&gt<br/>
              &lt;/p&gt <br/>
            </p>
          </div>
          <div class="ui-typography__item">
            <div class="flex md8">
              <a href="/not-visited" class="link ui-typography__default-link">default link</a>
              <a href="/not-visited" class="link-secondary flex offset--md1">secondary link</a>
            </div>
            <div class="flex md8">
              <a href="#" class="link ui-typography__default-link">default link visited</a>
              <a href="#" class="link-secondary flex offset--md1">secondary link visited</a>
            </div>
          </div>
          <div class="ui-typography__item">
            <p class="display-3 text--bold">Text transforms</p>
            <ul class="vue-unordered">
              <li><span class="text--highlighted">.text--uppercase</span> - Sets text-transform to uppercase</li>
              <li><span class="text--highlighted">.text-lowercase</span> - Sets text-transform to lowercase</li>
              <li><span class="text--highlighted">.text-capitalize</span> - Sets text-transform to capitalize</li>
            </ul>
          </div>
          <div class="ui-typography__item">
            <p class="display-3 text--bold">Text wrapping</p>
            <ul class="vue-unordered">
              <li> <span class="text--highlighted">.text--no-wrap </span> - Sets whitespace to no-wrap</li>
              <li> <span class="text--highlighted">.text--truncate</span> - Truncates overflowed text</li>
            </ul>
          </div>
          <p class="display-3 text--bold">Lists</p>
          <ol class="vue-ordered">
            <li>Of all of the celestial bodies that capture our attention and fascination as astronomers, none has a greater influence.</li>
            <li>Earth than it’s own satellite, the moon. When you think about it.</li>
            <li>Attention and fascination as .</li>
          </ol>
          <ul class="vue-unordered">
            <li>Of all of the celestial bodies that capture our attention and fascination as astronomers, none has a greater influence.</li>
            <li>Earth than it’s own satellite, the moon. When you think about it.</li>
            <li>Attention and fascination as .</li>
          </ul>
          <div class="ui-typography__item">
            <p class="display-3 text--bold">Other Elements</p>
            <span class="display-5">None has a greater influence on </span>
            <span class="display-5 text--highlighted">highlighted text</span>
            <span class="display-5">
              life on planet Earth than it’s own satellite, the
            </span>
            <span class="display-5 text--selected">selected chunk of text</span>
            <span class="display-5">. When you think about it.</span>
          </div>
          <div class="va-row">
            <div class="well" style="width: 600px;">
              <p class="display-3 text--bold">Display-3 Heading</p>
              <span class="display-5">Of all of the celestial bodies that capture our
              attention and fascination as astronomers, none has a greater
              influence on life on planet Earth than it’s own satellite,
              the moon. When you think about it.</span>
            </div>
            <vuestic-blockquote :text="quote" :author="author" class="flex offset--md1">
              <p class="ui-typography__quote">{{ quote }}</p>
              <p class="ui-typography__author">{{ '— '+ author }}</p>
            </vuestic-blockquote>
          </div>
        </div>
      </div>
    </vuestic-widget>
  </div>
</template>

<script>
import VuesticBlockquote
  from '../../../vuestic-theme/vuestic-components/vuestic-blockquote/VuesticBlockquote'

export default {
  name: 'typography',
  components: {
    VuesticBlockquote
  },
  data () {
    return {
      quote: "BQ: Let’s talk about meat fondue recipes and what you need to know" +
        " first. Meat fondue also known as oil fondue is a method of cooking all kinds.",
      author: "Mister Lebowski"
    }
  }
}
</script>

<style lang="scss">
.ui-typography {
  &__item {
    margin-bottom: 2rem;
  }
  &__quote, &__author {
    color: #babfc2;
    margin-bottom: 0.5rem;
  }
}

  .vue-lists ul, ol {
    width: 85%;
  }
}

</style>
