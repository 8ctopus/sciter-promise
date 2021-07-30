import * as sys from "@sys";
import {encode,decode} from "@sciter";

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
     * Close file
     * @return void
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

    /**
     * Write message to file
     * @param string message
     * @return bool
     */
    static write(message)
    {
        if (this.#handle === null) {
            console.error(`Write to file - FAILED - file not open`);
            return false;
        }

        try {
            // write message to file
            const buffer = encode(message + "\r\n", "utf-8");
            this.#handle.write(buffer);

            console.debug("Write to file - OK");
            return true;
        }
        catch (e) {
            // send message to original console method
            console.error(`Write to file - FAILED - ${e.toString()}`);
        }
    }
}
