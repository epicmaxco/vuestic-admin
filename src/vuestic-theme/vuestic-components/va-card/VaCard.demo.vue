<template>
  <VbDemo>
    <VbCard style="max-width: 800px;">
      <table class="table table-bordered">
        <tr>
          <th>Description</th>
          <th>VaCard</th>
        </tr>
        <tr>
          <td>Default</td>
          <td>
            <VbCard>
              <va-card
                title="Default Card"
              >
                The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills. Various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins and habitat destruction. Grévy's zebra and the mountain zebra are endangered. While plains zebras are much more plentiful, one subspecies, the quagga, became extinct in the late 19th century – though there is currently a plan, called the Quagga Project
              </va-card>
            </VbCard>
          </td>
        </tr>
        <tr>
          <td>Title only</td>
          <td>
            <VbCard>
              <va-card
                title="Title Only Card"
              />
            </VbCard>
          </td>
        </tr>
        <tr>
          <td>Default with controls</td>
          <td>
            <VbCard>
              <va-card
                title="Default Card with controls"
              >
                <template slot="actions">
                  <va-button icon="fa fa-refresh"/>
                  <va-button icon="fa fa-gear"/>
                </template>
                The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills. Various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins and habitat destruction. Grévy's zebra and the mountain zebra are endangered. While plains zebras are much more plentiful, one subspecies, the quagga, became extinct in the late 19th century – though there is currently a plan, called the Quagga Project
              </va-card>
            </VbCard>
          </td>
        </tr>
        <tr>
          <td>Custom header</td>
          <td>
            <VbCard>
              <va-card
                title="Custom header"
              >
                <template slot="header">
                  <va-icon name="fa fa-cogs mr-3" color="success"/>
                  <h5 class="mt-0 mb-0">Custom Header</h5>
                </template>
                The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills. Various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins and habitat destruction. Grévy's zebra and the mountain zebra are endangered. While plains zebras are much more plentiful, one subspecies, the quagga, became extinct in the late 19th century – though there is currently a plan, called the Quagga Project
              </va-card>
            </VbCard>
          </td>
        </tr>
        <tr>
          <td>Long text in header</td>
          <td>
            <VbCard>
              <va-card
                title="Default Card with long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long text"
              >
                <template slot="actions">
                  <va-button icon="fa fa-refresh"/>
                  <va-button icon="fa fa-gear"/>
                </template>
                The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills. Various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins and habitat destruction. Grévy's zebra and the mountain zebra are endangered. While plains zebras are much more plentiful, one subspecies, the quagga, became extinct in the late 19th century – though there is currently a plan, called the Quagga Project
              </va-card>
            </VbCard>
          </td>
        </tr>
        <tr>
          <td>Without header</td>
          <td>
            <VbCard>
              <va-card>
                The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills. Various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins and habitat destruction. Grévy's zebra and the mountain zebra are endangered. While plains zebras are much more plentiful, one subspecies, the quagga, became extinct in the late 19th century – though there is currently a plan, called the Quagga Project
              </va-card>
            </VbCard>
          </td>
        </tr>
        <tr>
          <td>With image<br> (default image ratio 16:9)</td>
          <td>
            <VbCard>
              <va-card
                image="https://picsum.photos/300/200/?image=1043"
                title="Card with image"
              >
                The unique stripes of zebras make them one of the animals most familiar to people.
              </va-card>
            </VbCard>
          </td>
        </tr>
        <tr>
          <td>With image and overlay</td>
          <td>
            <VbCard>
              <va-card
                overlay
                image="https://picsum.photos/300/200/?image=1043"
                title="Card with image and overlay"
              >
                The unique stripes of zebras make them one of the animals most familiar to people.
              </va-card>
            </VbCard>
          </td>
        </tr>
        <tr>
          <td>With title on image</td>
          <td>
            <VbCard>
              <va-card
                overlay
                titleOnImage
                image="https://picsum.photos/300/200/?image=1043"
                title="Card with title on image"
              >
                The unique stripes of zebras make them one of the animals most familiar to people.
              </va-card>
            </VbCard>
          </td>
        </tr>
        <tr>
          <td>Image only and custom title</td>
          <td>
            <VbCard>
              <va-card
                overlay
                titleOnImage
                image="https://picsum.photos/300/200/?image=1043"
              >
                <template slot="header">
                  <va-button>
                    Read More
                  </va-button>
                </template>
              </va-card>
            </VbCard>
          </td>
        </tr>
        <tr>
          <td>Background</td>
          <td>
            <VbCard>
              <va-card color="danger">
                The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills.
              </va-card>

              <va-card color="success">
                The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills.
              </va-card>
            </VbCard>
          </td>
        </tr>
        <tr>
          <td>Stripes</td>
          <td>
            <VbCard>
              <va-card stripe="danger">
                The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills.
              </va-card>

              <va-card stripe="success">
                The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills.
              </va-card>
            </VbCard>
          </td>
        </tr>
        <tr>
          <td>Without margin</td>
          <td>
            <VbCard>
              <va-card class="mb-0" stripe="info" color="success">
                The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills.
              </va-card>
            </VbCard>
          </td>
        </tr>
      </table>
    </VbCard>
  </VbDemo>
</template>

<script>
import VaCard from './VaCard'
import VaButton from '../va-button/VaButton'
import VaIcon from '../va-icon/VaIcon'

export default {
  components: {
    VaCard,
    VaButton,
    VaIcon,
  },
}
</script>

<style lang="scss" scoped>
tr {
  td:first-child {
    min-width: 200px;
  }

  td > div {
    background-color: #eee;
  }
}
</style>
