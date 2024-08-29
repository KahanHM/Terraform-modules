


#try to use same name of module variable names 



variable "Name_value" {
  description = "ec2 name"
  type        = string

}



variable "ami_value" {
  description = "ec2 AMI id"
  type        = string

}

variable "instance_type_value" {
  description = "ec2 type"
  type        = string
}

variable "subnet_id_value" {
  description = "subnet_id "
  type        = string
}

variable "key_name_value" {
  description = "key_pair name for ssh login  "
  type        = string
}

variable"vpc_security_group_ids_value"{
description = "ec2 sg group "
 type = list(string)
}

variable "volume_size_value" {
  description = "volume_size_value "
  type        = string
}