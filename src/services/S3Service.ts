import aws from 'aws-sdk';

const region = 'us-east-2';
const bucketName = 'painting-files-bucket';
const accessKeyId = process.env.REACT_APP_ACCESS_KEY_AWS;
const secretAccessKey = process.env.REACT_APP_SECRET_ACCESS_KEY_AWS;

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4'
});

export const genereteUploadURL = async (imageName: String) => {
  const name = imageName.replace(/\s/g, "_");
  const params = ({
    Bucket: bucketName,
    Key: name,
    Expires: 60
  });

  const uploadURL = await s3.getSignedUrlPromise('putObject', params);
  return uploadURL;
}