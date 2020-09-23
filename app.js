// 引入模块
// var http = require("http");
// // fs 模块
// var fs = require("fs");

// http
//   .createServer(function (req, res) {
//      var pathname = req.url;
//      console.log(pathname,'pathname')
//      res.write("meiyou");
//      res.end();
//   }).listen(8001);

// 二 socketio方式
// const express = require('express')
// const app = express()
// var http = require('http').Server(app);
// var io=require('socket.io')(http);
// const port = 8080

// app.get('/', (req, res) => res.send('Hello World!222'))

// io.on('connection',function (socket) {
//     console.log('connection');
//     socket.emit('news', { hello: 'world' });
//       socket.on('my other event', function (data) {
//     console.log(data);
//   });
// })
// // io.on('connection', function(socket) {
// //     //接受消息
// //     socket.on('message', function (msg) {
// //         console.log('receive messge : ' + msg );
// //     });
    
// //     //发送消息
// //     socket.emit('message', 'hello');
    
// //     //断开连接回调
// //     socket.on('disconnect', function () { 
// //         console.log('socket disconnect');
// //     });
// //  });
 
// http.listen(port, () => console.log(`Example11 app listening on port ${port}!`))


// 三 ws方式
// let express = require('express')
// let app = express()
// app.use(express.static(__dirname))
// // http服务器
// app.listen(8080, () => {
//   console.log('point in 8080!')
// })

// let WebSocketServer = require('ws').Server
// // 用WS 模块启动一个websocket服务器，监听8888端口
// let wsServer = new WebSocketServer({
//   port: 8888
// })
// // 监听客户端的链接请求， 当客户端链接服务器的时候，就会触发connection事件
// // socket代表一个客户端，不是所有客户端共享的，而是每个客户端都要一个socket
// wsServer.on('connection', (socket) => {
//   console.log('客户端连接成功')
//   // 监听对方发送的消息
//   socket.on('message', (message) => {
//     console.log('接收到客户端的消息', message)
//     socket.send('服务器响应', message)
//   })
// })


// socket io方式
// var app = require('http').createServer(handler)
// var io = require('socket.io')(app);
// var fs = require('fs');

// app.listen(8080);

// function handler (req, res) {
//   fs.readFile(__dirname + '/index.html',
//   function (err, data) {
//     if (err) {
//       res.writeHead(500);
//       return res.end('Error loading index.html');
//     }

//     res.writeHead(200);
//     res.end(data);
//   });
// }

// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });

// express 
// var app = require('express')();
// var server = require('http').Server(app);
// var io = require('socket.io')(server);

// server.listen(8080);

// app.get('/', function (req, res) {
//   res.sendfile(__dirname + '/index.html');
// });
// // app.get('/', (req, res) => res.send('Hello World!222'))

// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });


// let express = require('express')
// let app = express()
// app.use(express.static(__dirname))
// // http服务器
// app.listen(8080, () => {
//   console.log('point in 8080!')
// })

// let WebSocketServer = require('ws').Server
// // 用WS 模块启动一个websocket服务器，监听8888端口
// let wsServer = new WebSocketServer({
//   port: 8080
// })
// // 监听客户端的链接请求， 当客户端链接服务器的时候，就会触发connection事件
// // socket代表一个客户端，不是所有客户端共享的，而是每个客户端都要一个socket
// //在线用户
// var onlineUser={};
// var onlineCount=0;
// wsServer.on('open', function open() {
//     console.log('connected');
//   });
// wsServer.on('close', function close() {
//     console.log('disconnected');
//   });
// wsServer.on('connection', (socket,req) => {
//   console.log('客户端连接成功')
// //   console.log('socket',socket)
// let ip = req.connection.remoteAddress;
// let port = req.connection.remotePort;
// const clientName = ip + port;
// console.log('%s is connected', clientName)
// // console.log('req',clientName)
// //   console.log('req',req.connection.remotePort)
//   // 监听对方发送的消息
//   socket.send('welcome'+clientName)
//   socket.on('message', (message) => {
//     // console.log('接收到客户端的消息', message)
//     console.log('received: %s from %s', message, clientName);
//     //  console.log(wsServer.clients,'222222')
//      wsServer.clients.forEach(client=>{
//          if(client.readyState === 1){
//              client.send(clientName+'->'+message)
//          }
//      })
//     socket.send(message)
//   })


  
// })


// var app = require('express')();
// var server = require('http').Server(app);
// var io = require('socket.io')(server);

// server.listen(8080);

// // app.get('/', function (req, res) {
// //   res.sendfile(__dirname + '/index.html');
// // });
// app.get('/', (req, res) => res.send('Hello World!222'))

// io.on('connection', function (socket) {
//        console.log('客户端连接成功')
//         socket.emit('login', {
//             id:socket.conn.id,
//             name:socket.conn.id,
//             msg:''
//         });
//       socket.on('message', function (data) {
//         socket.emit('login',data);
//       });
// });


var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);

app.get('/', function (req, res) {
  res.sendFile (__dirname + '/index.html');
});
// app.get('/', (req, res) => res.send('Hello World!222'))


//在线用户
var onlineUser={};
var onlineCount=0;

io.on('connection', function (socket) {
    console.log('新用户登录');
     //监听新用户加入
    socket.on('login',function (obj) {
        console.log(obj,'obj')
        socket.name=obj.userid;
          //检查用户在线列表
          if(!onlineUser.hasOwnProperty(obj.userid)){
            onlineUser[obj.userid]=obj.username;
            //在线人数+1
            onlineCount++;
        }
        //广播消息
        io.emit('login',{onlineUser:onlineUser,onlineCount:onlineCount,user:obj});
        console.log(obj.username+"加入了聊天室");
    })
  
     //监听用户发布聊天内容
     socket.on('message', function(obj){
        //向所有客户端广播发布的消息
        io.emit('message', obj);
        console.log(obj.username+'说：'+obj.content);
    });
});