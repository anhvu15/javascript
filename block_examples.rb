# 3.times { puts "Hello world"  }
# counter = 0;
# loop do 
# 	puts "hello" 
# 	counter +=1
# 	break if counter == 10
# end
# [1,2,3].each {|number| puts "Number: #{number}"}
def get_name
	print "Enter your name:"
	name = gets.chomp
	yield
end

get_name do
	puts "That's a cool name" 
end