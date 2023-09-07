const WebSocket = require('ws'); // wsライブラリをインポート

// WebSocket サーバーのアドレスを指定
const serverAddress = 'ws://localhost:3000';

// WebSocketサーバーを作成
const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', (ws) => {
    console.log('Client connected');
    
    // クライアントからのメッセージを受信したら適切な処理を実行
    ws.on('message', (message) => {
      console.log(`Received: ${message}`);
      // ここでPC上の表示を更新する処理を実行
    });
  
    // クライアントが切断した場合の処理
    ws.on('close', () => {
      console.log('Client disconnected');
    });
  });