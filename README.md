# UFOs

# Data Visualization Week 11 Challenge

## Background
The webpage and dynamic table we have built throughout the module are working as intended, but Dana (our customer) has decided she would like the table to be filtered even further. While it currently filters by the date, she would like to include the ability to filter by more column headers. The ability to pinpoint a search by date and country, for example, would go a long way in providing more in-depth analysis of UFO sightings.

### Objectives
The goals of this challenge are to:

* Create, update, and deploy JavaScript functions to provide additional table filters.
* Update and deploy forEach (for loop) to loop through the filters and update them with user input.
* Update and populate the dynamic filters and table using JavaScript and HTML.

## Resources
* JavaScript
* html
* css

## Analysis
I started by adding list items for the filters that were required (city, state, country, shape).  These were added to the unordered list section in the .html file that already held the user input area for the date filter we developed in the module.  Once this was completed, I built the Javascript code to grab the user input from these items and append a JS object (named "filters").  The .toLowerCase() method was useful to make sure the user input was in the correct state to match up the filters.  I then found code on Stack Overflow<sup>1</sup> that helped me remove the keys and values from the object if the user did not enter data into that field (i.e. empty value).  Once we have this clean object, we can loop through it by converting the object to an array (in this case an array of key/value pair arrays) to build the filtered data.  We then return to the buildTable function where we pass the filteredData as the parameter.  I have also added a clear filters button and function that simply reloads the page since our default is the complete table (i.e. no filters).  As a recommended action, we could improve data accuracy by creating dropdown lists for the user to choose from, but the placeholder does a pretty nice job of directing the user to the correct format for data entry.

### References
<sup>1. [https://stackoverflow.com/questions/25421233/javascript-removing-undefined-fields-from-an-object](https://stackoverflow.com/questions/25421233/javascript-removing-undefined-fields-from-an-object)</sup>
