# Problem: How can I group things by franchise?
Concerned media types: Mainly movies, anime, shows, and manga.

## Examples
The Purge vs The First Purge


## Option 1
I can use Wikidata to find prequels and sequels.
- [ ] It doesn't take spinoffs into consideration, does it?

```
Algorithm find franchise of A
is A in the database?
    return A's franchise

get that A's IDs (imdb)
create a new franchise X
open that thing's wikidata page
sequel
for each prequel and sequel

return X
```

### Wikidata does not care about spinoffs

Example:

Once Upon a Time in Wonderland - Wikidata
https://www.wikidata.org/wiki/Q13219070

Once Upon a Time - Wikidata
https://www.wikidata.org/wiki/Q23673

