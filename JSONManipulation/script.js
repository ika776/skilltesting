const fs = require('fs');



const nomorSatu=()=>{
    try {
        const data = fs.readFileSync('./data.json', 'utf8');
        const databases = JSON.parse(data);
        let first=[]
        databases.forEach(db => {

            if(db.placement.name == "Meeting Room"){
                first.push(db.tags)
            }
        });
        if(first.length > 0 ){
            console.log("Data No. 1 : ",first);
        }else{
            console.log("Data No. 1 : Data kosong atau tidak ditemukan");
        }
    } catch (err) {
        console.log(`Error reading file from disk: ${err}`);
    }
}

const nomorDua=()=>{
    try {
        const data = fs.readFileSync('./data.json', 'utf8');
        const databases = JSON.parse(data);
        let second = []
        databases.forEach(db => {
            if(db.type == "electronic"){
                second.push(db.name)
            }
        });
        if(second.length > 0 ){
            console.log("Data No. 2 : ",second);
        }else{
            console.log("Data No. 2 : Data kosong atau tidak ditemukan");
        }
    } catch (err) {
        console.log(`Error reading file from disk: ${err}`);
    }
}

const nomorTiga=()=>{
    try {
        const data = fs.readFileSync('./data.json', 'utf8');
        const databases = JSON.parse(data);
        let third = []
        let date = Date.UTC(2020, 01, 16)
        databases.forEach(db => {
            if(db.type == "furniture"){
                third.push(db)
            }
        });
        if(third.length > 0 ){
            console.log("Data No. 3 : ",third);
        }else{
            console.log("Data No. 3 : Data kosong atau tidak ditemukan");
        }
    } catch (err) {
        console.log(`Error reading file from disk: ${err}`);
    }
}

const nomorEmpat=()=>{
    try {
        const data = fs.readFileSync('./data.json', 'utf8');
        const databases = JSON.parse(data);
        let fourth = ""
        let date = Date.UTC(2020, 01, 16)
        databases.forEach(db => {
            if(db.purchased_at == date){
                fourth+=date
            }
        });
        if(fourth.length > 0 ){
            console.log("Data No. 4 : ",fourth);
        }else{
            console.log("Data No. 4 : Data kosong atau tidak ditemukan");
        }
    } catch (err) {
        console.log(`Error reading file from disk: ${err}`);
    }
}

const nomorLima=()=>{
    try {
        const data = fs.readFileSync('./data.json', 'utf8');
        const databases = JSON.parse(data);
        let fifth=[]
        databases.forEach(db => {
            let a=db.tags
            for (let i = 0; i < a.length; i++) {
                if(a[i]=="brown"){
                    fifth.push(db.name)
                }
            }
        });

        if(fifth.length > 0 ){
            console.log("Data No. 5 : ",fifth);
        }else{
            console.log("Data No. 5 : Data kosong atau tidak ditemukan");
        }
    } catch (err) {
        console.log(`Error reading file from disk: ${err}`);
    }
}
nomorSatu()
nomorDua()
nomorTiga()
nomorEmpat()
nomorLima()


