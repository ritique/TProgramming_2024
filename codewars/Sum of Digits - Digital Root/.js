function digitalRoot(n) {
    if (n < 10) 
      return n;
    
    for (var summ = 0, i = 0, n = String(n); i < n.length; i++)
      summ += Number(n[i]);
    
    return digitalRoot(summ);
  }