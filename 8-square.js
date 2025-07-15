const size = parseInt(process.argv[2]);

if (!isNaN(size) && size > 0) {
  const row = 'X'.repeat(size);
  for (let i = 0; i < size; i++) {
    console.log(row);
  }
} else {
  console.log('Missing size');
}
