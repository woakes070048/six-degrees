module.exports = bookshelf.model('ConnectionRequest', {
	tableName: 'connectionRequests',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt']
});
