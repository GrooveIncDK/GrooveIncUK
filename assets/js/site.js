document.addEventListener('DOMContentLoaded', function () {
    var mobileToggle = document.getElementById('mobileToggle');
    var mobileDrawer = document.getElementById('mobileDrawer');
    var navOverlay = document.getElementById('navOverlay');
    var drawerClose = document.getElementById('drawerClose');
    if (!mobileToggle || !mobileDrawer) return;

    function openDrawer() {
        mobileDrawer.classList.add('open');
        navOverlay.classList.add('open');
        mobileToggle.setAttribute('aria-expanded', 'true');
    }
    function closeDrawer() {
        mobileDrawer.classList.remove('open');
        navOverlay.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
    }
    mobileToggle.addEventListener('click', function () {
        if (mobileDrawer.classList.contains('open')) closeDrawer(); else openDrawer();
    });
    navOverlay.addEventListener('click', closeDrawer);
    drawerClose.addEventListener('click', closeDrawer);
    mobileDrawer.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeDrawer); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDrawer(); });
});
