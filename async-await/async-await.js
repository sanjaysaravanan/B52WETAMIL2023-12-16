// console.log("Hello the program is started");

// setTimeout(() => {
//   console.log("Lets take a brake for 30mins");
// }, 3000);

// console.log("Hello the program is Ended");

// to avoid chaining js found something called async/await

// chaining without the use of .then()
const buildHomeFunc = async () => {
  // buy land
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Bought land");
      resolve("Bought a new land");
    }, 3000);
  });
  // create a plan
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("New Plan Ready");

      resolve("Create a new plan");
    }, 2000);
  });
  // build the plan
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Built the Home");

      resolve("Home is built");
    }, 1000);
  });
};

// buildHomeFunc();

const sampleFunc = async () => {
  // taking the resolved value and assigning to a variable
  const value = await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Competed Promise");
      resolve("Completed the Promise");
    }, 2000);
  });

  console.log("Sample Executed", value);
};

sampleFunc();
