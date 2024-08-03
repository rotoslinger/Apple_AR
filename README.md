# Live Demo
[Apple_AR](https://rotoslinger.github.io/Apple_AR/)


# Install notes for setting up on a new computer for the first time

#### Install npm ####
-[Download and install Node.js](https://nodejs.org/en/download/package-manager)
-[Download and install npm](https://github.com/nodesource/distributions)



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
# if you want to test on a mobile device, 

# this obviously starts you at index.html
# if you have multiple examples, like three.js, and would like to jump to a specific example, append a relative path after your host domain:
    http:localhost:5175/examples/webgl_animation_keyframes.html


#### find your network the hard way
# in terminal run:
    ipconfig
# find the IPv4 Address, this is your IP address
# append the address like so:
    http://<YOUR_COMPUTER'S_IP>:<YOUR_DEV_SERVER_PORT_NUMBER>

#### USDZ maya export windows nonsense ####

# because I am creating my files on windows I have to jump through some nonsensical hoops just to get everything in a proper format for three.js

# In the Maya docs Autodesk promises that giving the "File name:" a .usdz ending (so oni.usdz) in the "File name:" dialogue is all you need to do to export as usdz. (This won't work in three.js)

# What actually happens is it zips a usdc (instead of usda), into a usdz even if you have the "Asci" option set.

# Three cannot load these usdc (usd crate) zipped files

# USD itself 


### Notes to self:
#### If you need admin privledges, right click on terminal, click on "Run As Administrator":
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
