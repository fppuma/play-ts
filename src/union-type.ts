function printData(data: string | number) {
  if( typeof data === 'string') {
    console.log(`string.upperCase ${data.toLocaleUpperCase()}`);
  }else {
    console.log(`number  ${data.toFixed(1)}`);
  }
}

printData('saturday');
printData(34.5672);

/**
 * Output
 * string.upperCase SATURDAY
 * number  34.6
 */
