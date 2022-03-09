export const checkValue = (value, arr) => {
  var status = false;
  console.log(value)
  console.log(arr)

  for (var i = 0; i < arr.length; i++) {
    var name = arr[i];
    if (name === value) {
      status = true;
      break;
    }
    console.log(status);
  }

  return status;
};
