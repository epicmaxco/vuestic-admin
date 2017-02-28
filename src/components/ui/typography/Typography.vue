<template>
  <div class="ui-typography">
    <div class="row">
      <widget class="col-md-12">
        <div class="typo-headers">
          <h1>Very Important Information H1</h1>
          <h2>Sections & Modal Names H2</h2>
          <h3>Articles & Block Headings H3</h3>
          <h4>Random Tiny Heading H4</h4>
        </div>
        <div>
          <p>The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills. However, various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins and habitat destruction. Grévy's zebra and the mountain highlighted text zebra are endangered.</p>
          <blockquote class="blockquote">
            <p>Blockquotes. However, various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins. </p>
            <footer class="blockquote-footer">Jefferey Lebowski</footer>
          </blockquote>
          <p>lthough zebra species may have overlapping ranges, they do not interbreed. In captivity, plains zebras have been crossed with mountain zebras. The hybrid foals selected text lacked a dewlap and resembled the plains zebra apart from their larger ears and their hindquarters pattern.</p>
        </div>
        <div>
          <h2>Lists</h2>
          <div class="row">
            <div class="col-md-6">
              <h3>Unodrered</h3>
              <ul class="vue-unordered">
                <li>A wide variety of hypotheses have been proposed to account for the evolution of the striking stripes of zebras.</li>
                <li>The more traditional of these (1 and 2, below) relate to camouflage.</li>
                <li>The vertical striping may help the zebra hide in the grass by disrupting its outline.</li>
                <li>
                  In addition, even at moderate distances, the striking striping merges to an apparent grey.
                  <ul>
                    <li>However, the camouflage has been contested with arguments that most of a zebra's predator.</li>
                    <li>Such as lions and hyenas cannot see well at a distance.</li>
                    <li>More likely to have smelled or heard a zebra.</li>
                  </ul>
                </li>
                <li>Before seeing it from a distance, especially at night.</li>
              </ul>
            </div>
            <div class="col-md-6">
              <h3>Ordered</h3>
              <ol class="vue-ordered">
                <li>A wide variety of hypotheses have been proposed to account for the evolution of the striking stripes of zebras.</li>
                <li>The more traditional of these (1 and 2, below) relate to camouflage.</li>
                <li>The vertical striping may help the zebra hide in the grass by disrupting its outline.</li>
                <li>
                  In addition, even at moderate distances, the striking striping merges to an apparent grey.
                  <ul>
                    <li>However, the camouflage has been contested with arguments that most of a zebra's predator.
                    </li>
                    <li>Such as lions and hyenas cannot see well at a distance.</li>
                    <li>More likely to have smelled or heard a zebra.</li>
                  </ul>
                </li>
                <li>Before seeing it from a distance, especially at night.</li>
              </ol>
            </div>
          </div>
        </div>
        <div>
          <h2>Misc</h2>
          <div class="row">
            <div class="col-md-6">
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
            <div class="col-md-6">
              <h3>Well</h3>
              <div class="well">
                Zebras have excellent eyesight. It is believed that they can see in color. Like most ungulates, the zebra's eyes are on the sides of its head, giving it a wide field of view.
              </div>
            </div>
          </div>
        </div>
      </widget>
    </div>
  </div>
</template>

<script>
  import Widget from 'components/common/widget/Widget'

  export default {
    name: 'typography',
    components: {
      Widget
    }
  }
</script>

<style lang="scss">

</style>
