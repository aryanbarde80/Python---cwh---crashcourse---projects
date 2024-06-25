GO TO TALWIND CLI.

GO TO TERMINAL AND RUN COMMAND "node -v", this gives error bcoz node is not installed in the system.

Install nodejs, download(LTS).

Now it is good to go, check " node -v " on terminal and if it works fine, we are good to go, we just need to install node js not needed knowledge of it.

We will create two files, one for distribution that we can give to prodection and other src in which we will put our source code.

First command is not needed, enter second command to terminal.
npx tailwindcss init ->> npm stands for node packet executor, talwind css utility, initialize.

Kuch nhi bs run both the commands on terminal.

ctrl+, to open settings ->> this is a shortcut in vscode

Now after adding step one in talwind.config.js file, open terminal and run the command number 4 from copying it from talwind css website. Note ->> folder name should be like this only so that direct command will work other wise we have to change the relative path in command. 

->> npx tailwindcss -i ./src/input.css -o ./dist/style.css   <<-

use space+--watch to see continuous changes in it.

note point is that ki yeh command baar baar run hota hain and style.css me iski css continuously add hoti rahegi.

now go to talwind css and change index to *.

NOW TO USE TALWIND CSS FOR DEVELOPMENT JUST GO TO DOCS AND SEACH WHAT YOU WANT LIKE TEXT-SIZE AND YOU WILL GET WHICH CLASS TO USE.

TASK ONE IS TO CENTER THE TEXT add grip class but note it will not be implemented so run command again.

Now you will see that tha TEXT is horizontally centre not vertically, this is because the actual size of content is very small the below is the body size not that of content. Therefore we will use viewport property.

h-screen property, note this is responsive also.

breakpoints are a case ->> Mobile first approach

tailwind is a mobile first class.

By default jo ham css likhte hai vo mobile ke liye hoti hain

md:max-width-2xl ->> This says that medium screens par size change hoga

TO avoid copyright from a image, use image from pexels. We can use these images for production. It's royalty free meanscredit dena ho to do otherwise don't give

p-[2px] ->> Specified padding called to be as variable when none of it matches our typr what we want then we give it like this.

Border do not come just by giving border, it comes by giving it some width