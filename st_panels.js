//Script for using semi-transparent panels behind content
//Javascript part; needs jQuery to work(!)
//
//Looks up elements of class "stpanel" and repositions/ resizes them 
//so they are identical in size and position to the next (block) element in the HTML
//Create an empty div with class "stpanel" (or whatever classname you prefer) right before the element that needs semi-transparent background
//
//Usage:
//Call the stPanels function from document.ready()
//className is the name of the class for the divs to be used as backgrounds.
//Pass "true" to the function call to also include padding and/ or margins
// stPanels(className): panel covers background within padding/ margin
// stPanels(className,true): panel covers background including padding
// stPanels(className,true,true): panel covers background including padding AND margin
//
//Settings for className in css:
//- Set z-index to -1 to show behind the elements, set width and height to 0
//- set opacity (non-IE) and filter alpha(IE) and background color
//
//NOTE: when using borders, margins and padding you need to set them using css on the elements
//that need the background panels or positioning will be off
//
//You can use different widths for top, left etc. on border, margin and padding
//
//Version 1.02
//2012-02-11 by Marcel C.R. van Driel (version 1.0)
//2013-05-07 by Marcel C.R. van Driel (version 1.02)

function stPanels(className)
{
	includeMarPad=0;
	//Get any arguments that may be passed with the call
	//Obviously including margins automatically must include padding as well
	if (arguments.length == 2){
		if(arguments[1]) includeMarPad=1;
	}
	if (arguments.length == 3){
		if(arguments[2]) includeMarPad=2; else if(arguments[1]) includeMarPad=1;
	}
	//Go through all divs with class "stpanel"
	
	$("div."+className).each(function(i)
	{
		//Make sure positioning is absolute for our panels
		$(this).css('position','absolute');
		
		//calculate positioning
		//The div defining the panel must be right before the element that needs the semi-transparent
		//background, so .next() will give us that element
		element=new Object();
		element.top=$(this).next().position().top;
		element.left=$(this).next().position().left;
		element.height=$(this).next().outerHeight(true);
		element.width=$(this).next().outerWidth(true);
		
		element.innerTop=element.top + parseInt($(this).next().css('margin-top'),10) + parseInt($(this).next().css('border-top-width'),10);
		element.innerLeft=element.left + parseInt($(this).next().css('margin-left'),10) + parseInt($(this).next().css('border-left-width'),10);
		element.innerHeight=$(this).next().innerHeight();
		element.innerWidth=$(this).next().innerWidth();
	
		switch(includeMarPad)
		{
			case 0: //0 means exclude padding and margin
				element.paddingTop=parseInt($(this).next().css('padding-top'),10);
				element.paddingRight=parseInt($(this).next().css('padding-right'),10);
				element.paddingBottom=parseInt($(this).next().css('padding-bottom'),10);
				element.paddingLeft=parseInt($(this).next().css('padding-left'),10);

				$(this).css('top',element.innerTop + element.paddingTop);
				$(this).css('left',element.innerLeft + element.paddingLeft);
				$(this).height(element.innerHeight - element.paddingTop - element.paddingBottom);
				$(this).width(element.innerWidth - element.paddingLeft - element.paddingRight);
			break;
			case 1: //1 means include padding but not margin and border
				$(this).css('top',element.innerTop);
				$(this).css('left',element.innerLeft);
				$(this).height(element.innerHeight);
				$(this).width(element.innerWidth);
			break;
			case 2:	//2 means include both margins and padding
				$(this).css('top',element.top);
				$(this).css('left',element.left);
				$(this).height(element.height);
				$(this).width(element.width);
			break;
			default:
				$(this).css('display','none');	//default should never occur, just here for completeness
		}
	});
}