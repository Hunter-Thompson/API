#!/bin/bash

curl -v --data "firstname=hunterasd&lastname=thompsonasd&barid=12312&state=urmumasd" http://localhost:3000/createattorney


wget --post-data "firstname=hunterasdss&lastname=thompsosssnasd&barid=12312312&state=urmumasasdd" http://localhost:3000/createattorney

curl -v http://localhost:3000/attorney

wget -v http://localhost:3000/attorney