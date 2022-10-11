export default function numberWithCommas(num: string | number) {
  let stringfyNumber = num.toString();
  const pattern = /(-?\d+)(\d{3})/;

  while (pattern.test(stringfyNumber))
    stringfyNumber = stringfyNumber.replace(pattern, '$1,$2');

  return stringfyNumber;
}
