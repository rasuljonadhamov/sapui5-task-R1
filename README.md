# sapui5-task-R1

SAPUI5 **Walkthrough** tutorial app — Task 1-3.

Built by working through all 38 steps of the
[Walkthrough Tutorial (JavaScript)](https://ui5.github.io/tutorials/walkthrough/?lang=js),
one commit per step.

## Running the app

```sh
npm install
npm start
```

`npm start` serves the app with a local OData mock server at
<http://localhost:8080/test/mockServer.html>.

To run against the real Northwind OData service instead, open
<http://localhost:8080/index.html> (requests to `/V2` are proxied to
`services.odata.org`).

## Tests

With the server running:

- Unit tests (QUnit) — <http://localhost:8080/test/Test.qunit.html?testsuite=test-resources/ui5/tutorial/walkthrough/testsuite.qunit&test=unit/unitTests>
- Integration tests (OPA5) — <http://localhost:8080/test/Test.qunit.html?testsuite=test-resources/ui5/tutorial/walkthrough/testsuite.qunit&test=integration/opaTests>

Both suites are also listed on the test suite page at
<http://localhost:8080/test/testsuite.qunit.html>.

## Build

```sh
npm run build      # ui5 build --all --clean-dest  ->  dist/
npm run serve-dist # serve the built app
```

## Project structure

```
webapp/
├── Component.js            # app component
├── manifest.json           # app descriptor (models, routing, data sources)
├── index.html              # entry point (real OData service)
├── control/                # ProductRating custom control
├── controller/             # App, HelloPanel, InvoiceList, Detail
├── view/                   # XML views + HelloDialog fragment
├── model/formatter.js      # custom formatter for invoice status
├── i18n/                   # translatable texts
├── css/style.css           # custom styles
├── localService/           # OData metadata + mock data + mock server
└── test/                   # QUnit unit tests and OPA5 integration tests
```

## Notes

- Step 29 (*Debugging Tools*) walks through finding an intentional typo with the
  developer tools and fixing it again, so it leaves no net code change and has
  no commit of its own.
- The custom control's constructor was changed from an object-literal shorthand
  method to a function expression — a shorthand method is not constructible, so
  UI5 could not instantiate the control and the detail page failed to render.
