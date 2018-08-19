const process = require('child_process');

process.spawn('nodemon',['server,js'],{
    stdio:'inherit',
    cwd:"./",
    shell:true
})