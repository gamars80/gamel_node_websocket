const ws = new WebSocket('ws://localhost:7071/ws');

ws.onmessage = (websocketMessage) => {
    console.log(websocketMessage);
    console.log(websocketMessage.data);
}

document.body.onmousemove = (event) => {
    const messageBody  = {
        x: event.clientX,
        y: event.clientY
    }

    ws.send(JSON.stringify(messageBody));
}