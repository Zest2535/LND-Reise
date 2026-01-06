// Toast notification system
function showToast(message, type = 'info', duration = 4000) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  
  const icons = {
    success: 'bi-check-circle-fill',
    error: 'bi-x-circle-fill',
    warning: 'bi-exclamation-triangle-fill',
    info: 'bi-info-circle-fill'
  };
  
  const toast = document.createElement('div');
  toast.className = `toast-notification ${type}`;
  toast.innerHTML = `<i class="bi ${icons[type]}"></i>${message}`;
  
  container.appendChild(toast);
  
  setTimeout(() => toast.classList.add('show'), 100);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, duration);
}

let lastScrollTop = 0;
const navbar = document.getElementById("mainNavbar");
let ticking = false;

if (navbar) {
  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add 'scrolled' class for effect
        if (scrollTop > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
        
        // Hide/show navigation on scroll
        if (scrollTop > lastScrollTop && scrollTop > 100) {
          navbar.style.top = "-80px";
        } else {
          navbar.style.top = "0";
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

const offersData = [
  { id: 'offer1', img: 'img/bali.jpg', title: 'Traumreise nach Bali', text: 'Entdecken Sie Reisfelder, Tempel und entspannte Strände in Indonesien.', longText: 'Erleben Sie Bali - eine Insel voller Geschichte und Charme. Erleben Sie 3 unvergessliche Tage mit erstklassigen Hotels, lokaler Küche und kulturellen Highlights.', price: '€299', duration: '3 Tage' },
  { id: 'offer2', img: 'img/barcelona.jpg', title: 'Städtetrip Barcelona', text: 'Gaudí-Architektur, Strände und katalanische Kultur erleben.', longText: 'Tauchen Sie ein in die faszinierende Welt von Barcelona. Diese 5-tägige Reise bietet Ihnen authentische Erlebnisse, moderne Annehmlichkeiten und unvergessliche Momente.', price: '€459', duration: '5 Tage' },
  { id: 'offer3', img: 'img/dubai.jpg', title: 'Luxus in Dubai', text: 'Moderne Wolkenkratzer, Wüstensafaris und orientalischer Luxus.', longText: 'Dubai erwartet Sie! Genießen Sie 7 Tage voller Abenteuer, Entspannung und kultureller Entdeckungen in einer der schönsten Destinationen.', price: '€699', duration: '7 Tage' },
  { id: 'offer4', img: 'img/Thailand.jpg', title: 'Strandurlaub in Thailand', text: 'Entspannen Sie an paradiesischen Stränden und genießen Sie die Kultur.', longText: '10 Tage Strandurlaub Thailand: All-Inclusive-Optionen verfügbar, Transfers und Ausflüge zubuchbar.', price: '€899', duration: '10 Tage' },
  { id: 'offer5', img: 'img/Paris.jpg', title: 'Romantisches Paris', text: 'Stadt der Liebe mit Eiffelturm, Louvre und Seine-Romantik.', longText: 'Willkommen in Paris! Diese 14-tägige Reise kombiniert Sightseeing, Erholung und authentische Begegnungen mit Land und Leuten.', price: '€1299', duration: '14 Tage' },
  { id: 'offer6', img: 'img/New York.jpg', title: 'Metropole New York', text: 'Erleben Sie den Puls der Stadt, die niemals schläft. Ein Abenteuer wartet.', longText: '5 Tage New York: Hotel in Midtown, Sightseeing-Paket und optionale Broadway-Tickets.', price: '€799', duration: '5 Tage' },
  { id: 'offer7', img: 'img/Malediven.jpg', title: 'Paradies Malediven', text: 'Erleben Sie weiße Strände, türkisfarbenes Wasser und Luxusresorts.', longText: '6 Nächte Malediven: Überwasser-Bungalow Optionen, inkl. Frühstück; perfekt für Romantik und Tauchen.', price: '€2.499', duration: '6 Nächte' },
  { id: 'offer8', img: 'img/Lissabon.jpg', title: 'City-Trip nach Lissabon', text: 'Erkunden Sie die historischen Gassen und das moderne Leben Portugals.', longText: '4 Tage City-Trip Lissabon: Stadtrundfahrt, Fado-Abend und Unterkunft in zentraler Lage.', price: '€499', duration: '4 Tage' }
];

const destinationsData = [
  { id: 'dest-bali', title: 'Bali', desc: 'Reisfelder, Tempel und entspannte Strände in Indonesien.', img: 'img/bali.jpg', tags: ['family-kids','couples'] },
  { id: 'dest-barcelona', title: 'Barcelona', desc: 'Gaudí-Architektur, Strände und katalanische Kultur.', img: 'img/barcelona.jpg', tags: ['family-no-kids','friends'] },
  { id: 'dest-dubai', title: 'Dubai', desc: 'Luxus, Wüstensafaris und moderne Wolkenkratzer.', img: 'img/dubai.jpg', tags: ['solo','friends'] },
  { id: 'dest-paris', title: 'Paris', desc: 'Stadt der Liebe mit Eiffelturm, Louvre und Seine.', img: 'img/Paris.jpg', tags: ['couples','friends'] },
  { id: 'dest-london', title: 'London', desc: 'Big Ben, Buckingham Palace und britische Kultur.', img: 'img/London.jpg', tags: ['solo','friends'] },
  { id: 'dest-bangkok', title: 'Bangkok', desc: 'Tempel, Märkte und thailändische Street Food.', img: 'img/Thailand.jpg', tags: ['family-kids','couples'] },
  { id: 'dest-newyork', title: 'New York', desc: 'Die Stadt, die niemals schläft – Kultur und Broadway.', img: 'img/New York.jpg', tags: ['solo','friends'] },
  { id: 'dest-malediven', title: 'Malediven', desc: 'Luxusresorts und türkisfarbenes Wasser.', img: 'img/Malediven.jpg', tags: ['couples'] },
  { id: 'dest-santorini', title: 'Santorini', desc: 'Spektakuläre Sonnenuntergänge über der Caldera.', img: 'img/santorini.webp', tags: ['couples','friends'] },
  { id: 'dest-lissabon', title: 'Lissabon', desc: 'Historische Gassen und Fado-Musik.', img: 'img/Lissabon.jpg', tags: ['couples','friends'] },
  { id: 'dest-sydney', title: 'Sydney', desc: 'Opernhaus, Häfen und sonnige Strände.', img: 'img/sydney.jpg', tags: ['family-no-kids','friends'] },
  { id: 'dest-kyoto', title: 'Kyoto', desc: 'Moderne Metropole mit Tradition und Technologie.', img: 'img/kyoto.jpg', tags: ['solo','couples'] },
  { id: 'dest-madrid', title: 'Madrid', desc: 'Spanische Hauptstadt mit Museen und Kultur.', img: 'img/Madrid.jpg', tags: ['couples','friends'] },
  { id: 'dest-venedig', title: 'Venedig', desc: 'Kanäle, Gondeln und italienische Romantik.', img: 'img/Venedig.jpg', tags: ['couples','friends'] },
  { id: 'dest-florenz', title: 'Florenz', desc: 'Renaissance-Kunst und toskanische Kultur.', img: 'img/Florenz.jpg', tags: ['couples','friends'] },
  { id: 'dest-vancouver', title: 'Vancouver', desc: 'Moderne Stadtarchitektur und multikulturelle Vielfalt.', img: 'img/vancouver.jpg', tags: ['solo','friends'] }
];

function mulberry32(a) {
  return function() {
    let t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

function seededShuffle(array, seed) {
  const arr = array.slice();
  const rand = mulberry32(seed >>> 0);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function hashStringToInt(str) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
  }
  return h >>> 0;
}

async function renderOffers(options = { count: 6 }) {
  const container = document.getElementById('angebote-grid');
  if (!container) return;
  
  const count = Math.min(options.count || 6, offersData.length);
  let html = '';
  
  for (let i = 0; i < count; i++) {
    const offer = offersData[i];
    html += `
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="angebot-card">
          <img src="${offer.img}" loading="lazy" class="card-img-top" alt="${offer.title}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${offer.title}</h5>
            <p class="card-text">${offer.text}</p>
            <div class="d-flex justify-content-between align-items-center mt-auto">
              <span class="fw-bold text-primary">${offer.price}</span>
              <button class="btn btn-primary" onclick="showOfferDetails('${offer.id}')">Buchen</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  container.innerHTML = html;
}

let currentBookingOffer = null;

async function showOfferDetails(offerId) {
  try {
    const offer = offersData.find(o => o.id === offerId);
    if (!offer) return;
    
    currentBookingOffer = offer;
    const modal = document.getElementById('offerDetailModal');
    if (!modal) return;
    
    // Extract city name from title
    const cityName = offer.title.replace(/^.*nach |^.*in |^.*Reise |^Traumreise nach |^Städtetrip |^Luxus in |^Romantisches /, '');
    const priceNumber = offer.price.replace('€', '');
    
    document.getElementById('detailImage').src = offer.img;
    document.getElementById('detailCity').textContent = cityName;
    document.getElementById('detailCountry').textContent = 'Europa'; // Default
    document.getElementById('detailPrice').textContent = priceNumber;
    document.getElementById('detailPrice2').textContent = priceNumber;
    document.getElementById('detailPrice3').textContent = priceNumber;
    document.getElementById('detailAirport').textContent = 'Wien';
    document.getElementById('detailDate').textContent = 'Flexibel';
    document.getElementById('detailDays').textContent = offer.duration.replace(' Tage', '').replace(' Nächte', '');
    document.getElementById('detailRating').textContent = '4.5';
    document.getElementById('detailDescription').textContent = offer.longText;
    
    const bookBtn = document.getElementById('bookOfferBtn');
    bookBtn.onclick = async function() {
      const user = await window.DB.getUser();
      if (!user) {
        bootstrap.Modal.getInstance(modal).hide();
        new bootstrap.Modal(document.getElementById('loginModal')).show();
        return;
      }
      bootstrap.Modal.getInstance(modal).hide();
      openBookingModal(offer);
    };
    
    if (typeof bootstrap !== 'undefined' && bootstrap.Modal) {
      new bootstrap.Modal(modal).show();
    }
  } catch (error) {
    console.error('Error loading offer details:', error);
  }
}

function openBookingModal(offer) {
  const modal = document.getElementById('bookingModal');
  document.getElementById('bookingOfferDetails').innerHTML = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${offer.title}</h5>
        <p class="mb-1"><strong>Preis:</strong> ${offer.price}</p>
        <p class="mb-0"><strong>Dauer:</strong> ${offer.duration}</p>
      </div>
    </div>
  `;
  new bootstrap.Modal(modal).show();
}

function renderDestinations(options = { count: 16 }) {
  const container = document.getElementById('reiseziele-grid');
  if (!container) return;
  const path = (location && location.pathname) ? location.pathname : '/';
  const seed = hashStringToInt('dest' + path + (location.search || '') + (location.hash || ''));
  const shuffled = seededShuffle(destinationsData, seed);
  const count = Math.min(options.count || destinationsData.length, shuffled.length);
  let html = '';
  for (let i = 0; i < count; i++) {
    const d = shuffled[i];
    const tags = (d.tags || []).join(',');
    const imgSrc = d.img || '';
    html += `<div class="col-lg-3 col-md-6">
      <div class="reiseziel-item" data-dest-id="${d.id}" data-tags="${tags}">
        ${imgSrc ? `<img src="${imgSrc}" alt="${d.title}" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;z-index:0;">` : ''}
        <span>${d.title}</span>
      </div>
    </div>`;
  }
  container.innerHTML = html;
  initDestinationClicks();
}

function initDestinationClicks() {
  document.querySelectorAll('.reiseziel-item').forEach(el => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', function() {
      const id = this.getAttribute('data-dest-id');
      if (id) showDestinationDetails(id);
    });
  });
}

function showDestinationDetails(destId) {
  const data = destinationsData.find(d => d.id === destId);
  if (!data) return;
  
  const params = new URLSearchParams();
  params.set('destination', data.title);
  window.location.href = 'angebote.html?' + params.toString();
}

function initDestinationFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      buttons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      applyDestinationFilter(filter);
    });
  });
}

function applyDestinationFilter(filter) {
  const items = document.querySelectorAll('.reiseziel-item');
  items.forEach(it => {
    const parent = it.closest('.col-lg-3, .col-md-6');
    if (!parent) return;
    if (filter === 'all') {
      parent.style.display = '';
      return;
    }
    const tags = (it.getAttribute('data-tags') || '').split(',').map(t => t.trim()).filter(Boolean);
    parent.style.display = tags.indexOf(filter) >= 0 ? '' : 'none';
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    // ignore bare hashes and empty hrefs
    if (!href || href === '#' || href === '#0') return;
    if (href.startsWith('#')) {
      // valid hash target like `#section-id`
      const selector = href;
      const target = document.querySelector(selector) || document.getElementById(selector.slice(1));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // non-hash links: navigate normally
      window.location.href = href;
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('section').forEach(section => observer.observe(section));

document.querySelectorAll('img').forEach(img => {
  img.addEventListener('load', function() { this.classList.add('loaded'); });
  if (img.complete) img.classList.add('loaded');
});

const searchBtn = document.querySelector('.btn-search');
if (searchBtn) {
  searchBtn.addEventListener('click', function() {
    const destination = document.getElementById('destination-search')?.value;
    const abflug = document.getElementById('abflughafen')?.value;
    const personen = document.getElementById('personen')?.value;
    const datum = document.getElementById('reisedatum')?.value;
    
    if (!destination) {
      showToast('Bitte geben Sie ein Reiseziel ein', 'warning');
      return;
    }

    searchAndShowOffers(destination, abflug, personen, datum);
  });
}

// Simple preview generator for homepage (keeps consistent with offers)
function generateOffersPreview(city, opts = {}) {
  if (!city) return [];
  // Prefer matching real offersData entries if available
  const matches = (offersData || []).filter(o => o.title.toLowerCase().includes(city.toLowerCase()) || o.title.toLowerCase().includes(city.split(' ')[0].toLowerCase()));
  if (matches && matches.length > 0) {
    return matches.slice(0, 3).map(m => ({ id: m.id, city, title: m.title, price: parseInt(m.price.replace(/[^0-9]/g,'')), days: parseInt(m.duration) || null, departure: 'Flexibel', image: m.img }));
  }

  // Fallback: synthetic previews
  const num = 1 + Math.floor(Math.random() * 2); // 1-2 offers
  const offers = [];
  const baseImages = {
    Paris: 'img/Paris.jpg', London: 'img/London.jpg', Bali: 'img/bali.jpg', Barcelona: 'img/barcelona.jpg', 'New': 'img/New York.jpg', Dubai: 'img/dubai.jpg', Santorini: 'img/santorini.webp', Kyoto: 'img/kyoto.jpg'
  };
  for (let i = 0; i < num; i++) {
    const price = Math.floor(299 + Math.random() * 1000);
    const days = 4 + Math.floor(Math.random() * 11);
    const departure = new Date(); departure.setDate(departure.getDate() + 7 + Math.floor(Math.random() * 180));
    offers.push({
      id: 'preview-' + city.replace(/\s+/g, '-') + '-' + i,
      city,
      title: `${city} - ${days} Tage`,
      price,
      days,
      departure: departure.toISOString().slice(0,10),
      image: baseImages[city] || baseImages[city.split(' ')[0]] || 'img/bali.jpg'
    });
  }
  return offers;
}

function searchAndShowOffers(destination, abflug, personen, datum) {
  const params = new URLSearchParams();
  if (destination) params.set('destination', destination);
  if (abflug) params.set('airport', abflug);
  if (datum) params.set('date', datum);
  if (personen) params.set('people', personen);

  const city = (destination || '').split(',')[0].trim();
  if (!city) { window.location.href = 'angebote.html?' + params.toString(); return; }

  const cityLower = city.toLowerCase();
  // try to find real offers that mention the city
  const matches = (offersData || []).filter(o => (o.title||'').toLowerCase().includes(cityLower) || (o.text||'').toLowerCase().includes(cityLower));
  let chosen = [];
  if (matches && matches.length > 0) {
    chosen = matches.map(m => ({ id: m.id, city: city, title: m.title, price: parseInt((m.price||'').replace(/[^0-9]/g,'')) || m.price, days: parseInt(m.duration) || null, departure: 'Flexibel', image: m.img }));
  } else {
    // if no direct matches in offersData, try destinations list and generate previews
    const destMatch = (destinationsData || []).find(d => d.title.toLowerCase() === cityLower);
    if (destMatch) {
      chosen = generateOffersPreview(city, { personen, datum });
    }
  }

  const paramsString = params.toString();

  if (chosen && chosen.length > 0) {
    renderOffersPreview(chosen, paramsString);
    const previewEl = document.getElementById('offersPreview');
    if (previewEl) { previewEl.style.display = ''; previewEl.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  } else {
    // no matches -> go to full offers page
    window.location.href = 'angebote.html?' + paramsString;
  }
} 

function renderOffersPreview(offers, paramsString) {
  const container = document.getElementById('offersPreviewContainer');
  if (!container) return;
  container.innerHTML = '';
  offers.forEach(o => {
    const col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-4';
    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${o.image}" class="card-img-top" alt="${o.city}" style="height:160px; object-fit:cover;">
        <div class="card-body">
          <h6 class="card-title mb-1">${o.title}</h6>
          <p class="text-muted small mb-2">Abflug: ${o.departure} ${o.days ? '• ' + o.days + ' Tage' : ''}</p>
          <div class="d-flex align-items-center justify-content-between" id="offer-action-${o.id}">
            <strong class="text-primary">${typeof o.price === 'number' ? o.price + '€' : o.price}</strong>
          </div>
        </div>
      </div>`;

    // append action button (open modal for real offers, otherwise link to offers page)
    const action = col.querySelector(`#offer-action-${o.id}`);
    const isReal = (offersData || []).findIndex(item => item.id === o.id) >= 0;
    if (action) {
      if (isReal) {
        const btn = document.createElement('button');
        btn.className = 'btn btn-sm btn-primary';
        btn.textContent = 'Jetzt ansehen';
        btn.addEventListener('click', () => showOfferDetails(o.id));
        action.appendChild(btn);
      } else {
        const a = document.createElement('a');
        a.className = 'btn btn-sm btn-primary';
        a.href = 'angebote.html?' + paramsString;
        a.textContent = 'Jetzt ansehen';
        action.appendChild(a);
      }
    }

    container.appendChild(col);
  });
  const more = document.getElementById('offersPreviewMore');
  if (more) more.href = 'angebote.html?' + paramsString;
}

const destinations = [
  {city: 'Paris', country: 'Frankreich'}, {city: 'Marseille', country: 'Frankreich'}, {city: 'Lyon', country: 'Frankreich'}, {city: 'Nizza', country: 'Frankreich'},
  {city: 'London', country: 'Großbritannien'}, {city: 'Edinburgh', country: 'Großbritannien'}, {city: 'Manchester', country: 'Großbritannien'},
  {city: 'Rom', country: 'Italien'}, {city: 'Venedig', country: 'Italien'}, {city: 'Florenz', country: 'Italien'}, {city: 'Mailand', country: 'Italien'}, {city: 'Neapel', country: 'Italien'},
  {city: 'Barcelona', country: 'Spanien'}, {city: 'Madrid', country: 'Spanien'}, {city: 'Valencia', country: 'Spanien'}, {city: 'Sevilla', country: 'Spanien'}, {city: 'Malaga', country: 'Spanien'}, {city: 'Ibiza', country: 'Spanien'}, {city: 'Palma', country: 'Spanien'},
  {city: 'Amsterdam', country: 'Niederlande'}, {city: 'Rotterdam', country: 'Niederlande'},
  {city: 'Berlin', country: 'Deutschland'}, {city: 'München', country: 'Deutschland'}, {city: 'Hamburg', country: 'Deutschland'}, {city: 'Frankfurt', country: 'Deutschland'}, {city: 'Köln', country: 'Deutschland'},
  {city: 'Wien', country: 'Österreich'}, {city: 'Salzburg', country: 'Österreich'}, {city: 'Innsbruck', country: 'Österreich'},
  {city: 'Prag', country: 'Tschechien'}, {city: 'Budapest', country: 'Ungarn'}, {city: 'Krakau', country: 'Polen'}, {city: 'Warschau', country: 'Polen'},
  {city: 'Lissabon', country: 'Portugal'}, {city: 'Porto', country: 'Portugal'},
  {city: 'Athen', country: 'Griechenland'}, {city: 'Santorini', country: 'Griechenland'}, {city: 'Mykonos', country: 'Griechenland'}, {city: 'Kreta', country: 'Griechenland'}, {city: 'Rhodos', country: 'Griechenland'}, {city: 'Korfu', country: 'Griechenland'},
  {city: 'Istanbul', country: 'Türkei'}, {city: 'Antalya', country: 'Türkei'}, {city: 'Bodrum', country: 'Türkei'}, {city: 'Izmir', country: 'Türkei'},
  {city: 'Dubai', country: 'VAE'}, {city: 'Abu Dhabi', country: 'VAE'},
  {city: 'Bangkok', country: 'Thailand'}, {city: 'Phuket', country: 'Thailand'}, {city: 'Krabi', country: 'Thailand'},
  {city: 'Tokio', country: 'Japan'}, {city: 'Kyoto', country: 'Japan'}, {city: 'Osaka', country: 'Japan'},
  {city: 'New York', country: 'USA'}, {city: 'Los Angeles', country: 'USA'}, {city: 'Miami', country: 'USA'}, {city: 'San Francisco', country: 'USA'}, {city: 'Las Vegas', country: 'USA'}, {city: 'Chicago', country: 'USA'}, {city: 'Boston', country: 'USA'}, {city: 'Washington', country: 'USA'},
  {city: 'Cancun', country: 'Mexiko'}, {city: 'Mexiko-Stadt', country: 'Mexiko'}, {city: 'Acapulco', country: 'Mexiko'},
  {city: 'Rio de Janeiro', country: 'Brasilien'}, {city: 'Buenos Aires', country: 'Argentinien'},
  {city: 'Sydney', country: 'Australien'}, {city: 'Melbourne', country: 'Australien'},
  {city: 'Bali', country: 'Indonesien'}, {city: 'Jakarta', country: 'Indonesien'},
  {city: 'Singapur', country: 'Singapur'}, {city: 'Hongkong', country: 'China'}, {city: 'Shanghai', country: 'China'}, {city: 'Peking', country: 'China'},
  {city: 'Malediven', country: 'Malediven'}, {city: 'Mauritius', country: 'Mauritius'}, {city: 'Seychellen', country: 'Seychellen'},
  {city: 'Sansibar', country: 'Tansania'}, {city: 'Kapstadt', country: 'Südafrika'}, {city: 'Marrakesch', country: 'Marokko'}, {city: 'Kairo', country: 'Ägypten'}, {city: 'Hurghada', country: 'Ägypten'},
  {city: 'Reykjavik', country: 'Island'}, {city: 'Oslo', country: 'Norwegen'}, {city: 'Stockholm', country: 'Schweden'}, {city: 'Kopenhagen', country: 'Dänemark'},
  {city: 'Moskau', country: 'Russland'}, {city: 'St. Petersburg', country: 'Russland'},
  {city: 'Dubrovnik', country: 'Kroatien'}, {city: 'Split', country: 'Kroatien'},
  {city: 'Brüssel', country: 'Belgien'}, {city: 'Zürich', country: 'Schweiz'}, {city: 'Genf', country: 'Schweiz'},
  {city: 'Dublin', country: 'Irland'}, {city: 'Zypern', country: 'Zypern'}, {city: 'Malta', country: 'Malta'},
  {city: 'Toronto', country: 'Kanada'}, {city: 'Vancouver', country: 'Kanada'}, {city: 'Montreal', country: 'Kanada'},
  {city: 'Seoul', country: 'Südkorea'}, {city: 'Mumbai', country: 'Indien'}, {city: 'Delhi', country: 'Indien'}, {city: 'Goa', country: 'Indien'},
  {city: 'Hanoi', country: 'Vietnam'}, {city: 'Ho Chi Minh', country: 'Vietnam'}, {city: 'Manila', country: 'Philippinen'},
  {city: 'Havanna', country: 'Kuba'}, {city: 'Punta Cana', country: 'Dominikanische Republik'}
];

const destinationsDB = destinations.map(d => d.city + ', ' + d.country);

function initAutocomplete() {
  const input = document.getElementById('destination-search');
  const list = document.getElementById('autocomplete-list');
  if (!input || !list) return;
  
  const allDestinations = destinationsDB;
  
  input.addEventListener('input', function() {
    const value = this.value.toLowerCase();
    list.innerHTML = '';
    if (!value) {
      list.style.display = 'none';
      const previewEl = document.getElementById('offersPreview');
      if (previewEl) previewEl.style.display = 'none';
      return;
    }
    const matches = allDestinations.filter(item => item.toLowerCase().includes(value)).slice(0, 8);
    if (matches.length > 0) {
      matches.forEach(match => {
        const div = document.createElement('div');
        div.className = 'autocomplete-item city-item';
        div.textContent = match;
        div.addEventListener('click', function() {
          input.value = match;
          list.style.display = 'none';
          // show preview immediately for this city
          const city = match.split(',')[0].trim();
          const abflug = document.getElementById('abflughafen')?.value;
          const personen = document.getElementById('personen')?.value;
          const datum = document.getElementById('reisedatum')?.value;
          searchAndShowOffers(city, abflug, personen, datum);
        });
        list.appendChild(div);
      });
      list.style.display = 'block';
    } else {
      list.style.display = 'none';
    }
  });
  document.addEventListener('click', function(e) {
    if (e.target !== input) {
      list.style.display = 'none';
      const previewEl = document.getElementById('offersPreview');
      if (previewEl) previewEl.style.display = 'none';
    }
  });
}

function initMainReviews() {
  const stars = document.querySelectorAll('.rating-input-main i');
  let selectedRating = 0;
  
  stars.forEach((star, index) => {
    star.addEventListener('mouseenter', () => {
      stars.forEach((s, i) => {
        s.className = i <= index ? 'bi bi-star-fill text-warning active' : 'bi bi-star';
      });
    });
    
    star.addEventListener('click', () => {
      selectedRating = index + 1;
      stars.forEach((s, i) => {
        s.className = i < selectedRating ? 'bi bi-star-fill text-warning' : 'bi bi-star';
      });
    });
  });
  
  document.querySelector('.rating-input-main')?.addEventListener('mouseleave', () => {
    stars.forEach((s, i) => {
      s.className = i < selectedRating ? 'bi bi-star-fill text-warning' : 'bi bi-star';
    });
  });
  
  document.getElementById('submitReviewMain')?.addEventListener('click', async () => {
    const name = document.getElementById('reviewName').value.trim();
    const text = document.getElementById('reviewTextMain').value.trim();
    
    if (selectedRating === 0) {
      showToast('Bitte wählen Sie eine Bewertung', 'warning');
      return;
    }
    if (!name) {
      showToast('Bitte geben Sie Ihren Namen ein', 'warning');
      return;
    }
    if (!text) {
      showToast('Bitte schreiben Sie eine Bewertung', 'warning');
      return;
    }
    
    const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
    reviews.push({ name, text, rating: selectedRating, created_at: new Date().toISOString() });
    localStorage.setItem('reviews', JSON.stringify(reviews));
    
    document.getElementById('reviewName').value = '';
    document.getElementById('reviewTextMain').value = '';
    selectedRating = 0;
    stars.forEach(s => s.className = 'bi bi-star');
    
    showToast('Vielen Dank für Ihre Bewertung!', 'success');
    displayMainReviews();
  });
  
  displayMainReviews();
}

async function displayMainReviews() {
  const listEl = document.getElementById('reviewsListMain');
  if (!listEl) return;
  
  const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
  
  if (!reviews || reviews.length === 0) {
    listEl.innerHTML = '<p class="text-center text-muted">Noch keine Bewertungen vorhanden</p>';
    return;
  }
  
  listEl.innerHTML = reviews.map(r => `
    <div class="card mb-3">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-start">
          <div>
            <h6 class="mb-1">${r.name || 'Anonym'}</h6>
            <div class="text-warning mb-2">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
          </div>
          <small class="text-muted">${new Date(r.created_at).toLocaleDateString('de-DE')}</small>
        </div>
        <p class="mb-0">${r.text}</p>
      </div>
    </div>
  `).join('');
}

// Initialize profile handlers
function initProfileHandlers() {
  document.getElementById('editProfileBtn')?.addEventListener('click', function() {
    document.getElementById('profileView').style.display = 'none';
    document.getElementById('profileEdit').style.display = 'block';
    this.style.display = 'none';
  });
  
  document.getElementById('cancelEditBtn')?.addEventListener('click', function() {
    document.getElementById('profileView').style.display = 'block';
    document.getElementById('profileEdit').style.display = 'none';
    document.getElementById('editProfileBtn').style.display = 'block';
  });
  
  document.getElementById('profileEditForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    try {
      await DB.updateProfile({
        firstname: document.getElementById('editFirstName').value,
        lastname: document.getElementById('editLastName').value,
        address: document.getElementById('editAddress').value,
        date_of_birth: document.getElementById('editBirthDate').value || null
      });
      
      alert('✅ Profil erfolgreich aktualisiert!');
      showProfile(); // Neu laden
    } catch (error) {
      alert('❌ Fehler beim Speichern: ' + error.message);
    }
  });
  
  document.getElementById('changePasswordBtn')?.addEventListener('click', function() {
    const newPassword = prompt('Neues Passwort eingeben (mindestens 6 Zeichen):');
    if (newPassword && newPassword.length >= 6) {
      DB.changePassword(newPassword)
        .then(() => alert('✅ Passwort erfolgreich geändert!'))
        .catch(error => alert('❌ Fehler: ' + error.message));
    } else if (newPassword) {
      alert('❌ Passwort muss mindestens 6 Zeichen haben');
    }
  });
  
  document.getElementById('resetPasswordBtn')?.addEventListener('click', async function() {
    try {
      const user = await DB.getUser();
      if (user) {
        await DB.resetPassword(user.email);
        alert('✅ Passwort-Reset E-Mail gesendet!');
      }
    } catch (error) {
      alert('❌ Fehler: ' + error.message);
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Add fade-in animation for elements
  const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(30px)';
        entry.target.style.transition = 'all 0.6s ease';
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, 100);
        animateOnScroll.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.angebot-card, .service-card, .reiseziel-item').forEach(el => {
    animateOnScroll.observe(el);
  });
  
  initAutocomplete();
  initDestinationFilters();
  renderOffers();
  renderDestinations();
  initModals();
  initMainReviews();
  updateNavigation();
  
  const today = new Date().toISOString().split('T')[0];
  const dateInput = document.getElementById('reisedatum');
  if (dateInput) dateInput.min = today;
  
  // Add smooth hero section entrance
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(50px)';
    setTimeout(() => {
      heroContent.style.transition = 'all 1s ease';
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 200);
  }
  
  document.getElementById('showProfile')?.addEventListener('click', function(e) {
    e.preventDefault();
    showProfile();
  });
  
  document.getElementById('navLogout')?.addEventListener('click', async function(e) {
    e.preventDefault();
    await DB.signOut();
    updateNavigation();
    
    const toast = document.createElement('div');
    toast.className = 'toast-notification success';
    toast.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>Erfolgreich abgemeldet!';
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  });
});

function initModals() {
  // Only handlers for toggling password visibility
  const toggleLoginPassword = document.getElementById('toggleLoginPassword');
  const toggleRegPassword = document.getElementById('toggleRegPassword');
  
  if (toggleLoginPassword) {
    toggleLoginPassword.addEventListener('click', function() {
      const input = document.getElementById('loginPassword');
      const icon = this.querySelector('i');
      if (input && icon) {
        if (input.type === 'password') {
          input.type = 'text';
          icon.className = 'bi bi-eye-slash';
        } else {
          input.type = 'password';
          icon.className = 'bi bi-eye';
        }
      }
    });
  }
  
  if (toggleRegPassword) {
    toggleRegPassword.addEventListener('click', function() {
      const input = document.getElementById('regPassword');
      const icon = this.querySelector('i');
      if (input && icon) {
        if (input.type === 'password') {
          input.type = 'text';
          icon.className = 'bi bi-eye-slash';
        } else {
          input.type = 'password';
          icon.className = 'bi bi-eye';
        }
      }
    });
  }
}
