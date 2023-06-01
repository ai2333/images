import { $ } from 'zx'
$.verbose = false

const files = fs.readdirSync('.')
// console.log(files)

const 排除列表 = new Set(['.mjs','.sh','.ps1'])

let count = 0

files.forEach(element => {
    if(!排除列表.has(path.extname(element))){
        count = count + 1
        const 前缀 = path.basename(element, path.extname(element))
        const 后缀 = path.extname(element)
        fs.renameSync(element,count+后缀)
    }
})