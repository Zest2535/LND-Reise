let lastScrollTop = 0;
const navbar = document.getElementById("mainNavbar");
let ticking = false;

if (navbar) {
  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Добавляем класс scrolled для эффекта
        if (scrollTop > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
        
        // Скрываем/показываем навигацию при скролле
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

async function renderOffers(options = { count: 6 }) {
  const container = document.getElementById('angebote-grid');
  if (!container) return;
  
  try {
    const tours = await DB.getTours();
    
    if (!tours || tours.length === 0) {
      container.innerHTML = '<p class="text-center">Keine Angebote verfügbar</p>';
      return;
    }
    
    const count = Math.min(options.count || 6, tours.length);
    let html = '';
    
    for (let i = 0; i < count; i++) {
      const t = tours[i];
      const imgUrl = t.img || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop';
      const price = t.price ? `€${t.price}` : 'Preis auf Anfrage';
      
      html += `
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="angebot-card">
            <img src="${imgUrl}" loading="lazy" class="card-img-top" alt="${t.title}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${t.title}</h5>
              <p class="card-text">${t.description || t.destination}</p>
              <div class="d-flex justify-content-between align-items-center mt-auto">
                <span class="fw-bold text-primary">${price}</span>
                <button class="btn btn-primary" data-tour-id="${t.tour_id}">Buchen</button>
              </div>
            </div>
          </div>
        </div>
      `;
    }
    container.innerHTML = html;
    
    container.querySelectorAll('button[data-tour-id]').forEach(btn => {
      btn.addEventListener('click', async function(ev) {
        ev.preventDefault();
        const tourId = this.getAttribute('data-tour-id');
        const user = await DB.getUser();
        if (!user) {
          new bootstrap.Modal(document.getElementById('loginModal')).show();
          return;
        }
        try {
          await DB.createBooking(tourId);
          alert('✅ Buchung erfolgreich!');
        } catch (error) {
          alert('❌ Fehler: ' + error.message);
        }
      });
    });
  } catch (error) {
    console.error('Error loading tours:', error);
    container.innerHTML = '<p class="text-center">Fehler beim Laden der Angebote</p>';
  }
}

let currentBookingOffer = null;

async function showOfferDetails(offerId) {
  try {
    const offers = await DB.getOffers();
    const offer = offers.find(o => o.id === offerId);
    if (!offer) return;
    
    currentBookingOffer = offer;
    const modal = document.getElementById('offerDetailsModal');
    if (!modal) return;
    
    modal.querySelector('#offerModalImage').src = offer.image_url;
    modal.querySelector('#offerModalTitle').textContent = offer.title;
    modal.querySelector('#offerModalLongText').textContent = offer.description;
    modal.querySelector('#offerModalPrice').textContent = offer.price;
    modal.querySelector('#offerModalDuration').textContent = offer.duration;
    
    const bookBtn = modal.querySelector('#offerModalBook');
    bookBtn.onclick = async function() {
      const user = await DB.getUser();
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

const searchBtn = document.querySelector('.btn-search');
if (searchBtn) {
  searchBtn.addEventListener('click', function() {
    const destination = document.getElementById('destination-search')?.value;
    const abflug = document.getElementById('abflughafen')?.value;
    const personen = document.getElementById('personen')?.value;
    const datum = document.getElementById('reisedatum')?.value;
    
    if (!destination) {
      alert('Bitte geben Sie ein Reiseziel ein');
      return;
    }
    
    const params = new URLSearchParams();
    if (destination) params.set('destination', destination);
    if (abflug) params.set('airport', abflug);
    if (datum) params.set('date', datum);
    
    window.location.href = 'angebote.html?' + params.toString();
  });
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
      alert('⭐ Bitte wählen Sie eine Bewertung');
      return;
    }
    if (!name) {
      alert('👤 Bitte geben Sie Ihren Namen ein');
      return;
    }
    if (!text) {
      alert('✍️ Bitte schreiben Sie eine Bewertung');
      return;
    }
    
    try {
      await DB.createReview('general', selectedRating, text, name);
      
      document.getElementById('reviewName').value = '';
      document.getElementById('reviewTextMain').value = '';
      selectedRating = 0;
      stars.forEach(s => s.className = 'bi bi-star');
      
      alert('✅ Vielen Dank für Ihre Bewertung!');
      displayMainReviews();
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('❌ Fehler beim Senden der Bewertung');
    }
  });
  
  displayMainReviews();
}

async function displayMainReviews() {
  const listEl = document.getElementById('reviewsListMain');
  if (!listEl) return;
  
  try {
    const { data: reviews, error } = await window.supabase
      .from('reviews')
      .select('*')
      .eq('offer_id', 'general')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    
    if (!reviews || reviews.length === 0) {
      listEl.innerHTML = '<p class="text-center text-muted">Noch keine Bewertungen vorhanden</p>';
      return;
    }
    
    listEl.innerHTML = reviews.map(r => `
      <div class="card mb-3">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start">
            <div>
              <h6 class="mb-1">${r.title || 'Anonym'}</h6>
              <div class="text-warning mb-2">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
            </div>
            <small class="text-muted">${new Date(r.created_at).toLocaleDateString('de-DE')}</small>
          </div>
          <p class="mb-0">${r.comment}</p>
        </div>
      </div>
    `).join('');
  } catch (error) {
    console.error('Error loading reviews:', error);
    listEl.innerHTML = '<p class="text-center text-muted">Fehler beim Laden</p>';
  }
}

async function updateNavigation() {
  const navLogin = document.getElementById('navLogin');
  const navRegister = document.getElementById('navRegister');
  const navUser = document.getElementById('navUser');
  const navUserName = document.getElementById('navUserName');
  
  if (navLogin && navRegister && navUser) {
    try {
      const user = await DB.getUser();
      if (user) {
        navLogin.style.display = 'none';
        navRegister.style.display = 'none';
        navUser.style.display = 'block';
        if (navUserName) navUserName.textContent = user.user_metadata?.first_name || user.email;
      } else {
        navLogin.style.display = 'block';
        navRegister.style.display = 'block';
        navUser.style.display = 'none';
      }
    } catch (error) {
      navLogin.style.display = 'block';
      navRegister.style.display = 'block';
      navUser.style.display = 'none';
    }
  }
}

async function showProfile() {
  try {
    const profile = await DB.getUserProfile();
    if (!profile) return;
    
    const initials = profile.firstname.charAt(0) + profile.lastname.charAt(0);
    document.getElementById('profileAvatar').textContent = initials;
    document.getElementById('profileFullName').textContent = profile.firstname + ' ' + profile.lastname;
    document.getElementById('profileEmail').textContent = profile.email;
    document.getElementById('profileFirstName').textContent = profile.firstname;
    document.getElementById('profileLastName').textContent = profile.lastname;
    document.getElementById('profilePhone').textContent = profile.phone || 'Nicht angegeben';
    document.getElementById('profileDatum').textContent = new Date(profile.created_at).toLocaleDateString('de-DE');
    
    // Fülle Bearbeitungsformular
    document.getElementById('editFirstName').value = profile.firstname;
    document.getElementById('editLastName').value = profile.lastname;
    document.getElementById('editPhone').value = profile.phone || '';
    document.getElementById('editBirthDate').value = profile.date_of_birth || '';
    document.getElementById('editAddress').value = profile.address || '';
    
    const buchungen = await DB.getUserBookings();
    const buchungenEl = document.getElementById('profileBuchungen');
    
    if (buchungen.length === 0) {
      buchungenEl.innerHTML = '<p class="text-muted">Noch keine Buchungen vorhanden</p>';
    } else {
      buchungenEl.innerHTML = buchungen.map(b => `
        <div class="card mb-2">
          <div class="card-body p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <h6 class="mb-1">${b.tours?.title || 'Unbekannt'}</h6>
                <small class="text-muted">${b.tours?.destination || ''} • ${b.tours?.start_date ? new Date(b.tours.start_date).toLocaleDateString('de-DE') : ''}</small>
              </div>
              <span class="badge bg-success">${b.status}</span>
            </div>
          </div>
        </div>
      `).join('');
    }
    
    initProfileHandlers();
    new bootstrap.Modal(document.getElementById('profileModal')).show();
  } catch (error) {
    console.error('Error loading profile:', error);
  }
}

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
  // Добавляем анимацию появления элементов
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
  
  // Добавляем плавное появление hero секции
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
  const toggleLoginPassword = document.getElementById('toggleLoginPassword');
  const toggleRegPassword = document.getElementById('toggleRegPassword');
  
  toggleLoginPassword?.addEventListener('click', function() {
    const input = document.getElementById('loginPassword');
    const icon = this.querySelector('i');
    if (input.type === 'password') {
      input.type = 'text';
      icon.className = 'bi bi-eye-slash';
    } else {
      input.type = 'password';
      icon.className = 'bi bi-eye';
    }
  });
  
  toggleRegPassword?.addEventListener('click', function() {
    const input = document.getElementById('regPassword');
    const icon = this.querySelector('i');
    if (input.type === 'password') {
      input.type = 'text';
      icon.className = 'bi bi-eye-slash';
    } else {
      input.type = 'password';
      icon.className = 'bi bi-eye';
    }
  });
  
  document.getElementById('loginForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    if (!this.checkValidity()) {
      e.stopPropagation();
      this.classList.add('was-validated');
      return;
    }
    
    try {
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value;
      
      const { user } = await DB.signIn(email, password);
      
      bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
      this.reset();
      this.classList.remove('was-validated');
      
      const toast = document.createElement('div');
      toast.className = 'toast-notification success';
      toast.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>Willkommen zurück!';
      document.body.appendChild(toast);
      setTimeout(() => toast.classList.add('show'), 100);
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
      }, 3000);
      
      updateNavigation();
    } catch (error) {
      const toast = document.createElement('div');
      toast.className = 'toast-notification error';
      toast.innerHTML = '<i class="bi bi-x-circle-fill me-2"></i>E-Mail oder Passwort falsch!';
      document.body.appendChild(toast);
      setTimeout(() => toast.classList.add('show'), 100);
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
      }, 3000);
    }
  });

  document.getElementById('registerForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const password = document.getElementById('regPassword').value;
    const passwordConfirm = document.getElementById('regPasswordConfirm').value;
    const passwordConfirmInput = document.getElementById('regPasswordConfirm');
    
    if (password !== passwordConfirm) {
      passwordConfirmInput.setCustomValidity('Passwörter stimmen nicht überein');
    } else {
      passwordConfirmInput.setCustomValidity('');
    }
    
    if (!this.checkValidity()) {
      e.stopPropagation();
      this.classList.add('was-validated');
      return;
    }
    
    try {
      const email = document.getElementById('regEmail').value.trim();
      const firstName = document.getElementById('regFirstName').value.trim();
      const lastName = document.getElementById('regLastName').value.trim();
      
      await DB.signUp(email, password, firstName, lastName);
      
      bootstrap.Modal.getInstance(document.getElementById('registerModal')).hide();
      this.reset();
      this.classList.remove('was-validated');
      
      const toast = document.createElement('div');
      toast.className = 'toast-notification success';
      toast.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>Registrierung erfolgreich! Prüfen Sie Ihre E-Mail.';
      document.body.appendChild(toast);
      setTimeout(() => toast.classList.add('show'), 100);
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
      }, 4000);
    } catch (error) {
      const toast = document.createElement('div');
      toast.className = 'toast-notification error';
      toast.innerHTML = '<i class="bi bi-x-circle-fill me-2"></i>' + error.message;
      document.body.appendChild(toast);
      setTimeout(() => toast.classList.add('show'), 100);
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
      }, 3000);
    }
  });

  document.getElementById('bookingForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    if (!currentBookingOffer) return;
    
    if (!this.checkValidity()) {
      e.stopPropagation();
      this.classList.add('was-validated');
      return;
    }
    
    try {
      await DB.createBooking(
        currentBookingOffer.id,
        document.getElementById('bookingDate').value,
        document.getElementById('bookingPersons').value,
        document.getElementById('bookingPhone').value
      );
      
      bootstrap.Modal.getInstance(document.getElementById('bookingModal')).hide();
      this.reset();
      this.classList.remove('was-validated');
      
      const toast = document.createElement('div');
      toast.className = 'toast-notification success';
      toast.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>Buchung erfolgreich!';
      document.body.appendChild(toast);
      setTimeout(() => toast.classList.add('show'), 100);
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
      }, 4000);
    } catch (error) {
      alert('❌ Fehler: ' + error.message);
    }
  });
}
