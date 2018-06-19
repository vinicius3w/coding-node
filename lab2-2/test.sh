echo -e "\n\nGET First POST end http headers\n"
curl localhost:3000/posts?postId=0 #-X GET -iv

echo -e "\n\nAPPEND new POST #1\n"
curl localhost:3000/posts -X POST -d '{"name": "This is a new insert in the POST database","url": "https://github.com/timoleo23","text": "This is the text of my new blog post.","comments": [{ "text": "NodeJS is great !"},{ "text": "Express is Fun"}]}' -H 'Content-Type: application/json'

echo -e "\n\nGET Added POST #1\n"
curl localhost:3000/posts?postId=1 -X GET

echo -e "\n\nUPDATE POST #0\n"
curl localhost:3000/posts/0 -X PUT -d '{"name": "This is an UPDATE of the FIRST POST","url": "https://github.com/timoleo23","text": "This is the text of my new blog post.","comments": [{ "text": "NodeJS is great !"},{ "text": "Express is Fun"}]}' -H 'Content-Type: application/json'

echo -e "\n\nGET POST #0  for UPDATES\n"
curl localhost:3000/posts?postId=0 #-X GET

echo -e "\n\nDELETE POST #0\n"
curl localhost:3000/posts/0 -X DELETE


echo -e "\n\nCheck that POST #1 is now POST #0\n"
curl localhost:3000/posts?postId=0 #-X GET

echo -e "\n\nGET All comments First post\n"
curl localhost:3000/posts/0/comments/ #-X GET

echo -e "\n\nAPPEND new Comment to Post #0\n"
curl localhost:3000/posts/0/comments/ -X POST -d '{ "text": "My NEW comment"}' -H 'Content-Type: application/json'

echo -e "\n\nUPDATE Comments #1 of Post #0\n"
curl localhost:3000/posts/0/comments/1 -X PUT -d '{ "text": "My UPDATED comment"}' -H 'Content-Type: application/json'

echo -e "\n\nDELETE Comment #1 of POST #0\n"
curl localhost:3000/posts/0/comments/1 -X DELETE