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
// convertArray: (number) => {
//   let output = [
//     [3, 'Fizz'],
//     [5, 'Buzz'],
//     [15, 'FizzBuzz']
//   ]
//   let result = []
//   for (var i = 1; i <= number; i++) {
//     result.push()
//   }
//
//   output.forEach(function (data) {
//     if (number % data[0] === 0) {
//       result.push(data[1])
//     }
//   })
//   return result
// }
}

module.exports = fizzbuzz
