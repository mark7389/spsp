console.log(Buffer.from('4AAQSkZJRgABAQEASABIAAD','base64'));
console.log(new Uint8Array(Buffer.from('4AAQSkZJRgABAQEASABIAAD','base64')))
let blob = new Blob(new Uint8Array(Buffer.from('4AAQSkZJRgABAQEASABIAAD','base64')),{contentType:'image/jpeg'});
module.exports = function(_base,cb){
        if(_base.indexOf('data:image') > -1){
            let base64data = _base.split(",")[1];
            let contentType = _base.split(":")[1].split(";")[0];
            let byteChars = atob(base64data);

        }
}