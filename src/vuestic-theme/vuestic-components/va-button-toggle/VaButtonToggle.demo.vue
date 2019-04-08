<template>
  <VbDemo>
    <VbCard>
      <table class="table table-bordered">
        <tr>
          <th>Description</th>
          <th>Va Button Toggle</th>
        </tr>
        <tr>
          <td>Button Toggle Types</td>
          <td>
            <va-button-toggle v-model="model" :options="options"/>
            <va-button-toggle outline v-model="model" :options="options"/>
            <va-button-toggle flat v-model="model" :options="options"/>
          </td>
        </tr>
        <tr>
          <td>Button Toggle Sizes</td>
          <td>
            <va-button-toggle v-model="model" :options="options"/>
            <va-button-toggle large v-model="model" :options="options"/>
            <va-button-toggle small v-model="model" :options="options"/>
          </td>
        </tr>
        <tr>
          <td>Default Button Toggle Colors</td>
          <td>
            <div>
              <va-button-toggle v-model="model" :options="options"/>
              <va-button-toggle color="info" v-model="model" :options="options"/>
              <va-button-toggle color="danger" v-model="model" :options="options"/>
              <va-button-toggle color="warning" v-model="model" :options="options"/>
              <va-button-toggle color="gray" v-model="model" :options="options"/>
              <va-button-toggle color="dark" v-model="model" :options="options"/>
            </div>
          </td>
        </tr>
        <tr>
          <td>Outline Button Toggle Colors</td>
          <td>
            <div>
              <va-button-toggle outline v-model="model" :options="options"/>
              <va-button-toggle outline color="info" v-model="model" :options="options"/>
              <va-button-toggle outline color="danger" v-model="model" :options="options"/>
              <va-button-toggle outline color="warning" v-model="model" :options="options"/>
              <va-button-toggle outline color="gray" v-model="model" :options="options"/>
              <va-button-toggle outline color="dark" v-model="model" :options="options"/>
            </div>
          </td>
        </tr>
        <tr>
          <td>Flat Button Toggle Colors</td>
          <td>
            <div>
              <va-button-toggle flat v-model="model" :options="options"/>
              <va-button-toggle flat color="info" v-model="model" :options="options"/>
              <va-button-toggle flat color="danger" v-model="model" :options="options"/>
              <va-button-toggle flat color="warning" v-model="model" :options="options"/>
              <va-button-toggle flat color="gray" v-model="model" :options="options"/>
              <va-button-toggle flat color="dark" v-model="model" :options="options"/>
            </div>
          </td>
        </tr>
        <tr>
          <td>Disabled Button Toggle</td>
          <td>
            <va-button-toggle disabled v-model="model" :options="options"/>
            <va-button-toggle disabled outline v-model="model" :options="options"/>
            <va-button-toggle disabled flat v-model="model" :options="options"/>
          </td>
        </tr>
        <tr>
          <td>Button Toggle With Toggle Colors</td>
          <td>
            <div>
              <va-button-toggle toggle-color="warning" v-model="model" :options="options"/>
              <va-button-toggle toggle-color="danger" color="info" v-model="model" :options="options"/>
              <va-button-toggle outline toggle-color="gray" v-model="model" :options="options"/>
              <va-button-toggle outline toggle-color="success" color="info" v-model="model" :options="options"/>
              <va-button-toggle flat toggle-color="info" v-model="model" :options="options"/>
              <va-button-toggle flat toggle-color="dark" color="info" v-model="model" :options="options"/>
            </div>
          </td>
        </tr>
      </table>
    </VbCard>
  </VbDemo>
</template>

<script>
import VaButtonToggle from './VaButtonToggle'

export default {
  components: {
    VaButtonToggle,
  },
  data () {
    return {
      options: [
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'two' },
        { label: 'Three', value: 'three' },
      ],
      model: 'two',
    }
  },
}
</script>
