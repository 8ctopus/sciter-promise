import * as sys from "@sys";
import {encode} from "@sciter";

export class file {
    static #handle = undefined;

    /**
     * Open file
     * @param {string} path - file path
     */
    static open(path) {
        try {
            console.debug("Open file...");

            sys.fs.open(path, "w", 0o666)
                .then(
                    handle => {
                        this.#handle = handle;
                        console.debug("Open file - OK");
                    },
                    error => {
                        console.error(`Open file - FAILED - ${error}`);
                    });
        }
        catch (error) {
            console.error(`Open file - FAILED - ${error.toString()}`);
        }
    }

    /**
     * Close file
     */
    static close() {
        try {
            if (this.#handle) {
                this.#handle.close();
                this.#handle = undefined;

                console.debug("Close file - OK");
            }
            else
                console.error("Close file - FAILED - file not open");
        }
        catch (error) {
            console.error(`Close file - FAILED - ${error.toString()}`);
        }
    }

    /**
     * Write message to file
     * @param {string} message
     * @returns {boolean}
     */
    static write(message) {
        if (this.#handle === undefined) {
            console.error("Write to file - FAILED - file not open");
            return false;
        }

        try {
            // write message to file
            const buffer = encode(message + "\r\n", "utf-8");
            this.#handle.write(buffer);

            console.debug("Write to file - OK");
            return true;
        }
        catch (error) {
            // send message to original console method
            console.error(`Write to file - FAILED - ${error.toString()}`);
        }
    }
}
