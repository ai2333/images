import { $ } from 'zx'
$.verbose = false

const files = (await $`ls`).stdout.trim().split('\n')

// *.png|jpg ---->  *.gif 
function newName(x) {
    const ext = path.extname(x)
    const base = path.basename(x, ext)
    return base + '.gif'
}

files.forEach(element => {
    if (path.extname(element) !== ".gif" && path.extname(element) !== ".mjs" && path.extname(element) !== ".ps1") {
        fs.appendFileSync('transform.ps1', `ffmpeg -i ${element} ${newName(element)}\n`,'utf8')

    }

})
