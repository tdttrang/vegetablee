  // var $ = document.querySelector.bind(document)

  // //list
  // const vegList= [
  // {
  //   id: '1',
  //   ten: "Lúa gạo",
  //   img: "assets/images/nông nghiệp/piece-golden-rice-rice-waiting-be-harvested.jpg",
  //   link: "https://niengiamnongnghiep.vn/cay-lua-co-nguon-goc-tu-dau.html#:~:text=B%E1%BA%AFt%20%C4%91%E1%BA%A7u%20t%E1%BB%AB%20Trung%20Qu%E1%BB%91c%20v%C3%A0%20c%C3%A1c%20khu,T%C3%A2y%20Ban%20Nha%20%C4%91%E1%BA%BFn%20Trung%20v%C3%A0%20Nam%20M%E1%BB%B9."
  // },
  // {
  //   id: '2',
  //   ten: "Lúa mì",
  //   img: "assets/images/nông nghiệp/ears-wheat-close-up-field-concept-farming-nature.jpg",
  //   link: "https://vi.wikipedia.org/wiki/L%C3%BAa_m%C3%AC"
  // },
  // {
  //   id: '3',
  //   ten: "Ngô",
  //   img: "assets/images/nông nghiệp/top-view-pot-full-corn-seeds-corns-white-surface.jpg",
  //   link: "https://vi.wikipedia.org/wiki/Ng%C3%B4#:~:text=C%C3%A2y%20ng%C3%B4%20%C4%91%C6%B0%E1%BB%A3c%20du%20nh%E1%BA%ADp%20v%C3%A0o%20Vi%E1%BB%87t%20Nam,v%C3%A0%20c%C3%A1c%20v%C3%B9ng%20ph%E1%BB%A5%20c%E1%BA%ADn%29.%20%5Bc%E1%BA%A7n%20d%E1%BA%ABn%20ngu%E1%BB%93n%5D"
  // },
  // {
  //   id: '4',
  //   ten: "Trà",
  //   img: "assets/images/nông nghiệp/green-tea-bud-leaves-green-tea-plantations-morning.jpg",
  //   link: "https://olongha.com/nguon-goc-cua-tra/"
  // },
  // {
  //   id: '5',
  //   ten: "Trà",
  //   img: "assets/images/nông nghiệp/green-tea-bud-leaves-green-tea-plantations-morning.jpg",
  //   link: "https://olongha.com/nguon-goc-cua-tra/"
  // },
  // {
  //   id: '6',
  //   ten: "Trà",
  //   img: "assets/images/nông nghiệp/green-tea-bud-leaves-green-tea-plantations-morning.jpg",
  //   link: "https://olongha.com/nguon-goc-cua-tra/"
  // },
  // {
  //   id: '7',
  //   ten: "Trà",
  //   img: "assets/images/nông nghiệp/green-tea-bud-leaves-green-tea-plantations-morning.jpg",
  //   link: "https://olongha.com/nguon-goc-cua-tra/"
  // },
  // {
  //   id: '8',
  //   ten: "Trà",
  //   img: "assets/images/nông nghiệp/green-tea-bud-leaves-green-tea-plantations-morning.jpg",
  //   link: "https://olongha.com/nguon-goc-cua-tra/"
  // },
  // ]


  // const vegList = document.querySelector(".veg-content"),
  // firstImg = vegList.querySelectorAll("img")[0];
  // arrowIcons = document.querySelectorAll(".veg-content i");
  

  // const showHideIcons = () => {
  //   let scrollWidth = vegList.scrollWidth - vegList.clientWidth;
  //   arrowIcons[0].style.display = vegList.scrollLeft == 0 ? "none" : "block";
  //   arrowIcons[1].style.display = vegList.scrollLeft == scrollWidth ? "none" : "block";

  // }

  // arrowIcons.forEach(icon => {
  //     icon.addEventListener("click", () => {
  //       let firstImgWidth = firstImg.clientWidth + 14;
  //       if(icon.id == "left") {
  //         vegList.scrollLeft -= firstImgWidth;
  //       } else {
  //         vegList.scrollLeft += firstImgWidth;
  //       }
  //       setTimeout(() => showHideIcons(), 60);
  //       // showHideIcons();
  //     });
  // });


  // Nông nghiệp
  const rightbtn = document.querySelector('#right')
  const leftbtn = document.querySelector('#left')
  const imgNuber = document.querySelectorAll('.vegitems')
  let index = 0

  rightbtn.addEventListener("click", function(){
    index = index + 1
    if (index > imgNuber.length-1){
          index = 0
    } 
    document.querySelector(".vegSlider").style.right = index * 100 + "%"
  })
  leftbtn.addEventListener("click", function(){
    index = index -1 
    if (index < 0) {
      index = imgNuber.length-1
    }
    document.querySelector(".vegSlider").style.right= index * 100 + "%"
  })

  // Lâm nghiệp 
  const rightbtntwo = document.querySelector('#righttwo')
  const leftbtntwo = document.querySelector('#lefttwo')
  const imgNubertwo = document.querySelectorAll('.vegitemstwo')
  let indextwo = 0

  rightbtntwo.addEventListener("click", function(){
    indextwo = indextwo + 1
    if (indextwo > imgNubertwo.length-1){
          indextwo = 0
    } 
    document.querySelector(".vegSlidertwo").style.right = indextwo * 100 + "%"
  })
  leftbtntwo.addEventListener("click", function(){
    indextwo = indextwo -1 
    if (indextwo < 0) {
      indextwo = imgNubertwo.length-1
    }
    document.querySelector(".vegSlidertwo").style.right= indextwo * 100 + "%"
  })

  // Thủy sản
  const rightbtnthree = document.querySelector('#rightthree')
  const leftbtnthree = document.querySelector('#leftthree')
  const imgNuberthree = document.querySelectorAll('.vegitemsthree')
  let indexthree = 0

  rightbtnthree.addEventListener("click", function(){
    indexthree = indexthree + 1
    if (indexthree > imgNuberthree.length-1){
          indexthree = 0
    } 
    document.querySelector(".vegSliderthree").style.right = indexthree * 100 + "%"
  })
  leftbtnthree.addEventListener("click", function(){
    indexthree = indexthree -1 
    if (indexthree < 0) {
      indexthree = imgNuberthree.length-1
    }
    document.querySelector(".vegSliderthree").style.right= indexthree * 100 + "%"
  })








 



