
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.06"
    }
  }
}

resource "aws_instance" "my" {
    ami = var.ami_value
    instance_type = var.instance_type_value
    subnet_id              =  var.subnet_id_value
    key_name               = var.key_name_value
    associate_public_ip_address = var.associate_public_ip_address_value
    security_groups        = [var.security_groups_value]


  root_block_device {
    volume_size = var.volume_size_value
    volume_type = var.volume_type_value 
    delete_on_termination = true
  }
    tags = {
    Name = var.Name_value
  }


  # User data
  user_data = var.user_data_value
  }
    


