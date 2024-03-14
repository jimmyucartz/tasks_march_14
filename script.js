const resetInput = (id, result_id) => {
  const input = document.getElementById(id);
  input.value = "";
  document.getElementById(result_id).innerText = "";
};

const findDUplicates = () => {
  const input = document.getElementById("input_numbers1").value;

  if (input.length < 1) {
    alert("Please Enter Numbers Array to Find Duplicates ");
    return;
  }
  let new_array = input.split(",").filter((e) => e != "");

  let output = [];
  let duplicates = [];

  new_array.forEach((element) => {
    if (Array.isArray(output) && !output.includes(element)) {
      output.push(element);
    } else {
      duplicates.push(element);
    }
  });

  let result_text = `Duplicate filtered array : ${output.join(
    ","
  )} \n Duplicate elements in the array : ${duplicates.join(",")}`;

  document.getElementById("result1").innerText = result_text;
};

const findMinMax = () => {
  const input = document.getElementById("input_numbers2").value;

  if (input.length < 1) {
    alert("Please Enter Numbers Array to Find Duplicates ");
    return;
  }
  let new_array = input.split(",").filter((e) => e != "");

  let min = new_array.sort((a, b) => a - b)[0];
  let max = new_array.sort((a, b) => b - a)[0];

  let output = `Maximum value is :${max} , Minimum Value is ${min}`;
  document.getElementById("result2").innerText = output;
};
