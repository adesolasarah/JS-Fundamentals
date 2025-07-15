const times = Number(process.argv[2]);

if (Number.isInteger(times) && times > 0) {
  for (let i = 0; i < times; i++) {
    console.log("C is fun");
  }
} else {
  console.log("Missing number of occurrences");
}
