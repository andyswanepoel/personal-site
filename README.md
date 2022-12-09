# personal-site
Personal website

## About

I wanted to learn more about full stack development and figured a good place to start would be by creating a personal website.

I created designs myself on Figma and while it was a lot of fun to learn, I would be open to any feedback.

## How it's built

I didn't need anything fancy, so I opted for [Eleventy](11ty.dev) as it seemed to be a pretty straight forward static site generator to get up and running.

For styling, I'm going back to my roots and write my own CSS (well, technically SASS, but still!).

There really shouldnt be a lot of interactivity on the site, but I've set up a build pipeline for Typescript files.

## Starting the project

```js
$ ~ yarn
$ ~ yarn start:dev
```

## Buil the project

```js
$ ~ yarn
$ ~ yarn build:prod
```