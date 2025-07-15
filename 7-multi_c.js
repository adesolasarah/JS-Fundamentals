const count = Number(process.argv[2]);

if (!isNaN(count)) {
  if (count > 0 && Number.isInteger(count)) {
    for (let i = 0; i < count; i++) {
      console.log("C is fun");
    }
  }
  // Do nothing if count is negative or 0
} else {
  console.log("Missing number of occurrences");
}
