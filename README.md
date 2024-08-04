# Live Demo
[Apple_AR](https://rotoslinger.github.io/Apple_AR/)

# Install Notes

### For A New Computer ###

#### 1. Install npm ####

* [Node.js installer download](https://nodejs.org/en/download/package-manager)

* [Node.js source code](https://github.com/nodesource/distributions)

#### 2.  Install Three ####
    npm install three --save-dev

#### 3.  In terming install typescript: ####
    npm install --location=global typescript

    ## To Check Version
    tsc -v

## For A New Project

#### 1. Install Vite, Create Project, Package, etc: ####
    npm create vite@latest

#### 2. Follow install instructions
Prompts will pop up and ask for your input:
* Project Name is the repo name
* Package Name -- I usually do repo name lowercase
* Choose Framework -- Vanilla (it is default)
* Choose Variant -- Typescript (it is default)
####
When prompted, type the following:

    npm install


#### 3.  In terminal, in your root directory, run:
    npx vite --host

you should see two very important lines:

  ➜  Local:   `http://localhost:9000/`
  
  ➜  Network: `http://00.00.00.00:9000/`

The lower address will be your IP address for testing on a mobile device



### Three.js usdz limitations
Quads are not well not supported, and subdivided surfaces even less so. Three has attempted to fix this, but depending on complexity your exported mesh can appear mangled in renders.

* Set Subdivision Method to None(Polygonal Mesh)
* Triangulate your meshes before exporting

### USDZ maya export - Windows nonsense ####

If you use maya to export your USD files on a windows machine you will encounter issues loading with three.js.

Instructions in the maya docs say that to export USDZ format you simply add".usdz" to the end of your file name in the "File name:" dialogue.  For example, oni would be - oni.usdz. Once exported, if you try to load this file using the three.js usdz loader, the file will never display and your webpage will error out.

In you browser's debug console the error output will inform you that usdc is not supported. Even if export with the "Ascii" option, the file will still be output as a zipped usdc.  Three.js needs a zipped usda.

One hacky way around this is to export a usda with the Ascii option, then use another program to compress this file.  If using 7zip, you must specify the file type as a zip format.  You also need to make sure the compression is set to level 0.  You can read about this in the usdz section of the online usd docs.


Quicktip for debugging individual urls within your root:

    # Append a relative path to your root url after your host domain:
    http:localhost:9000/example_directory/example.html




### Notes to self:
#### If you need admin privledges, right click on terminal, click on "Run As Administrator":
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
