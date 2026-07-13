// Mermaid init + render (library loaded via extra_javascript)
(function() {
    function getSrc(el) {
        var t = el.textContent || '';
        return t.trim() && !/^\s*</.test(el.innerHTML || '') ? t.trim() : '';
    }

    var STORE = {};
    function capture() {
        document.querySelectorAll('.mermaid').forEach(function(el) {
            if (!el.dataset.mid) el.dataset.mid = 'm' + Math.random().toString(36).slice(2);
            if (!STORE[el.dataset.mid]) {
                var s = getSrc(el);
                if (s) STORE[el.dataset.mid] = s;
            }
        });
    }

    function render() {
        if (!window.mermaid) return;
        var dark = document.body.getAttribute('data-md-color-scheme') === 'slate';
        try {
            mermaid.initialize({ startOnLoad: false, theme: dark ? 'dark' : 'default', securityLevel: 'loose' });
        } catch(e) {
            try { mermaid.initialize({ startOnLoad: false, securityLevel: 'loose' }); } catch(_) {}
        }
        var any = false;
        document.querySelectorAll('.mermaid').forEach(function(el) {
            var s = STORE[el.dataset.mid];
            if (s) { el.textContent = s; el.removeAttribute('data-processed'); any = true; }
        });
        if (any) try { mermaid.run({ querySelector: '.mermaid' }); } catch(e) { console.error(e); }
    }

    function check() {
        capture();
        if (window.mermaid) render();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', check);
    } else { check(); }

    // Handle navigation.instant + theme toggle
    var t;
    new MutationObserver(function() {
        clearTimeout(t);
        t = setTimeout(check, 200);
    }).observe(document.body, {
        attributes: true, attributeFilter: ['data-md-color-scheme'],
        subtree: true, childList: true
    });
})();
