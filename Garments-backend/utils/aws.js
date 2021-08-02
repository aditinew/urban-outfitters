var AWS = require('aws-sdk');
var fs = require('fs');
var multer = require('multer')
var multerS3 = require('multer-s3')
// // Set the Region 



AWS.config.update({
    accessKeyId: 'AKIAIAN4WTE3HEOAVF7A',
    secretAccessKey: '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', 
    region: 'us-east-1'
});


s3 = new AWS.S3({ apiVersion: '2006-03-01' });

// var uploadParams = { Bucket: 'internsns', Key: 'JioRooms', Body: '' };
// var file = "./test.png"; ///////////////////// file path
// var fileStream = fs.createReadStream(file);
// fileStream.on('error', function (err) {
//     console.log('File Error', err);
// });
// uploadParams.Body = fileStream;
// var path = require('path');
// uploadParams.Key = path.basename(file);

// // call S3 to retrieve upload file to specified bucket
// s3.upload(uploadParams, function (err, data) {
//     if (err) {
//         console.log("Error", err);
//     } if (data) {
//         console.log("Upload Success",data.Location);
//     }
// });



var upload = multer({

    storage: multerS3({

        s3: s3,

        bucket: 'ginfomediaadm',

        acl: 'public-read',

        contentType: multerS3.AUTO_CONTENT_TYPE,

        serverSideEncryption: 'AES256',


        metadata: function (req, file, cb) {

            cb(null, { fieldName: file.fieldname });

        },

        key: function (req, file, cb) {

            cb(null, Date.now().toString())

        }

    })

})

module.exports = { upload }
