# 1st-router-deploy-via-gcloud

Link to the router funtion deployed via gcloud:<br />
https://us-central1-nucampfunctions-381616.cloudfunctions.net/myExpressApp/campsites<br /><br />

**Procedure to deploy via Google Cloud: <br /><br />
1> enable APIs: Cloud Build API, Cloud Functions API <br />
2> install gcloud CLI and Python 3 <br />
3> As needed, add the path to gcloud cli to your PATH environment variable: <br /><br />
    echo $PATH (ex. /c/Users/HaJeong/AppData/Local/Google/Cloud SDK/google-cloud-sdk/bin) <br />
    export PATH=$PATH:/path/to/gcloud/cli  <br /><br />
4> npm init (entrypoint=> index.js) <br />
5> npm install @google-cloud/functions-framework <br />
6> gcloud auth login <br />
7> gcloud config get-value project (or gcloud config set project "Put your project ID here") <br /> 
8> npx @google-cloud/functions-framework --target=myExpressApp (<= to test app locally) <br />
9> curl -X GET http://localhost:8080/campsites (<= to debug) <br />
10> gcloud functions deploy myExpressApp --trigger-http --runtime nodejs12 --allow-unauthenticated <br />
11> curl -X GET "url of deployed function" + /campsites/2 <br />
