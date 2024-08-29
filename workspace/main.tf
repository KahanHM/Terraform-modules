provider "aws" {
  region = "ap-south-1"

}

module "workspace" {
  source                       = "../modules/ec2"
  instance_type_value          = var.instance_type_value
  key_name_value               = var.key_name_value
  Name_value                   = var.Name_value
  ami_value                    = var.ami_value
  subnet_id_value              = var.subnet_id_value
  vpc_security_group_ids_value = var.vpc_security_group_ids_value
  volume_size_value   = var.volume_size_value   
}