# sciter promise demo

This is a [sciter.js](https://sciter.com/) project that experiments with `Promise`.

## demo

- git clone the repository
- install packages `npm install`
- install latest sciter sdk `npm run install-sdk`
- start the demo `npm run scapp`

## demo requirements

- A recent version of Node.js `node` (tested with 22 LTS) and its package manager `npm`.
    - On Windows [download](https://nodejs.dev/download/) and run the installer
    - On Linux check the [installation guide](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04#option-2-%E2%80%94-installing-node-js-with-apt-using-a-nodesource-ppa)

## promises

Javascript asynchronous code uses [`Promise`](https://javascript.info/promise-basics).

```js
let promise = new Promise(function(success, error) {
    // code to run asynchronously
});
```

The function inside the promise constructor takes 2 callbacks as arguments: the first for success and the second for error.

```js
const promise = new Promise(function(success, error) {
    setTimeout(function() {
        if (1 === 1)
            success("success");
        else
            error("error");
    }, 2000);
});
```

## wait for promise completion

There are 2 ways to wait for the promise to complete

### async / await

[https://javascript.info/async-await](https://javascript.info/async-await)

The `async` keyword placed before a function means that function always returns a `Promise`. Non promise return will be wrapped within a `Promise`.

`await` will be used inside an `async` function to wait for the promise to complete.

`async` functions are run asynchronously which means that `Call wait - OK` happens before function `wait_async_await()` completes.

```js
async function wait_async_await() {
    // create promise
    const promise = new Promise(function(success, error) {
        setTimeout(function() {
            if (1 === 1)
                success("success");
            else
                error("failed");
        }, 2000);
    });

    try {
        console.log("Wait for promise...");

        // code pauses and waits for the promise to complete
        const result = await promise;

        console.log(`Wait for promise - OK - ${result}`);
    }
    catch (error) {
        console.log(`Wait for promise - CATCH - ${error}`);
    }
}

console.log("Call async wait...");
const result = wait_async_await();
console.log("Call async wait - OK");
console.debug(result);
```

### then

[https://javascript.info/promise-basics#then](https://javascript.info/promise-basics#then)

```js
// create promise
const promise = new Promise(function(success, error) {
    setTimeout(function() {
        if (1 === 0)
            success("success");
        else
            error("failed");
    }, 2000);
});

console.log("Wait for promise...");

promise.then(
    // promise has completed
    function success(result) {
        console.log(`Wait for promise - OK - ${result}`);
    },
    function error(result) {
        console.log(`Wait for promise - FAILED - ${result}`);
    }
);
```
