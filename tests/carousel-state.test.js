import test from 'node:test';
import assert from 'node:assert/strict';

// Test logical transition math used in the carousel
function calculateVisibleCount(width) {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

function calculateMaxIndex(total, visibleCount) {
  return Math.max(0, total - visibleCount);
}

function nextIndex(current, maxIdx) {
  return current >= maxIdx ? 0 : current + 1;
}

function prevIndex(current, maxIdx) {
  return current <= 0 ? maxIdx : current - 1;
}

test('Carousel index calculations on mobile (viewport < 640px)', () => {
  const visible = calculateVisibleCount(390);
  assert.equal(visible, 1);
  const total = 16;
  const maxIdx = calculateMaxIndex(total, visible);
  assert.equal(maxIdx, 15);

  let current = 0;
  current = nextIndex(current, maxIdx);
  assert.equal(current, 1);

  // Wrap around at boundary
  assert.equal(nextIndex(15, maxIdx), 0);
  assert.equal(prevIndex(0, maxIdx), 15);
});

test('Carousel index calculations on desktop (viewport >= 1024px)', () => {
  const visible = calculateVisibleCount(1440);
  assert.equal(visible, 3);
  const total = 16;
  const maxIdx = calculateMaxIndex(total, visible);
  assert.equal(maxIdx, 13); // 16 - 3 = 13

  assert.equal(nextIndex(13, maxIdx), 0);
  assert.equal(prevIndex(0, maxIdx), 13);
});

test('Single credential case handles edge condition without overflow', () => {
  const total = 1;
  const visible = calculateVisibleCount(1024);
  const maxIdx = calculateMaxIndex(total, visible);
  assert.equal(maxIdx, 0);
  assert.equal(nextIndex(0, maxIdx), 0);
  assert.equal(prevIndex(0, maxIdx), 0);
});

test('Zero credential case handles edge condition safely', () => {
  const total = 0;
  const visible = calculateVisibleCount(1024);
  const maxIdx = calculateMaxIndex(total, visible);
  assert.equal(maxIdx, 0);
});
