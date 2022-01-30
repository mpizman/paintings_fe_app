import aws from 'aws-sdk';
import Constants from './Constants';

const region = 'us-east-2';
const bucketName = 'painting-files-bucket';
const accessKeyId = Constants.ACCESS_KEY_AWS;
const secretAccessKey = Constants.SECRET_ACCESS_KEY_AWS;

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: '4'
});

export const genereteUploadURL = async (imageName: String) => {
  imageName.replace(/\s/g, "_");
  const params = ({
    Bucket: bucketName,
    Key: imageName,
    Expires: 60
  });

  const uploadURL = await s3.getSignedUrlPromise('putObject', params);
  return uploadURL;
}