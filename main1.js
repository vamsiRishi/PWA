// function Loadjson(file,callback) {
// Loadjson("data.json",function(text)
// {
//   console.log(data);
//   basics(data.details);
//   carrerinfo(data.carrer);
//   education(data.education);
//   skills(data.skills);
//   Achievements(data.Achievements);
// })
//
function Loadjson(file) {
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }
      else{
        reject(new Error('error'));
      }
    })
    })
  }
  var newfile=Loadjson("data.json");
  newfile.then(data=>{
      console.log(data);
      basics(data.details);
      carrerinfo(data.carrer);
      education(data.education);
      skills(data.skills);
      Achievements(data.Achievements);
  })
var child1 =document.querySelector(".childone");
function basics(det){
  var image =document.createElement("img");
  image.src =det.image;
  child1.appendChild(image);
var name = document.createElement("h4");
  name.textContent =  det.name;
  child1.appendChild(name);
  var phonenum = document.createElement("h4");
  phonenum.textContent =det.phonenumber;
  child1.append(phonenum);

  var email =document.createElement("a");
  email.href="mailto:vangurivamsi1998gmail.com";
  email.textContent = det.email;
  child1.appendChild(email);

  var add = document.createElement("h2");
  add.textContent = "Address";
  child1.appendChild(add);
  var hr= document.createElement("hr");
  child1.appendChild(hr);
  var p = document.createElement("p");
  p.textContent = det.Address;
  child1.appendChild(p);
}
var child2= document.querySelector(".childtwo");
function carrerinfo(info) {
  var d=document.createElement("h2");
  d.textContent="career objective";
  child2.appendChild(d);
  var hr= document.createElement("hr");
  child2.appendChild(hr);
  var c = document.createElement("p");
  c.textContent = info.info;
  child2.appendChild(c);
}
function education(edu) {
  var hd= document.createElement("h2");
hd.textContent="Educational Qualification";
child2.appendChild(hd);
var hr = document.createElement("hr");
child2.appendChild(hr);
var table1 = document.createElement("table");
table1.border = "1";
child2.appendChild(table1);

tabledata="";
for(i=0;i<edu.length;i++){
  tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";
}
  table1.innerHTML = tabledata;
}
function skills(skillinfo){
  var hd = document.createElement("h2");
  hd.textContent="Techincal skills";
  child2.appendChild(hd);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  for(i=0;i<skillinfo.length;i++){
  var title = document.createElement("h4");
  title.textContent=skillinfo[i].title;
  child2.appendChild(title);

  var ul= document.createElement("ul");
  var li= document.createElement("li");
  li.textContent=skillinfo[i].info;
  child2.appendChild(li);
  child2.appendChild(ul);
}
}
function Achievements(act){
  var hd = document.createElement("h2");
  hd.textContent=" Achievements";
  child2.appendChild(hd);
  for(i=0;i<act.length;i++){
  var title = document.createElement("h4");
  title.textContent=act[i].title;
  child2.appendChild(title);

  var ache= document.createElement("ul");

  var s= document.createElement("li");
  s.textContent=act[i].info;
  child2.appendChild(s);
  child2.appendChild(ache);
}
}
function openpage(){
  window.open("resume.html","_self",true)
}
