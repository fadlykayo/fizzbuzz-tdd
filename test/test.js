const chai = require('chai')
const should = chai.should()
const expect = chai.expect
const fizzbuzz = require('../index')
const chaiArrays = require('chai-arrays')
chai.use(chaiArrays)

describe('Fizzbuzz untuk perulangan dari 1 - 100', function () {
  it('should return Fizz if can be divided by 3', function () {
    fizzbuzz.convertNumber(1).should.equal(1)
    fizzbuzz.convertNumber(3).should.equal('Fizz')
    fizzbuzz.convertNumber(4).should.equal(4)
    fizzbuzz.convertNumber(6).should.equal('Fizz')
  })

  it('should return Buzz if can be divided by 5', function () {
    fizzbuzz.convertNumber(1).should.equal(1)
    fizzbuzz.convertNumber(3).should.equal('Fizz')
    fizzbuzz.convertNumber(5).should.equal('Buzz')
    fizzbuzz.convertNumber(9).should.equal('Fizz')
    fizzbuzz.convertNumber(10).should.equal('Buzz')
  })

  it('should return Buzz if can be divided by 5', function () {
    fizzbuzz.convertNumber(15).should.equal('FizzBuzz')
    fizzbuzz.convertNumber(30).should.equal('FizzBuzz')
  // fizzbuzz.convertArray(15).should.equalTo([1, 2, 'Fizz', 4, 'Buzz', 6, 7, 8, 'Fizz', 10, 11, 'Fizz', 13, 14, 'FizzBuzz'])
  })
})
