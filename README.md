# Next 13 + Sanity (with Preview Mode)

### Instructions

Run `npm i`

If you haven't installed Sanity CLI, run the following: `npm install -g @sanity/cli`

After that, run `sanity login` and `sanity init` to create new Sanity project.

When you are done with creating new project, create `.env.local` file with following lines or straight add environment variables when deploying on [Vercel](vercel.com/new):

```js
NEXT_PUBLIC_SANITY_PROJECT_ID="your project ID here" // "pv8y60vp"
NEXT_PUBLIC_SANITY_DATASET="your dataset" // "production
NEXT_PUBLIC_SANITY_API_VERSION="API version" // "2022-11-15"
// if deployed:
NEXT_PUBLIC_VERCEL_URL="URL of your webpage" // "https://next-13-sanity.vercel.app"
```

Now delete your newly created project as it is now available in this template's directory. You can change schemas inside `schemas` folder and visit `/studio` on your deployed website or `localhost:3000/` to see changes.

Preview mode is enabled, which can be accessed when creating new item in Sanity Studio. It makes you able to see items on page that are yet to be published.
