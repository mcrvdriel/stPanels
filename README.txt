stPanels; semi-transparent panels
=================================
Semi-transparent panels behind content on web pages, also works in older browsers
Javascript part; needs jQuery to work(!)

Looks up elements of class "stpanel" and repositions/ resizes them 
so they are identical in size and position to the next (block) element in the HTML
Create an empty div with class "stpanel" (or whatever classname you prefer) right before the element that needs semi-transparent background

Usage:
Call the stPanels function from document.ready()
className is the name of the class for the divs to be used as backgrounds.
Pass "true" to the function call to also include padding and/ or margins
 stPanels(className): panel covers background within padding/ margin
 stPanels(className,true): panel covers background including padding
 stPanels(className,true,true): panel covers background including padding AND margin

Settings for className in css:
- Set z-index to -1 to show behind the elements, set width and height to 0
- set opacity (non-IE) and filter alpha(IE) and background color

NOTE: when using borders, margins and padding you need to set them using css on the elements
that need the background panels or positioning will be off

You can use different widths for top, left etc. on border, margin and padding

st_Panels.html is an example, see the source of it to get the idea.
You can also visit my company's website www.sion-ict.nl to see it in action.

Version 1.02
2012-02-11 by Marcel C.R. van Driel (version 1.0)
2013-05-07 by Marcel C.R. van Driel (version 1.02)