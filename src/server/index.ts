import express = require('express')
import {db} from './utils/firestore'

const app = express();
const PORT: number = 3001;

async function quickstart() {
  const snapshot = await db.collection('inventory').get();
  snapshot.forEach((doc) => {
    const quantity: any = doc.data()
    quantity.items[0].get().then(snap => {
      quantity.quantity = snap.data()
      console.log(snap.data().quantity)
    })    
  })
}


quickstart();