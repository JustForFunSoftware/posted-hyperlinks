/*
 * Posted Hyperlinks
 * https://https://github.com/JustForFunSoftware/posted-hyperlinks
 *
 * Copyright 2022, Just For Fun Software Limited
 * https://www.justforfunsoftware.com
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 */

window.addEventListener('load', (event) => {
        phBindAnchors();
});

/**
 * Bind click events on all marked anchor tags on page
 */ 
function phBindAnchors() {
	var elems = document.getElementsByClassName('usepost');
	for(var b=0; b < elems.length; b++) {
		var elem=elems[b];
		elem.addEventListener("click", function(e) {
                        e.preventDefault();
			clickedLink = e.target || e.srcElement;
                        phLinkClicked(clickedLink);
		});
	}
}

function phLinkClicked(tag) {

        // Parse attributes and parameters

        var target= tag.getAttribute('target');
        var href= tag.getAttribute('href');
        var url = href.split('?')[0];
        var params = href.split('?')[1];

        // Create dynamic form with matching hidden params
        var formId = "phForm"+Math.floor(Math.random() * 99999);
        var f = document.createElement("form",{"id":formId});
        f.setAttribute('method', "post");
        f.setAttribute('target', target);
        f.setAttribute('action', href);

        // Add hidden form values
        const urlparams = new URLSearchParams(params);
        for (const [key, value] of urlparams.entries()) {
                const s = document.createElement("input");
                s.setAttribute('type', "hidden");
                s.setAttribute('name', key);
                s.setAttribute('value', value);
                f.appendChild(s);
        }

	document.body.appendChild(f);
        f.submit();
}