function shelfLife(chosenDate, valid) {
  const date = new Date(chosenDate)

  if (!valid.toLowerCase().includes('d')) {
    throw new Error('Unable to check expire date.')
  }

  const formattedValidity = Number(valid.replace('d', ''))

  return !(date.getDate() > formattedValidity)
}

const result = shelfLife('2021-11-17T20:40:09.503Z', '1d')
console.log(result)
