terraform {
  backend "s3" {
    bucket = "terraform-remotebackend-details"
    key    = "Workspace"
    region = "ap-south-1"
  }
}
