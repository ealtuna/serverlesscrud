const dynamodb = require('../lib/dynamodb');

module.exports = {
  async get(id) {
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Key: { id },
    };
    const result = await dynamodb.get(params).promise();
    return result.Item;
  },

  async upsert(id, member) {
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Item: Object.assign(member, { id }),
    };
    await dynamodb.put(params).promise();
    return params.Item;
  },
}