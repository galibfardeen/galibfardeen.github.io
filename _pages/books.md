---
layout: page
title: book reviews
permalink: /books/
description:
nav: true
nav_order: 4
---

<p style="color: var(--global-text-color-light); font-size: 0.95rem;">A personal reading log — books I've read, am reading, and found worth noting.</p>

---

### Currently Reading

<div class="book-shelf" id="shelf-reading">
  <p class="book-loading"><em>Loading...</em></p>
</div>

---

### Finished

<div class="book-shelf" id="shelf-finished">
  <p class="book-loading"><em>Loading...</em></p>
</div>

---

### Reading List

<div class="book-shelf" id="shelf-list">
  <p class="book-loading"><em>Loading...</em></p>
</div>

<style>
.book-shelf {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-bottom: 0.5rem;
  min-height: 1.5rem;
}
.book-loading {
  color: var(--global-text-color-light);
  font-size: 0.9rem;
}
.book-card {
  display: flex;
  gap: 0.85rem;
  align-items: flex-start;
  width: calc(50% - 0.6rem);
}
@media (max-width: 576px) {
  .book-card { width: 100%; }
}
.book-cover {
  width: 60px;
  height: 88px;
  object-fit: cover;
  border-radius: 3px;
  flex-shrink: 0;
  box-shadow: 0 2px 6px rgba(0,0,0,0.18);
  background: #e0e0e0;
}
.book-info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding-top: 0.1rem;
}
.book-info strong {
  font-size: 0.9rem;
  line-height: 1.3;
}
.book-author {
  font-size: 0.8rem;
  color: var(--global-text-color-light);
}
.book-stars {
  font-size: 0.78rem;
  color: #f0a500;
  letter-spacing: 0.05em;
}
.book-review {
  font-size: 0.8rem;
  color: var(--global-text-color-light);
  font-style: italic;
  line-height: 1.4;
  margin-top: 0.1rem;
}
</style>

<script>
const GR_USER = "53266848";
const RSS2JSON = "https://api.rss2json.com/v1/api.json?rss_url=";

function parseBook(item) {
  const desc        = item.description || '';
  const titleClean  = item.title.replace(/^\s*[\d.]+\s*/, '').trim();
  const authorMatch = desc.match(/author:\s*([^<\n]+)/i);
  const imgMatch    = desc.match(/<img[^>]+src="([^"]+)"/i);
  const ratingMatch = desc.match(/rating:\s*(\d+)/i);
  // Capture everything after "review:" until end of string, strip HTML tags
  const reviewMatch = desc.match(/review:\s*([\s\S]+?)(?:\s*<br\s*\/?>){2,}|review:\s*([\s\S]+)$/i);
  const rawReview   = reviewMatch ? (reviewMatch[1] || reviewMatch[2] || '') : '';
  const cleanReview = rawReview.replace(/<[^>]+>/g, '').replace(/\n+/g, ' ').trim();
  const rating      = ratingMatch ? parseInt(ratingMatch[1]) : 0;
  return {
    title:  titleClean,
    author: authorMatch ? authorMatch[1].trim() : '',
    cover:  imgMatch ? imgMatch[1].replace(/\._\w+_\./, '._SY160_.') : '',
    rating: rating,
    review: cleanReview.length > 4 ? cleanReview : ''
  };
}

function stars(n) {
  if (!n) return '';
  return '<span class="book-stars">' + '★'.repeat(n) + '☆'.repeat(5 - n) + '</span>';
}

function renderShelf(books, containerId) {
  const el = document.getElementById(containerId);
  if (!books || books.length === 0) {
    el.innerHTML = '<p class="book-loading"><em>Nothing here yet.</em></p>';
    return;
  }
  el.innerHTML = books.map(b => `
    <div class="book-card">
      ${b.cover
        ? `<img class="book-cover" src="${b.cover}" alt="${b.title}" onerror="this.style.display='none'" />`
        : '<div class="book-cover"></div>'}
      <div class="book-info">
        <strong>${b.title}</strong>
        <span class="book-author">${b.author}</span>
        ${b.rating ? stars(b.rating) : ''}
        ${b.review ? `<span class="book-review">${b.review.length > 180 ? b.review.slice(0, 180) + '…' : b.review}</span>` : ''}
      </div>
    </div>
  `).join('');
}

async function loadShelf(shelf, containerId, limit) {
  const el = document.getElementById(containerId);
  try {
    const feedUrl = `https://www.goodreads.com/review/list_rss/${GR_USER}?shelf=${shelf}`;
    const res = await fetch(RSS2JSON + encodeURIComponent(feedUrl));
    if (!res.ok) throw new Error('fetch failed');
    const data = await res.json();
    if (data.status === 'ok' && data.items && data.items.length > 0) {
      renderShelf(data.items.slice(0, limit).map(parseBook), containerId);
    } else {
      el.innerHTML = '<p class="book-loading"><em>No books on this shelf yet.</em></p>';
    }
  } catch (e) {
    el.innerHTML = '<p class="book-loading"><em>Could not load shelf — make sure your Goodreads shelves are set to public.</em></p>';
  }
}

loadShelf('currently-reading', 'shelf-reading',   4);
loadShelf('read',              'shelf-finished',  8);
loadShelf('to-read',           'shelf-list',      8);
</script>
