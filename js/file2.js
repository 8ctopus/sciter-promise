import * as sys from "@sys";

export class file
{
    static #handle = null;

    /**
     * Open file
     * @param path - file path
     * @return void
     */
    static open(path)
    {
        try {
            console.debug("Open file...");

            sys.fs.open(path, "w", 0o666)
                .then(
                    (handle) => {
                        this.#handle = handle;
                    },
                    (error) => {
                        console.error(`Open file - FAILED - ${error}`);
                    });
        }
        catch (e) {
            console.error(`Open file - FAILED - ${e.toString()}`);
        }
    }

    /**
     *
     */
    static close()
    {
        try {
            if (this.#handle) {
                this.#handle.close();
                this.#handle = null;
            }
            else
            console.error(`Close file - FAILED - file not open`);
        }
        catch (e) {
            console.error(`Close file - FAILED - ${e.toString()}`);
        }
    }

    static write(message)
    {
        if (this.#handle === null) {
            console.error(`Write to file - FAILED - file not open`);
            return;
        }
    }
}
