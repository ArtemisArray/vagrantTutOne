script = <<SCRIPT
apt-get update
apt-get install -y curl
 
#install Node
cd /tmp
curl -o node-v0.10.26-linux-x64.tar.gz http://nodejs.org/dist/v0.10.26/node-v0.10.26-linux-x64.tar.gz
cd /usr/local && tar --strip-components 1 -zxf /tmp/node-v0.10.26-linux-x64.tar.gz
 
#install Mongo
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | tee /etc/apt/sources.list.d/mongodb.list
apt-get update
apt-get install -y mongodb-10gen
SCRIPT
 
Vagrant.configure("2") do |config|
  config.vm.box = "hashicorp/precise64"
  config.vm.provision :shell, :inline => script
  config.vm.network :forwarded_port, host: 4567, guest: 3000
end