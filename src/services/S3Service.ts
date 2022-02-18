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

export const genereteUploadURL = async (imageName: String, isDelete? : boolean) => {
  const name = imageName.replace(/\s/g, "_");
  const params = ({
    Bucket: bucketName,
    Key: name,
    Expires: 60
  });

  const uploadURL = isDelete ? await s3.getSignedUrlPromise('deleteObject', params) : await s3.getSignedUrlPromise('putObject', params);
  return uploadURL;
}

export const putImageOnBucket = async (imageName: String, file: File): Promise<string> => {
  const url = await genereteUploadURL(imageName);
  await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    body: file
  });
  return url.split("?")[0];
}

export const deleteImageFromBucket = async (imageName: String) => {
  const url = await genereteUploadURL(imageName, true);
  const result = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
  console.log(result);
}