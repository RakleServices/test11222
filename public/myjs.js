
    
document.addEventListener('click', function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;

    if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') == 'modalsz') {
        if (target.hasAttribute('data-target')) {
            var m_ID = target.getAttribute('data-target');
            document.getElementById(m_ID).classList.add('opensz');
            e.preventDefault();
        }
    }

    // Close modalsz window with 'data-dismiss' attribute or when the backdrop is clicked
    if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'modalsz') || target.classList.contains('modalsz')) {
        var modalsz = document.querySelector('[class="modalsz opensz"]');
        modalsz.classList.remove('opensz');
        e.preventDefault();
    }
}, false);