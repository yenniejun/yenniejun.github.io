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
Following the instructions from [this blog post](https://stackedit.io/), just use [StackEdit](https://stackedit.io/). If for some I wany my life to be a bit harder, I can use instructions from [this blog post](https://towardsdatascience.com/converting-medium-posts-to-markdown-for-your-blog-5d6830408467) and run the following:

`node medium-to-markdown.js`
