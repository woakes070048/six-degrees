
exports.up = function(knex, Promise) {
	return knex.schema.createTable('workHistory', function(t){
		t.increments('id').unsigned().primary();
		t.datetime('createdAt').notNull();
		t.datetime('updatedAt').nullable();
		t.datetime('deletedAt').nullable();

		t.string('title').notNull();
		t.string('company').notNull();

		t.datetime('startDate').notNull();
		t.datetime('endDate').nullable();

		t.string('description', 500).nullable();
		
		t.integer('order').notNull();
		t.integer('userId').notNull().references('id').inTable('users').onDelete('CASCADE');

	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('workHistory');
};
