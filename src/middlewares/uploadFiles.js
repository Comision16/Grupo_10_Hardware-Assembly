const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination : (req,file, callback)=>{
        callback(null, './public/images/users')
    },
    filename :(req,file,callback)=>{
        callback(null, `avatar-${Date.now()}_users${path.extname(file.originalname)}`)
    }
});
const upload = multer({
    storage    
})
module.exports = upload;
