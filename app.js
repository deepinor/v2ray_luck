/**
 * 入口文件
 */

/**
 * 开发依赖
 */
let path = require('path')
let util = require('./util')
let base64 = util.base64
let readSync = util.readSync
let writeSync = util.writeSync

let BUILD_DIR = 'dist' // 构建目录
let ENTRY_FILE = './node.txt' // SS(R)入口
let str = readSync(ENTRY_FILE)

let checker = item => {
    return item => item.includes('ssr://') || item.includes('ss"//')
}

// Map all the item include `ssr://` and serialize those items
let result = str.split('\n\n')
                .filter(item => checker(item))
                .join('\r\n')

writeSync(path.resolve(__dirname, BUILD_DIR, 'index.html'), base64(result))