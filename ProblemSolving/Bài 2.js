function merge2String(string1, string2) {
    const array1 = string1.split("");
    const array2 = string2.split("");
    //console.log(array1);
    //console.log(array2);
    const array1_length = array1.length;
    const array2_length = array2.length;
    //console.log(array1_length);
    //console.log(array2_length);
  
    function arr_length_smaller(array1_length, array2_length) {
      if (array1_length < array2_length) {
        const min = array1_length;
        return min;
      } else {
        const min = array2_length;
        return min;
      }
    }
  
    const min = arr_length_smaller(array1_length, array2_length);
    //console.log(min);
  
    const arr1_left = array1.slice(min);
    const arr2_left = array2.slice(min);
    //console.log(arr1_left);
    //console.log(arr2_left);
    const arr_left_concat = arr1_left.concat(arr2_left);
    //console.log(arr_left_concat);
  
    const merge_2arr_intersection = [];
    for (let i = 0; i < min; i++) {
      merge_2arr_intersection.push(array1[i]);
      merge_2arr_intersection.push(array2[i]);
    }
    //console.log(merge_intersection);
  
    const merge2arr = merge_2arr_intersection.concat(arr_left_concat);
    //console.log(merge2arr);
  
    const merge2String = merge2arr.join("");
    console.log(merge2String);
  }
  merge2String("abc", "123");
  merge2String("abc", "0123");
  merge2String("abcd", "123");  