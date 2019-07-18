import { setPaginationRange } from './setPaginationRange'

describe('pagination', () => {
  it('should set first page', () => {
    expect(setPaginationRange(1, 3, 5)).toEqual([1, 2, 3])
  })

  it('should set the page in the middle', () => {
    expect(setPaginationRange(6, 3, 20)).toEqual([5, 6, 7])
  })

  it('should set last page', () => {
    expect(setPaginationRange(10, 4, 10)).toEqual([7, 8, 9, 10])
  })

  it('should limit visible pages', () => {
    expect(setPaginationRange(1, 10, 2)).toEqual([1, 2])
  })
})
