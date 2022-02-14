function formatDate(date, format) {
    const map = {
      mm: (date.getMonth() + 1).toString().padStart(2, '0'),
      dd: date.getDate().toString().padStart(2, '0'),
      yyyy: date.getFullYear(),
    };
  
    return format.replace(/mm|dd|yyyy/gi, (matched) => map[matched]);
  }
  const today = new Date();
  
  const orderDate = document.querySelector('#order-date');
  orderDate.textContent = "Order date: " + formatDate(today, 'dd.mm.yyyy');
  