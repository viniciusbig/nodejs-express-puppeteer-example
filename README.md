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

Now you should be able to run Puppeteer scripts.


## References:

- https://officialeriksoto.medium.com/running-puppeteer-on-an-aws-elastic-beanstalk-instance-using-nodejs-ae423841b57a
- https://copyprogramming.com/howto/puppeteer-not-working-on-vps-but-running-locally#google_vignette
    - `amazon-linux-extras` and `EPEL` does not work on `Amazon Linux 2023` anymore
- https://chimmelb.blogspot.com/2018/11/using-puppeteer-in-aws-node.html
    - not woeking dont know why
- https://dev.to/achimoraites/a-developers-guide-to-run-puppeteer-on-elastic-beanstalk-no-ubuntu-linux-4pl5
- https://medium.com/@achillesmoraites/a-developers-guide-to-run-puppeteer-on-elastic-beanstalk-linux-no-ubuntu-linux-d137fa2641ae
    - get script from here
    - SSL is falling so I copied script to here
    - We could use -k to install: `curl -k https://intoli.com/install-google-chrome.sh | bash`
- https://stackoverflow.com/questions/64361897/puppeteer-not-working-on-vps-but-running-locally
- https://stackoverflow.com/questions/60904111/installing-puppeteer-2-elastickbeanstalk
- https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-linux-extend.html