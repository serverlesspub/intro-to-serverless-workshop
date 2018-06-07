# [2] Build an image resizer

Hello! Welcome to your first exercise and your first step towards a serverless application!
In this exercise you will write a simple function that will resize the image.

But before doing anything, make sure you have fulfilled the workshop prerequisites and setup your AWS account.

First, go to your terminal and create your workshop project folder and image resizer folder inside it. You can name folders any way you like, then enter your image resizer folder.

While there, initalize your Node project by running `npm init` and filling up the project details (or run `npm init -y` to skip the questions).

Next, install Claudia API Builder as your project dependency by running `npm install claudia-api-builder --save`.

Now, in your project folder, create a `lambda.js` file that will be the starting point for your image resizer.

**Your first task is** to write a simple lambda function that will be triggered when new image file is uploaded to `/original` folder of your AWS S3 bucket and that will create a thumbnail of the uploaded image to `/thumb` folder in the same bucket. Thumbnail should be up to 200x200px.

After you've written it, be sure to create your AWS Lambda function and deploy your function by running following command:

````shell
claudia create --region eu-central-1 --handler lambda.handler
````

After deploying your first function, you'll need to set AWS S3 as a trigger. To do so, run the following command:

```
claudia add-s3-event-source --bucket YOUR_BUCKET_NAME --prefix original/
```



## Tips

Here are a few tips that can help you to do this exercise:

- Your `lambda.js` file needs to export handler function (`exports.handler = someFunction`)
- Your handler function accepts 2 params: `event` and `context`, in this exercise you care only about the first parameter
- More tips are coming soon...

You can see our solution in a [code section](../code/exercise-01) of this repository.

---

[![Next](../assets/next.png)](./exercise-03.md)

or [go back](../exercises/exercise-01.md).
