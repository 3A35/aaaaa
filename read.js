
var fs = require('fs')
fs.readFile('./hello.txt', function (error, data) {
  // 若錯誤 error 為一個物件，則會在這邊觸發內部程式碼，作為簡單的錯誤處理
  if (error) {
      console.log('讀取檔案失敗')
      return
  }
  console.log(data)
})