Firebase npm module packaged for Meteor
==========================

npm module – `https://npmjs.org/package/firebase`

## Quick Start

```sh
$ mrt add firebase
```

**app.js**
```javascript

  firebase = new Firebase('https://publicdata-bitcoin.firebaseio.com/');

  firebase.child("bid").on("value", showPrice);
  firebase.child("ask").on("value", showPrice);

  function showPrice(snapshot) {
    console.log(snapshot.name() + ": " + snapshot.val());
  }


```