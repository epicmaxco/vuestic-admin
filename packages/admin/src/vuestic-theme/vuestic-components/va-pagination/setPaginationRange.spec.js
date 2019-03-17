import { setPaginationRange } from './setPaginationRange'

describe('pagination', () => {
  it('first page', () => {
    expect(setPaginationRange(1, 3, 5)).toEqual([1, 2, 3])
  })
  it('middle page', () => {
    expect(setPaginationRange(6, 3, 20)).toEqual([5, 6, 7])
  })
  it('last page', () => {
    expect(setPaginationRange(10, 4, 10)).toEqual([7, 8, 9, 10])
  })
})
