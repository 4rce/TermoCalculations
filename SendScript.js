const http = require('http');
const fs = require('fs');
const vk = require('node-vk-bot-api');
const queryString = require('query-string');
const { fileURLToPath } = require('url');
const Excel = require('exceljs');
let bot =  new vk("ab8b033a52495b6fe3f5bdd1dcc0d572c0e10cdc5b5568b14978402ec644ed137b2a44d4e7b5c0aafc4b0");
let ico = fs.readFileSync('C:\\Users\\Alexandr\\Pictures\\Ft-RfXuspRQ.webp',);
request = require('request');
/*async function creator(resolve,reject){
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet("Расчет");
    await workbook.xlsx.writeFile(filename+'.xlsx');
    console.log("It's show time");
};
function creatExcelFile(filename){
    return new Promise(creator    
    );
}*/

function sender(req,res){
    let _data="", return_data;
    if(req.method=="GET"){
        if(req.url==="/favicon.ico"){
            res.setHeader('content-type', 'image/webp');
            res.end(ico);
        }
        else if(req.url==="/"){
            fs.readFile('./index.html', function(err, content){
                if(err){
                    res.statusCode = 500;
                    res.end("Server error");
                }else{
                    res.setHeader("Content-Type", "text/html; charset=utf-8");
                    res.end(content);
                }
            }
            );
        }
        else if(req.url==="/download"){
           
        }
        else {
            fs.readFile('.'+ req.url, function(err, content){
                if(err){
                    res.statusCode = 500;
                    res.end("Server error");
                }else{
                    res.setHeader("Content-Type", "text/plain; charset=utf-8");
                    res.end(content);
                }
            });
           
            
        }
    }
    else{
        req.on('data', chunk => { 
            
            _data += chunk.toString();
         })
        req.on('end', 
            ()  =>  {
               
               //creatExcelFile('testfile');
               console.log('1');
                res.end();
            }
               
        )
    }
}
const server = http.createServer(sender);
server.listen(3000);
    