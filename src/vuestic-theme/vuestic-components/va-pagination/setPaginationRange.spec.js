import { setPaginationRange } from './setPaginationRange'

describe('pagination', () => {
  it('setPaginationRange', () => {
    expect(setPaginationRange(1, 4, 20, [])).toEqual([1, 2, 3, 4])
    expect(setPaginationRange(6, 3, 10, [4, 5, 6])).toEqual([5, 6, 7])
  })
})
