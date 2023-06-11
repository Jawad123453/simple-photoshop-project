let mainbtn=document.querySelectorAll(".buttons .p1 button");
let mainbtnarray=Array.from(mainbtn);
let whichone=document.querySelector(".working h5");

let mainrange=document.getElementById("mainrange");
let covalue=document.querySelector(".covalue");
let mainimg=document.querySelector(".mainimg img");

let brightness=100,grayscale=0,invert=0,saturate=100;

whichone.textContent="Britness";

mainbtnarray.forEach(button => {
  button.addEventListener("click",function(){
    mainbtnarray.forEach(btn => {
      btn.classList.remove("active");
    })
    button.classList.add("active");

    whichone.textContent=button.innerText;

    if(whichone.textContent == "Britness"){
      mainrange.max="200";
      covalue.innerHTML =`<span class="covalue">${brightness}%</span>`;
      mainrange.value=brightness;
    }else if(whichone.textContent == "Saturation"){
      mainrange.max="200";
      covalue.innerHTML =`<span class="covalue">${saturate}%</span>`;
      mainrange.value=saturate;
    }else if(whichone.textContent == "inverse"){
      mainrange.max="100";
      covalue.innerHTML =`<span class="covalue">${invert}%</span>`;
      mainrange.value=invert;
    }else if(whichone.textContent == "Grayscale"){
      mainrange.max="100";
      covalue.innerHTML =`<span class="covalue">${grayscale}%</span>`;
      mainrange.value=grayscale;
    }
  })
})

mainrange.addEventListener("input",function(){
  covalue.innerHTML =`<span class="covalue">${mainrange.value}%</span>`;
  if(whichone.textContent == "Britness"){
    brightness=mainrange.value;
  }else if(whichone.textContent == "Saturation"){
    saturate=mainrange.value;
  }else if(whichone.textContent == "inverse"){
    invert=mainrange.value;
  }else if(whichone.textContent == "Grayscale"){
    grayscale=mainrange.value;
  }
  mainimg.style.filter=`brightness(${brightness}%) grayscale(${grayscale}%) invert(${invert}%) saturate(${saturate}%)`;
})