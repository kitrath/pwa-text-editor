import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
  const db = await openDB("jate", 1);
  const tx = db.transaction("jate", "readwrite");
  const store = tx.objectStore("jate");
  // We will always store all of the editor text, in a single "row"
  const result = await store.put({ id: 1, content });
  // Log the result
  console.log("🚀 - data saved to the database", result.content);
}

export const getDb = async () => {
  const db = await openDB("jate", 1);
  const tx = db.transaction("jate", "readonly");
  const store = tx.objectStore("jate");
  // We will always retrieve the db's single "row"
  const result = await store.get(1);
  console.log("result.content:", result.content);
  return result;
}

initdb();
