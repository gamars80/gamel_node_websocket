# Awesome Project Build with Sequelize

Steps to run this project:

1. Run `node server.js` command
2. graphiql : http://localhost:port/graphql


# 클라이언트와 서버 폴더로 분리
    서버에 ws 패키지 설치

    서버와 클라이언트 handshake 하기

    클라이언트 js에 const ws = new WebSocket('ws://localhost:7071/ws');

    서버 js에 
    1.const WebSocket = require('ws');
    2.const wss = new WebSocket.Server({port:7071});




