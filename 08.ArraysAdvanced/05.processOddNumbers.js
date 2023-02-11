function proccesOddNumbers(input) {
  console.log(
    input
      .filter((x, i) => i % 2 != 0)
      .map((number) => number * 2)
      .reverse()
  );
}
proccesOddNumbers([3, 0, 10, 4, 7, 3]);
