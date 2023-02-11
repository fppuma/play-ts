type SwitchStatus = 'ON' | 'OFF';

let myStatus : SwitchStatus;

myStatus = 'ON';
myStatus = 'OFF';
//myStatus = 'active';

function printStatus(status: SwitchStatus) {
  if(status === 'ON') {
    console.log('the light is turned on');
  }else{
    console.log('the light is turned off');
  }

}

printStatus(myStatus);
