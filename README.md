# legalist-api

Requirements

* API should have endpoints to return all objects (attorney, case, person)
* API should have endpoints to return one object given its id (attorney, case, person)
* API should implement caching (preferably on redis)
* API should be behind a webserver (preferably nginx) (preferably with replication)
* If possible postgres should be highly available
* API should be dockerized
* Code should be hosted somewhere and automatic deployment setup

Potential pipeline stages should be (I chose):

* Pulling code from version control system
* building images
* pushing them to registry
* running tests
* running linting or some sort of static analysis
* deploy them in select environment 

Out of the Schema I was able to do:

* Attorney: First Name, Last Name, Bar ID, State
* Person: First Name, Last Name
* Case: Title, case number, state


Out of the requirements I was able to do the following:

* API should have endpoints to return all objects (attorney, case, person)
* API should have endpoints to return one object given its id (attorney, case, person) 
* API should be behind a webserver (used nginx)
* API should be dockerized
* Code should be hosted somewhere and automatic deployment setup

Out of the Potential pipeline(used TravisCI) stages I was able to do:

*  Pull code from version control system
*  build images
*  run tests
*  push them to registry if build was successful
*  deploy them in select environment(AWS)

**AWS configuration:**

Create a new Application in elasticbeanstalk called "legalist-api" and in the App create a Web server environment called "Docker-env" with a Preconfigured platform called Multi-container Docker.

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





