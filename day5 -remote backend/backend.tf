terraform {
  backend "s3" {
    bucket = "terraform-remotebackend-details"
    key    = "terraform/state_files"
    region = "ap-south-1"
  }
}
