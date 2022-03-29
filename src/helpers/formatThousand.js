/* Format angka menjadi ada titik nya.
   Contoh: 1.500.000
 */
export default (number = 0) => {
  const thousand = new Intl.NumberFormat();
  return thousand.format(number);
};
