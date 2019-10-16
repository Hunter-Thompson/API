#!/bin/bash

curl -v --data "firstname=hunterasd&lastname=thompsonasd&barid=12312&state=urmumasd" http://localhost:3000/createattorney
curl -v http://localhost:3000/attorney