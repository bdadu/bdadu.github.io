function getWelcomeMsg() {
    return "Welcome to my stite";
}
function getColor() {
    var date = new Date();
    console.log(date.getMinutes());
    if (date.getMinutes() > 16) {
        return "green";
    }
    return "red";
}


var wellcome = getWelcomeMsg();
console.info(wellcome);


var summaryElement = document.getElementById("summary");
console.info("summaryElement", summaryElement);
var color = getColor();
summaryElement.style.color = "color";




function hidePage(page) {
    var el = document.getElementById(page);
    el.style.display = 'none';
}
function showPage(page) {
    document.getElementById(page).style.display = 'block';

}




function initMenu() {
    var links = document.querySelectorAll("#top-menu-bar a");
    console.info(links);
    for (var i = 0; i < links.length; i++) {

        links[i].onclick = clickOnMenuItem;
    }

}
function clickOnMenuItem() {
   hideAllPages();
    var pageId=this.getAttribute('data-page');
    showPage(pageId);
}

initMenu();

function hideAllPages(){
    var page=document.querySelectorAll('.page');
    for (var i=0; i< page.length; i++){
        page[i].style.display='none';
    }

}

function showSkills(){
    

    var skills=[
        {name:'js', endorsement:20, endorsedBy:'Andrei'},
        {name:'html', endorsement: 8},
        {name:'css', endorsement:12, endorsedBy:'Bill Gates'},
        {name:'nodeJS', endorsement:3}
    ]; 
    
    
    
    var htmlSkills = skills.map(function(skill, index){
        var endorsedBy=skill.endorsedBy? '-'+skill.endorsedBy:'';
        
        var endorsements= `<span class="endorcements"> (${skill.endorsement})+(${endorsedBy})</span>`;
        return "<li>" + skill.name.toUpperCase() + endorsements +  "</li>";
    });

    var ul = document.querySelector("#skills-page ul");
    ul.innerHTML = htmlSkills.join(' ');
}
hideAllPages();
showPage('skills-page');
showSkills();

