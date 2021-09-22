# My Personal Website

## Built Using
* Gatsby

## Deploy Locally
First make sure gatsby-cli is installed
```
npm install -g gatsby-cli
npm install
```

Make sure to be in develop branch:
`
git checkout develop
`


Then, the following command will open in `http://localhost:8000/`
```
gatsby develop
```

## Deploy to gatsby/github pages
```
npm run deploy
```


## Converting Medium Posts to Markdown
Following the instructions from [this blog post](https://towardsdatascience.com/converting-medium-posts-to-markdown-for-your-blog-5d6830408467), I can run the following:

`node medium-to-markdown.js`
