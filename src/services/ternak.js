import DB from './database';

export const add = (ternak) => {
  const request = DB ();

  request.onerror = (e) => {
    console.log('Database Error [TERNAK]', e);
  }

  request.onsuccess = (e) => {
    const db = e.target.result;
    const transaction = db.transaction(['ternak'], 'readwrite');
    const store = transaction.objectStore('ternak');
    store.add({ ternak });
  }
}
