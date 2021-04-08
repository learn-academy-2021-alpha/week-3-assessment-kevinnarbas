// ASSESSMENT 3: Coding practical questions with Jest

// const { describe } = require("yargs")

// const { describe } = require("yargs")

// const { exportAllDeclaration } = require("babel-types")

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


describe('When fibLength is called', () => {
  it('returns the the input as the length of the array', () => {
    //Arrange 
    const numArgument = 6
    
    //Act
    const actualResult = fibLength(numArgument)
    
    //Assert
    expect(actualResult).toEqual([1, 1, 2, 3, 5, 8])
  })

  it('returns the the input as the length of the array', () => {
    //Arrange 
    const numArgument = 10
    
    //Act
    const actualResult = fibLength(numArgument)
    
    //Assert
    expect(actualResult).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// b) Create the function that makes the test pass.

// const fibLength = (inputForLength) => {
//   let lengthOfArray = new Array(inputForLength).fill(null)
//   return lengthOfArray.map(value, index => {
//     let 
//   })
// } 


// const fibLength = (inputForLength) => {
//   let storageArray = []
//   let a = 0
//   let b = 1
//   for(let i = 0; i <= inputForLength + 1; i++){
//     b = a + b
//     console.log(a,b)
//     storageArray.push(b)
//     a = storageArray[i]
//   }
//   return storageArray
// }

const fibLength = (inputForLength) => {
  let fibArray = [1, 1]
  for(let i = 2; i < inputForLength; i++){
    fibArray[i] = fibArray[i-2] + fibArray[i-1]
  }
  // console.log(fibArray)
  return fibArray
}



// console.log(fibLength(100))

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe('When sortOnlyOdds is called', () => {
  it('returns an array of odd numbers sorted when a mixed array is provided', () => {
    //Arrange 
    const mixedArray = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    
    //Act
    const actualResult = sortOnlyOdds(mixedArray)
    
    //Assert
    expect(actualResult).toEqual([-9, 7, 9, 199])
  })
  
  it('returns an array of odd numbers sorted when a mixed array is provided', () => {
    //Arrange 
    const mixedArray = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
    
    //Act
    const actualResult = sortOnlyOdds(mixedArray)
    
    //Assert
    expect(actualResult).toEqual([-823, 7, 23])
  })

})


// b) Create the function that makes the test pass.

const sortOnlyOdds = (mixedArray) => {
  return mixedArray.filter(value => {
    return (typeof value === 'number' && value % 2 !== 0)
  }).sort((a, b) => a - b)
}



// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

// a) Create a test with expect statements for each of the variables provided.

var middleLetters1 = "alpha"
// Expected output: “p”

var middleLetters2 = "rhinoceros"
// Expected output: “oc”

describe('When getMiddle is called', () => {
  it('returns the middle letter when provided an odd number', () => {
    //Arrange
    const stringArgument = 'alpha'

    //Act
    const actualResult = getMiddle(stringArgument)

    //Assert
    expect(actualResult).toEqual('p')
  })
  
  it('returns the two middle letters when provided an odd number', () => {
    //Arrange
    const stringArgument = 'rhinOceros'

    //Act
    const actualResult = getMiddle(stringArgument)

    //Assert
    expect(actualResult).toEqual('oc')
  })

})



// b) Create the function that makes the test pass.


const getMiddle = (str) => {
  let lower = str.toLowerCase()
  let start = 0
  let howMany = 0
  if(str.length % 2 === 0) {
    start = str.length / 2 - 1
    howMany = 2
  } else {
    start = str.length / 2
    howMany = 1
  }
  return lower.substring(start, start + howMany)
}

// const getMiddle = (str) => {
//   let start = 0
//   let odd = 1
//   let even = 2
//   return str.substring((str.length % 2) ? start = str.length / 2 : )
// }



// --------------------4) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []

describe('When addedNumbers is called', () => {
  it('returns an array of the numbers added up to its index', () => {
    //Arrange
    const arrayToBeAdded = [2, 4, 45, 9]

    //Act
    const actualResult = addedNumbers(arrayToBeAdded)

    //Assert
    expect(actualResult).toEqual([2, 6, 51, 60])
  })

  it('returns an array of the numbers added up to its index', () => {
    //Arrange
    const arrayToBeAdded = [0, 7, -8, 12]

    //Act
    const actualResult = addedNumbers(arrayToBeAdded)

    //Assert
    expect(actualResult).toEqual([0, 7, -1, 11])
  })

  it('returns an array of the numbers added up to its index', () => {
    //Arrange
    const arrayToBeAdded = []

    //Act
    const actualResult = addedNumbers(arrayToBeAdded)

    //Assert
    expect(actualResult).toEqual([])
  })
})



// b) Create the function that makes the test pass.

const addedNumbers = (array) => {
  if(array.length === 0) {
    return []
  }else {
    let numbersAdded = array[0]
    let newArray = [array[0]]
    for(let i = 1; i < array.length; i++){
      numbersAdded = numbersAdded + array[i]
      // console.log(numbersAdded)
      newArray.push(numbersAdded)
    }
    return newArray
  }
}
