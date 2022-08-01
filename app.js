

let skillEvent = document.querySelector('.skill');
let educationEvent = document.querySelector('.education')
let contactEvent = document.querySelector('.contact')
let contentSkill = document.querySelector('#skill_content')
let contentEducation = document.querySelector('#education_content')
let contentContact = document.querySelector('#contact_content')

skillEvent.addEventListener("click", function onClick() {
    let skillBox = new WinBox ({
        title: 'Skills',
        background: '#4C640C',
        mount: contentSkill,
    })
})

educationEvent.addEventListener("click", function onClick() {
    let educationBox = new WinBox ({
        title: 'Educations',
        background: '#4C640C',
        mount: contentEducation,
    })
})

contactEvent.addEventListener("click", function onClick() {
    let contactBox = new WinBox ({
        title: 'Contact',
        background: '#4C640C',
        mount: contentContact,
    })
})




