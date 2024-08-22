terraform {
  backend "s3" {
    bucket = "terraform-remotebackend-details"
    key    = "terraform/catisfy"
    region = "ap-south-1"
  }
}
