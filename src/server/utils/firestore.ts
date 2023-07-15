// var express = require('express')
// var app = express()

// import express from 'express'
// import type { Application, Request, Response } from 'express'
import {initializeApp , cert} from 'firebase-admin/app';
import { getFirestore} from 'firebase-admin/firestore';

// const app: Application = express();

// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

// const serviceAccount = require('../key.json');

initializeApp({
  credential: cert('src/server/key.json')
});

const db = getFirestore();

export {db}

// app.post('/test/', (req, res) => {
//   const kind = 'Task';

//   const name = 'sampletask2';

//   const taskKey = datastore.key([kind,name]);

//   let arr = req.body.data[0];

  

// })

// async function quickstart() {
//   // The kind for the new entity
//   const kind = 'Task';

//   // The name/ID for the new entity
//   const name = 'sampletask1';

//   // The Cloud Datastore key for the new entity
//   const taskKey = datastore.key([kind, name]);

//   // Prepares the new entity
//   const task = {
//     key: taskKey,
//     data: {
//       description: 'Buy milk',
//     },
//   };

//   // Saves the entity
//   await datastore.save(task);
//   console.log(`Saved ${task.key.name}: ${task.data.description}`);
// }

// async function quickstart() {
//   const snapshot = await db.collection('inventory').get();
//   snapshot.forEach((doc) => {
//     const quantity = doc.data()
//     quantity.items[0].get().then(snap => {
//       quantity.quantity = snap.data()
//       console.log(snap.data().quantity)
//     })
//   // console.log(doc.id, '=>', doc.data().items[0].then(DocumentSnapshot documentSnapshot));
//   // console.log(doc.id, '=>', doc.get('items'));

// });
// }

// async function quickstart() {
//   const snapshot = await db.collection('inventory').get();
//   snapshot.forEach((doc) => {
//     const quantity: any = doc.data()
//     quantity.items[0].get().then(snap => {
//       quantity.quantity = snap.data()
//       console.log(snap.data().quantity)
//     })    
//   })
// }


// quickstart();