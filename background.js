

var db = openDatabase('item-cart', '1.0', 'folder', 2 * 1024 * 1024);

db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS folder (folder_name)')
})

insertData = (datas) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            for (var i in datas) {
                const folderName = datas[i].folder_name
                tx.executeSql('INSERT INTO folder(folder_name) VALUES(?)', [folderName], (tx, result) => {
                    console.log(tx, result)
                }, (tx, result) => {
                    console.error(tx, result)
                })
            }
        }, [], () => {
            resolve()
        }, () => {
            reject()
        })
    })
}

const datas = [
    { folder_name: 'folder#1'},
    { folder_name: 'folder#2'}
]

insertData(datas);