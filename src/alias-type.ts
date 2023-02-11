type data = string | number;

function printText(myData: data) {
  if( typeof myData === 'string') {
    console.log(`string.upperCase ${myData.toLocaleUpperCase()}`);
  }else {
    console.log(`number  ${myData.toFixed(1)}`);
  }
}

printText('saturday');
printText(34.5672);

