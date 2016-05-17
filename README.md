# Udacity Website Optimization project
Optimize index.html to have a score above 90 on PageSpeed insight.
Optimize pizza.html to have run at 60fps when scrolling.

## Motivation
This project is part of the `Udacity Front End Nanodegree`.
I was handed a starter [code](https://github.com/udacity/frontend-nanodegree-mobile-portfolio) and i was task with optimizing it for speed.
My solution can be found live [here](http://destino92.github.io/FEND-p5-WebsiteOptimization/) for testing with pagespeed insight for index.html and google dev tools for pizza.html according to the project requirement.

## My solution process

**Part 1:** Optimize PageSpeed Insights score for index.html
1. Removed the google font link at line 11 and used a script to load
it.

2. Moved all the scripts and stylesheet links from the header except the font script, to the end of the body tag and load them asynchronously to avoid above the fold render blocking content.

3. Optimized the images that are linked in the page.

4. Specified the css for print media line 65.

5. And lastely minified the index.html using gulp as built system.

**Part 2**: Optimize Frames per Second in pizza.html

For an in depth-look please refer to the comments in the code.

What i did was to try and minimize code insides loops and try to optimize javascript code in `resizePizzas`, `updatePositions` and `DOMContentLoaded` event callback, until seeing speed improvment.

## Installation.
1- download the repo localy or run .
```
git https://github.com/destino92/FEND-p5-WebsiteOptimization.git
cd FEND-p5-WebsiteOptimization
git init
```
2- And you can inspect the code in your text editor and modify `src` directory.
3- You can also run
```
gulp
```
for automated task.

## License
The content of this repository is licensed under this <a href="http://choosealicense.com/licenses/mit/" target="_blank">LICENSE</a>
