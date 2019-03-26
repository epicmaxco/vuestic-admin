<template>
  <VbDemo>
    <VbContainer style="max-width: 800px;">
      <table class="table table-bordered">
        <tr>
          <th>Description</th>
          <th>VaCard</th>
        </tr>
        <tr>
          <td>Default</td>
          <td>
            <VbContainer>
              <va-card
                title="Default Card"
              >
                The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills. Various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins and habitat destruction. Grévy's zebra and the mountain zebra are endangered. While plains zebras are much more plentiful, one subspecies, the quagga, became extinct in the late 19th century – though there is currently a plan, called the Quagga Project
              </va-card>
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>Title only</td>
          <td>
            <VbContainer>
              <va-card
                title="Title Only Card"
              />
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>Default with controls</td>
          <td>
            <VbContainer>
              <va-card
                title="Default Card with controls"
              >
                <template slot="actions">
                  <va-button icon="fa fa-refresh" />
                  <va-button icon="fa fa-gear" />
                </template>
                The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills. Various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins and habitat destruction. Grévy's zebra and the mountain zebra are endangered. While plains zebras are much more plentiful, one subspecies, the quagga, became extinct in the late 19th century – though there is currently a plan, called the Quagga Project
              </va-card>
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>Custom header</td>
          <td>
            <VbContainer>
              <va-card
                title="Custom header"
              >
                <template slot="header">
                  <va-icon icon="fa fa-cogs mr-3" color="success" />
                  <h5 class="mt-0 mb-0">Custom Header</h5>
                </template>
                The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills. Various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins and habitat destruction. Grévy's zebra and the mountain zebra are endangered. While plains zebras are much more plentiful, one subspecies, the quagga, became extinct in the late 19th century – though there is currently a plan, called the Quagga Project
              </va-card>
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>Long text in header</td>
          <td>
            <VbContainer>
              <va-card
                title="Default Card with long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long text"
              >
                <template slot="actions">
                  <va-button icon="fa fa-refresh" />
                  <va-button icon="fa fa-gear" />
                </template>
                The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills. Various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins and habitat destruction. Grévy's zebra and the mountain zebra are endangered. While plains zebras are much more plentiful, one subspecies, the quagga, became extinct in the late 19th century – though there is currently a plan, called the Quagga Project
              </va-card>
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>Without header</td>
          <td>
            <VbContainer>
              <va-card>
                The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills. Various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins and habitat destruction. Grévy's zebra and the mountain zebra are endangered. While plains zebras are much more plentiful, one subspecies, the quagga, became extinct in the late 19th century – though there is currently a plan, called the Quagga Project
              </va-card>
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>With image<br> (default image ratio 16:9)</td>
          <td>
            <VbContainer>
              <va-card
                image="https://picsum.photos/300/200/?image=1043"
                title="Card with image"
              >
                The unique stripes of zebras make them one of the animals most familiar to people.
              </va-card>
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>With image and overlay</td>
          <td>
            <VbContainer>
              <va-card
                overlay
                image="https://picsum.photos/300/200/?image=1043"
                title="Card with image and overlay"
              >
                The unique stripes of zebras make them one of the animals most familiar to people.
              </va-card>
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>With title on image</td>
          <td>
            <VbContainer>
              <va-card
                overlay
                titleOnImage
                image="https://picsum.photos/300/200/?image=1043"
                title="Card with title on image"
              >
                The unique stripes of zebras make them one of the animals most familiar to people.
              </va-card>
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>Image only and custom title</td>
          <td>
            <VbContainer>
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
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>Background</td>
          <td>
            <VbContainer>
              <va-card color="danger">
                The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills.
              </va-card>

              <va-card color="success">
                The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills.
              </va-card>
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>Stripes</td>
          <td>
            <VbContainer>
              <va-card stripe="danger">
                The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills.
              </va-card>

              <va-card stripe="success">
                The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills.
              </va-card>
            </VbContainer>
          </td>
        </tr>
      </table>
    </VbContainer>
  </VbDemo>
</template>

<script>
import VaCard from './VaCard'

export default {
  components: {
    VaCard,
  }
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
