const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');

});

Scenario('showing empty liked restaurant', ({ I }) => {

  I.see('Tidak ada Restaurant yang Disukai', '.empty-message');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada Restaurant yang Disukai', '.empty-message');

  I.amOnPage('/');

  I.seeElement('.restaurant_name a');
  const firstrestaurant = locate('.restaurant_name a').first();
  const firstrestaurantTitle = await I.grabTextFrom(firstrestaurant);
  I.click(firstrestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
  const likedrestaurantTitle = await I.grabTextFrom('.restaurant_name');

  assert.strictEqual(firstrestaurantTitle, likedrestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada Restaurant yang Disukai', '.empty-message');

  I.amOnPage('/');

  I.seeElement('.restaurant_name a');
  const firstrestaurant = locate('.restaurant_name a').first();
  const firstrestaurantTitle = await I.grabTextFrom(firstrestaurant);
  I.click(firstrestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
  const likedrestaurantTitle = await I.grabTextFrom('.restaurant_name');

  assert.strictEqual(firstrestaurantTitle, likedrestaurantTitle);

  I.click(locate('.restaurant_name a').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada Restaurant yang Disukai', '.empty-message');
});
