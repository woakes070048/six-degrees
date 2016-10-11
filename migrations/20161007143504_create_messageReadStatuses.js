exports.up = function(knex, Promise) {
	return knex.schema.createTable('messageReadStatuses', function(t){
		t.increments('id').unsigned().primary();
		t.datetime('createdAt').notNull();
		t.datetime('updatedAt').nullable();
		t.datetime('deletedAt').nullable();

		t.integer('userId').notNull().references('id').inTable('users').onDelete('CASCADE');
		t.integer('messageId').notNull().references('id').inTable('messages').onDelete('CASCADE');


	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('messageReadStatuses');
};
