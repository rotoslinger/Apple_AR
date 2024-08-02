# install notes for setting up for the first time



#### If you need admin privledges, right click on terminal, click on "Run As Administrator" ####
# Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

#### Install Three ####
npm install three --save-dev


#### In terming install typescript: ####
npm install --location=global typescript
#### Check Version ####
tsc -v

#### Install Vite, Create Project, Package, etc: ####
npm create vite@latest

## follow install instructions ##
    # project name -- is the repo name
    # package name -- I usually do repo name lowercase
    # Choose Framework -- Vanilla (it is default)
    # Choose Variant -- Typescript (it is default)
    ## When prompted, type the following:
    # npm install


# in terminal run:
    npx vite --host

# you should see two very important lines:
  ➜  Local:   http://localhost:9000/
  ➜  Network: http://00.00.00.00:9000/

# copy the Local address to a browser, hit enter, and give camera permission
# if you want to test on a mobile device, open a mobile browser and type out the Network, don't be lazy and send it to yourself in a message, that is lame and unsecure (like me).

# this obviously starts you at index.html
# if you have multiple examples, like three.js, and would like to jump to a specific example, append a relative path after your host domain:
    http:localhost:5175/examples/webgl_animation_keyframes.html


#### find your network the hard way
# in terminal run:
    ipconfig
# find the IPv4 Address, this is your IP address
# append the address like so:
    http://<YOUR_COMPUTER'S_IP>:<YOUR_DEV_SERVER_PORT_NUMBER>



# by the way:
# if your network looks like this:
  ➜  Network: http://8.8.8.8:9000/
# then you are google, and you invented the internet (this is a joke, your mom obviously invented the internet) (seriously though, google did not invent the internet)

