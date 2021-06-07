const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const app = express();
app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.set('views' , path.join(__dirname, 'views'));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
const superArr=[{"age":"20","avSuperBalance":"9000"},
{"age":"21","avSuperBalance":"13000"},
{"age":"22","avSuperBalance":"17000"},
{"age":"23","avSuperBalance":"21000"},
{"age":"24","avSuperBalance":"25000"},
{"age":"25","avSuperBalance":"28000"},
{"age":"26","avSuperBalance":"34000"},
{"age":"27","avSuperBalance":"40000"},
{"age":"28","avSuperBalance":"46000"},
{"age":"29","avSuperBalance":"52000"},
{"age":"30","avSuperBalance":"58000"},
{"age":"31","avSuperBalance":"65000"},
{"age":"32","avSuperBalance":"72000"},
{"age":"33","avSuperBalance":"79000"},
{"age":"34","avSuperBalance":"86000"},
{"age":"35","avSuperBalance":"92000"},
{"age":"36","avSuperBalance":"101000"},
{"age":"37","avSuperBalance":"109000"},
{"age":"38","avSuperBalance":"118000"},
{"age":"39","avSuperBalance":"126000"},
{"age":"40","avSuperBalance":"135000"},
{"age":"41","avSuperBalance":"144000"},
{"age":"42","avSuperBalance":"154000"},
{"age":"43","avSuperBalance":"163000"},
{"age":"44","avSuperBalance":"173000"},
{"age":"45","avSuperBalance":"182000"},
{"age":"46","avSuperBalance":"194000"},
{"age":"47","avSuperBalance":"206000"},
{"age":"48","avSuperBalance":"218000"},
{"age":"49","avSuperBalance":"230000"},
{"age":"50","avSuperBalance":"242000"},
{"age":"51","avSuperBalance":"256000"},
{"age":"52","avSuperBalance":"270000"},
{"age":"53","avSuperBalance":"284000"},
{"age":"54","avSuperBalance":"297000"},
{"age":"55","avSuperBalance":"311000"},
{"age":"56","avSuperBalance":"323000"},
{"age":"57","avSuperBalance":"335000"},
{"age":"58","avSuperBalance":"347000"},
{"age":"59","avSuperBalance":"360000"},
{"age":"60","avSuperBalance":"372000"},
{"age":"61","avSuperBalance":"374000"},
{"age":"62","avSuperBalance":"377000"},
{"age":"63","avSuperBalance":"379000"},
{"age":"64","avSuperBalance":"382000"},
{"age":"65","avSuperBalance":"385000"}]
superArr.map(a=>a.avSuperBalance*2.2)
console.log(superArr);
app.get('/menu', (req,res) => {
    res.render('index',{ superArr })
})
//ניהול שגיאות- נמצא בסוף במכוון
app.use((err,req,res,next) => {
//במקרה בו לא נקבל סטטוס שגיאה נקבע- לא נמצא
    const { statusCode = 500 } = err;
    if(!err.message) err.message='something went wrong';
    res.status(statusCode).render('error', { err });
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log (`serving on port ${port}`);
})

