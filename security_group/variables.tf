variable "name" {
  description = "Name of the security group"
  type        = string
}

variable "description" {
  description = "Description of the security group"
  type        = string
}

variable "vpc_id" {
  description = "VPC ID where the security group will be created"
  type        = string
}

variable "ingress_from_port" {
  description = "Ingress from port"
  type        = number
}

variable "ingress_to_port" {
  description = "Ingress to port"
  type        = number
}

variable "ingress_protocol" {
  description = "Ingress protocol (e.g., tcp)"
  type        = string
}

variable "ingress_cidr_blocks" {
  description = "CIDR blocks for ingress traffic"
  type        = list(string)
}

variable "egress_from_port" {
  description = "Egress from port"
  type        = number
}

variable "egress_to_port" {
  description = "Egress to port"
  type        = number
}

variable "egress_protocol" {
  description = "Egress protocol (e.g., tcp)"
  type        = string
}

variable "egress_cidr_blocks" {
  description = "CIDR blocks for egress traffic"
  type        = list(string)
}

variable "tags" {
  description = "Tags to apply to the resources"
  type        = map(string)
  default     = {}
}