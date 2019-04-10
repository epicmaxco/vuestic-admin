export const validateSlider = (value, step, min, max) => {
  if (max < min) {
    throw new Error('The maximum value can not be less than the minimum value.')
  }

  if (min > max) {
    throw new Error('The minimum value can not be greater than the maximum value.')
  }

  if ((max - min) % step !== 0) {
    throw new Error('Step is illegal. Slider is nondivisible.')
  }

  const inRange = (v) => {
    if (v < min) {
      throw new Error(`The value of the slider is ${v}, the minimum value is ${min}, the value of this slider can not be less than the minimum value`)
    } else if (v > max) {
      throw new Error(`The value of the slider is ${v}, the maximum value is ${max}, the value of this slider can not be greater than the maximum value`)
    }
  }

  if (Array.isArray(value)) {
    value.map((v) => inRange(v))
  } else {
    inRange(value)
  }

  return true
}
