import * as sys from "@sys";

export class file
{
    static #handle = null;

    static open(path)
    {
        try {
            sys.fs.open(path, "w", 0o666)
                .then(
                    (handle) => {
                        this.#handle = handle;
                    },
                    (error) => {
                        console.error(`open file - FAILED - ${error}`);
                    });
        }
        catch (e) {
            console.error(`open file - FAILED - ${e.toString()}`);
        }
    }

    static close()
    {
        try {
            if (this.#handle)
                this.#handle.close();

            this.#handle = null;
        }
        catch (e) {
            console.error(`close file - FAILED - ${e.toString()}`);
        }
    }

    static write(message)
    {
        if (this.#handle === null) {
            console.error(`write - FAILED - file not open`);
            return;
        }
    }
}
