-- Полная схема базы данных для LND-Reisen

-- Клиенты
CREATE TABLE customers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  date_of_birth DATE,
  address TEXT,
  city VARCHAR(100),
  postal_code VARCHAR(20),
  country VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Направления
CREATE TABLE destinations (
  id SERIAL PRIMARY KEY,
  city VARCHAR(100) NOT NULL,
  country VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Предложения
CREATE TABLE offers (
  id VARCHAR(20) PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  price VARCHAR(20) NOT NULL,
  duration VARCHAR(50),
  image_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Бронирования
CREATE TABLE bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_id UUID REFERENCES customers(id),
  offer_id VARCHAR(20) REFERENCES offers(id),
  travel_date DATE NOT NULL,
  return_date DATE,
  persons INTEGER NOT NULL DEFAULT 1,
  total_price DECIMAL(10,2) NOT NULL,
  status VARCHAR(20) DEFAULT 'pending',
  special_requests TEXT,
  emergency_contact_name VARCHAR(200),
  emergency_contact_phone VARCHAR(20),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Отзывы
CREATE TABLE reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_id UUID REFERENCES customers(id),
  offer_id VARCHAR(20) REFERENCES offers(id),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  title VARCHAR(200),
  comment TEXT,
  is_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Контакты/Запросы
CREATE TABLE contact_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(300),
  message TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Настройки RLS
ALTER TABLE destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE offers ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

-- Политики безопасности
CREATE POLICY "Public read destinations" ON destinations FOR SELECT USING (true);
CREATE POLICY "Public read offers" ON offers FOR SELECT USING (true);
CREATE POLICY "Public insert contact" ON contact_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert reviews" ON reviews FOR INSERT WITH CHECK (true);
CREATE POLICY "Public read reviews" ON reviews FOR SELECT USING (true);

-- Индексы для производительности
CREATE INDEX idx_offers_destination ON offers(destination_id);
CREATE INDEX idx_bookings_customer ON bookings(customer_id);
CREATE INDEX idx_bookings_offer ON bookings(offer_id);
CREATE INDEX idx_reviews_offer ON reviews(offer_id);

-- Вставка тестовых данных
INSERT INTO destinations (city, country) VALUES
('Paris', 'Frankreich'),
('Barcelona', 'Spanien'),
('Rom', 'Italien'),
('Amsterdam', 'Niederlande'),
('Berlin', 'Deutschland'),
('Wien', 'Österreich');

INSERT INTO offers (id, title, description, price, duration, image_url) VALUES
('offer1', 'Romantisches Paris', 'Erleben Sie die Stadt der Liebe', '€349', '3 Tage', 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop'),
('offer2', 'Barcelona Entdecken', 'Gaudí und Mittelmeer', '€499', '4 Tage', 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&h=600&fit=crop'),
('offer3', 'Ewiges Rom', 'Geschichte hautnah erleben', '€599', '5 Tage', 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop'),
('offer4', 'Amsterdam Highlights', 'Kanäle und Kultur', '€399', '3 Tage', 'https://images.unsplash.com/photo-1534351590666-13e7d96b5017?w=800&h=600&fit=crop');