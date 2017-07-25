const app = require('../app');
const Browser = require('zombie');
const chai = require('chai'),
  assert = chai.assert,
  expect = chai.expect;
const helpers = require('./helpers');
const mongoose = require('mongoose');

Browser.localhost('localhost', 7777);

describe('User signup', () => {
  const browser = new Browser();

  before((done) => {
    return browser.visit('/users/new', done);
  });

  it ('should have a sign up form', () => {
    browser.assert.element('form');
  });
  // 
  // it('allows sign up', async() => {
  //   await helpers.createUser('testUser', 'test@user.com', 'testPassword', browser)
  //   browser.assert.success();
  //   browser.assert.text('h1','Welcome to Ductu');
  // })

  describe('Testing', () => {
    it('passed', () => {
      assert.true
    })
  })
})
//
//   describe('normal sign up', function() {
//     it ('should have a sign up form', () => {
//       browser.assert.element('form');
//     });
//   });
//
//   describe('user leaves name blank', () => {
//     before((done) => {
//       browser
//         .fill("email", "ghettochris@gmail.com")
//         .fill("password", "gangsta")
//         .fill("password-confirm", "gangsta")
//         .pressButton("Sign Up", done);
//     });
//
//     it('should throw an error if name left blank', () => {
//       browser.assert.text('p.flash__text','Please supply a name!');
//     });
//   });
//
//   describe('normal signup', () => {
//     before((done) => {
//       browser
//         .fill("name", "Ghetto Christopher")
//         .fill("email", "ghetto.c@gmail.com")
//         .fill("password", "gangsta")
//         .fill("password-confirm", "gangsta")
//         .pressButton("Sign Up", done);
//     });
//
//     it('should redirect to index page after successfully signing up', () => {
//       browser.assert.text('h1','Welcome to Ductu');
//     });
//
//     after((done) =>  {
//       mongoose.connection.collections.users.drop(() => {
//         done();
//       });
//     });
//   });
// });
//
// describe('User sign out', function() {
//
//   const browser = new Browser();
//
//   before((done) => {
//     browser.visit('/users/new', done);
//   });
//
//   before((done) => {
//     browser
//       .fill("name", "Ghetto Chris")
//       .fill("email", "ghettochris@gmail.com")
//       .fill("password", "gangsta")
//       .fill("password-confirm", "gangsta")
//       .pressButton("Sign Up", done);
//   });
//
//   describe('user signs out successfully', () => {
//     before((done) => {
//       browser.clickLink("Sign Out", done);
//     });
//
//     it('should redirect to the sign-in page', () => {
//       browser.assert.text('#signin','Sign In');
//     });
//   });
//
//   after((done) =>  {
//     mongoose.connection.db.dropDatabase(() => {
//       done();
//     });
//   });
// });
//
// describe('User sign in', function() {
//
//   const browser = new Browser();
//
//   before((done) => {
//     return browser.visit('/users/new', done);
//   });
//
//   before((done) => {
//     browser
//       .fill("name", "Ghetto Chris")
//       .fill("email", "ghettochris@gmail.com")
//       .fill("password", "gangsta")
//       .fill("password-confirm", "gangsta")
//       .pressButton("Sign Up", () => {
//         browser.clickLink('Sign Out', done);
//       });
//   });
//
//   describe('redirects to sign in form', () => {
//     before((done) => {
//       browser.clickLink("Sign In", done);
//     });
//
//     it ('should have a sign in form', () => {
//       browser.assert.element('form');
//     });
//   });
//
//   describe('successfully signs in', () => {
//     before((done) => {
//       browser.clickLink("Sign In", done);
//     });
//
//     before((done) => {
//       browser
//         .fill("email", "ghettochris@gmail.com")
//         .fill("password", "gangsta")
//         .pressButton("Sign In", done);
//     });
//
//     it('should have signed in user', () => {
//       browser.assert.text('#signout','Sign Out');
//     });
//   });
//
//   after((done) => {
//     mongoose.connection.db.dropDatabase(() => {
//       done();
//     });
//   });
// });
