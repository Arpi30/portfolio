//import { data } from './multilang.js'
$(document).ready(function () {
    
    var variables = {
        phoneHtml: '',
        Aboutme: '',
        cvAboutMe: '',
        cvSkills: '',
        cvSchool: '',
        phoneNumber: '06 / 30 - 7089495',
    };
    var DOMelement = {
        body: $('.container-fluid'),
        //multilangFunction
        language: document.querySelector('.langWrap'),
        link: document.querySelectorAll('a'),
        //phoneAnimation
        phoneIcon: $('#phoneId'),
        phoneDiv: $('#phoneNnumber'),
        //aboutme
        aboutmeCardTitle: document.querySelector('.aboutmeCardTitle'),
        aboutmeTitle: document.querySelector('.aboutmeTitle'),
        aboutmeText: document.querySelector('.aboutmeText'),
        aboutmeText2: document.querySelector('.aboutmeText2'),
        //stack
        stackCardTitle: document.querySelector('.stackCardTitle'),
        stackTitle: document.querySelector('.stackTitle'),
        stackBody: $('.stackBody'),
        progressLine: $('.progress-line'),
        stackCloseBtn: $('.stackCloseBtn'),
        //projekt
        projektCardTitle: document.querySelector('.projektCardTitle'),
        //cv
        cvCardTitle: document.querySelector('.cvCardTitle'),
        cvTitle: document.querySelector('.cvTitle'),
        cvText: document.querySelector('.cvText'),
        one: document.querySelector('.one'),
        two: document.querySelector('.two'),
        three: document.querySelector('.three'),
        four: document.querySelector('.four'),
        cvSchool1: document.querySelector('.cvSchool1'),
        cvSchool2: document.querySelector('.cvSchool2'),
        german: document.querySelector('.german'),
        english: document.querySelector('.english'),
        //availability
        availabilitytitle: document.querySelector('.availabilitytitle'),
        availabilityText: document.querySelector('.availabilityText'),
        availabilityCardTitle: document.querySelector('.availabilityCardTitle'),
        //goals
        goalsCardTitle: document.querySelector('.goalsCardTitle'),
        goalsTitle: document.querySelector('.goalsTitle'),
        goalsText: document.querySelector('.goals'),

    };

    var clickEvent = {
        showMobileNumber: function () {
            DOMelement.phoneIcon.click( () => {
                if (variables.phoneHtml == '') {
                    variables.phoneHtml = `<p class="phoneAnimationIn d-flex justify-content-center">${variables.phoneNumber}</p>`;
                    DOMelement.phoneDiv.addClass('phoneAnimationIn')
                    DOMelement.phoneIcon.css('color', '#e4e4e4')
                } else {
                    DOMelement.phoneIcon.css('color', '')
                    variables.phoneHtml = '';
                }
                DOMelement.phoneDiv.html(variables.phoneHtml)
            })
        },
        progressLine: function () {
            
            DOMelement.stackBody.click( () => {
                DOMelement.progressLine.addClass("animate animate span")
            });
        },
        progressLineClose: function () {
            DOMelement.stackCloseBtn.click(() => {
                setTimeout( function () {
                    DOMelement.progressLine.removeClass("animate animate span")
                }, 1000)
                
            })
        }
    };

    //Multilanguage
    // 'a' link iteralas es active class atadas
    var multiLanguage = () => {
        DOMelement.link.forEach(item => {
            item.addEventListener('click', () => {
                DOMelement.language.querySelector('.active').classList.remove('active');
                item.classList.add('active');
                // 'a' link language attributum beillesztes
                var attr = item.getAttribute('language');
                //state change
                //1.
                DOMelement.aboutmeCardTitle.innerHTML = data[attr].aboutme.aboutmeCardTitle;
                DOMelement.aboutmeTitle.innerHTML = data[attr].aboutme.aboutmeTitle;
                DOMelement.aboutmeText.innerHTML = data[attr].aboutme.aboutmeText;
                DOMelement.aboutmeText2.innerHTML = data[attr].aboutme.aboutmeText2;
                //2.
                DOMelement.stackCardTitle.innerHTML = data[attr].stack.stackCardTitle;
                DOMelement.stackTitle.innerHTML = data[attr].stack.stackTitle;
                //3.
                DOMelement.projektCardTitle.innerHTML = data[attr].projekt.projektCardTitle;
                //4.
                DOMelement.cvCardTitle.innerHTML = data[attr].cv.cvCardTitle;
                DOMelement.cvTitle.innerHTML = data[attr].cv.cvTitle;
                DOMelement.cvText.innerHTML = data[attr].cv.cvText;
                DOMelement.one.innerHTML = data[attr].cv.cvskills.one;
                DOMelement.two.innerHTML = data[attr].cv.cvskills.two;
                DOMelement.three.innerHTML = data[attr].cv.cvskills.three;
                DOMelement.four.innerHTML = data[attr].cv.cvskills.four;
                DOMelement.cvSchool1.innerHTML = data[attr].cv.schools.cvSchool1;
                DOMelement.cvSchool2.innerHTML = data[attr].cv.schools.cvSchool2;
                DOMelement.german.innerHTML = data[attr].cv.cvLanguage.german;
                DOMelement.english.innerHTML = data[attr].cv.cvLanguage.english;
                //5.
                DOMelement.availabilitytitle.innerHTML = data[attr].availability.availabilitytitle;
                DOMelement.availabilityText.innerHTML = data[attr].availability.availabilityText;
                DOMelement.availabilityCardTitle.innerHTML = data[attr].availability.availabilityCardTitle;
                //6.
                DOMelement.goalsCardTitle.innerHTML = data[attr].goals.goalsCardTitle;
                DOMelement.goalsTitle.innerHTML = data[attr].goals.goalsTitle;
                DOMelement.goalsText.innerHTML = data[attr].goals.goalsText;


            });
        });
    }

    //fugvenyhivasok
    clickEvent.showMobileNumber();
    clickEvent.progressLine();
    clickEvent.progressLineClose();
    multiLanguage();
})



