#API

Pipeline:

*  Pull code from version control system
*  build images
*  run tests
*  push them to registry if build was successful
*  deploy them in select environment(AWS)

**AWS configuration:**

Create a new Application in elasticbeanstalk called "api" and in the App create a Web server environment called "Docker-env" with a Preconfigured platform called Multi-container Docker.

After it has been created take the name of the S3 storage bucket(Looks like this: "Using elasticbeanstalk-us-east-2-........ as Amazon S3 storage bucket for environment data) and add it as an environment variable in TravisCI

**To run locally:**

```
docker compose up --build
```

**To test using TravisCI:**

Enable Travis CI access to github, enable the REPO.
Add DOCKER_PASSWORD and DOCKER_ID environment variables so that TravisCI can login to Dockerhub.

ADD $AWS_ACCESS_KEY, $AWS_BUCKET_NAME and $AWS_SECRET_KEY environment variables so that TravisCI can login to AWS and start the app.

Push first .travis.yml to the repo

Then push all the rest of the code to the repo so it triggeres a test on TravisCI.

**Details of the test:**

Currently TravisCI runs a custom bash script as a way to test the API. The script creates an attorney by posting to the API, then it queries all the existing attorneys. If these tests pass, TravisCI will push the docker images to Dockerhub.

**Example queries:**

```
#Show all attorneys
curl localhost:3050/api/attorney
[{"id":1,"firstname":"hunter","lastname":"thompson","barid":202,"state":"Colorado"}
```

```
#Create an attorney
curl --data "firstname=Hunter&lastname=Thompson&barid=202&state=Colorado" http://localhost:3050/api/createattorney
Person added with ID:
```

```
#Delete an attorney
curl -X "DELETE" http://localhost:3050/api/deleteattorney/1

Attorney deleted with ID:
```





