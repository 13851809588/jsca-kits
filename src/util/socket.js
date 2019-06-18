var websock = null;
//作为获取数据的回调对象存储
var messageList = {};
const ws_url = "ws://127.0.0.1:9005/";

function init () {
  websock = new WebSocket(ws_url)
  websock.onmessage = function (e) {
    websocketOnmessage(e)
  }
  websock.onclose = function (e) {
    websocketClose(e)
  }
  websock.onopen = function () {
    websocketOpen()
  }

  websock.onerror = function () {
    console.log('WebSocket连接发生错误')
  }
}

const sendMsg = function(data, callback) {
  const funcName = data.method;
  if (websock.readyState === websock.OPEN) {
    //存储事件
    messageList[funcName] = callback;
    // 若是ws开启状态
    websocketSend(data)
  } else if (websock.readyState === websock.CONNECTING) {
    // 若是 正在开启状态，则等待1s后重新调用
    setTimeout(function () {
      sendMsg(data, callback)
    }, 1000)
  } else {
    // 若未开启 ，则等待1s后重新调用
    setTimeout(function () {
      sendMsg(data, callback)
    }, 1000)
  }
}

// 数据接收
function websocketOnmessage (e) {
  //处理各种推送消息
  const message = JSON.parse(e.data);
  const funcName = message.fucName;
  //执行回调
  messageList[funcName](message);
}

// 数据发送
function websocketSend (data) {
  websock.send(JSON.stringify(data))
}

// 关闭
function websocketClose (e) {
  console.log('connection closed (' + e + ')')
}

// 创建 websocket 连接
function websocketOpen (e) {
  console.log('连接成功')
}

init()

// 将方法暴露出去
export {
  sendMsg
}