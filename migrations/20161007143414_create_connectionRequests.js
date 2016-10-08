
exports.up = function(knex, Promise) {
	return knex.schema.createTable('connectionRequests', function(t){
		t.increments('id').unsigned().primary();
		t.datetime('createdAt').notNull();
		t.datetime('updatedAt').nullable();
		t.datetime('deletedAt').nullable();

		t.integer('initiatorId').notNull().references('id').inTable('users').onDelete('CASCADE');
		t.integer('responderId').notNull().references('id').inTable('users').onDelete('CASCADE');

		t.string('status').notNull();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('connectionRequests');
};
