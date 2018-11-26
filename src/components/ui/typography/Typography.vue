<template>
  <div class="ui-typography">
    <div class="va-row">
      <div class="md12 flex">
        <vuestic-widget>
          <p class="display-1 text--bold">H1 Heading</p>
          <p class="display-5 ui-typography__item">Of all of the celestial bodies that capture our
            attention and fascination as astronomers, none has a greater influence
            on life on planet Earth than it’s own satellite, the moon. When
            you think about it.</p>
          <p class="display-2 text--bold">H2 Heading</p>
          <p class="display-5 ui-typography__item">None has a greater influence on life on planet
            Earth than it’s own satellite, the moon. When you think about it.</p>
          <p class="display-3 text--bold">H3 Heading</p>
          <p class="display-5 ui-typography__item">Let’s talk about meat fondue recipes and what you
            need to know first. Meat fondue also known as oil fondue is a method
            of cooking all kinds of meats, poultry, and seafood in a pot of
            heated oil.</p>
          <p class="display-4 text--bold">H4 Heading</p>
          <p class="display-5 ui-typography__item">There is something about parenthood that gives us
            a sense of history and a deeply rooted desire to send on into the
            next generation the great things we have discovered about life.</p>
          <p class="display-5 text--bold">
            H5 Heading
          </p>
          <p class="display-5 ui-typography__item">
            There is a moment in the life of any aspiring astronomer that it is
            time to buy that first telescope. It’s exciting to think about
            setting up your own viewing station.
          </p>
          <p class="code-snippet">
            &lt;p&gt class=“code_snippet”> <br/>
            &emsp;This is a wonderful example.<br/>
            &emsp; &lt;a&gt href=“#” onClick=“”>Read more&lt;/a&gt<br/>
            &lt;/p&gt <br/>
          </p>
          <div class="ui-typography__item--links">
            <div>
              <a href="/not-visited" class="link ui-typography__default-link">default link</a>
              <a href="/not-visited" class="link-secondary">secondary link</a>
            </div>
            <br/>
            <a href="#" class="link ui-typography__default-link">default link visited</a>
            <a href="#" class="link-secondary">secondary link visited</a>
          </div>
          <div class="ui-typography__item">
            <div style="width: 500px; border: 3px solid #4ae387;">
              <p class="text--bold">Of all of the celestial bodies that capture our attention and fascination as astronomers, none has a greater influence.</p>
              <p class="text--uppercase">Of all of the celestial bodies that capture our attention and fascination as astronomers, none has a greater influence.</p>
              <p class="text--lowercase">Of all of the celestial bodies that capture our attention and fascination as astronomers, none has a greater influence.</p>
              <p class="text--capitalize">Of all of the celestial bodies that capture our attention and fascination as astronomers, none has a greater influence.</p>
              <p class="text--no-wrap">Of all of the celestial bodies that capture our attention and fascination as astronomers, none has a greater influence.</p>
              <p class="text--truncate">Of all of the celestial bodies that capture our attention and fascination as astronomers, none has a greater influence.</p>
            </div>
          </div>
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
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'typography',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.ui-typography {
  &__default-link {
    margin-right: 5rem;
  }

  &__item {
    margin-top: 1rem;
    margin-bottom: 3rem;
    &--links {
      margin-bottom: 1rem;
    }
  }
}

</style>
