module.exports = bookshelf.model('Conversation', {
	tableName: 'conversations',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt']
});