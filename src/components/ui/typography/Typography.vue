<template>
  <div class="ui-typography">
    <vuestic-widget>
      <div class="va-row column">
        <div class="md12 flex">
          <div class="ui-typography__item">
            <p class="display-1">display-1 Heading</p>
            <p>Of all of the celestial bodies that capture our
              attention and fascination as astronomers, none has a greater influence
              on life on planet Earth than it’s own satellite, the moon. When
              you think about it.</p>
          </div>
          <div class="ui-typography__item">
            <p class="display-2">display-2 Heading</p>
            <p>None has a greater influence on life on planet
              Earth than it’s own satellite, the moon. When you think about it.</p>
          </div>
          <div class="ui-typography__item">
            <p class="display-3">display-3 Heading</p>
            <p>Let’s talk about meat fondue recipes and what you
              need to know first. Meat fondue also known as oil fondue is a method
              of cooking all kinds of meats, poultry, and seafood in a pot of
              heated oil.</p>
          </div>
          <div class="ui-typography__item">
            <p class="display-4">display-4 Heading</p>
            <p>There is something about parenthood that gives us
              a sense of history and a deeply rooted desire to send on into the
              next generation the great things we have discovered about life.</p>
          </div>
          <div class="ui-typography__item">
            <p class="display-5">display-5 Heading</p>
            <p>
              There is a moment in the life of any aspiring astronomer that it is
              time to buy that first telescope. It’s exciting to think about
              setting up your own viewing station.
            </p>
          </div>
          <div class="ui-typography__item">
            <p class="title">Widget title, form section title, input label,
              inline label, table heading</p>
          </div>
          <div class="ui-typography__item">
            <p>
              Of all of the celestial bodies that capture our attention and fascination
              as astronomers, none has a greater influence on life on planet Earth
              than it’s own satellite, the moon. When you think about it.
            </p>
          </div>
          <div class="ui-typography__item">
            <div class="text--secondary">
              Of all of the celestial bodies that capture our attention and fascination
              as astronomers, none has a greater influence on life on planet Earth
              than it’s own satellite, the moon. When you think about it.
            </div>
          </div>
          <div class="ui-typography__item">
            <pre class="code-snippet">
              &lt;p&gt class=“code_snippet”>
                 This is a wonderful example.
                 &lt;a&gt href=“#” onClick=“”>Read more&lt;/a&gt
              &lt;/p&gt
            </pre>
            <p>
              Of all of the celestial bodies that capture our attention and fascination
              as astronomers,
              <span class="text--code">currentColor</span> none has a greater influence on life on planet
              Earth than it’s own satellite, the moon.
            </p>
          </div>
          <div class="ui-typography__item">
            <div>
              <a href="#" class="link">default link <br/></a>
              <a href="#" class="link-secondary">secondary link</a>
            </div>
          </div>
          <div class="ui-typography__item">
            <p class="display-3">Text transforms</p>
            <ul class="vue-unordered">
              <li>
                <span class="text--code">.text--uppercase</span> - uppercase<span class="text--uppercase">text</span>
              </li>
              <li>
                <span class="text--code">.text--lowercase</span> - lowercase
                <span class="text--lowercase">text</span>
              </li>
              <li>
                <span class="text--code">.text--capitalize</span> - capitalize
                <span class="text--capitalize">text</span>
              </li>
            </ul>
          </div>
          <div class="ui-typography__item">
            <p class="display-3">Text wrapping</p>
            <ul class="vue-unordered">
              <li>
                <span class="text--highlighted">.text--no-wrap </span> - Sets whitespace to no-wrap
              </li>
              <li>
                <span class="text--highlighted">.text--truncate</span> - Truncates overflowed text
              </li>
            </ul>
          </div>
          <p class="display-3">Lists</p>
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
            <p class="display-3">Other Elements</p>
            <p>None has a greater influence on
              <span class="text--highlighted">highlighted text</span>
              life on planet Earth than it’s own satellite, the selected chunk
              of text When you think about it.
            </p>
          </div>
          <div class="ui-typography__item">
            <div class="well" style="width: 600px;">
              <p class="display-3">Display-3 Heading</p>
              <span class="display-5">Of all of the celestial bodies that capture our
              attention and fascination as astronomers, none has a greater
              influence on life on planet Earth than it’s own satellite,
              the moon. When you think about it.</span>
            </div>
          </div>
          <div class="ui-typography__item">
            <vuestic-blockquote>
              <p>
                BQ: Let’s talk about meat fondue recipes and what you need to know
                first. Meat fondue also known as oil fondue is a method of cooking
                all kinds.
              </p>
              <p> — Mister Lebowski</p>
            </vuestic-blockquote>
          </div>
        </div>
      </div>
    </vuestic-widget>
  </div>
</template>

<script>

export default {
  name: 'typography'
}
</script>

<style lang="scss">
.ui-typography {
  &__item {
    margin-bottom: 2rem;
  }
}
</style>
