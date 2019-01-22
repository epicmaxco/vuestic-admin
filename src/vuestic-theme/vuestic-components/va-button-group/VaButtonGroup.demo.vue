<template>
  <VbDemo>
    <VbContainer>
      <table class="table table-bordered">
        <tr>
          <th>Description</th>
          <th>Va Button Group</th>
        </tr>
        <tr>
          <td>Button Group Types</td>
          <td>
            <VbContainer title="Default Button Group">
              <va-button-group>
                <va-button> Button 1 </va-button>
                <va-button> Button 2 </va-button>
                <va-button> Button 3 </va-button>
              </va-button-group>
              <va-button-group>
                <va-button> Button 1 </va-button>
                <va-button> Button 2 </va-button>
                <va-button> Button 3 </va-button>
                <va-button> Button 4 </va-button>
              </va-button-group>
            </VbContainer>
            <VbContainer title="Outline Button Group">
              <va-button-group>
                <va-button outline> Button 1 </va-button>
                <va-button outline> Button 2 </va-button>
                <va-button outline> Button 3 </va-button>
              </va-button-group>
              <va-button-group>
                <va-button outline> Button 1 </va-button>
                <va-button outline> Button 2 </va-button>
                <va-button outline> Button 3 </va-button>
                <va-button outline> Button 4 </va-button>
              </va-button-group>
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>Button Group With Icons</td>
          <td>
            <VbContainer title="Default Button Group">
              <va-button-group>
                <va-button icon="glyphicon glyphicon-pencil"/>
                <va-button icon="maki maki-art-gallery"/>
                <va-button icon="glyphicon glyphicon-pencil"/>
              </va-button-group>
            </VbContainer>
            <VbContainer title="Outline Button Group">
              <va-button-group>
                <va-button outline icon="glyphicon glyphicon-pencil"/>
                <va-button outline icon="maki maki-art-gallery"/>
                <va-button outline icon="glyphicon glyphicon-pencil"/>
              </va-button-group>
            </VbContainer>
          </td>
        </tr>
        <tr>
          <td>Mixed Button Groups</td>
          <td>
            <VbContainer>
              <va-button-group>
                <va-button color="gray" icon="glyphicon glyphicon-envelope">
                  First
                </va-button>
                <va-button color="gray" icon="entypo entypo-user"> Second </va-button>
                <va-button color="gray" icon="ion ion-ios-alarm"> Third </va-button>
              </va-button-group>

              <va-button-group>
                <va-button color="danger" icon="maki maki-art-gallery">
                  First
                </va-button>
                <va-button color="danger"> Second </va-button>
                <va-button color="danger"> Third </va-button>
              </va-button-group>

              <va-button-group>
                <va-button color="info">
                  First
                </va-button>
                <va-button color="info" icon-right="glyphicon glyphicon-pencil"> Second </va-button>
                <va-button color="info">
                  Third
                </va-button>
              </va-button-group>

              <va-button-group>
                <va-button color="warning" icon="glyphicon glyphicon-envelope"/>
                <va-button color="warning" icon="entypo entypo-user"/>
                <va-button color="warning" icon-right="ion ion-ios-alarm">
                  Update
                </va-button>
              </va-button-group>
            </VbContainer>
          </td>
        </tr>
      </table>
    </VbContainer>
  </VbDemo>
</template>
