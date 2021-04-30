const fs = require('fs');

/*
==============BUSINESS MODEL==============================
Database Type:  JSON
==========================================================
*/
const idx = 'id';

const model = {
     idx : 'id',

    getData:(data, id) => {
        return data.find( reg => reg[idx] == parseInt(id) );
    },

    genId: (fpath)=> {
        let data = model.loadFile(fpath);
        var elem = data.pop() || {id:0};
        return ((( elem )[model.idx]) + 1);
    },

    save: (data, fpath) => {
        fs.writeFileSync(fpath, JSON.stringify(data, null, ' '));
        return 0;
    },

    saveSingle: (data, fpath) => {
        fs.appendFileSync(fpath, JSON.stringify(data, null, ' '));
    },

    loadFile: (fpath) => {
        let filecont = fs.readFileSync(fpath, 'utf-8');
        let content;
        (filecont == '')? content = [] : content = JSON.parse(filecont);
        return content;
    },

    exclude: (content, index) => {
        return content.filter( reg => reg[idx] != index );
    },

    create: (data, fpath) => {
        let file = model.loadFile(fpath);
        file.push(data);
       return model.save(file, fpath);
    },

    compare: (a, b) => a[idx]-b[idx],

    saveChanges: (data,fpath) => {
        let content = model.loadFile(fpath);
        let newFile = model.exclude(content, data[idx]);
        newFile.push(data);
        newFile.sort((a, b) => a[idx]-b[idx]);
        model.save(newFile, fpath);
    },

    delete_: (id, fpath) => {
        let content = model.loadFile(fpath);
        let newContent = model.exclude(content, id);
        model.save(newContent, fpath);
    },
    find_:(attr_, value_, fpath) =>{
        let data_ = model.loadFile(fpath);        
        return data_.find( reg => reg[attr_] == value_ );
    },
    findAll_:(attr_, value_, fpath) =>{
        let data_ = model.loadFile(fpath);         
       return data_.filter( reg => reg[attr_] == value_);
    }

}


module.exports = model;