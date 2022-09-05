import { expect } from 'chai'
import { map } from '../src/ex3.js'

describe('ex. 3', function () {
  describe('map(array, transform)', function () {
    it('should return a new array', function () {
      /** @type {any[]} */
      const orinalArray = []

      // not equal by reference (shallow comparison)...
      expect(map(orinalArray, () => true)).to.not.eq(orinalArray)

      // ...but equal by content (deep comparison)
      expect(map(orinalArray, () => true)).to.deep.eq([])
    })  

    it('should transform every item of the array (double them)', function () {
      expect(map([1, 2, 3, 4, 5, 9, 10], item => item * 2)).to.deep.eq([2, 4, 6, 8, 10, 18, 20])
    })

    it('should transform every item of the array (triple them)', function () {
      expect(map([1, 2, 3, 4, 5, 9, 10], item => item * 3)).to.deep.eq([3, 6, 9, 12, 15, 27, 30])
    })

    it('should not mutate the original array', function () {
      const originalArray = [1, 2, 3, 4, 5, 9, 10]
      map([1, 2, 3, 4, 5, 9, 10], item => item * 2)
      expect(originalArray).to.deep.eq([1, 2, 3, 4, 5, 9, 10])
    })
  })
})

