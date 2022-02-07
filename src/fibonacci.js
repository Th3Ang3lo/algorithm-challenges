function fibonacci (rounds) {
  let value1 = 0
  let value2 = 1
  let current = 0

  const data = []

  for (let i = 0; i < rounds; i++) {
    data.push(current)

    value1 = current + value2
    current = value2
    value2 = value1
  }

  return data
}

const result = fibonacci(6)
console.log(result)
