---
title: Analyzing my reading habits
---

At some point in my life, I became obsessed with tracking all sorts of personal statistics, for reasons unknown even to me. A lot of the habits didn’t stick or became too cumbersome to keep up, but I still use [Goodreads](https://goodreads.com), despite the borderline unusable interface and a questionable color scheme. 

Inspired by some dashboards I saw online, I decided to export my library and dig into my reading data a little bit. I used Jupyter Notebooks and Python (mainly pandas and matplotlib). The notebook is [here](https://github.com/vss245/books-analysis/).

<img src="{{ site.baseurl }}/assets/img/dash.png">

Interesting insights:

- Some genres to explore that I haven’t read much: history, philosophy and poetry.
- I have a pretty clear bias in my author countries and should probably stop reading so many US authors. Would be cool to read more [Latin American books](https://fivebooks.com/best-books/john-king-on-latin-american-novels/) and also more [Germans](https://www.goodreads.com/list/show/484.Best_German_Austrian_Swiss_Literature) (in German).
- Publication year had to be cut off, because reading some Greek tradegies messes up the axes. Still, I’m surprised at how many “modern” (e.g. post 1950s) books I read.
- For some reason, it’s not very straightforward to find the gender of authors - would be interesting to look at the distribution, but I have not found an easy way of assigning it. I probably read more books by men, but some female authors I am planning to read more of are Ursula le Guin, Octavia Butler, Margaret Atwood, Daphne du Maurier and the Brontë sisters.

Some things I found and learned along the way:

- Pandas has a [‘to_datetime’](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.to_datetime.html) method that allows for extraction of any part of the date and other such operations (file that under ‘no need to reinvent the wheel’). The downloaded data had pretty wonky reading statistics (date read was recorded correctly on the website, but not in the CSV), so I ended up not using it as much.
- Python has a [‘requests’](https://docs.python-requests.org/en/master/) package that deals with APIs, it’s actually fairly simple to use. I tried to use the OpenLibrary API to find the book genre, but since it doesn’t provide it, I had to use my existing shelves. 
- Matplotlib has a lot of good looking color [schemes](https://matplotlib.org/stable/tutorials/colors/colormaps.html).
- I used the [Wikidata](https://www.wikidata.org/wiki/Wikidata:Main_Page) API to find the country of origin: the description of most authors had their nationality first. If it didn’t, I discarded it. I used a list of [demonyms](https://github.com/knowitall/chunkedextractor/blob/master/src/main/resources/edu/knowitall/chunkedextractor/demonyms.csv) to convert this to country. Kind of convoluted, but it worked.
- Geopandas can be used to plot geographical data - I used Counter to count up the countries, converted this dict to a data frame and then to a Geopandas data frame (side note: Geopandas did not work without its own dedicated environment)
- I ended up arranging these plots manually, but I’m going to look into Power BI or Tableau next time.

