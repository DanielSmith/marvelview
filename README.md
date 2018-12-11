ri# MarvelView

## Sample Marvel API React App

Daniel Smith - javajoint@gmail.com - December 2018

### Overview

MarvelView is a sample Single Page App that searches titles of Marvel Comics.  It calls an API to retrieve data such as thumbnails, titles, descriptions, poster images, and a link to even more detail on the Marvel site.


### Locations

Github Repo - [https://github.com/DanielSmith/marvelview.git](https://github.com/DanielSmith/marvelview.git)

AWS Demo Instance - [http://ec2-54-219-172-52.us-west-1.compute.amazonaws.com:3000/](http://ec2-54-219-172-52.us-west-1.compute.amazonaws.com:3000/)

### Functionality Details

* Upon launching MarvelView, it reaches out to do a default search (in this case "deadpool")
* Enter a title, and press enter to launch a search
* Searches are based on what a title starts with ("pider" will fail, but "spider" will find Spider-Man titles).  The Marvel API provides for either a title match, or "starts with".
* Feedback is given while searching, and in the case where there are no results
* No search is performed if the search field is empty
* There is a limit of 10 results per search.  This would be easy to change.
* Clicking on a thumbnail will show more detail to the right, including a poster image, title, and description
* Clicking an the detail poster will launch a new browser window for that title on the Marvel site.

### Implementation Details

The User Story I was given called for "a single page web application", but also said "When clicking a search result, the user will be taken to a new "details" page for the individual comic, along with the option to navigate back to the original search page".  I elected to keep it a Single Page App, and to have a thumbnail strip, along with a detail panel.  It could be done as a multipage app, or as a thumbnail grid that launches detail modals (as two options).  I thought it would be best to keep it simple.

I used Semantic UI (for the first time), and did a basic layout (header, comic list, comic detail).  With more time I would adapt some of the theming I see on the Marvel site.

 The React implementation is straightforward.  It leverages stateful and functional components, passes props, and uses setState().  A more advanced implementation would use Redux or MobX.

 * The ComicList is comprised of search results.  Each result is a ComicItem.
 * Clicking on a ComicItem invokes a callback, which changes state, which updates a prop for ComicDetail

