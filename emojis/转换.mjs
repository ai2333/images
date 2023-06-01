import { $ } from 'zx'
$.verbose = false

const files = (await $`ls`).stdout.trim().split('\n')

// *.png|jpg ---->  *.gif 
function newName(x) {
    const ext = path.extname(x)
    const base = path.basename(x, ext)
    return base + '.gif'
}

let count = 0

files.forEach(element => {
    if (path.extname(element) !== ".gif" && path.extname(element) !== ".mjs" && path.extname(element) !== ".sh") {
        fs.appendFileSync('列表.sh', `ffmpeg -i ${element} ${newName(element)} -y \n`,'utf8')
        count=count+1
        fs.appendFileSync('列表.sh', `mv ${element} ~/Pictures/emojis-bak\/\n`,'utf8')

    }

})

await $`bash 列表.sh`

fs.writeFileSync('列表.sh','')


if(count==0){
     console.log('没有要转换的文件')
}else{
    console.log(`转换了${count}个文件`)
}
