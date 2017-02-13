var should = require('chai').should()
const fizzbuzz = require('../index')

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

  it('should return FizzBuzz if can be divided by 3 and 5', function () {
    fizzbuzz.convertNumber(15).should.equal('FizzBuzz')
    fizzbuzz.convertNumber(30).should.equal('FizzBuzz')
  })
})
