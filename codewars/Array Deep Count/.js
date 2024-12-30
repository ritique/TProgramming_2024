function deepCount(array) {
    var count = array.length
    
    for (const element of array) {
      if (Array.isArray(element)) {
        count += deepCount(element)
      }
    }
    
    return count
  }