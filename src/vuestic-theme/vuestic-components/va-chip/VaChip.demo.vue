<template>
  <VbDemo>
    <VbContainer>
      <table class="table table-bordered">
        <tr>
          <th>Description</th>
          <th>Vuestic Chip</th>
        </tr>
        <tr>
          <td>Types</td>
          <td>
            <va-chip>
              Default Chip
            </va-chip>
            <va-chip outline>
              Outline Chip
            </va-chip>
          </td>
        </tr>
        <tr>
          <td>Sizes</td>
          <td>
            <va-chip>
              Default chip
            </va-chip>
            <va-chip small>
              Small chip
            </va-chip>
          </td>
        </tr>
        <tr>
          <td>Primary chip Colors</td>
          <td>
            <div>
              <va-chip>
                Success chip
              </va-chip>
              <va-chip color="info">
                Info chip
              </va-chip>
              <va-chip color="danger">
                Danger chip
              </va-chip>
              <va-chip color="warning">
                Warning chip
              </va-chip>
              <va-chip color="gray">
                Gray chip
              </va-chip>
              <va-chip color="dark">
                Dark chip
              </va-chip>
            </div>
          </td>
        </tr>
        <tr>
          <td>Outline chip Colors</td>
          <td>
            <div>
              <va-chip outline>
                Success chip
              </va-chip>
              <va-chip outline color="info">
                Info chip
              </va-chip>
              <va-chip outline color="danger">
                Danger chip
              </va-chip>
              <va-chip outline color="warning">
                Warning chip
              </va-chip>
              <va-chip outline color="gray">
                Gray chip
              </va-chip>
              <va-chip outline color="dark">
                Dark chip
              </va-chip>
            </div>
          </td>
        </tr>
        <tr>
          <td>Primary chips With icons</td>
          <td>
            <va-chip
              icon="brandico brandico-facebook"
            >
              Plus chip
            </va-chip>
            <va-chip
              icon-right="iconicstroke iconicstroke-info"
            >
              Dropdown chip
            </va-chip>
            <va-chip
              icon="brandico brandico-facebook"
              icon-right="iconicstroke iconicstroke-info"
            >
              Mixed chip
            </va-chip>
          </td>
        </tr>
        <tr>
          <td>Outline chips With icons</td>
          <td>
            <va-chip
              outline
              icon="brandico brandico-facebook"
            >
              Plus chip
            </va-chip>
            <va-chip
              outline
              icon-right="iconicstroke iconicstroke-info"
            >
              Dropdown chip
            </va-chip>
            <va-chip
              outline
              icon="brandico brandico-facebook"
              icon-right="iconicstroke iconicstroke-info"
            >
              Mixed chip
            </va-chip>
          </td>
        </tr>
        <tr>
          <td>Badges</td>
          <td>
            <va-badge>
              Paid
            </va-badge>
            <va-badge color="info">
              Info
            </va-badge>
            <va-badge color="danger">
              Danger
            </va-badge>
            <va-badge color="warning">
              On Hold
            </va-badge>
            <va-badge color="gray">
              Processing
            </va-badge>
            <va-badge color="dark">
              New Label
            </va-badge>
          </td>
        </tr>
        <tr>
          <td>Tags</td>
          <td>
            <va-tag>
              Chip
            </va-tag>
            <va-tag closeable>
              Chip
            </va-tag>
          </td>
        </tr>
      </table>
    </VbContainer>
  </VbDemo>
</template>
