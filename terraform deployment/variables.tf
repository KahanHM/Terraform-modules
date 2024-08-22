


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

variable "associate_public_ip_address_value" {
  description = "associate_public_ip_address for the ec2 "
  type        = bool
  default     = true
}
variable "security_groups_value" {
  description = "security_groups for ec2 "
  type        = string
}


variable "volume_size_value" {
  description = "EBS volume_size for ec2 "
  type        = number
  default     = "8"
}

variable "volume_type_value" {
  description = "security_groups for ec2 "
  type        = string
  default     = "gp3"
}

variable "user_data_value" {
  description = "security_groups for ec2 "
  type        = string
  default     = "<<-EOF EOF"
}

variable "key_pair_path" {
  type = string

}