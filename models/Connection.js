module.exports = bookshelf.model('Connection', {
	tableName: 'connections',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt']
});
