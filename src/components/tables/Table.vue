<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-md-12">
        <widget headerText="Basic Table">
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
              <tr>
                <td>NAME</td>
                <td>EMAIL</td>
                <td>CITY</td>
                <td align="right">SCORE</td>
                <td></td>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Matthew McCormick</td>
                <td>matthew30@mail.ol</td>
                <td>Vancouver</td>
                <td align="right">93</td>
                <td></td>
              </tr>
              <tr>
                <td>Nancy Bo</td>
                <td>nancy@boonweb.com</td>
                <td>Washington</td>
                <td align="right">280</td>
                <td></td>
              </tr>
              <tr>
                <td>Frederiko Lopez</td>
                <td>fr.lopez@webmail.sp</td>
                <td>Barcelona</td>
                <td align="right">16</td>
                <td></td>
              </tr>
              <tr>
                <td>Stanley Hummer</td>
                <td>mr_winner_2999@gmail.cb</td>
                <td>Manchester</td>
                <td align="right">57</td>
                <td></td>
              </tr>
              <tr>
                <td>Lendley Wintz</td>
                <td>9938198146@mailster.io</td>
                <td>Wien</td>
                <td align="right">113</td>
                <td></td>
              </tr>
              <tr>
                <td>Barbara Noz</td>
                <td>barbaranoz@mailster.io</td>
                <td>Brussels</td>
                <td align="right">68</td>
                <td></td>
              </tr>
              <tr>
                <td>Matthew McCormick</td>
                <td>matthew30@mail.ol</td>
                <td>Vancouver</td>
                <td align="right">93</td>
                <td></td>
              </tr>
              <tr>
                <td>Nancy Bo</td>
                <td>nancy@boonweb.com</td>
                <td>Washington</td>
                <td align="right">280</td>
                <td></td>
              </tr>
              </tbody>
            </table>
          </div>
        </widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <widget headerText="Colors, Icons, Labels">
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
              <tr>
                <td></td>
                <td>NAME</td>
                <td>EMAIL</td>
                <td>CITY</td>
                <td align="right">SCORE</td>
                <td align="middle"></td>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td></td>
                <td>Matthew McCormick</td>
                <td>matthew30@mail.ol</td>
                <td>Vancouver</td>
                <td align="right">93</td>
                <td align="middle"></td>
              </tr>
              <tr>
                <td></td>
                <td>Nancy Bo</td>
                <td>nancy@boonweb.com</td>
                <td>Washington</td>
                <td align="right">280</td>
                <td align="middle"></td>
              </tr>
              <tr>
                <td></td>
                <td>Frederiko Lopez</td>
                <td>fr.lopez@webmail.sp</td>
                <td>Barcelona</td>
                <td align="right">16</td>
                <td align="middle"></td>
              </tr>
              <tr class="table-danger">
                <td>
                  <span class="badge badge-pill badge-danger">DANGER</span>
                </td>
                <td>Stanley Hummer</td>
                <td>mr_winner_2999@gmail.cb</td>
                <td>Manchester</td>
                <td align="right">57</td>
                <td align="middle">
                  <img src="../../assets/icons/error.svg" alt="Error" height="20" width="20"/>
                </td>
              </tr>
              <tr class="table-success">
                <td>
                  <span class="badge badge-pill badge-success">SUCCESS</span>
                </td>
                <td>Lendley Wintz</td>
                <td>9938198146@mailster.io</td>
                <td>Wien</td>
                <td align="right">113</td>
                <td align="middle">
                  <img src="../../assets/icons/check.svg" alt="Check" height="20" width="20"/>
                </td>
              </tr>
              <tr class="table-warning">
                <td>
                  <span class="badge badge-pill badge-warning">WARNING</span>
                </td>
                <td>Barbara Noz</td>
                <td>barbaranoz@mailster.io</td>
                <td>Brussels</td>
                <td align="right">68</td>
                <td align="middle"></td>
              </tr>
              <tr>
                <td></td>
                <td>Matthew McCormick</td>
                <td>matthew30@mail.ol</td>
                <td>Vancouver</td>
                <td align="right">93</td>
                <td align="middle"></td>
              </tr>
              <tr class="table-info">
                <td>
                  <span class="badge badge-pill badge-info">INFO</span>
                </td>
                <td>Nancy Bo</td>
                <td>nancy@boonweb.com</td>
                <td>Washington</td>
                <td align="right">280</td>
                <td align="middle"></td>
              </tr>
              </tbody>
            </table>
          </div>
        </widget>
      </div>
    </div>
  </div>
</template>

<script>
  import Widget from '../common/widget/Widget'
  export default {
    components: {Widget},
    names: 'Table'
  }
</script>

<style lang="scss">
  @import "../../sass/_variables.scss";

  .table-striped {
    tbody tr:nth-of-type(even) {
      background-color: $striped-row;
    }
  }

  .table {

    thead tr {
      border-bottom: 2px solid rgb(85, 85, 85);
      color: $vue-green;
    }

    td:first-child {
      padding-left: 1.5rem;
    }

    td:last-child {
      width: 3rem;
    }

    .badge {
      width: 5rem;
    }

    .badge-success {
      background-color: $vue-green;
    }

    img, .badge {
      vertical-align: text-top;
    }

  }

</style>
