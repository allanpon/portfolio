/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

require('@fortawesome/fontawesome-free/css/all.min.css');
require('@fortawesome/fontawesome-free/js/all.js');

/*
    HEADER - START
 */

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

/*
    HEADER - END
 */

/*
    INDEX - BEGIN
 */

var p = document.getElementById('typewriter');
var n = 0;
var str = 'Développeur Web Symfony.';
var typeTimer = setInterval(function() {

    n = n + 1;
    p.innerHTML = str.slice(0, n);
    if (n === str.length) {
        clearInterval(typeTimer);
        p.innerHTML = str;
        n = 0;
        setInterval(function() {

            if (n === 0) {
                p.innerHTML = str + "|"
                n = 1;
            } else {
                p.innerHTML = str
                n = 0;
            }
        }, 500);
    }
}, 60)

/*
    INDEX - END
 */