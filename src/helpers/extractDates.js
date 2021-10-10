export const extractDates = (text) => {
    const arr = Array.from(text.matchAll(/(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}/gm));
    return arr.map(item => item[0]).join(', ');
  }
