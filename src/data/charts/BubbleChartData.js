import store from 'vuex-store'
import utils from 'services/utils'

let palette = store.getters.palette

export default {
  datasets: [
    {
      label: 'USA',
      backgroundColor: utils.hex2rgb(palette.danger, 0.9).css,
      borderColor: palette.transparent,
      data: [
        {
          x: 23,
          y: 25,
          r: 15
        },
        {
          x: 40,
          y: 10,
          r: 10
        },
        {
          x: 30,
          y: 22,
          r: 30
        },
        {
          x: 7,
          y: 43,
          r: 40
        },
        {
          x: 23,
          y: 27,
          r: 120
        },
        {
          x: 20,
          y: 15,
          r: 11
        },
        {
          x: 7,
          y: 10,
          r: 35
        },
        {
          x: 10,
          y: 20,
          r: 40
        }
      ]
    },
    {
      label: 'Russia',
      backgroundColor: utils.hex2rgb(palette.primary, 0.9).css,
      borderColor: palette.transparent,
      data: [
        {
          x: 0,
          y: 30,
          r: 15
        },
        {
          x: 20,
          y: 20,
          r: 20
        },
        {
          x: 15,
          y: 15,
          r: 50
        },
        {
          x: 31,
          y: 46,
          r: 30
        },
        {
          x: 20,
          y: 14,
          r: 25
        },
        {
          x: 34,
          y: 17,
          r: 30
        },
        {
          x: 44,
          y: 44,
          r: 10
        },
        {
          x: 39,
          y: 25,
          r: 35
        }
      ]
    },
    {
      label: 'Canada',
      backgroundColor: utils.hex2rgb(palette.warning, 0.9).css,
      borderColor: palette.transparent,
      data: [
        {
          x: 10,
          y: 30,
          r: 45
        },
        {
          x: 10,
          y: 50,
          r: 20
        },
        {
          x: 5,
          y: 5,
          r: 30
        },
        {
          x: 40,
          y: 30,
          r: 20
        },
        {
          x: 33,
          y: 15,
          r: 18
        },
        {
          x: 40,
          y: 20,
          r: 40
        },
        {
          x: 33,
          y: 33,
          r: 40
        }
      ]
    },
    {
      label: 'Belarus',
      backgroundColor: utils.hex2rgb(palette.info, 0.9).css,
      borderColor: palette.transparent,
      data: [
        {
          x: 35,
          y: 30,
          r: 45
        },
        {
          x: 25,
          y: 40,
          r: 35
        },
        {
          x: 5,
          y: 5,
          r: 30
        },
        {
          x: 5,
          y: 20,
          r: 40
        },
        {
          x: 10,
          y: 40,
          r: 15
        },
        {
          x: 3,
          y: 10,
          r: 10
        },
        {
          x: 15,
          y: 40,
          r: 40
        },
        {
          x: 7,
          y: 15,
          r: 10
        }
      ]
    },
    {
      label: 'Ukraine',
      backgroundColor: utils.hex2rgb(palette.success, 0.9).css,
      borderColor: palette.transparent,
      data: [
        {
          x: 25,
          y: 10,
          r: 40
        },
        {
          x: 17,
          y: 40,
          r: 40
        },
        {
          x: 35,
          y: 10,
          r: 20
        },
        {
          x: 3,
          y: 40,
          r: 10
        },
        {
          x: 40,
          y: 40,
          r: 40
        },
        {
          x: 20,
          y: 10,
          r: 10
        },
        {
          x: 10,
          y: 27,
          r: 35
        },
        {
          x: 7,
          y: 26,
          r: 40
        }
      ]
    }
  ]
}
