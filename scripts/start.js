const process = require('child_process');

process.spawn('ng',["serve","--proxy-config","proxy.config.json"],{
    stdio:"inherit",
    shell:true,
    
});