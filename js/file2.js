import * as sys from "@sys";
import {encode,decode} from "@sciter";

export class file
{
    static #handle = null;

    /**
     * Open file
     * @param path - file path
     * @return promise
     */
    static async open(path)
    {
        try {
            console.debug("Open file...");

            await sys.fs.open(path, "w", 0o666)
                .then(
                    (handle) => {
                        this.#handle = handle;
                        console.debug("Open file - OK");
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

                console.debug(`Close file - OK`);
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

        try {
            // write message to file
            const buffer = encode(message + "\r\n", "utf-8");
            this.#handle.write(buffer);

            console.debug("Write to file - OK");
        }
        catch (e) {
            // send message to original console method
            console.error(`Write to file - FAILED - ${e.toString()}`);
        }
    }
}
