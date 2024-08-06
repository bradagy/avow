import puppeteer from "puppeteer";

const run = async function go() {
    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();

    try {
        console.log("\nNavigating to: Card Validator\n");
        const response = await page.goto("https://cards-dev.twitter.com/validator");
        // Returns true if the HTTP status code is 200-299
        console.log(`Success: ${response.ok()}`);
    } catch (error) {
        console.error("Navigation failed:", error);
    }

    await page.waitForSelector("input[name=text]");
    await page.type("input[name=text]", "bradagy");
    await page.keyboard.press("Enter");

    await page.waitForSelector("input[name=password]");
    await page.type("input[name=password]", "");
    await page.keyboard.press("Enter");

    // Submitting OTP
    await page.waitForSelector("input[name=text]");
    await page.type("input[name=text]", ""); // REMEMBER TO TYPE IN OTP
    await page.keyboard.press("Enter");

    await page.waitForSelector("input[name=text]");
    await page.type("input[name=text]", // Put website name here);
    await page.keyboard.press("Enter");

    setTimeout(async function () {
        // Close the browser after 10 seconds
        await browser.close();
    }, 10000);
};

run();
