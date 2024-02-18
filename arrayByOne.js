function flattenArrayByOne(arrayOfArrays) {
    // Your code goes here...
    const arrayByOne = []
    for (let array of arrayOfArrays){
      
      arrayByOne.push(...array)
    }
    return arrayByOne
    }