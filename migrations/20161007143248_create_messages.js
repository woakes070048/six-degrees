
exports.up = function(knex, Promise) {
	return knex.schema.createTable('messages', function(t){
		t.increments('id').unsigned().primary();
		t.datetime('createdAt').notNull();
		t.datetime('updatedAt').nullable();
		t.datetime('deletedAt').nullable();

		t.text('content').notNull();

		t.integer('senderId').notNull().references('id').inTable('users').onDelete('CASCADE');
		t.integer('conversationId').notNull().references('id').inTable('conversations');
	}); 
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('messages');
};
