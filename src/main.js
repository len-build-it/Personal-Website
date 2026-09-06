/**
 * Progressive enhancement for Lenard Angelo Olajay Portfolio.
 * Enhances canonical credentials list into an accessible carousel.
 */

export function initCarousel() {
  const container = document.getElementById('carousel-container');
  const track = document.getElementById('carousel-track');
  const pagination = document.getElementById('carousel-pagination');
  const liveRegion = document.getElementById('carousel-live-region');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  const playPauseBtn = document.getElementById('carousel-playpause');
  const viewport = document.getElementById('carousel-viewport');

  if (!container || !track) return null;

  // Read credentials directly from the canonical semantic HTML
  const sourceItems = document.querySelectorAll('.credentials-list .credential-item');
  if (sourceItems.length === 0) {
    return null;
  }

  const credentials = Array.from(sourceItems).map((el, idx) => {
    const title = el.querySelector('.cred-title')?.textContent?.trim() || '';
    const badge = el.querySelector('.cred-badge')?.textContent?.trim() || '';
    const badgeClass = el.querySelector('.cred-badge')?.className || 'cred-badge';
    const issuer = el.querySelector('.cred-issuer')?.textContent?.trim() || '';
    const img = el.querySelector('.cred-thumb');
    const imgSrc = img?.getAttribute('src') || '';
    const imgAlt = img?.getAttribute('alt') || title;
    const docLink = el.querySelector('.link-doc');
    const docHref = docLink?.getAttribute('href') || '';
    const docText = docLink?.textContent?.trim() || 'View Original Document';

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

  // If only 1 credential, display static slide without timer or controls
  if (credentials.length === 1) {
    container.style.display = 'block';
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
    if (playPauseBtn) playPauseBtn.style.display = 'none';
    track.innerHTML = createSlideHtml(credentials[0], 0, 1);
    return { count: 1, autoplay: false };
  }

  // Populate slides
  track.innerHTML = credentials.map((c, i) => createSlideHtml(c, i, credentials.length)).join('');
  
  // Create pagination dots
  if (pagination) {
    pagination.innerHTML = credentials.map((_, i) => `
      <button type="button" class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Go to slide ${i + 1} of ${credentials.length}">
      </button>
    `).join('');
  }

  container.style.display = 'block';

  let currentIndex = 0;
  const total = credentials.length;
  let isPausedByUser = false;
  let isHovered = false;
  let isInViewport = false;
  let timerId = null;
  const AUTOPLAY_INTERVAL = 6000;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function getVisibleCount() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  }

  function getMaxIndex() {
    return Math.max(0, total - getVisibleCount());
  }

  function updateCarousel(announce = false) {
    const visibleCount = getVisibleCount();
    const maxIdx = getMaxIndex();
    if (currentIndex > maxIdx) {
      currentIndex = maxIdx;
    }

    const slideWidthPercent = 100 / visibleCount;
    track.style.transform = `translateX(-${currentIndex * slideWidthPercent}%)`;

    // Update pagination dots
    if (pagination) {
      const dots = pagination.querySelectorAll('.carousel-dot');
      dots.forEach((dot, idx) => {
        const isCurrent = idx === currentIndex;
        dot.classList.toggle('active', isCurrent);
        dot.setAttribute('aria-current', isCurrent ? 'true' : 'false');
      });
    }

    // Update inert / tab indices for visibility
    const slides = track.querySelectorAll('.carousel-slide');
    slides.forEach((slide, idx) => {
      const isVisible = idx >= currentIndex && idx < currentIndex + visibleCount;
      const links = slide.querySelectorAll('a');
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
    const maxIdx = getMaxIndex();
    if (currentIndex >= maxIdx) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    if (userAction) {
      pauseAutoplay(true);
    }
    updateCarousel(userAction);
  }

  function prevSlide(userAction = false) {
    const maxIdx = getMaxIndex();
    if (currentIndex <= 0) {
      currentIndex = maxIdx;
    } else {
      currentIndex--;
    }
    if (userAction) {
      pauseAutoplay(true);
    }
    updateCarousel(userAction);
  }

  function goToSlide(index, userAction = false) {
    currentIndex = Math.max(0, Math.min(index, getMaxIndex()));
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

  if (pagination) {
    pagination.addEventListener('click', (e) => {
      const dot = e.target.closest('.carousel-dot');
      if (dot && dot.dataset.index !== undefined) {
        goToSlide(parseInt(dot.dataset.index, 10), true);
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

  // Keyboard focus into carousel stops automatic movement
  container.addEventListener('focusin', () => {
    pauseAutoplay(true);
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
      pauseAutoplay(true);
    } else {
      resumeAutoplay();
    }
  });

  // Responsive resize
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
  return `
    <div class="carousel-slide" id="${c.id}" role="group" aria-roledescription="slide" aria-label="${index + 1} of ${total}">
      <div class="slide-media">
        <img src="${c.imgSrc}" alt="${c.imgAlt}" class="slide-img" loading="lazy" width="400" height="300" onerror="this.style.display='none'">
      </div>
      <div class="slide-body">
        <span class="${c.badgeClass}">${c.badge}</span>
        <h4 class="slide-title">${c.title}</h4>
        <p class="slide-meta">${c.issuer}</p>
        <a href="${c.docHref}" target="_blank" rel="noopener noreferrer" class="slide-link">
          View Original Document <span class="external-hint" aria-hidden="true">↗</span><span class="sr-only">(opens in new tab)</span>
        </a>
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
