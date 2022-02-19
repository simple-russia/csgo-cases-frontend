
// create a unique id
const uid = () => {
  let timmy = Date.now().toString(36).toLocaleUpperCase();
  let randy = parseInt(Math.random() * Number.MAX_SAFE_INTEGER);
  randy = randy.toString(36).slice(0, 12).padStart(12, '0').toLocaleUpperCase();
  return ''.concat(timmy, '-', randy);
};

// check if the obj is empty
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
// make a transaction

let db = 0;
let objectStore = null;
let DBOpenReq = indexedDB.open('csgo', 1);

DBOpenReq.addEventListener('error', (err) => {
    //Error occurred while trying to open DB
    console.warn(err);
});
DBOpenReq.addEventListener('success', (ev) => {
    //DB has been opened... after upgradeneeded
    db = ev.target.result;
    // console.log('success', db);
});
DBOpenReq.addEventListener('upgradeneeded', (ev) => {
    //first time opening this DB
    //OR a new version was passed into open()
    db = ev.target.result;
    let oldVersion = ev.oldVersion;
    let newVersion = ev.newVersion || db.version;
    console.log('DB updated from version', oldVersion, 'to', newVersion);

    console.log('upgrade', db);
    // creare a new db table with weapons
    if (!db.objectStoreNames.contains('weapons')) {
    objectStore = db.createObjectStore('weapons', {
        keyPath: 'id',
    });
    }
});

function makeTX(storeName, mode) {
    let tx = db.transaction(storeName, mode);
    tx.onerror = (err) => {
      console.warn(err);
    };
    return tx;
}

// main part
const addWeapon = (weapon) => {

    if ( isEmpty(weapon) ) {
        throw '[CSGO] Can\'t add an empty object to the datavase!';
        return ;
    }

    let tx = makeTX('weapons', 'readwrite');
    tx.oncomplete = (ev) => {
        // console.log(ev);
    };

    let store = tx.objectStore('weapons');
    let request = store.add(
        {...weapon, id: uid()}
    );

    request.onsuccess = (ev) => {
        console.log('[CSGO] successfully added an item');
    };
    request.onerror = (err) => {
        console.log('[CSGO] error in request to add');
    };
}

let getWeapons = (resolve, reject) => {
    // console.log('db is', db)
    if (db == 0) {
        resolve(0)
    }

    let tx = makeTX('weapons', 'readwrite');
    tx.oncomplete = (ev) => {
        //transaction for reading all objects is complete
    };

    let store = tx.objectStore('weapons');
    let getReq = store.getAll();

    getReq.onsuccess = (ev) => {
        //getAll was successful
        let request = ev.target; //request === getReq === ev.target

        resolve(request.result); // promisify
    };

    getReq.onerror = (err) => {
        console.warn(err);
        reject([])
    };
}
// getWeapons = new Promise(getWeapons)

const deleteWeapon = (id) => {
    console.log('delete weapon')
    let tx = makeTX('weapons', 'readwrite');
    tx.oncomplete = (ev) => {
        // console.log(ev);
    };

    let store = tx.objectStore('weapons');
    let request = store.delete(id);

    request.onsuccess = (ev) => {
        console.log('[CSGO] successfully deleted an item');
    };
    request.onerror = (err) => {
        console.log('[CSGO] error in request to delete');
    };
}


export { addWeapon, getWeapons, deleteWeapon }