export async function waitAsyncAwait() {
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

        // code waits for the promise to complete
        const result = await promise;

        console.log(`Wait for promise - OK - ${result}`);
    }
    catch (error) {
        console.log(`Wait for promise - CATCH - ${error}`);
    }
}

export function waitThen() {
    // create promise
    const promise = new Promise(function(success, error) {
        setTimeout(() => {
            if (1 === 1)
                success("success");
            else
                error("failed");
        }, 2000);
    });

    console.log("Wait for promise...");

    promise.then(
        // promise has completed
        function (result) {
            console.log(`Wait for promise - OK - ${result}`);
        },
        function (error_) {
            console.log(`Wait for promise - FAILED - ${error_}`);
        },
    );
}

