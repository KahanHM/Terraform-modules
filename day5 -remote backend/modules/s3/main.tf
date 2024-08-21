terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.06"
    }
  }
}

resource "aws_s3_bucket" "bucket" {
   bucket = var.bucket_name
  
}