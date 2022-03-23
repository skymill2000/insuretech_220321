const array = [1, "test", { name: "test" }, 123.42312];
//in java
// public String [] StringArray = new String[5];
// public ArrayList(String) arrayListString = new ArrayList(String);

for (let i = 0; i < array.length; i++) {
  let element = array[i];
  console.log(element);
}

for (element of array) {
  console.log(element);
}

array.map((data) => {
  console.log(data);
});
