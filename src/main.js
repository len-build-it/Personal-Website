/**
 * Progressive enhancement for Lenard Angelo Olajay Portfolio.
 * Enhances canonical credentials list into an accessible single-slide carousel
 * with numeric indicator, contained image stage, and explicit pause/resume controls.
 */

export function calculateVisibleCount() {
  return 1;
}

export function calculateMaxIndex(total) {
  return Math.max(0, total - 1);
}

export function nextIndex(current, maxIdx) {
  return current >= maxIdx ? 0 : current + 1;
}

export function prevIndex(current, maxIdx) {
  return current <= 0 ? maxIdx : current - 1;
}

export function initCarousel() {
  const container = document.getElementById('carousel-container');
  const track = document.getElementById('carousel-track');
  const counter = document.getElementById('carousel-counter');
  const liveRegion = document.getElementById('carousel-live-region');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  const playPauseBtn = document.getElementById('carousel-playpause');
  const viewport = document.getElementById('carousel-viewport');

  if (!container || !track) return null;

  // Read credentials directly from the canonical semantic HTML
  const sourceItems = document.querySelectorAll('.credentials-list .credential-item');
  if (sourceItems.length === 0) {
    container.style.display = 'none';
    return null;
  }

  const credentials = Array.from(sourceItems).map((el, idx) => {
    const title = el.querySelector('.cred-title')?.textContent?.trim() || '';
    const badge = el.querySelector('.cred-badge')?.textContent?.trim() || '';
    const badgeClass = el.querySelector('.cred-badge')?.className || 'cred-badge';
    const issuer = el.querySelector('.cred-issuer')?.textContent?.trim() || '';
    const img = el.querySelector('.cred-thumb');
    const imgSrc = el.dataset.thumb || img?.getAttribute('src') || '';
    const imgAlt = el.dataset.thumbAlt || img?.getAttribute('alt') || title;
    const docLink = el.querySelector('.link-doc');
    const docHref = docLink?.getAttribute('href') || '';
    const docText = docLink?.textContent?.trim() || 'View Document';

    return {
      id: `cred-slide-${idx}`,
      title,
      badge,
      badgeClass,
      issuer,
      imgSrc,
      imgAlt,
      docHref,
      docText
    };
  });

  const total = credentials.length;

  // If only 1 credential, display static slide without timer or controls
  if (total === 1) {
    container.style.display = 'block';
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
    if (playPauseBtn) playPauseBtn.style.display = 'none';
    if (counter) counter.textContent = '01 / 01';
    track.innerHTML = createSlideHtml(credentials[0], 0, 1);
    return { count: 1, autoplay: false };
  }

  // Populate slides
  track.innerHTML = credentials.map((c, i) => createSlideHtml(c, i, total)).join('');
  container.style.display = 'block';

  let currentIndex = 0;
  const maxIndex = calculateMaxIndex(total);
  let isPausedByUser = false;
  let isHovered = false;
  let isInViewport = false;
  let timerId = null;
  const AUTOPLAY_INTERVAL = 6000;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function updateCarousel(announce = false) {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update numeric counter (01 / 16)
    if (counter) {
      const curStr = String(currentIndex + 1).padStart(2, '0');
      const totStr = String(total).padStart(2, '0');
      counter.textContent = `${curStr} / ${totStr}`;
      counter.setAttribute('aria-label', `Slide ${currentIndex + 1} of ${total}`);
    }

    // Update inert / tab indices so hidden slides cannot receive keyboard focus
    const slides = track.querySelectorAll('.carousel-slide');
    slides.forEach((slide, idx) => {
      const isVisible = idx === currentIndex;
      const links = slide.querySelectorAll('a, button');
      links.forEach(link => {
        if (isVisible) {
          link.removeAttribute('tabindex');
        } else {
          link.setAttribute('tabindex', '-1');
        }
      });
    });

    if (announce && liveRegion) {
      liveRegion.textContent = `Slide ${currentIndex + 1} of ${total}: ${credentials[currentIndex].title}`;
    }
  }

  function nextSlide(userAction = false) {
    currentIndex = nextIndex(currentIndex, maxIndex);
    if (userAction) {
      pauseAutoplay(true);
    }
    updateCarousel(userAction);
  }

  function prevSlide(userAction = false) {
    currentIndex = prevIndex(currentIndex, maxIndex);
    if (userAction) {
      pauseAutoplay(true);
    }
    updateCarousel(userAction);
  }

  function goToSlide(index, userAction = false) {
    currentIndex = Math.max(0, Math.min(index, maxIndex));
    if (userAction) {
      pauseAutoplay(true);
    }
    updateCarousel(userAction);
  }

  function startAutoplay() {
    if (prefersReducedMotion.matches || isPausedByUser) return;
    stopAutoplay();
    timerId = window.setInterval(() => {
      if (!isHovered && isInViewport && document.visibilityState === 'visible' && !isPausedByUser) {
        nextSlide(false);
      }
    }, AUTOPLAY_INTERVAL);
  }

  function stopAutoplay() {
    if (timerId) {
      window.clearInterval(timerId);
      timerId = null;
    }
  }

  function pauseAutoplay(manual = false) {
    if (manual) {
      isPausedByUser = true;
      if (playPauseBtn) {
        playPauseBtn.textContent = 'Resume';
        playPauseBtn.setAttribute('aria-label', 'Resume automatic sliding');
      }
    }
    stopAutoplay();
  }

  function resumeAutoplay() {
    isPausedByUser = false;
    if (playPauseBtn) {
      playPauseBtn.textContent = 'Pause';
      playPauseBtn.setAttribute('aria-label', 'Pause automatic sliding');
    }
    startAutoplay();
  }

  // Event Listeners
  if (prevBtn) {
    prevBtn.addEventListener('click', () => prevSlide(true));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => nextSlide(true));
  }
  if (playPauseBtn) {
    playPauseBtn.addEventListener('click', () => {
      if (isPausedByUser) {
        resumeAutoplay();
      } else {
        pauseAutoplay(true);
      }
    });
  }

  // Hover pauses movement
  container.addEventListener('mouseenter', () => {
    isHovered = true;
  });
  container.addEventListener('mouseleave', () => {
    isHovered = false;
  });

  // Keyboard focus entering the carousel stops automatic movement
  container.addEventListener('focusin', (e) => {
    // If the focus came from inside carousel or controls, respect user pause
    if (e.target !== playPauseBtn) {
      pauseAutoplay(true);
    }
  });

  // Keyboard arrow navigation on viewport
  if (viewport) {
    viewport.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextSlide(true);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide(true);
      }
    });
  }

  // Touch Swipe Handling (preserving vertical scroll)
  let startX = 0;
  let startY = 0;
  let isSwiping = false;

  track.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isSwiping = true;
    }
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    if (!isSwiping) return;
    isSwiping = false;
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const diffX = startX - endX;
    const diffY = startY - endY;

    // Only horizontal swipe if diffX > diffY and exceeds threshold
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        nextSlide(true);
      } else {
        prevSlide(true);
      }
    }
  }, { passive: true });

  // IntersectionObserver to only autoplay when gallery is visible on screen
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isInViewport = entry.isIntersecting;
        if (isInViewport && !isPausedByUser) {
          startAutoplay();
        } else {
          stopAutoplay();
        }
      });
    }, { threshold: 0.2 });
    observer.observe(container);
  } else {
    isInViewport = true;
    startAutoplay();
  }

  // Tab visibility change
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && isInViewport && !isPausedByUser) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
  });

  // Reduced motion preference change
  prefersReducedMotion.addEventListener('change', (e) => {
    if (e.matches) {
      pauseAutoplay(false);
    } else {
      if (!isPausedByUser) {
        resumeAutoplay();
      }
    }
  });

  // Responsive resize: update translation
  window.addEventListener('resize', () => {
    updateCarousel(false);
  });

  // Initial display
  updateCarousel(false);
  if (!prefersReducedMotion.matches) {
    startAutoplay();
  }

  return {
    next: () => nextSlide(true),
    prev: () => prevSlide(true),
    goTo: (idx) => goToSlide(idx, true),
    pause: () => pauseAutoplay(true),
    resume: () => resumeAutoplay(),
    getState: () => ({
      currentIndex,
      total,
      isPausedByUser
    })
  };
}

function createSlideHtml(c, index, total) {
  const curNum = String(index + 1).padStart(2, '0');
  const totNum = String(total).padStart(2, '0');

  return `
    <div class="carousel-slide" id="${c.id}" role="group" aria-roledescription="slide" aria-label="${index + 1} of ${total}">
      <div class="slide-layout">
        <div class="slide-stage">
          <img src="${c.imgSrc}" alt="${c.imgAlt}" class="slide-img" loading="${index === 0 ? 'eager' : 'lazy'}" width="600" height="420" onerror="this.alt='Certificate preview unavailable'; this.classList.add('img-fallback');">
        </div>
        <div class="slide-info">
          <div class="slide-meta-row">
            <span class="slide-index">${curNum} / ${totNum}</span>
            <span class="slide-badge">${c.badge}</span>
          </div>
          <h4 class="slide-title">${c.title}</h4>
          <p class="slide-issuer">${c.issuer}</p>
          <div class="slide-action">
            <a href="${c.docHref}" target="_blank" rel="noopener noreferrer" class="slide-link">
              View Document <span class="external-hint" aria-hidden="true">↗</span><span class="sr-only">(opens in new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Auto-run on DOM ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousel);
  } else {
    initCarousel();
  }
}
