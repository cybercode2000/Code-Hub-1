
function getDocHeight(){
    return Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    )
}


let header = document.querySelector('.header');
let main = document.querySelector('.main');
let image1 = document.querySelector('#image1');
let image2 = document.querySelector('#image2');
let main1 = document.querySelector('.main1');
let image3 = document.querySelector('#image3');
let main2 = document.querySelector('.main2');
let serviceheader = document.querySelector('.header-service');
let talk = document.querySelector('.firstext');


function amountscrolled() {
    var winHeight = window.innerHeight;
    var docheight = getDocHeight();
    var scrollTop = window.pageYOffset;
    var tracklength = docheight - winHeight;
    var result = Math.floor((scrollTop / tracklength) * 100);


if(result >= 6) {
header.style.opacity = 1;
header.style.animationName = 'damicode2';
header.style.animationDuration = '2s';

image1.style.display = 'block';
image1.style.animationName = 'image1';
image1.style.animationDuration = '4s';

main.style.display = 'block';
main.style.animationName = 'content';
main.style.animationDuration = '5s';
}



if(result >= 24) {
    image2.style.display = 'block';
    image2.style.animationName = 'image1';
    image2.style.animationDuration = '4s';
    
    main1.style.display = 'block';
    main1.style.animationName = 'content';
    main1.style.animationDuration = '5s';
    }


if(result >= 31) {
    image3.style.display = 'block';
    image3.style.animationName = 'image1';
    image3.style.animationDuration = '4s';
        
    main2.style.display = 'block';
    main2.style.animationName = 'content';
    main2.style.animationDuration = '5s';
    }

    
if(result >= 180)
talk.style.opacity = 1;
talk.style.animationName = 'image1';
talk.style.animationDuration = '8s';

    
}

window.addEventListener("scroll", (() => {
        amountscrolled();
}));

let  submit = document.querySelector('#we');
let  name = document.querySelector('#cname');
let  email = document.querySelector('#cemail');
let  comment = document.querySelector('#comment');
let title = document.querySelector('#title');
let text1 = document.querySelector('#result');
name.value = '';
email.value = '';
comment.value = '';
function messages(){ 
    if(name.value == '' || email.value == '' || comment.value == '' ){
        alert('Please enter the appropriate information');
        name.value = '';
        email.value = '';
        comment.value = '';
    }
    else {
        let secondtext = document.querySelector('.firstext');
        let firstext = document.querySelector('.secondext');
        
        secondtext.style.display = 'none';
        firstext.style.display = 'none';
            const signi = {
            name : name.value,
            email: email.value,
            comment: comment.value,
        };
        
        let title = document.querySelector('#title');
        let text = document.querySelector('#text');
        const me = 
        `Dear user ${signi.name} Thanks you for Contacting us we are so glad to have you here, 
            
        we are going to work on your comment and get back to you as soon as possible @ ${signi.email}.

        
        
        Regards 
        Team CodeHub
        `
        title.style.display = 'block';
        result.textContent =  me;
        
    }
}

submit.addEventListener('click', (() => {
    return messages();
}))
