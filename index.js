const fizzbuzz = {
  convertNumber: (number) => {
    let output = [
      [3, 'Fizz'],
      [5, 'Buzz'],
      [15, 'FizzBuzz']
    ]
    let result = number
    output.forEach(function (data) {
      if (number % data[0] === 0) {
        result = data[1]
      }
    })
    return result
  }
}

module.exports = fizzbuzz
