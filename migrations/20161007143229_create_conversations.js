
exports.up = function(knex, Promise) {
	return knex.schema.createTable('conversations', function(t){
		t.increments('id').unsigned().primary();
		t.datetime('createdAt').notNull();
		t.datetime('updatedAt').nullable();
		t.datetime('deletedAt').nullable();

		t.string('title').notNull();

		t.integer('senderId').notNull().references('id').inTable('users').onDelete('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('conversations');
};
