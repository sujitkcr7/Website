
//------------------------ Creating Responsive navbar Component-----------------------------------------
const mobile_nav = document.querySelector('.mobile-navbar-btn');
const headerElem = document.querySelector('.header');

mobile_nav.addEventListener('click',()=>{
  headerElem.classList.toggle("active");
})


//---------------- Creating portfolio tabbed component----------------------
const p_btns = document.querySelector(".p-btns")
const p_btn = document.querySelectorAll(".p-btn")
const p_img_elem = document.querySelectorAll(".img-overlay")


p_btns.addEventListener("click", (e)=>{
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

    if(!p_btn_clicked.classList.contains("p-btn"))
    return;

    p_btn.forEach((curElem)=>curElem.classList.remove("p-btn-active"))

    p_btn_clicked.classList.add("p-btn-active")

    //To find the number in data attribute
    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);  //To get the number of each button.

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`)

    p_img_elem.forEach((curElem)=>curElem.classList.add('p-image-not-active'));
    img_active.forEach((curElem)=>curElem.classList.remove('p-image-not-active'));

    
});


// -------------------------OUR SWIPER JS CODE-------------------------

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,

    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// MEDIA QUERY IN JS FOR SWIPER SECTION


const myJsmedia = (widthSize) =>{
  if(widthSize.matches){
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay:{
        delay:2500,
        disableOnInteraction:false,
        
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },  
  });
}
else{
  new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay:{
      delay:2500,
      disableOnInteraction:false,

  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  });
}
}



const widthSize = window.matchMedia("(max-width:690px)");

//Call listener function at run time
myJsmedia(widthSize);

//Attach listener function on state changes
widthSize.addEventListener('change',myJsmedia)








  // -------------------------SCROLL TO TOP BUTTON-------------------------

  const heroSection = document.querySelector(".section-hero");
  const footerElement = document.querySelector(".section-footer");

  const scrollElement = document.createElement("div") ;
  scrollElement.classList.add("scrollTop-style");

  scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class ="scroll-top"></ion-icon>`;

  footerElement.after(scrollElement) //This means, add the icon after footer element.

  const scrollTop = () =>{
    heroSection.scrollIntoView({behavior:"smooth"})
  }

  scrollElement.addEventListener("click",scrollTop)

  //------------------------ Animate Number Counter----------------------------------------------------------
  
  const counterNum = document.querySelectorAll(".counter-numbers");

  const speed = 200;

  counterNum.forEach((curElem)=>{
    const updateNumber = () =>{
      const targetNumber = parseInt(curElem.dataset.number);
      // console.log(targetNumber); 2000

      const initialNumber = parseInt(curElem.innerText)
      // console.log(initialNumber);  0
      const incrementNumber = Math.trunc(targetNumber/speed)
      // console.log(incrementNumber);  10

      if(initialNumber < targetNumber){
        curElem.innerText = `${initialNumber + incrementNumber}+`;
        setTimeout(updateNumber, 10);
      }
    }
    updateNumber();
  });

  // workObserver.observe(workSection);

  //----------------------Lazy loading images---------------------
  const imgRef = document.querySelector("img[data-src]");

  const lazyImg = (entries) =>{
    const [entry] = entries;
    console.log(entry);
    if(!entry.isIntersecting)
    return;
    entry.target.src = imgRef.dataset.src;
  }

  const imgObserver = new IntersectionObserver(lazyImg,{
    root:null,
    threshold:0
  });

  imgObserver.observe(imgRef);
  

  
  
  // -----------------------------------Scalar Academy Questions START-------------------------------------------------

  // function solve(n){
  //   while (n>0){
  //     n++;
  //     n-=2;
  //   }
  //   console.log("solve problem")
  //   console.log(n)
  // }
  // solve(3)

  // function solve2(){
  //   var i =0;
  //   var sum =0;
  //   while(i<100){
  //     sum = sum +i;
  //     sum=i+sum;
  //     i++
  //   }
  //   console.log(sum)
  // }
  // solve2()

  // function fibbb(n){
  //   // debugger;
  //   if(n<=1)
  //   return n;
  //   return fibbb(n-1)+ fibbb(n-2);
  // }
  // fibbb(2)

  // function fun(A,B){
  //   if(B==0)
  //   return A;
  //   return fun(B,A % B);
  // }
  // var ans = fun (100,0);
  // console.log(ans);

  // -----------------------------------Scalar Academy Questions END-------------------------------------------------


  // print 1 to 10 sum of natural numbers
      var a = [1,2,3,4,5,6,7,8,9,10];
      var sum = 0;
      var sum1 = 0;
        
    for (let i = 0; i < a.length; i++) {
      sum= sum+a[i];
      }
    console.log(sum);

 //print 1 to 10 sum of natural numbers by map method
    a.map((elm)=>{
       sum1 = sum1+elm;
    })
    console.log(sum1)

    //Check whether given number is prime or not

    

    function checkPrime(num){
      if (!num===0 || !num===1) {
        if(num%2===0){
          console.log("given number "+num + " is a prime number")
        }
        else{
          console.log("given number "+num + " is not a prime number")
        }
      } else {
        console.log(`${num} is not a prime number`);
      }
      
    }


    checkPrime(4);

    //Factorial of a number
    var fact = 1;
    function factorial(num){
      for (let i = 1; i <= num; i++) {
        fact = fact*i;//120
      }

      console.log(`Factorial of ${num} is ${fact}`);
    }

    factorial(52);
