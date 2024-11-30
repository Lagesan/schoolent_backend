const { MongoClient } = require('mongodb');

// MongoDB 连接 URL
const url = 'mongodb://localhost:27017';
// 数据库名称
const dbName = 'users';

// 创建 MongoDB 客户端
const client = new MongoClient(url);

async function deleteOneUser() {
  try {
    // 连接到服务器
    await client.connect();
    console.log('Connected successfully to server');

    // 选择数据库
    const db = client.db(dbName);

    // 选择集合
    const collection = db.collection('users');

    // 删除条件，例如删除 name 为 'John Doe' 的用户
    const deleteResult = await collection.deleteOne({ name: 'John Doe' });
    console.log(`${deleteResult.deletedCount} document(s) deleted`);
  } catch (err) {
    console.error(err);
  } finally {
    // 关闭数据库连接
    await client.close();
  }
}

deleteOneUser().catch(console.error);