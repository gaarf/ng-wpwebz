cask-ng-wpwebz
==============

### installing:

Global dependencies:

* `npm install -g bower gulp`

Local dependencies:

* `cd ../ngui`
* `npm install && bower install`

then, each in their own tab:

* `gulp watch` (autobuild + livereload)
* `npm start` (http-server + cors-anywhere)
* `npm test` (run karma for unit tests)
* `open http://localhost:8080`

* in dev mode, UI runs on port `8080` and connects to livereload on port `35729`
* cors-anywhere runs on port `8081`

### testing:

* `npm run build` ( == `npm install && bower install && gulp build`)
* `npm run test-single-run` (unit tests)
* `npm run protractor` (end-to-end tests, needs `npm start` running in parallel)

