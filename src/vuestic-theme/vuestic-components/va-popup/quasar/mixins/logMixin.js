export const logMixin = {
  methods: {
    log (key, ...args) {
      // eslint-disable-next-line no-console
      console.log(key, ...args)
    },
  },
}
