terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}


provider "aws" {
  region = "ap-south-1"
}

resource "aws_iam_user" "terraform_user" {
  name = var.iam_value

}
resource "aws_iam_group" "Terraform" {
  name = "Terraform"

}

# resource "aws_iam_group_policy" "terraform_user" {
#   name  = "user"
#   group = aws_iam_group.Terraform.name

#   # Terraform's "jsonencode" function converts a
#   # Terraform expression result to valid JSON syntax.
#   policy = jsonencode({
#     Version = "2012-10-17"
#     Statement = [
#       {
#         Action = [
#           "ec2:Describe*", #this is a inline policy so we don't need to attached the arn
#         ]
#         Effect   = "Allow"
#         Resource = "*"
#       },
#     ]
#   })
# }


#if need to destroy the group detach the policy

resource "aws_iam_user_group_membership" "user" {
  user = aws_iam_user.terraform_user.name
  groups = [
    aws_iam_group.Terraform.name
  ]
  
}



#custom policy we need to add arn in the attach time and remove before destroy

resource "aws_iam_group" "admins" {
  name = "admins"
}

resource "aws_iam_policy" "admin_policy" {
  name   = "admin-policy"
  path   = "/"
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = [
          "s3:ListBucket",
          "s3:GetObject",
        ]
        Effect   = "Allow"
        Resource = "*"
      },
    ]
  })
}




























