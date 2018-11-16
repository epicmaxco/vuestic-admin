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
          </div>
          <div class="vue-misc">
            <h2>Misc</h2>
            <div class="va-row">
              <div class="flex md6">
                <h3>Address</h3>
                <address>
                  <strong>SJØNNA</strong><br>
                  Nezalezhnasti Ave, 13 - 28A<br>
                  Minsk, Belarus, 220141<br>
                  +375 29 319-53-98<br>
                  <br>
                  <b>Vasili Savitski</b><br>
                  <a href="mailto">hello@sjonja.by</a>

                </address>
              </div>
              <div class="flex md6">
                <h3>Well</h3>
                <div class="well">
                  Zebras have excellent eyesight. It is believed that they can
                  see in color. Like most ungulates, the zebra's eyes are on the
                  sides of its head, giving it a wide field of view.
                </div>
              </div>
            </div>
          </div>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'typography',
}
</script>

<style lang="scss">
.ui-typography {
  .typo-articles {
    margin-bottom: 6.25rem;
    width: 90%;
  }

  .widget-body {
    padding: 3.75rem 4.7rem 0 2.2rem !important;
  }

  .vue-lists ul, ol {
    width: 85%;
  }
}

</style>
