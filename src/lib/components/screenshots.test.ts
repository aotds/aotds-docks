import { test, expect } from "vitest";
import { globby } from "globby";
import { readFileSync } from "fs";
import { toMatchImageSnapshot } from "jest-image-snapshot";

declare global {
    namespace jest {
        interface Matchers<R> {
            toMatchImageSnapshot(): R;
        }
    }
}

expect.extend({ toMatchImageSnapshot });

test.skip("image snapshot", async () => {
    const images = await globby(".histoire/screenshots/**.png");

    for (const path of images) {
        expect(readFileSync(path)).toMatchImageSnapshot();
    }
});
