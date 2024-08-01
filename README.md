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
    npx vite
# you will get an http:localhostxxxx, copy this to your debugging browser
# then, in the same terminal you started vite in, run:    
    --host 
# this obviously starts you at index.html
# if you have multiple examples, like three.js, and would like to jump to a specific example, append a relative path after your host domain:
    localhost:5175/examples/webgl_animation_keyframes.html
