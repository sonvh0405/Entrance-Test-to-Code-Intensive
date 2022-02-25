function findOppositeNumber(n, inputNumber) {
    let count = 0;
    if (inputNumber < n / 2) {
      for (let i = 0; i <= inputNumber; i++) {
        count = count + 1;
      }
      let sodoi = n / 2 + (count - 1);
      console.log("Số đối với " + inputNumber + " là: " + sodoi);
    } else {
      for (let i = n / 2; i <= inputNumber; i++) {
        count = count + 1;
      }
      let sodoi = count - 1;
      console.log("Số đối với " + inputNumber + " là: " + sodoi);
    }
  }
  findOppositeNumber(10, 2);
  findOppositeNumber(10, 6);