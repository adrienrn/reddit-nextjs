# Reddit Client w/ Next JS

This app is a tiny experiment of a Reddit client.

## Get started

Running the containers will boot the app in dev mode:

```
docker-compose up -d
```

You can then access the app in your browser on http://localhost/.

There's two containers:

* the app running w/ next.js and served by the dev server
* a CORS proxy container, more on that below

## Architecture

The app follows a regular Next.js structure. Next.js has been chosen because it's a great React platform with an effective structure, tools and server-side rendering out-of-the-box.

### Presentational and Container components

Presentational components are UI-only components. They may have local state for UI-related data, however they usually are very simple functionnal components. On the other hand, container (data) components holds state and bind together the API (data provider) and the presentational components.

Separating data and presentation usually makes unit testing easier, makes it possible to split the UI components into its own repository and have different teams working on it.

### CSS modules

CSS modules allow us to produce clean components.

Most of the components could be abstracted in a separate repositories, only `components/App` and `containers/` are tightly coupled to the app itself.

## Next steps

The Reddit API is hit directly from the front-end, hence the CORS proxy. This is far from ideal and definitely needs to be adressed. Next 9, enables API routes, under `/pages/api` and this looks like a great way to implement a mini-API that will proxy the Reddit API.

Having a node server and a local database, would allow us to:

* Avoid CORS issue; the Reddit API isn't designed for this use case
* Fetch subreddits in the background and store them in a local database; that would make the app more reactive and make subreddit comments "actionnable"
* The API pagination is designed to be fetched as a background task; having the subreddits locally would allow us to have a front-end compatible pagination API
* Map the API model to a more suitable local model

The whole user module is missing: authentication, login/logout.

## UX improvements

The current design could be improved in some ways:

* Have different layout for each subreddits.
  * /r/funny has rarely a text description, must often a media (image, video)
  * /r/technology is more base on link sharings, almost never any images/thumbnails
  * /r/laptops is big on reviews, with long text description and less affordance on pictures
* To conform with the disgn, most title had to be truncated which is a shame for text-heavy reddit comments
* The "Channel Subscriptions" part is still very work in progress, especially the search/autocomplete part. Everything needs to be tied to the user account.
