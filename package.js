// package metadata file for Meteor.js
var packageName = 'gcat:ng-alertify';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '0.9.0';
var summary = 'AngularJS wrapper around alertify.js';
var gitLink = 'https://github.com/kensho/ng-alertify';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
  name: packageName,
  version: version,
  summary: summary,
  git: gitLink,
  documentation: documentationFile
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.2']); // Meteor versions
});