1.初始化

npm init 
2.安装express 

cnpm install --save-dev express 
3.安装实时化插件，更改了浏览器会自动刷新

 cnpm install -g browser-sync
 使用 ：browser-sync start --server --files "E:\xiao\xm\bluenic"

4.express修改热加载：

安装supervisor，cnpm install supervisor -g，修改项目自动更新
启动项目 supervisor app.js
 

5.ws方式  服务端通过 on 来兼听 send 来发送，客户端onopen连接成功，onmessage来监听
  socketio方式，前端必须引入socket.io.js 客户端on监听事件，emit 发送事件和参数，
