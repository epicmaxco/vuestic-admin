export const validateSlider = (value, step, min, max) => {
  if (max < min) {
    throw new Error('The maximum value can not be less than the minimum value.')
    return false
  }

  if (min > max) {
    throw new Error('The minimum value can not be greater than the maximum value.')
    return false
  }

  if ((max - min) % step !== 0) {
    throw new Error('Step is illegal. Slider is nondivisible.')
    return false
  }

  const inRange = (v) => {
    if (v < min) {
      throw new Error(`The value of the slider is ${v}, the minimum value is ${this.min}, the value of this slider can not be less than the minimum value`)
      return false
    } else if (v > max) {
      throw new Error(`The value of the slider is ${v}, the maximum value is ${this.max}, the value of this slider can not be greater than the maximum value`)
      return false
    }
  }

  if (Array.isArray(value)) {
    value.map((v) => inRange(v))
  } else {
    inRange(value)
  }

  return true
}
