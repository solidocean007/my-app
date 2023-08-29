import { Counter } from "./features/counter/Counter"
import "./App.css"

function App() {
  const numbers = [1, 2, 3, 4, 5, 6]
  const sum = numbers.reduce((acc, curr) => acc + curr, 0)

  const arrays = [
    [1, 2],
    [3, 4],
    [5, 6],
  ]
  const flatArray = arrays.reduce((acc, curr) => acc.concat(curr), [])

  const fruits = ["apple", "banana", "apple", "orange", "banana"]
  const tally = fruits.reduce((acc, fruit: string) => {
    acc[fruit] = (acc[fruit] || 0) + 1 // fruit has an explicit any type
    return acc
  }, {})

  const names = ["Alice", "Bob", "Charlie"]
  const namesLengths = names.reduce(
    (acc: Record<string, number>, name: string) => {
      acc[name] = name.length // Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'. No index signature with a parameter of type 'string' was found on type '{}'.ts(70 return acc
      return acc
    },
    {},
  )
  console.log(namesLengths)

  const grades = [45, 34, 40, 32, 98, 85]
  const averageGrades =
    grades.reduce((acc, grade) => acc + grade, 0) / grades.length

  const values = [45, 84, 39, 39]
  const maxValue = values.reduce(
    (acc, value) => (acc > value ? acc : value),
    -Infinity,
  )
  // Grouping by properties
  const people = [
    { name: "Alice", age: 25 },
    { name: "James", age: 25 },
    { name: "Lex", age: 45 },
    { name: "Amy", age: 45 },
  ]
  const groupByAge = people.reduce((acc, person) => {
    if (!acc[person.age]) acc[person.age] = []
    acc[person.age].push(person.name)
    return acc
  }, {})
  console.log(groupByAge)

  // Chaining methods for data transformation
  const transactions = [
    { amount: 5 },
    { amount: -3 },
    { amount: 8 },
    { amount: 9 },
  ]
  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, curr) => acc + curr.amount, 0)

  // reverse a string
  const word = "Taste"
  const reverseWord = word.split("").reduce((acc, curr) => curr + acc, "")

  // Pipeline functions
  const functions = [
    (x: number) => x + 2,
    (x: number) => x + 3,
    (x: number) => x - 12,
  ]
  const results = functions.reduce((acc, curr) => {
    return curr(acc)
  }, 5)
  console.log(results)

  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <h3>reduce practice</h3>
        <h4>{sum}: sum</h4>
        <h4>{flatArray}</h4>
        <h4>{JSON.stringify(tally)}</h4>
        {Object.keys(namesLengths).map((name) => (
          <div key={name}>
            {name}: {namesLengths[name]}
          </div>
        ))}
        <h3>{averageGrades.toFixed(2)}</h3>
        <h3>{maxValue}: max value</h3>
        <h3>{totalIncome}: total income</h3>
        <h3>{reverseWord}: reversed word</h3>
        <h3>{reverseWord}: functions</h3>
        <h3>{results}: results</h3>
      </header>
    </div>
  )
}

export default App
