# [1] Simple API

Hello! Welcome to your first exercise and your first step towards a serverless application!
In this exercise you will write a simple serverless API with one GET route.

But before doing anything, make sure you have fulfilled the workshop prerequisites and setup your AWS account.

First, go to your terminal and create your workshop project folder and api folder inside it. You can name folders any way you like, then enter your api folder.

While there, initalize your Node project by running `npm init` and filling up the project details (or run `npm init -y` to skip the questions).

Next, install Claudia API Builder as your project dependency by running `npm install claudia-api-builder --save`.

Now, in your project folder, create a `api.js` file that will be the starting point for your API.

**Your first task is** to write a simple API with `GET /` method that will return `HELLO WORLD` text.

After you've written it, be sure to create your AWS Lambda function and deploy your function by running following command:

````shell
claudia create --region eu-central-1 --api-module api
````

This command will print an API URL, load that URL in your browser and you should see `HELLO WORLD` text.

## Tips

Here are a few tips that can help you to do this exercise:

- You need to require Claudia API Builder by adding `const Api = require('claudia-api-builder')` on top of your file.
- Claudia API Builder is a class, you need to create an instance of it (`const api = new Api()`)
- At the end of your `api.js` file, you need to export an Claudia API Builder instance (`module.exports = api`)
- To add a route, use `api.get(path, handlerFunction)`
- See Claudia API Builder docs for more info: https://github.com/claudiajs/claudia-api-builder.

You can see our solution in a [code section](../code/exercise-01) of this repository.

---

[![Next](../assets/next.png)](./exercise-02.md)

or [go back](../preparation/AWS-setup.md).
