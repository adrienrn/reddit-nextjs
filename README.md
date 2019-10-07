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

### Hooks and Context API

Providers are a key part of the implementation.

`RedditProvider` is abstracting the work of fetching the Reddit API using hooks, in the same way Apollo does it with GraphQL. This pattern works really well to abstract the HTTP fetching and all its workflow.

```
const {data, loading, error, refetch} = useApiRequest({endpoint: '', filters: {}, limit: 10, offset: 10});

if (loading) {
  return (<p>Loading...</p>);
}

if (error) {
  return (<p>Error</p>);
}

return (<p>{data.something}</p>);
```

`StoreProvider` is the global state of the application. It stores which subreddits are being followed, which one is the active one. This is using the Context API going through a reduced wrapped in React hooks. It implements a similar API as Redux when it comes to actions and reducers.

```
const [store, dispatch] = useStoreValue();

useEffect(() => {
  dispatch({type: 'SUBREDDIT_ADD', subReddit: {slug: 'arduino'}}});
}, []);
```

The store would probably contains lots of information in the future, including user, preferences, etc.

### CSS modules

CSS modules allow us to produce clean components.

Most of the components could be abstracted in a separate repositories, only `components/App` and `containers/` are tightly coupled to the app itself.

## Next steps

The Reddit API is hit directly from the front-end, hence the CORS proxy. This is far from ideal and definitely needs to be adressed. Next 9, enables API routes, under `/pages/api` and this looks like a great way to implement a mini-API that will proxy the Reddit API.

* Having a node server and a local database, would allow us to:
  * Avoid CORS issue; the Reddit API isn't designed for this use case
  * Fetch subreddits in the background and store them in a local database; that would make the app more reactive and make subreddit comments "actionnable"
  * The API pagination is designed to be fetched as a background task; having the subreddits locally would allow us to have a front-end compatible pagination API
  * Map the API model to a more suitable local model
* The whole user module is missing: authentication, login/logout.
* SubReddits are kind of static and using slug as the main identifier accross the applications. Properly fetching and using id (or similar) would simplify the implementation in some use case. The back-end server could leverage this as part of his mapping.
* The `StoreProvider` as described earlier could use some work with action creators and some refactoring regarding the reducer.

## UX improvements

The current design could be improved in some ways:

* Have different layout for each subreddits.
  * /r/funny has rarely a text description, must often a media (image, video)
  * /r/technology is more base on link sharings, almost never any images/thumbnails
  * /r/laptops is big on reviews, with long text description and less affordance on pictures
* To conform with the disgn, most title had to be truncated which is a shame for text-heavy reddit comments
* The "Channel Subscriptions" part is still very work in progress, especially the search/autocomplete part. Everything needs to be tied to the user account.
