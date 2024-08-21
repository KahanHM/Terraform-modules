


provider "aws" {
    region = "ap-south-1"
  
}

module "s3" {
  source      = "../modules/s3"
  bucket_name = "hi-iam-kahan"

}