# Resources

## Backend

### [Apache](https://www.apache.org/)

Apache is a web server. We use it to server our PHP files. This was required by UVU IT.

### [PHP 5](http://php.net/)

PHP is a web language. We use it to communicate with the database and serve the php files. It is also how the application can get system variables like if a user is logged in or not. This was required by UVU IT.

### [PDO](https://phpdelusions.net/pdo)

PDO is the php plugin that we use to connect to the database. It protects against sql injection.

### [MariaDB](https://mariadb.org/)

MariaDB is an open source fork of MySQL. It is the database for the system. This was required by UVU IT.

### [Shibboleth](https://shibboleth.net/)

Shibboleth is what UVU uses for authentication. We use it for logging in and for establishing entitlements to restrict access for admins.

## Frontend

### [MithrilJS](https://mithril.js.org/)

MithrilJS is Javascript framework similar to [React](https://facebook.github.io/react/). It allows developers to create reusable HTML components using Javascript and a Virtual DOM. It was chosen for it's small size.

A good place to start is [components](https://mithril.js.org/hyperscript.html#components) and [lifecycle methods](https://mithril.js.org/hyperscript.html#lifecycle-methods).

### [Bulma](http://bulma.io/documentation/overview/start/)

Bulma is a small CSS library. It is similar to [Bootstrap](http://getbootstrap.com/), but based on [flex boxes](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) which makes mobile development simpler.

### [Font Awesome](http://fontawesome.io/icons/)

Font Awesome is included if you want to use icons.

### [C3](http://c3js.org/)

C3 is a library that uses D3 to make charts. We use it for the leaderboard and reports.

### [Traceur](https://github.com/google/traceur-compiler)

Traceur compiles the Javascript code from ES2015 (the current ECMAScript). It allows things like `import`, `export`, and lambda function `() => {}`. It can be removed if browsers ever become (compatible](https://kangax.github.io/compat-table/es6/).

### [Select2](https://select2.github.io/)

Select2 takes a select box and lets users type options rather than just scrolling through a list.

### [Pikaday](https://dbushell.com/Pikaday/)

Pikaday is just a fancy date picker.

### [JQuery](https://jquery.com/)

JQuery is a big library, but we only use it to incorporate things like Select2.

## Other

### [TravisCI](https://travis-ci.org/uvu-crfs/www)

Travis is a contiunous integration system. On every git commit it runs a set of tests described by the file `.travis.yml` It can be configured to auto update the live page after passing the tests.

### [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

Markdown is what these documents are written in.
