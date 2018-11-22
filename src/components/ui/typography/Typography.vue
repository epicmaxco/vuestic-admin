<template>
  <div class="ui-typography">
    <div class="va-row">
      <div class="md12 flex">
        <vuestic-widget>
          <div class="typo-headers">
            <h1>Very Important Information H1</h1>
            <h2>Sections & Modal Names H2</h2>
            <h3>Articles & Block Headings H3</h3>
            <h4>Random Tiny Heading H4</h4>
          </div>
          <div class="typo-articles">
            <p>
              The unique stripes of zebras make them one of the animals most
              familiar to people. They occur in a variety of habitats, such as
              grasslands, savannas,
              <a href="#">woodlands</a>, thorny scrublands, <a href="#">mountains</a>,
              and coastal hills. However, various anthropogenic factors have had
              a severe impact on zebra populations, in particular hunting for
              skins and habitat destruction. Grévy's zebra and the mountain
              <span
                class="vue-highlighted-text">highlighted text</span> zebra are
              endangered.</p>
            <blockquote class="blockquote">
              <p>
                Blockquotes. However, various anthropogenic factors have had a
                severe impact on zebra populations, in particular hunting for
                skins. </p>
              <footer class="blockquote-footer">Jefferey Lebowski</footer>
            </blockquote>
            <p>
              lthough zebra species may have overlapping ranges, they do not
              interbreed. In captivity, plains zebras have been crossed with
              mountain zebras. The hybrid foals <span
              class="vue-selected-text">selected text</span> lacked a dewlap and
              resembled their
            </p>
          </div>
          <div class="vue-lists">
            <h2>Lists</h2>
            <div class="va-row">
              <div class="flex md6">
                <h3>Unordered</h3>
                <ul class="vue-unordered">
                  <li>
                    A wide variety of hypotheses have been proposed to account
                    for the evolution of the striking stripes of zebras.
                  </li>
                  <li>The more traditional of these (1 and 2, below) relate to
                    camouflage.
                  </li>
                  <li>The vertical striping may help the zebra hide in the grass
                    by disrupting its outline.
                  </li>
                  <li>
                    In addition, even at moderate distances, the striking
                    striping merges to an apparent grey.
                    <ul class="vue-list-inner">
                      <li>However, the camouflage has been contested with
                        arguments that most of a zebra's predator.
                      </li>
                      <li>Such as lions and hyenas cannot see well at a
                        distance.
                      </li>
                      <li>More likely to have smelled or heard a zebra.</li>
                    </ul>
                  </li>
                  <li>Before seeing it from a distance, especially at night.
                  </li>
                </ul>
              </div>
              <div class="flex md6 text-left">
                <div>
                  <h3>Ordered</h3>
                  <ol class="vue-ordered">
                    <li>
                      A wide variety of hypotheses have been proposed to account
                      for the evolution of the striking stripes of zebras.
                    </li>
                    <li>The more traditional of these (1 and 2, below) relate to
                      camouflage.
                    </li>
                    <li>The vertical striping may help the zebra hide in the
                      grass by disrupting its outline.
                    </li>
                    <li>
                      In addition, even at moderate distances, the striking
                      striping merges to an apparent grey.
                      <ul class="vue-list-inner">
                        <li>However, the camouflage has been contested with
                          arguments that most of a zebra's predator.
                        </li>
                        <li>Such as lions and hyenas cannot see well at a
                          distance.
                        </li>
                        <li>More likely to have smelled or heard a zebra.</li>
                      </ul>
                    </li>
                    <li>Before seeing it from a distance, especially at night.
                    </li>
                  </ol>
                </div>
              </div>
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

  .vue-lists ul, ol {
    width: 85%;
  }
}

</style>
