import { expect } from 'chai'
import { filter } from '../src/ex2.js'

describe('ex. 2', function () {
  describe('filter(array, predicate)', function () {
    it('should return a new array', function () {
      /** @type {any[]} */
      const orinalArray = []

      // not equal by reference (shallow comparison)...
      expect(filter(orinalArray, () => true)).to.not.eq(orinalArray)

      // ...but equal by content (deep comparison)
      expect(filter(orinalArray, () => true)).to.deep.eq([])
    })

    it('should keep only items for those the predicate is true', function () {
      expect(filter([1, 2, 3, 4, 5, 9, 10], item => item % 2 === 0)).to.deep.eq([2, 4, 10])
    })

    it('should not mutate the original array', function () {
      const originalArray = [1, 2, 3, 4, 5, 9, 10]
      filter(originalArray, item => item % 2 === 0)
      expect(originalArray).to.deep.eq([1, 2, 3, 4, 5, 9, 10])
    })
  })
})
