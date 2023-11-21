let acc =
 document.getElementsByClassName('accordion-header');
let i;

for(i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function(){ /*Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel*/
    this.classList.toggle('active');/*toggle btw hidding and showing the active panel */
    var accordionContent = this.nextElementSibling;
    if (accordionContent.style.display === 'block') {
        accordionContent.style.display = 'none';
    }else{
        accordionContent.style.display = 'block';
    }
	if (accordionContent.style.maxHeight) {
		accordionContent.style.maxHeight = null;
	  } else {
		accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
	  };

	})

}








