# sciter promise demo

## get started

- git clone the repository
- run `install.bat` to download the latest sciter binaries and library
- run `scapp.bat`
- to refresh the app after changes to the html/css click `F5`

## promises

Javascript asynchronous code uses [`Promises`](https://javascript.info/promise-basics).

```js
let promise = new Promise(function(success, error) {
    // code to run asynchronously
});
```

The function inside the promise constructor has 2 callback arguments: the first for success and the second for error.

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

There are 2 ways to wait for the promise to complete.

### await

[https://javascript.info/async-await](https://javascript.info/async-await)

`await` must be used inside an `async` function. `async` functions are run asynchronously as the name implies which in this example means that `Call wait - OK` happens before `wait_async_await` completes.

```js
async function wait_async_await()
{
    const promise = new Promise(function(success, error) {
        setTimeout(function() {
            if (1 === 1)
                success("success");
            else
                error("failed");
        }, 2000);
    });

    console.log("Wait for promise...");

    try {
        const result = await promise;
        console.log(`Wait for promise - OK - ${result}`);
    }
    catch (error) {
        console.log(`Wait for promise - CATCH - ${error}`);
    }
}

console.log("Call wait...");
wait_async_await();
console.log("Call wait - OK");
```

### then

```js
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
    function success(result) {
        console.log(`Wait for promise - OK - return - ${result}`);
    },
    function error(result) {
        console.log(`Wait for promise - OK - return - ${result}`);
    }
);
```
