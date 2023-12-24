require('dotenv').config();
const express = require("express");
const puppeteer = require("puppeteer");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Olá Mundo!" });
});

app.get("/scrap", async (req, res) => {
    const browser = await puppeteer.launch({
        headless: "new"
    });
    const [page] = await browser.pages();
    const url = "https://www.google.com";
    await page.goto(url, { waitUntil: "domcontentloaded" });
    await page.screenshot({ path: './screenshots/screenshot.png' });
    let content = await page.content();
    browser.close();

    res.send({ message: content });
});

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});
