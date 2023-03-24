const express = require('express');
const compression = require('compression');
const app = express();
const campsiteRouter = require('./routes/campsiteRouter');

app.use('/campsites', campsiteRouter);
app.use(compression());

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('This is an Express Server');
});

exports.myExpressApp = app;

/*
//Link to the router funtion deployed via gcloud:
//https://us-central1-nucampfunctions-381616.cloudfunctions.net/myExpressApp/campsites
//How to deploy via Google Cloud:
1> enable APIs: Cloud Build API, Cloud Functions API 
2> install gcloud CLI and Python 3
3> As needed, add the path to gcloud cli to your PATH environment variable:
    echo $PATH (/c/Users/HaJeong/AppData/Local/Google/Cloud SDK/google-cloud-sdk/bin)
    export PATH=$PATH:/path/to/gcloud/cli 
4> npm init (entrypoint=> index.js)
5> npm install @google-cloud/functions-framework
6> gcloud auth login
7> gcloud config get-value project (or gcloud config set project <project ID>)
8> npx @google-cloud/functions-framework --target=myExpressApp (<= to test app locally)
9> curl -X GET http://localhost:8080/campsites (<= to debug)
10> gcloud functions deploy myExpressApp --trigger-http --runtime nodejs12 --allow-unauthenticated
11> curl -X GET "url of deployed function" + /campsites/2
*/