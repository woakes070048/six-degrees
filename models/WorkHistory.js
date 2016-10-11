module.exports = bookshelf.model('WorkHistory', {
	tableName: 'workHistory',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt']
});