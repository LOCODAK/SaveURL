let inputBtn = document.getElementById("input-btn")
let myLeads =[]
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let deleteBtn = document.getElementById("delete-btn")
const leadsfromlocalstorage = JSON.parse(localStorage.getItem("myLeads"))
let tabBtn = document.getElementById("tab-btn")

if(leadsfromlocalstorage)
{
    myLeads = leadsfromlocalstorage
    render(myLeads);
}

const tabs = [
    {url : "https://www.linkedin.com/in/aditya-kotra-836330217"}
]

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
     myLeads.push(tabs[0].url)
   localStorage.setItem("myLeads",JSON.stringify(myLeads))
   render(myLeads)
    })
      
})

deleteBtn.addEventListener("dblclick" ,function(){
    localStorage.clear();
    myLeads = []
    render(myLeads);
})

inputBtn.addEventListener("click",function(){
    let input = inputEl.value
myLeads.push(inputEl.value);
inputEl.value = ""
localStorage.setItem("myLeads",JSON.stringify(myLeads))
render(myLeads)

})


function render(Leads) {
    
let listItems ="" 
for(let i = 0 ; i< Leads.length ; i++)
{
    listItems +=  "<li><a target = '_blank' href = '" + Leads[i] + " '>" + Leads[i] + "</a></li>"
}
ulEl.innerHTML = listItems
}





