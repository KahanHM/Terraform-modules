output "instance_public_ip" {
  value = aws_instance.my.public_ip
  description = "The public IP address of the EC2 instance."
}
