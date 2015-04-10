# ember-cli-noindex

Simply adds `<meta name="robots" content="noindex, nofollow">` to the `<head>` of your *index.html*.

You can opt-out of this per environment using the `enabled` configuration option in your *environment.js* file:

```js
if (environment === 'beta') {
  ENV.noindex = {
    enabled: false
  }
}
```

By default, `enabled === true` in all environments except *production*.
If you want the `<meta>` tag added everywhere but *production*, you don't need any configuration; just install the addon and move on.

## Installation

```bash
ember install ember-cli-noindex # Ember CLI >= 0.2.3
```

That's it!

## Development

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
