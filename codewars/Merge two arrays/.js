function mergeArrays(a, b) {
    let result = [];
    let i = 0;
    
    while ((i < a.length) || (i < b.length) ) {
      if (i < a.length) result.push(a[i]);
      if (i < b.length) result.push(b[i]);
      i++;
    }
    return result;
  }