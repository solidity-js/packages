async function main() {
  console.log("hello, world!");
}

main()
  .then(() => console.log("Compilation complete."))
  .catch((e) => console.error(e));
