```javascript
const query = { name: 'John Doe' };
const update = { $set: { age: 30, name: 'John Doe' } };
db.collection('users').updateOne(query, update, { upsert: true });
```