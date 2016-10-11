module.exports = bookshelf.model('MessageReadStatus', {
	tableName: 'messageReadStatuses',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt']
});
