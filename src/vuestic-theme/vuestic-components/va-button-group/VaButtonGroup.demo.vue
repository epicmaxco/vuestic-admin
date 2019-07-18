<template>
  <VbDemo>
    <VbCard title="Full gradient">
      <va-button-group :color="value">
        <va-button>One</va-button>
        <va-button>Two</va-button>
        <va-button>Three</va-button>
      </va-button-group>
      <va-button-group color="danger">
        <va-button>One</va-button>
        <va-button color="dark">Two</va-button>
        <va-button>Three</va-button>
      </va-button-group>
      <va-button-group color="warning">
        <va-button>One</va-button>
        <va-button>Two</va-button>
        <va-button>Three</va-button>
      </va-button-group>
    </VbCard>

    <VbCard>
      <table class="table table-bordered">
        <tr>
          <th>Description</th>
          <th>Va Button Group</th>
        </tr>
        <tr>
          <td>Default Button Group Types</td>
          <td>
            <VbCard title="Default Button Group">
              <va-button-group>
                <va-button> Button 1</va-button>
                <va-button> Button 2</va-button>
                <va-button> Button 3</va-button>
              </va-button-group>
            </VbCard>
            <VbCard title="Outline Button Group">
              <va-button outline> Button 1</va-button>
              <va-button-group>
                <va-button outline> Button 1</va-button>
                <va-button outline> Button 2</va-button>
                <va-button outline> Button 3</va-button>
              </va-button-group>
            </VbCard>
            <VbCard title="Flat Button Group">
              <va-button-group>
                <va-button flat> Button 1</va-button>
                <va-button flat> Button 2</va-button>
                <va-button flat> Button 3</va-button>
              </va-button-group>
            </VbCard>
          </td>
        </tr>
        <tr>
          <td>Default Button Group Sizes</td>
          <td>
            <VbCard title="Default Button Group">
              <va-button-group color="primary">
                <va-button large> Button 1</va-button>
                <va-button large> Button 2</va-button>
                <va-button large> Button 3</va-button>
                <va-button large> Button 4</va-button>
              </va-button-group>
              <va-button-group color="primary">
                <va-button small> Button 1</va-button>
                <va-button small> Button 2</va-button>
                <va-button small> Button 3</va-button>
                <va-button small> Button 4</va-button>
              </va-button-group>
            </VbCard>
            <VbCard title="Outline Button Group">
              <va-button-group>
                <va-button large outline> Button 1</va-button>
                <va-button large outline> Button 2</va-button>
                <va-button large outline> Button 3</va-button>
                <va-button large outline> Button 4</va-button>
              </va-button-group>
              <va-button-group>
                <va-button small outline> Button 1</va-button>
                <va-button small outline> Button 2</va-button>
                <va-button small outline> Button 3</va-button>
                <va-button small outline> Button 4</va-button>
              </va-button-group>
            </VbCard>
            <VbCard title="Flat Button Group">
              <va-button-group>
                <va-button large flat> Button 1</va-button>
                <va-button large flat> Button 2</va-button>
                <va-button large flat> Button 3</va-button>
                <va-button large flat> Button 4</va-button>
              </va-button-group>
              <va-button-group>
                <va-button small flat> Button 1</va-button>
                <va-button small flat> Button 2</va-button>
                <va-button small flat> Button 3</va-button>
                <va-button small flat> Button 4</va-button>
              </va-button-group>
            </VbCard>
          </td>
        </tr>
        <tr>
          <td>Icon Button Group</td>
          <td>
            <VbCard title="Default Button Group">
              <va-button-group color="primary">
                <va-button icon="glyphicon glyphicon-pencil"/>
                <va-button icon="maki maki-art-gallery"/>
                <va-button icon="glyphicon glyphicon-pencil"/>
              </va-button-group>
            </VbCard>
            <VbCard title="Outline Button Group">
              <va-button-group>
                <va-button outline icon="glyphicon glyphicon-pencil"/>
                <va-button outline icon="maki maki-art-gallery"/>
                <va-button outline icon="glyphicon glyphicon-pencil"/>
              </va-button-group>
            </VbCard>
            <VbCard title="Flat Button Group">
              <va-button-group>
                <va-button flat icon="glyphicon glyphicon-pencil"/>
                <va-button flat icon="maki maki-art-gallery"/>
                <va-button flat icon="glyphicon glyphicon-pencil"/>
              </va-button-group>
            </VbCard>
          </td>
        </tr>
        <tr>
          <td>Icon Button Group Sizes</td>
          <td>
            <VbCard title="Default Button Group">
              <va-button-group color="primary">
                <va-button large icon="glyphicon glyphicon-pencil"/>
                <va-button large icon="maki maki-art-gallery"/>
                <va-button large icon="maki maki-art-gallery"/>
                <va-button large icon="glyphicon glyphicon-pencil"/>
              </va-button-group>
              <va-button-group color="success">
                <va-button small icon="glyphicon glyphicon-pencil"/>
                <va-button small icon="maki maki-art-gallery"/>
                <va-button small icon="maki maki-art-gallery"/>
                <va-button small icon="glyphicon glyphicon-pencil"/>
              </va-button-group>
            </VbCard>
            <VbCard title="Outline Button Group">
              <va-button-group>
                <va-button large outline icon="glyphicon glyphicon-pencil"/>
                <va-button large outline icon="maki maki-art-gallery"/>
                <va-button large outline icon="maki maki-art-gallery"/>
                <va-button large outline icon="glyphicon glyphicon-pencil"/>
              </va-button-group>
              <va-button-group>
                <va-button small outline icon="glyphicon glyphicon-pencil"/>
                <va-button small outline icon="maki maki-art-gallery"/>
                <va-button small outline icon="maki maki-art-gallery"/>
                <va-button small outline icon="glyphicon glyphicon-pencil"/>
              </va-button-group>
            </VbCard>
            <VbCard title="Flat Button Group">
              <va-button-group>
                <va-button large flat icon="glyphicon glyphicon-pencil"/>
                <va-button large flat icon="maki maki-art-gallery"/>
                <va-button large flat icon="maki maki-art-gallery"/>
                <va-button large flat icon="glyphicon glyphicon-pencil"/>
              </va-button-group>
              <va-button-group>
                <va-button small flat icon="glyphicon glyphicon-pencil"/>
                <va-button small flat icon="maki maki-art-gallery"/>
                <va-button small flat icon="maki maki-art-gallery"/>
                <va-button small flat icon="glyphicon glyphicon-pencil"/>
              </va-button-group>
            </VbCard>
          </td>
        </tr>
        <tr>
          <td>Mixed Button Groups</td>
          <td>
            <VbCard>
              <va-button-group>
                <va-button flat small color="gray" icon="glyphicon glyphicon-envelope">
                  First
                </va-button>
                <va-button flat small color="gray" icon="entypo entypo-user"> Second</va-button>
                <va-button flat small color="gray" icon="ion ion-ios-alarm"> Third</va-button>
              </va-button-group>

              <va-button-group>
                <va-button outline color="danger" icon="maki maki-art-gallery"> First</va-button>
                <va-button outline color="danger"> Second</va-button>
                <va-button outline color="danger"> Third</va-button>
              </va-button-group>

              <va-button-group>
                <va-button flat color="warning" icon="glyphicon glyphicon-envelope"/>
                <va-button flat color="warning" icon="entypo entypo-user"/>
                <va-button flat color="warning" icon-right="ion ion-ios-alarm"> Update</va-button>
              </va-button-group>

              <va-button-group color="dark">
                <va-button color="dark"> One</va-button>
                <va-button color="dark"> Two</va-button>
                <va-button color="dark"> Three</va-button>
                <va-button color="dark" icon="ion-ios-arrow-down arrow-down"/>
              </va-button-group>

              <va-button-group>
                <va-button outline large color="info"> First</va-button>
                <va-button outline large color="info" icon-right="glyphicon glyphicon-pencil"> Second</va-button>
                <va-button outline large color="info"> Third</va-button>
              </va-button-group>
            </VbCard>
          </td>
        </tr>
      </table>
    </VbCard>
  </VbDemo>
</template>

<script>

import VaButtonGroup from './VaButtonGroup'
import VaButton from '../va-button/VaButton'

export default {
  data () {
    return {
      value: 'success',
    }
  },
  components: {
    VaButton,
    VaButtonGroup,
  },
}
</script>
