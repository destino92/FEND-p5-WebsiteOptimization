## Udacity Website Performance Optimization portfolio project
--------------------------------------------------------------

This project is part of the `Udacity Front End Nanodegree`.
I was handed a starter [code](https://github.com/udacity/frontend-nanodegree-mobile-portfolio) and i was task with optimizing it for speed.
My solution can be found live [here](http://destino92.github.io/FEND-p5-WebsiteOptimization/) for testing with pagespeed insight for index.html and google dev tools for pizza.html according to the project requirement.

### My solution process

#### Part 1: Optimize PageSpeed Insights score for index.html
1. Removed the google font link at line 11 and used a script to load
it.

2. Moved all the scripts and stylesheet links from the header except the font script, to the end of the body tag and load them asynchronously to avoid above the fold render blocking content.

3. Optimized the images that are linked in the page.

4. Specified the css for print media line 65.

5. And lastely minified the index.html using gulp as built system.

#### Part 2: Optimize Frames per Second in pizza.html

For an in depth-look please refer to the comments in the code.

What i did was too try and minimize code insides loops and try to optimize javascript code in `resizePizzas`, `updatePositions` and `DOMContentLoaded` event callback, until seeing speed improvment.

### How to run locally.
* Clone or download the repo.
* Run npm-init for build dependencies (i am using gulp).
* And you can inspect the code in your text editor.
