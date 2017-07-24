import store from 'vuex-store'

let palette = store.getters.palette

export default {
  datasets: [
    {
      label: 'USA',
      backgroundColor: palette.danger,
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
        }
      ]
    },
    {
      label: 'Russia',
      backgroundColor: palette.primary,
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
        }
      ]
    },
    {
      label: 'Canada',
      backgroundColor: palette.warning,
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
        }
      ]
    },
    {
      label: 'Belarus',
      backgroundColor: palette.info,
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
        }
      ]
    },
    {
      label: 'Ukraine',
      backgroundColor: palette.success,
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
        }
      ]
    }
  ]
}
