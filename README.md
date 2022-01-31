# posted-hyperlinks
Makes the anchor tag hyperlinks in your page redirect with hidden POST data instead of ugly GET query strings.

## Quick Start

Insert the following code into your webpage's HTML:
```
<script src="js/postedhyperlinks.js"></script>
```
  
Then add the class name 'usepost' to any hyperlinks that you want to use POST instead of GET, as follows:

```
<a href="https://myURL.com/?p1=1&ps=2" class="usepost" target="_blank">
```

## Notes

- The POST will use the same target attribute as your anchor tag
