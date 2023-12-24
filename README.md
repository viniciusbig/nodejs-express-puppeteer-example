# nodejs-express-puppeteer-example


This example shows how to Run Puppeteer on AWS Elastic Beanstalk.
It works on the newest Amazon Image `Node.js 18 running on 64bit Amazon Linux 2023`.

## Instructions

Since Chrome (or Chormium) is not installed by default, we need to install it and its dependencies.

Copy `.platform` folder to your project.
The `01_install_chrome.sh` will run after deploy, installing Chrome under `/usr/bin/google-chrome-stable`

Now, you can configure Poppeteer to run from there.

```javascript
const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome-stable',
    headless: "new",
    args: ["--disable-setuid-sandbox"],
    'ignoreHTTPSErrors': true
});
```

Now you shlould be able to run Puppeteer scripts.