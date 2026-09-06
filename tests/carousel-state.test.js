import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateVisibleCount, calculateMaxIndex, nextIndex, prevIndex } from '../src/main.js';

test('Carousel visible count is 1 across all screen sizes (editorial single slide)', () => {
  assert.equal(calculateVisibleCount(), 1);
});

test('Carousel index calculations for 16 credentials (1-slide editorial mode)', () => {
  const total = 16;
  const maxIdx = calculateMaxIndex(total);
  assert.equal(maxIdx, 15);

  let current = 0;
  current = nextIndex(current, maxIdx);
  assert.equal(current, 1);

  current = prevIndex(current, maxIdx);
  assert.equal(current, 0);

  // Wrap around at boundary
  assert.equal(nextIndex(15, maxIdx), 0);
  assert.equal(prevIndex(0, maxIdx), 15);
});

test('Single credential case handles edge condition without overflow', () => {
  const total = 1;
  const maxIdx = calculateMaxIndex(total);
  assert.equal(maxIdx, 0);
  assert.equal(nextIndex(0, maxIdx), 0);
  assert.equal(prevIndex(0, maxIdx), 0);
});

test('Zero credential case handles edge condition safely', () => {
  const total = 0;
  const maxIdx = calculateMaxIndex(total);
  assert.equal(maxIdx, 0);
});
