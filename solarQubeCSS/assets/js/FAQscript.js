var coll = document.getElementsByClassName("FAQs-collapsible");
var i;

for (i = 0; i < coll.length; i++) 
{
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight)
    {
      content.style.maxHeight = null;
      content.style.padding = null;

    } 
    else 
    {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.padding = 1 + "rem";
    } 
  });
}



