//sidebar-container
const menuItems = document.querySelectorAll('.menuItems');

//Messages
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages')

//themes
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customizeTheme');


//Choose size
const fontSizes = document.querySelectorAll('.chooseSize span');

//
let root = document.querySelector(':root');

//colors palette
const colorPallete = document.querySelectorAll('.chooseColor span');

//BACKGROUND COLOR
const bgOne = document.querySelector('.bgOne');
const bgTwo = document.querySelector('.bgTwo');
const bgThree = document.querySelector('.bgThree');




//remove active class from menu items
const changeActiveItem = () => {
    menuItems.forEach(item =>{
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');

        //for it to display the notification message ,a condition was created
        if(item.id != 'notifications'){
            document.querySelector('.notificationPopup').
            style.display = 'none';
        }
        else {
            document.querySelector('.notificationPopup').
            style.display = 'block';


            //to mark the notificaionCount as read
            document.querySelector('#notifications .notificationCount').
            style.display = 'none';
        }
    })
})


//adding a click event to the messages
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var( --color-primary)'

    messagesNotification.querySelector('.notificationCount').style.display = 'none'

    //TIME WAS SET OUT FOR THE BOX SHADOW TO BE CLEARED OFF
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    },2000);



})


//TO MAKE THE THEME A CLICKED ONE (open theme Modal)
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}


//CLOSE THEME MODAL

const closeThemeModal = (event) => {
    if(event.target.classList.contains('customizeTheme')){
        themeModal.style.display = 'none'
    }
}

themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);


//REMOVE ACTIVE CLASS FROM THE FONT SIZE 
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}


//FONTSIZES
//_____FOR IT TO BE CLICKABLE AND ACTIVE
fontSizes.forEach(size => {
    size.addEventListener('click', () =>  {

        //invoking the remove Selector
        removeSizeSelector();

        //declare a variable for the font size
        let fontSizes;
        //

        size.classList.toggle('active');

        //CREATED A CONDITION FOR THE FONT SIZE
        if(size.classList.contains('fontSizeOne')) {
            fontSizes = '10px';
            root.style.setProperty(' --sticky-top-left:' ,'5.4rem');
            root.style.setProperty('  --sticky-top-right' ,'5.4rem')
        }
        else if (size.classList.contains('fontSizeTwo')) {
            fontSizes = '13px';
            root.style.setProperty(' --sticky-top-left:' ,'5.4rem');
            root.style.setProperty('  --sticky-top-right' ,'-7rem')
        }
        else if (size.classList.contains('fontSizeThree')) {
            fontSizes = '16px';
            root.style.setProperty(' --sticky-top-left:' ,'-2rem');
            root.style.setProperty('  --sticky-top-right' ,'-17rem')
        }
        else if (size.classList.contains('fontSizeFour')) {
            fontSizes = '19px';
            root.style.setProperty(' --sticky-top-left:' ,'5rem');
            root.style.setProperty('  --sticky-top-right' ,'-25rem')
        }
        else if (size.classList.contains('fontSizeFive')) {
            fontSizes = '22px';
            root.style.setProperty(' --sticky-top-left:' ,'-12rem');
            root.style.setProperty('  --sticky-top-right' ,'-35rem')
        }
        //CHANGE FONT SIZE OF THE ROOT HTML ELEMENT
        document.querySelector('html').style.fontSize = fontSizes 


    })
})


//REMOVE ACTIVE CLASS FROM COLOR ATTRIBUTE
// const changeActiveColor = () => {
//     colorPallete.forEach(colorPicker => {
//         colorPicker.classList.remove('active');
//     })
// }

//COLOR TO BE CHANGEABLE AND ACTIVE
colorPallete.forEach(color => {
    color.addEventListener('click', () => {

        //created a variable for the color to be changed 
        let primary;
        
        if (color.classList.contains('colorOne')){
            primary = '252'
        }
        else if (color.classList.contains('colorTwo')){
            primary = '52'
        }
        else if (color.classList.contains('colorThree')){
            primary = '352'
        }
        else if (color.classList.contains('colorFour')){
            primary = '152'
        }
        else if (color.classList.contains('colorFive')){
            primary = '202'
        }
        //to add an active class to the color
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primary)

    })
})

//theme background creating a variable
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//changing of background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

//adding a click event to bg1
bgOne.addEventListener('click', () =>  {
    //add active class
    bgOne.classList.add('active');

    //remove active class from the other 2
    bgTwo.classList.remove('active');
    bgThree.classList.remove('active');

    window.location.reload();
})

bgTwo.addEventListener('click', () => {
    lightColorLightness = '15%';
    whiteColorLightness = '20%';
    darkColorLightness = '95%';

    //add active class
    bgTwo.classList.add('active');
    
    //remove active class from the other
    bgOne.classList.remove('active');
    bgThree.classList.remove('active'); 

    changeBG();
})

bgThree.addEventListener('click', () => {
    lightColorLightness = '0%';
    whiteColorLightness ='10%';
    darkColorLightness = '95%';

    bgThree.classList.add('active');
    
    //remove active class from the other
    bgOne.classList.remove('active');
    bgTwo.classList.remove('active');

    changeBG()

})