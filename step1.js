const fs=require("fs")

function cat(path){
    fs.readFile(path, 'utf8', function(err, data) {
        if(err){
            console.log("ERROR:", err)
        }
        console.log(data)
    });

}

const argv = process.argv;
path=argv[2]
cat(path)