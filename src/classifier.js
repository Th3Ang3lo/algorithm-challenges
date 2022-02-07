function classifier(data) {
  const me = data.find(person => person.itsMe)

  const accountables = data.filter(person => person.accountable)
    .sort((personA, personB) => personA.name.localeCompare(personB.name))

  const nonAccountables = data.filter(person => !person.accountable)
    .sort((personA, personB) => personA.name.localeCompare(personB.name))

  return {
    me: me.name,
    accountables: accountables.map(person => person.name),
    nonAccountables: nonAccountables.map(person => person.name)
  }
}

const peoples = [
  {
    itsMe: true,
    accountable: true,
    name: 'Angelo Soares'
  },
  {
    itsMe: false,
    accountable: false,
    name: 'Oliver Pedro'
  },
  {
    itsMe: false,
    accountable: false,
    name: 'Igor Daniel'
  },
  {
    itsMe: false,
    accountable: false,
    name: 'Isabelle Maitê'
  },
  {
    itsMe: false,
    accountable: false,
    name: 'Kauê Paulo'
  }
]

const result = classifier(peoples)
console.log(result)
