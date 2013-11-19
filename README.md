Firebase npm module packaged for Meteor
==========================

npm module lives [here](https://npmjs.org/package/firebase)

Current version 0.6.15

## Quick Start

```sh
$ mrt add firebase
```

**server/main.js**
```javascript
firebase = new Firebase('https://publicdata-bitcoin.firebaseio.com/');

firebase.child("bid").on("value", showPrice);
firebase.child("ask").on("value", showPrice);

function showPrice(snapshot) {
  console.log(snapshot.name() + ": " + snapshot.val());
}
```