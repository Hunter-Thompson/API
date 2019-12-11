sleep 10

curl --data "firstname=Hunter&lastname=Thompson&barid=202&state=Colorado" http://localhost:3050/api/createattorney

curl  http://localhost:3050/api/attorney
