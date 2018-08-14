const dbVersion = 1;

export default () => {
  const request = indexedDB.open("ternak", dbVersion);
  
  request.onerror = (e) => {
    console.log('Database Error', e);
  }

  request.onsuccess = (e) => {
    console.log('Database Opened');
  }

  request.onupgradeneeded = (e) => {
    const db = e.target.result;
    db.createObjectStore('ternak', { keyPath: 'nama' });
  }

  return request;
}
