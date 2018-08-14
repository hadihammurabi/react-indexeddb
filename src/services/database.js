const dbVersion = 1;

const onRequestSuccess = (e) => {
  console.log('Database opened.');
}

const onRequestError = (e) => {
  console.log('Database Error', e);
}

const onRequestUpgradeNeeded = (e) => {
  console.log('Database Need Upgrade', e);
}

export default () => {
  const request = indexedDB.open("ternak", dbVersion);
  request.onsuccess = onRequestSuccess;
  
  request.onerror = onRequestError;

  request.onupgradeneeded = onRequestUpgradeNeeded;

  return request;
}
