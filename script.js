const price = 5000;
if (price >= 10000) {
  // 10% discount for prices 5000 and above
  const discount = (price * 10) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else if (price >= 7000 && price < 5000) {
  // 7% discount for prices between 2000 and 5000
  const discount = (price * 7) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else {
  // 5% discount for prices below 5000
  const discount = (price * 5) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
}
