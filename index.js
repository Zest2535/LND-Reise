let lastScrollTop = 0;
const navbar = document.getElementById("mainNavbar");
let ticking = false;

if (navbar) {
  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
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
  { id: 'offer1', img: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=600&fit=crop', title: 'Inseltraum Santorini', text: 'Genießen Sie spektakuläre Sonnenuntergänge und die einzigartige Architektur.', longText: '7 Nächte Santorini inkl. Frühstück, Flüge optional. Entspannen Sie in charmanten Unterkünften mit Blick auf die Caldera.', price: '€899', duration: '7 Nächte' },
  { id: 'offer2', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop', title: 'Kulturreise nach Kyoto', text: 'Erleben Sie die Faszination Japans zwischen Tradition und Moderne.', longText: '8 Tage Kulturreise Kyoto: Tempel, traditionelle Teehäuser und geführte Ausflüge. Ideal für Kulturinteressierte.', price: '€1.299', duration: '8 Tage' },
  { id: 'offer3', img: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&h=600&fit=crop', title: 'Abenteuer in Island', text: 'Entdecken Sie Geysire, Wasserfälle und das magische Nordlicht.', longText: '6 Tage Island-Abenteuer: Mietwagen, Geysire, Wasserfälle und Nordlichter (saisonabhängig).', price: '€1.099', duration: '6 Tage' },
  { id: 'offer4', img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop', title: 'Strandurlaub in Thailand', text: 'Entspannen Sie an paradiesischen Stränden und genießen Sie die Kultur.', longText: '10 Tage Strandurlaub Thailand: All-Inclusive-Optionen verfügbar, Transfers und Ausflüge zubuchbar.', price: '€1.199', duration: '10 Tage' },
  { id: 'offer5', img: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=600&fit=crop', title: 'City-Trip nach Lissabon', text: 'Erkunden Sie die historischen Gassen und das moderne Leben Portugals.', longText: '4 Tage City-Trip Lissabon: Stadtrundfahrt, Fado-Abend und Unterkunft in zentraler Lage.', price: '€499', duration: '4 Tage' },
  { id: 'offer6', img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop', title: 'Metropole New York', text: 'Erleben Sie den Puls der Stadt, die niemals schläft. Ein Abenteuer wartet.', longText: '5 Tage New York: Hotel in Midtown, Sightseeing-Paket und optionale Broadway-Tickets.', price: '€799', duration: '5 Tage' },
  { id: 'offer7', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop', title: 'Paradies Malediven', text: 'Erleben Sie weiße Strände, türkisfarbenes Wasser und Luxusresorts.', longText: '6 Nächte Malediven: Überwasser-Bungalow Optionen, inkl. Frühstück; perfekt für Romantik und Tauchen.', price: '€2.499', duration: '6 Nächte' },
  { id: 'offer8', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop', title: 'Romantisches Paris', text: 'Kultur, Küche und verliebte Spaziergänge entlang der Seine erwarten Sie.', longText: '3 Tage Romantisches Paris: Seine-Bootsfahrt, Louvre-Option und ein Abendessen in einem traditionellen Bistro.', price: '€349', duration: '3 Tage' }
];

const destinationsData = [
  { id: 'dest-barcelona', title: 'Barcelona', desc: 'Lebendige Kultur, Architektur von Gaudí und sonnige Strände am Mittelmeer.', img: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&h=400&fit=crop', tags: ['couples','friends'], recommended: ['offer5'] },
  { id: 'dest-dubai', title: 'Dubai', desc: 'Moderne Metropole mit Wüstenabenteuern, Luxus und ikonischer Skyline.', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop', tags: ['solo','friends'], recommended: ['offer6'] },
  { id: 'dest-bali', title: 'Bali', desc: 'Tropische Insel mit Reisfeldern, spirituellen Tempeln und entspannten Stränden.', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop', tags: ['family-kids','couples'], recommended: ['offer4'] },
  { id: 'dest-capetown', title: 'Kapstadt', desc: 'Beeindruckende Küsten, Tafelberg und vielfältige Naturerlebnisse.', img: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&h=400&fit=crop', tags: ['family-no-kids','friends'], recommended: ['offer3'] },
  { id: 'dest-vancouver', title: 'Vancouver', desc: 'Stadt zwischen Meer und Bergen – ideal für Outdoor‑Aktivitäten und Kultur.', img: 'https://images.unsplash.com/photo-1559511260-66a654ae982a?w=600&h=400&fit=crop', tags: ['solo','couples'], recommended: ['offer6'] },
  { id: 'dest-sydney', title: 'Sydney', desc: 'Opernhaus, Häfen und sonnige Strände – Australiens vielseitige Metropole.', img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&h=400&fit=crop', tags: ['family-no-kids','friends'], recommended: ['offer5'] },
  { id: 'dest-marrakech', title: 'Marrakesch', desc: 'Bunte Märkte, historische Paläste und lebendige marokkanische Kultur.', img: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=600&h=400&fit=crop', tags: ['couples','friends'], recommended: ['offer8'] },
  { id: 'dest-edinburgh', title: 'Edinburgh', desc: 'Geschichte, Schlösser und Festivals in Schottlands charmanter Hauptstadt.', img: 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=600&h=400&fit=crop', tags: ['solo','couples'], recommended: ['offer6'] }
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

function renderOffers(options = { count: 6 }) {
  const container = document.getElementById('angebote-grid');
  if (!container) return;
  const path = (location && location.pathname) ? location.pathname : '/';
  const seed = hashStringToInt(path + (location.search || '') + (location.hash || ''));
  const shuffled = seededShuffle(offersData, seed);
  const count = Math.min(options.count || 6, shuffled.length);
  let html = '';
  for (let i = 0; i < count; i++) {
    const o = shuffled[i];
    html += `
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="angebot-card">
          <img src="${o.img.startsWith('http') ? o.img : 'img/' + o.img}" loading="lazy" class="card-img-top" alt="${o.title}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${o.title}</h5>
            <p class="card-text">${o.text}</p>
            <button class="btn mt-auto" data-offer-id="${o.id}">Details ansehen</button>
          </div>
        </div>
      </div>
    `;
  }
  container.innerHTML = html;
  container.querySelectorAll('button[data-offer-id]').forEach(btn => {
    btn.addEventListener('click', function(ev) {
      ev.preventDefault();
      showOfferDetails(this.getAttribute('data-offer-id'));
    });
  });
}

function showOfferDetails(offerId) {
  const offer = offersData.find(o => o.id === offerId);
  if (!offer) return;
  const modal = document.getElementById('offerDetailsModal');
  if (!modal) return;
  modal.querySelector('#offerModalImage').src = offer.img.startsWith('http') ? offer.img : 'img/' + offer.img;
  modal.querySelector('#offerModalTitle').textContent = offer.title;
  modal.querySelector('#offerModalLongText').textContent = offer.longText;
  modal.querySelector('#offerModalPrice').textContent = offer.price;
  modal.querySelector('#offerModalDuration').textContent = offer.duration;
  modal.querySelector('#offerModalBook').href = 'buchung.html?offer=' + encodeURIComponent(offerId);
  if (typeof bootstrap !== 'undefined' && bootstrap.Modal) {
    new bootstrap.Modal(modal).show();
  }
}

function renderDestinations(options = { count: 8 }) {
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
    const imgSrc = d.img ? (d.img.startsWith('http') ? d.img : 'img/' + d.img) : '';
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
  const modal = document.getElementById('destDetailsOffcanvas');
  if (!modal) return;
  modal.querySelector('#destOffcanvasImage').src = data.img.startsWith('http') ? data.img : 'img/' + data.img;
  modal.querySelector('#destOffcanvasTitle').textContent = data.title;
  modal.querySelector('#destOffcanvasDesc').textContent = data.desc;
  const tagsEl = modal.querySelector('#destOffcanvasTags');
  tagsEl.innerHTML = '';
  const tagLabels = {'family-kids': 'Familie mit Kindern', 'family-no-kids': 'Familie ohne Kinder', 'couples': 'Paare', 'solo': 'Alleinreisende', 'friends': 'Freunde'};
  (data.tags || []).forEach(t => {
    const btn = document.createElement('button');
    btn.className = 'btn btn-sm btn-outline-primary me-2 mb-2';
    btn.textContent = tagLabels[t] || t;
    btn.addEventListener('click', function() {
      const filterBtn = document.querySelector(`.filter-btn[data-filter="${t}"]`);
      if (filterBtn) filterBtn.click();
    });
    tagsEl.appendChild(btn);
  });
  const offersEl = modal.querySelector('#destOffcanvasOffers');
  offersEl.innerHTML = '';
  (data.recommended || []).forEach(offerId => {
    const offer = offersData.find(o => o.id === offerId);
    if (!offer) return;
    const col = document.createElement('div');
    col.className = 'col-12';
    const smallCard = document.createElement('div');
    smallCard.className = 'd-flex align-items-center gap-2';
    const thumb = document.createElement('img');
    thumb.src = offer.img.startsWith('http') ? offer.img : 'img/' + offer.img;
    thumb.style.width = '80px';
    thumb.style.height = '60px';
    thumb.style.objectFit = 'cover';
    thumb.className = 'rounded';
    const meta = document.createElement('div');
    meta.innerHTML = `<strong>${offer.title}</strong><br><small>${offer.price} • ${offer.duration}</small>`;
    smallCard.appendChild(thumb);
    smallCard.appendChild(meta);
    smallCard.addEventListener('click', function() { showOfferDetails(offer.id); });
    col.appendChild(smallCard);
    offersEl.appendChild(col);
  });
  if (typeof bootstrap !== 'undefined' && bootstrap.Offcanvas) {
    new bootstrap.Offcanvas(modal).show();
  }
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
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

let reiseendePicker = null;
let reisebeginnPicker = null;

function calculateDuration() {
  const beginn = reisebeginnPicker?.selectedDates[0];
  const ende = reiseendePicker?.selectedDates[0];
  if (beginn && ende && ende >= beginn) {
    const diff = Math.ceil((ende - beginn) / (1000 * 60 * 60 * 24));
    const dauerInput = document.getElementById('dauer-input');
    const unitBtn = document.getElementById('dauer-unit');
    const unit = unitBtn?.getAttribute('data-selected') || 'tage';
    
    if (unit === 'wochen') {
      dauerInput.value = Math.round(diff / 7);
    } else if (unit === 'monate') {
      dauerInput.value = Math.round(diff / 30);
    } else {
      dauerInput.value = diff;
    }
  }
}

function calculateEndDate() {
  const beginn = reisebeginnPicker?.selectedDates[0];
  const dauerInput = document.getElementById('dauer-input');
  const dauer = parseInt(dauerInput?.value);
  const unitBtn = document.getElementById('dauer-unit');
  const unit = unitBtn?.getAttribute('data-selected') || 'tage';
  
  if (beginn && dauer > 0) {
    let days = dauer;
    if (unit === 'wochen') days = dauer * 7;
    else if (unit === 'monate') days = dauer * 30;
    
    const ende = new Date(beginn);
    ende.setDate(ende.getDate() + days);
    reiseendePicker?.setDate(ende);
  }
}

if (typeof flatpickr === 'function') {
  reisebeginnPicker = flatpickr("#reisebeginn", {
    dateFormat: "d.m.Y",
    locale: "de",
    minDate: "today",
    onChange: function(selectedDates, dateStr) {
      if (reiseendePicker) reiseendePicker.set('minDate', dateStr);
      const dauerInput = document.getElementById('dauer-input');
      if (dauerInput?.value) calculateEndDate();
      else calculateDuration();
    }
  });
  reiseendePicker = flatpickr("#reiseende", {
    dateFormat: "d.m.Y",
    locale: "de",
    minDate: "today",
    onChange: calculateDuration
  });
  
  const dauerInput = document.getElementById('dauer-input');
  if (dauerInput) {
    dauerInput.addEventListener('input', calculateEndDate);
  }
}

document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    const value = this.getAttribute('data-value');
    const button = document.getElementById('dauer-unit');
    if (button) {
      button.textContent = this.textContent;
      button.setAttribute('data-selected', value);
      calculateDuration();
    }
  });
});

const resetBtn = document.querySelector('.btn-reset');
if (resetBtn) {
  resetBtn.addEventListener('click', function() {
    document.querySelectorAll('.search-row input').forEach(input => input.value = '');
    if (typeof flatpickr === 'function') flatpickr("#reisebeginn").clear();
    if (reiseendePicker) reiseendePicker.clear();
    const button = document.getElementById('dauer-unit');
    if (button) {
      button.textContent = 'Tage';
      button.setAttribute('data-selected', 'tage');
    }
  });
}

const destinationsDB = [
  'Barcelona, Spanien', 'Berlin, Deutschland', 'Bali, Indonesien',
  'Dubai, VAE', 'Edinburgh, Schottland', 'Kapstadt, Südafrika',
  'Kyoto, Japan', 'Lissabon, Portugal', 'Malediven',
  'Marrakesch, Marokko', 'New York, USA', 'Paris, Frankreich',
  'Santorini, Griechenland', 'Sydney, Australien', 'Thailand',
  'Vancouver, Kanada', 'Wien, Österreich', 'Island', 'Rom, Italien',
  'London, Großbritannien', 'Tokio, Japan', 'Amsterdam, Niederlande',
  'Hotel Adlon Berlin, Deutschland', 'Hotel Sacher Wien, Österreich',
  'Ritz Paris, Frankreich', 'Burj Al Arab Dubai, VAE',
  'Marina Bay Sands Singapur', 'Hilton Barcelona, Spanien',
  'Marriott London, Großbritannien', 'Sheraton New York, USA',
  'Hyatt Regency Tokio, Japan', 'InterContinental Sydney, Australien',
  'Four Seasons Bali, Indonesien', 'Waldorf Astoria Amsterdam, Niederlande',
  'Grand Hyatt Dubai, VAE', 'Park Hyatt Paris, Frankreich',
  'Mandarin Oriental Bangkok, Thailand', 'The Peninsula Hongkong',
  'Atlantis The Palm Dubai, VAE', 'Belmond Hotel Caruso Amalfi, Italien',
  'Aman Tokio, Japan', 'The Savoy London, Großbritannien',
  'Hotel Arts Barcelona, Spanien', 'The Plaza New York, USA',
  'Raffles Singapur', 'Sofitel Legend Metropole Hanoi, Vietnam',
  'Fairmont Banff Springs Kanada', 'Shangri-La Paris, Frankreich'
];

function initAutocomplete() {
  const input = document.getElementById('destination-search');
  const list = document.getElementById('autocomplete-list');
  if (!input || !list) return;
  input.addEventListener('input', function() {
    const value = this.value.toLowerCase();
    list.innerHTML = '';
    if (!value) {
      list.style.display = 'none';
      return;
    }
    const matches = destinationsDB.filter(item => item.toLowerCase().includes(value)).slice(0, 8);
    if (matches.length > 0) {
      matches.forEach(match => {
        const div = document.createElement('div');
        const isHotel = match.toLowerCase().includes('hotel') || match.toLowerCase().includes('resort') || 
                        match.toLowerCase().includes('marriott') || match.toLowerCase().includes('hilton') ||
                        match.toLowerCase().includes('hyatt') || match.toLowerCase().includes('sheraton') ||
                        match.toLowerCase().includes('ritz') || match.toLowerCase().includes('burj') ||
                        match.toLowerCase().includes('marina bay') || match.toLowerCase().includes('four seasons') ||
                        match.toLowerCase().includes('waldorf') || match.toLowerCase().includes('grand') ||
                        match.toLowerCase().includes('park hyatt') || match.toLowerCase().includes('mandarin') ||
                        match.toLowerCase().includes('peninsula') || match.toLowerCase().includes('atlantis') ||
                        match.toLowerCase().includes('belmond') || match.toLowerCase().includes('aman') ||
                        match.toLowerCase().includes('savoy') || match.toLowerCase().includes('plaza') ||
                        match.toLowerCase().includes('raffles') || match.toLowerCase().includes('sofitel') ||
                        match.toLowerCase().includes('fairmont') || match.toLowerCase().includes('shangri');
        div.className = isHotel ? 'autocomplete-item hotel-item' : 'autocomplete-item city-item';
        div.textContent = match;
        div.addEventListener('click', function() {
          input.value = match;
          list.style.display = 'none';
        });
        list.appendChild(div);
      });
      list.style.display = 'block';
    } else {
      list.style.display = 'none';
    }
  });
  document.addEventListener('click', function(e) {
    if (e.target !== input) list.style.display = 'none';
  });
}

document.addEventListener('DOMContentLoaded', function() {
  initAutocomplete();
  initDestinationFilters();
  renderOffers();
  renderDestinations();
});