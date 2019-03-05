import { validateSlider } from './validateSlider'

describe('slider', () => {
  it('slider right value', () => {
    expect(validateSlider(90, 1, 0, 100)).toEqual(true)
  })
  it('slider wrong value', () => {
    expect(validateSlider(250, 2, 0, 200)).toEqual(false)
  })
  it('slider wrong pins', () => {
    expect(validateSlider(20, 6, 0, 50)).toEqual(false)
  })
  it('range right page', () => {
    expect(validateSlider([120, 180], 1, 100, 200)).toEqual(true)
  })
  it('range wrong page', () => {
    expect(validateSlider([1200, 1500], 5, 0, 1000)).toEqual(false)
  })
  it('range wrong borders', () => {
    expect(validateSlider([0, 20], 1, 50, 0)).toEqual(false)
  })
})
