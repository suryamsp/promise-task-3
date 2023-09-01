
    // http://universities.hipolabs.com/search?country=United+States
    // https://api.coindesk.com/v1/bpi/currentprice.json
    // https://dog.ceo/api/breeds/image/random





function Promise_Request(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(dog => resolve(dog))
        .catch(error => reject(error));
    });
  }
  
  Promise_Request('https://dog.ceo/api/breeds/image/random')
    .then(dog => {

      var text= dog.message
      var stext= text.slice(30)
      var result=[];
      for (var i=0; i<stext.length; i++) {
          if(stext[i] != '/'){
            result.push(stext[i]);
          }else{
            break;
          }

      }  
      var dog_name=result.join("");
    var cer_div= document.createElement("div");
    cer_div.innerHTML=`

    <div class="small-con">
<img src=${dog.message} />
<h2>${dog_name}</h2>

<div class="btn">   <button onClick="window.location.reload();">Next</button></div>
</div>  `
    document.querySelector('div').append(cer_div)

    })
    .catch(error => {
      console.log('Error:', error.message);
    });

