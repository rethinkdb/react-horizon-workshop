# Build a realtime app with Horizon

Let's build a chat app!

We'll be using Horizon, React, and Babel.

This repository has two branches. `master` contains the complete app, with two methods stubbed out in `app.jsx` as an exercise for you to complete. If you prefer to skip to the chase, you can check out the `complete` branch instead.


### Set up your environment
Install [RethinkDB](http://rethinkdb.com/install) and [Node.js](http://nodejs.org).

Next, install Horizon:
```
npm install -g horizon
```
Clone this repo:
```
git clone https://github.com/rethinkdb/react-horizon-workshop.git
```
Let's set up the Horizon project:
```
cd react-horizon-workshop
hz init .
```
Install the `npm` packages:
```
npm install
```
Compile the project with `reactpack`:
```
./node_modules/.bin/reactpack --no-html --no-lint src/app.jsx dist/bundle.js
```
Start the Horizon server:
```
cd dist
hz serve --dev
```

### Does it work yet?

You can visit [http://localhost:8181](), and our chat app should load. But it won't work yet (unless you've already checked out the `complete` branch), because we still need to add some code.

In `src/components/app.jsx`, you'll see two methods that need to be filled out: `handleMessage` and `handleLogin`.

Here's your tasks for these two methods:

  - Prompt for a username if none is defined, otherwise show the chat view.
  - When a username is provided, fetch the latest messages from Horizon and put them in an array.
  - Chat view iterates over the messages array to display each message.
  - When an input component receives a message, store it in Horizon.
  
Remember, you can always check out the `complete` branch to see a working example.

Once you've updated your code, you'll need to recompile with reactpack. You can optionally use the `-w` parameter if you want `reactpack` to monitor for changes and automatically rebuild the `bundle.js` file as needed: 
```
./node_modules/.bin/reactpack --no-html --no-lint -w src/app.jsx dist/bundle.js
```
