import { Wookie } from "./wookie";

/**
 * Class for wookie selfie
 */
export class Selfie {

    image?: string;
    wookie: Wookie;
    title: string;

    constructor() {
        this.wookie = new Wookie();
    }


}
