import { test } from 'qunit';
import moduleForAcceptance from 'ember-power-calendar-import-bug/tests/helpers/module-for-acceptance';
import $ from 'jquery';

moduleForAcceptance('Acceptance | calendar');

test('visiting /', function(assert) {
  visit('/');

  calendarCenter('.calendar', new Date(2006, 4, 26));

  andThen(function() {
    assert.equal($('.ember-power-calendar-nav-title').text().trim(), 'May 2006');
  });
});
