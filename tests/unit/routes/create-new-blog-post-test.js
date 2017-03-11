import { moduleFor, test } from 'ember-qunit';

moduleFor('route:create-new-blog-post', 'Unit | Route | create new blog post', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
