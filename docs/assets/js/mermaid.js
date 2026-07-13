// Mermaid loader - simplified for v11 compatibility
(function() {
    var CDN_LIST = [
        'https://unpkg.com/mermaid@11/dist/mermaid.min.js',
        'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js'
    ];
    var STORE = {};
    var loaded = false;

    function getSource(el) {
        var txt = el.textContent || '';
        if (/^\s*</.test(el.innerHTML || '')) return '';
        return txt.trim() ? txt : '';
    }

    function capture() {
        document.querySelectorAll('.mermaid').forEach(function(el) {
            var key = el.dataset.mid || (el.dataset.mid = 'm' + Math.random().toString(36).slice(2));
            if (!STORE[key]) {
                var src = getSource(el);
                if (src) STORE[key] = src;
            }
        });
    }

    function render() {
        if (!loaded || !window.mermaid) return;
        var isDark = document.body.getAttribute('data-md-color-scheme') === 'slate';
        try {
            mermaid.initialize({
                startOnLoad: false,
                theme: isDark ? 'dark' : 'default',
                securityLevel: 'loose'
            });
        } catch(e) {
            // v11 getThemeColors bug - fallback without theme
            try { mermaid.initialize({ startOnLoad: false, securityLevel: 'loose' }); } catch(e2) {}
        }
        var hadSrc = false;
        document.querySelectorAll('.mermaid').forEach(function(el) {
            var key = el.dataset.mid;
            if (key && STORE[key]) {
                el.textContent = STORE[key];
                el.removeAttribute('data-processed');
                el.innerHTML = '';
                el.textContent = STORE[key];
                hadSrc = true;
            }
        });
        if (hadSrc) {
            try { mermaid.run({ querySelector: '.mermaid' }); }
            catch(e) { console.error('Mermaid render error', e); }
        }
    }

    function load(idx) {
        if (window.mermaid) { loaded = true; render(); return; }
        idx = idx || 0;
        if (idx >= CDN_LIST.length) { console.error('All Mermaid CDNs failed'); return; }
        var s = document.createElement('script');
        s.async = false;
        s.src = CDN_LIST[idx];
        s.onload = function() { loaded = true; render(); };
        s.onerror = function() {
            console.warn('Mermaid CDN failed: ' + CDN_LIST[idx]);
            load(idx + 1);
        };
        document.head.appendChild(s);
    }

    function start() {
        capture();
        var els = document.querySelectorAll('.mermaid');
        if (!els.length) return;
        var ready = true;
        for (var i = 0; i < els.length; i++) {
            var k = els[i].dataset.mid;
            if (!k || !STORE[k]) { ready = false; break; }
        }
        if (ready) { load(); } else { setTimeout(start, 100); }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else { start(); }

    // Re-render on theme toggle and navigation.instant page changes
    var timer;
    new MutationObserver(function() {
        clearTimeout(timer);
        timer = setTimeout(function() {
            capture();
            if (loaded) render(); else start();
        }, 100);
    }).observe(document.body, {
        attributes: true, attributeFilter: ['data-md-color-scheme'],
        subtree: true, childList: true
    });
})();
