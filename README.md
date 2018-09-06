ember-cli-noindex
==============================================================================

Simply adds `<meta name="robots" content="noindex, nofollow">` to the `<head>` of your *index.html*.

Installation
------------------------------------------------------------------------------

```
ember install ember-cli-noindex
```


Usage
------------------------------------------------------------------------------

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




Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-cli-noindex`
* `yarn install`

### Linting

* `yarn lint:js`
* `yarn lint:js --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
