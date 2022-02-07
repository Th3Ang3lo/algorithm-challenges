function cleaner (data) {
  for (const key in data) {
    if (data[key] === null) {
      delete data[key];
    }
  }

  return data
}

const object = {
  firstName: 'Angelo',
  lastName: 'Soares',
  girlfriend: null, // :(
  childrens: null
}

const result = cleaner(object)
console.log(result)
