#!/usr/bin/ruby
require 'ostruct'
require 'sqlite3'

#INFINITE LOOP 
loop do 

	puts"Discovering your network..."
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
        	Devices << device
	end

	puts "---- DEVICE LIST----"
	Devices.each{|a| puts a}

	Devices.each do |device| 	
		begin
			db= SQLite3::Database.open "database.sqlite"
        		puts "INSERT INTO AliveDevices VALUES(\'" + device.ip.to_s + "\',\'" + device.mac.to_s + "\',\'" + device.name.to_s + "\')"
        		db.execute "INSERT INTO AliveDevices VALUES(\'" + device.ip.to_s + "\',\'" + device.mac.to_s + "\',\'" + device.name.to_s + "\')"
        	rescue SQLite3::Exception => e
                	open('log.txt','w') do |f|
                        	f << "Exception Handled \n"+e.to_s
                	end
        	ensure
                	db.close if db
        	end
	end
#SLEEP For 1 minute
sleep(60)
end
