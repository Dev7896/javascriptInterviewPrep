// const promise = new Promise((resolve, reject) => {
//   try {
//     var timerId = setTimeout(() => {
//       console.log("promise resolved....");
//       resolve("data received");
//       clearTimeout(timerId);
//     }, 2000);
//   } catch (error) {
//     reject(error.message);
//   }
// });

// promise
//   .then(console.log)
//   .catch(console.log)
//   .finally(() => console.log("resource cleanup"));

// same abvoe code can be written as
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data received"), 1000);
  });
}

// fetchData().then(console.log); // Output after 1s: Data received

// async await demonstration

async function getData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
// async and await is syntactic sugar provide more redable and convenient syntax
// await keyword can be used to furthur execution
// await keyword can ony be used within async function
function delay(ms) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      // do nothing
      res();
    }, ms);
  });
}
// await operator is used to wait for "promise"
async function f() {
  const result = await fetchData(); // ❌ Not awaited
  await delay(2000);
  console.log(result); // Logs a Promise
}
f();

// callback hell (pyramid of doom ) problem

// promise chaining --
// Promise chaining is a technique in JavaScript used to manage a sequence of asynchronous operations, ensuring they execute in a specific order.
//  It leverages the .then() method of Promises, allowing for a more structured and readable way to handle asynchronous code compared to deeply nested callbacks (often referred to as "callback hell").

loginUser('user', () => {
  getUserProfile((profile) => {
    getUserPosts(profile.id, (posts) => {
      sendEmail(posts, () => {
        console.log('Email sent');
      });
    });
  });
});


// hard to read , hard debugging


// the same syntax in promises provides more redability , and easier debugging
// promise fattern callbacks using then method

loginUser('user') // promise chaining
  .then(getUserProfile)
  .then(getUserPosts)
  .then(sendEmail)
  .then(() => console.log('Email sent'))
  .catch((err) => console.error('Something went wrong:', err));

// even better syntax
async function processUserFlow() {
  try {
    const user = await loginUser('user');
    const profile = await getUserProfile(user);
    const posts = await getUserPosts(profile.id);
    await sendEmail(posts);
    console.log('Email sent');
  } catch (err) {
    console.error('Error:', err);
  }
}

