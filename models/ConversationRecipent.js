module.exports = bookshelf.model('ConversationRecipient', {
	tableName: 'conversationRecipients',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt']
});
