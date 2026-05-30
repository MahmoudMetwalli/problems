// TODO: Optimize
const gas = [1, 2, 3, 4, 5];
const cost = [3, 4, 5, 1, 2];

const canCompleteCircuit = function (gas, cost) {
  const tripLength = gas.length;
  const incrementPosition = (index) => {
    const newIndex = index + 1 === tripLength ? 0 : index + 1;
    return newIndex;
  };
  if (tripLength === 1) {
    return gas[0] >= cost[0] ? 0 : -1;
  }
  for (let index = 0; index < tripLength; index++) {
    const start = index;
    let position = index;
    let tank = 0;
    while (tank > 0 || position === start) {
      tank += gas[position];
      tank -= cost[position];
      position = incrementPosition(position);
      if (position === start && tank >= 0) return start;
    }
  }
  return -1;
};

console.log(canCompleteCircuit(gas, cost));
