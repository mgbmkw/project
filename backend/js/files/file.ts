import * as fs from 'fs'

export function getAllAlbums(callback: any) {
  fs.readdir("./uploads", function (err, files) {
    if (err) {
      callback("没有找到uploads文件", null)
    }
    var allAlbums: any = [];
    (function iterator(i) {
      if (i == files.length) {
        //遍历结束
        // console.log(allAlbums)
        callback(null, allAlbums)
        return
      }
      fs.stat("./uploads/" + files[i], function (err, stats) {
        if (err) {
          callback("找不到文件" + files[i], null)
        }
        if (stats.isDirectory()) {
          allAlbums.push(files[i])
        }
        iterator(i + 1)
      })
    })(0)
  })
}


//通过文件名，得到所有图片
export function getAllImagesByAlbumName(albumName: any, callback: any) {
  fs.readdir("./uploads/" + albumName, function (err, files) {
    if (err) {
      callback("没有找到uploads文件", null)
      return
    }
    var allImages: any = [];
    (function iterator(i) {
      if (i == files.length) {
        //遍历结束
        // console.log(allImages)
        callback(null, allImages)
        return
      }
      fs.stat("./uploads/" + albumName + "/" + files[i], function (err, stats) {
        if (err) {
          callback("找不到文件" + files[i], null)
          return
        }
        if (stats.isFile()) {
          allImages.push(files[i])
        }
        iterator(i + 1)
      })
    })(0)
  })
}