#!/usr/bin/ruby
require 'ostruct'
require 'sqlite3'
call=OpenStruct.new

ARGF.each_line do |line|
	#FIND PROTOCOL
	if line.scan(/http/).count>1
		call.protocol="HTTP"
	end
	if line.scan(/https/).count>1
		call.protocol="HTTPS"
	end
	
	#FIND Origin IP
	call.origin=line.scan(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/)[0]
	#FIND Destination IP
	call.destination=line.scan(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/)[1]
	
	#FIND Host
	call.destinationHost=line.split("]")[-1]
	puts call
	puts "INSERT INTO comunication VALUES(" + call.origin.to_s + "," + call.destination.to_s + "," + call.destinationHost.to_s + "," + Time.now.to_s + ")"
	begin 
		db= SQLite3::Database.open "database.sqlite"
		puts "INSERT INTO comunication VALUES(\'" + call.origin.to_s + "\',\'" + call.destination.to_s + "\',\'" + call.destinationHost.to_s + "\',\'" + Time.now.to_s + "\')"
		db.execute "INSERT INTO comunication VALUES(\'" + call.origin.to_s + "\',\'" + call.destination.to_s + "\',\'" + call.destinationHost.to_s + "\',\'" + Time.now.to_s + "\')"
	rescue SQLite3::Exception => e
		open('log.txt','w') do |f|
			f << "Exception Handled \n"+e.to_s
		end
	ensure 
		db.close if db
	end
	
end
