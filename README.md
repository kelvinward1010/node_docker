fix docker run host post: docker run -v D:\Docker\node_docker:/usr/src/app -p 80:80 -p 3000:80 -d --name node-app node-app-image

initals infor: -p 80:80 => "80" fisrt post is hot port in browser
                        => ":80" after first post is hot port in container post docker

docker build image: docker build -t image_name .

if node_modules does not exits: add a command: -v /app/node_modules when you run docker container

Fix: used: Ignix