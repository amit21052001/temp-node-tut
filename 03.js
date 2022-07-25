function func1() {
  console.log(
    "this is just to show that when a file is invoked in require func"
  );
  console.log(
    "even it is not assigned to any variable but means it is called.."
  );
  console.log(
    "this file is simply assigned in require but it is calling now.."
  );
}

func1();

module.exports = func1;
