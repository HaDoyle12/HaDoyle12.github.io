// Mobile nav toggle
    document.getElementById('navToggle').addEventListener('click', function() {
      document.getElementById('navLinks').classList.toggle('open');
    });

    // Close mobile nav on link click
    document.querySelectorAll('.nav-links a').forEach(function(link) {
      link.addEventListener('click', function() {
        document.getElementById('navLinks').classList.remove('open');
      });
    });

    // Scroll reveal
    var reveals = document.querySelectorAll('.reveal');
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(function(el) { observer.observe(el); });

    // Active nav link highlighting
    var sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', function() {
      var scrollY = window.pageYOffset;
      sections.forEach(function(section) {
        var top = section.offsetTop - 100;
        var height = section.offsetHeight;
        var id = section.getAttribute('id');
        var link = document.querySelector('.nav-links a[href="#' + id + '"]');
        if (link) {
          if (scrollY >= top && scrollY < top + height) {
            link.style.color = '#fff';
            link.style.background = 'rgba(255,255,255,0.08)';
          } else {
            link.style.color = '';
            link.style.background = '';
          }
        }
      });
    });