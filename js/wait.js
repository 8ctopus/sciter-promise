export async function wait_async_await()
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

export function wait_then()
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

    promise.then(
        function success(result) {
            console.log(`Wait for promise - OK - ${result}`);
        },
        function error(result) {
            console.log(`Wait for promise - OK - ${result}`);
        }
    );
}

