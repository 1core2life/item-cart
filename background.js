

var db = openDatabase('item-cart', '1.0', 'folder', 2 * 1024 * 1024);

db.transaction(function (tx) {
    tx.executeSql('DROP TABLE folder')
})


db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS folder (folder_name)')
})

insertData = (datas) => {
    return new Promise(function(resolve, reject) {
        db.transaction(tx => {
            for (var i in datas) {
                const folderName = datas[i].folder_name
                tx.executeSql('INSERT INTO folder(folder_name) VALUES(?)', [folderName], (tx, result) => {
                    console.log(tx, result)
                    resolve();
                }, (tx, result) => {
                    console.error(tx, result)
                })
            }
        });
    });
}

selectFolders = () => {
    return new Promise(function(resolve, reject) {
        db.transaction(tx => {
            tx.executeSql('select * from folder', [], (tx, result) => {
                console.log(tx, result)
                resolve(result.rows);

            }, (tx, result) => {
                console.error(tx, result)
            })
        });
    });
}

const datas = [
    { folder_name: 'folder#1'},
    { folder_name: 'folder#2'}
]

insertData(datas).then(function() {
    selectFolders().then(function(data) {
        folders= data;
        console.log(folders);
    });
});

