# Awesome Project Build with Sequelize

Steps to run this project:

1. Run `node server/index.js` command


# 클라이언트와 서버 폴더로 분리
    서버에 ws 패키지 설치 

    클라이언트 : Native Websocket 객체 사용 , 서버 : ws 모듈사용

    서버와 클라이언트 handshake 하기 : 최초 handshake 할때만 http 통신이 일어난다

    클라이언트 js에 const ws = new WebSocket('ws://localhost:7071/ws');

    서버 js에 
    1.const WebSocket = require('ws');
    2.const wss = new WebSocket.Server({port:7071});


# Socket IO 사용해보기
    위와 차이점은 : 같은 모듈을 사용하기에 동일한 인터페이스 환경 제공
    Node.js 에서 Websocket을 사용할때 훨씬 더 편하게 사용할수 있게 만들어 주는 모듈
    Automatic reconnection 장점
    Packet buffering : 클라이언트가 연결 해제되면 패킷이 자동으로 버퍼링되고 다신 연결되면 전송
    Broadcasting
    Multiplexing(다중화) : 네임스페이스

    on : 보내주는 emit: 받아주는
