export const extractDates = (text) => {
    const arr = Array.from(text.matchAll(/[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}/gm));
    return arr.map(item => item[0]).join(', ');
  }
