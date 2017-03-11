import { test } from 'qunit';
import moduleForAcceptance from 'simple-blog/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | blog');


test('check if images are being rendered in blog post page', function(assert) {
  visit('/blog/post/42');

  andThen(function () {

    assert.equal(find("img").length, 2);
  });
});

test('check if all blog post cards are on index page', function(assert) {
  visit('/');

  andThen(function () {
    assert.equal(find('.cardIsThere').length, 2);
  });
});

  test('check if custom component is rendered on index page', function(assert) {
    visit('/');

    andThen(function () {
      assert.equal(find('#contact_section').length, 1);
    });
  });

