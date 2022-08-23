let url="https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"

async function foo(){
    var res=await fetch(url);
    let res1=await res.json();
    for(let i=0;i<res1.length;i++){
        var div=document.createElement("div")
        div.innerHTML=`
        <div class="card" style="width: 18rem;">
        <div class="card-header">
        <span>name</span>     :${res1[i].name}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><span>capital</span>    :${res1[i].capital},</li>
          <li class="list-group-item"><span>population</span>  :${res1[i].population}</li>
          <li class="list-group-item"> <span>region</span>     :${res1[i].region}</li>
        </ul>
      </div>`
     
      document.body.append(div);
 
    }
} 
foo()