export const dateFormat = dateNum => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const date = new Date(dateNum);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${months[month]} ${day > 9 ? day : '0' + day}, ${year}`;
}
