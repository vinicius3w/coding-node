curl "http://localhost:3000/profile"
curl -H "Content-Type: application/json" -X POST -d '{"first_name": "Vinicius", "last_name": "Garcia"}' "http://localhost:3000/profile"
sleep 1
curl -H "Content-Type: application/json" -X PUT -d '{"first_name": "Douglas", "last_name": "Adams"}' "http://localhost:3000/profile/0"
sleep 1
curl "http://localhost:3000/profile?id=0"
sleep 1
curl -X DELETE "http://localhost:3000/profile/0"