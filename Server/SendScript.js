const http = require('http');
const fs = require('fs');
const vk = require('node-vk-bot-api');
const queryString = require('query-string');
const { fileURLToPath } = require('url');
const ExcelJS = require('exceljs');
let bot = new vk("ab8b033a52495b6fe3f5bdd1dcc0d572c0e10cdc5b5568b14978402ec644ed137b2a44d4e7b5c0aafc4b0");
let SitePath = "../Site";
//let ico = fs.readFileSync('..\/Iсo\/a0ez44uhhx911.webp');
/*async function creator(resolve,reject){
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet("Расчет");
    await workbook.xlsx.writeFile(filename+'.xlsx');
    console.log("It's show time");
};*/
function creatExcelFile(data){
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Расчет");
    
    return __filename;
}
/*function creator(filename,content){
    fs.writeFile(filename +'.xlsx',content);
};*/



async function GetReqFunc(req, res) {
    let _data='';
    console.log(req.url);
    console.log(SitePath + req.url);
    if (req.method == "GET") {
        if (req.url === "/favicon.ico") {
            res.setHeader('content-type', 'image/webp');
            //res.end(ico);
            res.end();
        }
        else if (req.url === "/") {
            fs.readFile(SitePath +'/index.html', function (err, content) {
                if (err) {
                    res.statusCode = 500;
                    res.end("Server errr");
                } else {
                    res.setHeader("Content-Type", "text/html; charset=utf-8");
                    res.end(content);
                }
            }
            );
        }
        else if(req.url=="/script.js") {

            fs.readFile(SitePath + req.url, function (err, content) {
                if (err) {
                    res.statusCode = 500;
                    res.end("Server error");
                }
                else {
                    res.setHeader("Content-Type", "*/*; charset=utf-8");
                    res.end(content);
                }
            }
            );
        }
        else if(req.url=="/style.css") {
            fs.readFile(SitePath + req.url, function (err, content) {
                if (err) {
                    res.statusCode = 500;
                    res.end("Server error");
                }
                else {
                    res.setHeader("Content-Type", "text/css; charset=utf-8");
                    res.end(content);
                }
            }
            );
        }
        
        else  {
            fs.readFile(SitePath + req.url, function (err, content) {
                if (err) {
                    res.statusCode = 500;
                    res.end("Server error");
                }
                else {
                    res.setHeader("Content-Type", "*/*; charset=utf-8");
                    res.end(content);
                }
            }
            );
        }
    }
    else {
        req.on('data', chunk => {
            _data += chunk.toString();
            console.log(_data);
            
        })
        req.on('end',
            () => {
                creatExcelFile(_date.toJSON);
                //creatExcelFile('testfile');
                res.end();
            }

        )
    }
}
const server = http.createServer(GetReqFunc);
server.listen(3000);
