import DB from './database';

const onRequestError = (e) => {
  console.log('Database Error [TERNAK]', e);
}

export const add = (ternak) => {
  const request = DB ();
  
  request.onerror = onRequestError;

  request.onsuccess = (e) => {
    const db = e.target.result;
    const transaction = db.transaction(['ternak'], 'readwrite');
    const store = transaction.objectStore('ternak');
    store.add({ nama: ternak });
  }
}

export const get = (callback) => {
  const request = DB();

  request.onerror = onRequestError;

  request.onsuccess = (e) => {
    const db = e.target.result;
    const transaction = db.transaction(['ternak'], 'readonly');
    const store = transaction.objectStore('ternak');
    store.getAll().onsuccess = (ev) => {
      callback(ev.target.result);
    }
  }
}

