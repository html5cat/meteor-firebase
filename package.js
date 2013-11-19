Package.describe({
  summary: "Firebase wrapper for Meteor"
});

Npm.depends({ "firebase": "0.6.15" });

Package.on_use(function(api) {
  if (api.export) api.export('Firebase', 'server');
  api.add_files('firebase.js', 'server');
});

