import { useState } from 'react';
import './App.css';
import cayvangImg from './img/cayvang.png';
import dong247Img from './img/dong247.png';
import dongsunshopImg from './img/dongsunshop.png';
import finappsImg from './img/finapps.png';
import moneycatImg from './img/moneycat.png';
import vayvndImg from './img/vayvnd.png';

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const loanServices = [
    { id: 1, name: 'Cây Vàng', logo: cayvangImg, rate: '0%', limit: '10 triệu', approval: '15 phút', link: 'https://assets.clickbuy.asia/click?a=78993&o=935&sub_id1=vay-tieu-dung-online' },
    { id: 2, name: 'Đồng 247', logo: dong247Img, rate: '0%', limit: '30 triệu', approval: '10 phút', link: 'https://go.dinos.click/click?a=78993&o=302&sub_id1=vay-tieu-dung-online' },
    { id: 3, name: 'Đồng Sun Shop', logo: dongsunshopImg, rate: '0%', limit: '30 triệu', approval: '5 phút', link: 'https://go.dinos.click/click?a=78993&o=1060&sub_id1=vay-tieu-dung-online' },
    { id: 4, name: 'Fin Apps', logo: finappsImg, rate: '0%', limit: '20 triệu', approval: '20 phút', link: 'https://go.dinos.click/click?a=78993&o=821&sub_id1=vay-tieu-dung-online' },
    { id: 5, name: 'Money Cats', logo: moneycatImg, rate: '0%', limit: '10 triệu', approval: '30 phút', link: 'https://go.dinos.click/click?a=78993&o=762&sub_id1=vay-tieu-dung-online' },
    { id: 6, name: 'Vay VND', logo: vayvndImg, rate: '2.5%', limit: '20 triệu', approval: '45 phút', link: 'https://go.dinos.click/click?a=78993&o=927&sub_id1=vay-tieu-dung-online' }
  ];

  const testimonials = [
    { id: 1, name: 'Nguyễn Thị Hương', age: 28, job: 'Nhân viên văn phòng', content: 'Ứng dụng Hosito giúp tôi tìm được khoản vay phù hợp chỉ trong 15 phút. Rất nhanh chóng và tiện lợi!', avatar: '👩' },
    { id: 2, name: 'Trần Văn Minh', age: 35, job: 'Kinh doanh', content: 'Tôi rất hài lòng với dịch vụ. Lãi suất thấp, không có phí ẩn. Sẽ giới thiệu cho bạn bè!', avatar: '👨' },
    { id: 3, name: 'Lê Thị Mai', age: 26, job: 'Freelancer', content: 'Cảm ơn Hosito đã giúp tôi vượt qua khó khăn tài chính. Đội ngũ hỗ trợ rất nhiệt tình!', avatar: '👩' },
    { id: 4, name: 'Phạm Đức Tuấn', age: 32, job: 'Kỹ sư', content: 'Quy trình vay đơn giản, giải ngân nhanh. Ứng dụng rất đáng tin cậy!', avatar: '👨' }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const newsItems = [
    { id: 1, title: 'VayNhanhOnline: Giải ngân nhanh chóng - Vay Tiền Vay', image: '📰' },
    { id: 2, title: 'Vay Nhanh Oanh của Cuồng Vay Tuyến Tiền', image: '📰' },
    { id: 3, title: 'Vay Tín Chấp trong tham khảo Tay TienOi', image: '📰' }
  ];

  const tipsItems = [
    { id: 1, title: 'Mẹo Vay Tiền không cần văn bằng', image: '💡' },
    { id: 2, title: 'Mẹo Vay Tiền nhanh cần thông tin', image: '💡' },
    { id: 3, title: 'Cách vay tiền nhanh không cần thế chấp', image: '💡' }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <div className="logo-section">
            <span className="logo-icon">💲</span>
            <span className="logo-text">Hosito</span>
          </div>
          <nav className="nav-section">
            <a href="#hero-section" className="nav-link">Trang chủ</a>
            <a href="#danh-sach-vay" className="nav-link">Vay tín chấp</a>
            <a href="#danh-gia" className="nav-link">Đánh giá</a>
            <a href="#tin-tuc-noi-bat" className="nav-link">Tin tức</a>
            <a href="#lien-he" className="nav-link">Liên hệ</a>
          </nav>
        </div>
      </header>

      <section id="hero-section" className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-badge">✓ Uy Tín - Nhanh Chóng - An Toàn</span>
          <h1 className="hero-title">Vay Tiền Online Lãi Suất Thấp Nhất ✓ Giải Ngân 15 Phút</h1>
          <p className="hero-subtitle">So sánh hàng trăm đơn vị cho vay uy tín nhất Việt Nam. Lãi suất chỉ từ 0%/tháng, không cần thế chấp, giải ngân nhanh trong 15 phút.</p>
          <div className="trust-badges">
            <div className="trust-item"><span>🔒</span> Bảo mật 100%</div>
            <div className="trust-item"><span>⚡</span> Giải ngân nhanh</div>
            <div className="trust-item"><span>✓</span> Không phí ẩn</div>
            <div className="trust-item"><span>📱</span> Đăng ký online</div>
          </div>
        </div>
      </section>

      <main className="main-content">
        <div className="content-container">
          {/* Left Column */}
          <div className="left-column">
            {/* Danh sách vay */}
            <div id="danh-sach-vay">
              <h2 className="section-title">Danh Sách Các Đơn Vị Cho Vay</h2>
              <div className="loan-grid">
                {loanServices.map((service) => (
                  <div key={service.id} className="loan-card">
                    <div className="loan-card-header">
                      <img src={service.logo} alt={service.name} className="loan-logo-img" />
                      <span className="loan-name">{service.name}</span>
                    </div>
                    <div className="loan-info">
                      <div className="loan-info-item">
                        <span className="loan-info-label">Lãi suất:</span>
                        <span className="loan-info-value">từ {service.rate}</span>
                      </div>
                      <div className="loan-info-item">
                        <span className="loan-info-label">Hạn mức:</span>
                        <span className="loan-info-value">{service.limit}</span>
                      </div>
                      <div className="loan-info-item">
                        <span className="loan-info-label">Duyệt:</span>
                        <span className="loan-info-value">{service.approval}</span>
                      </div>
                    </div>
                    <a href={service.link} target="_blank" rel="noopener noreferrer" className="loan-cta-button">Đăng Ký Ngay</a>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials - Container riêng */}
            <div id="danh-gia" className="testimonials-container-wrapper">
              <section className="testimonials-section">
                <h2 className="section-title">Khách Hàng Nói Gì Về Chúng Tôi</h2>
                <div className="testimonials-inner">
                  <button className="testimonial-nav prev" onClick={prevTestimonial}>❮</button>
                  <div className="testimonial-card">
                    <div className="testimonial-avatar">{testimonials[currentTestimonial].avatar}</div>
                    <div className="testimonial-info">
                      <h3 className="testimonial-name">{testimonials[currentTestimonial].name} <span className="testimonial-age">{testimonials[currentTestimonial].age} tuổi</span></h3>
                      <p className="testimonial-job">{testimonials[currentTestimonial].job}</p>
                      <div className="testimonial-rating">★★★★★</div>
                      <p className="testimonial-content">"{testimonials[currentTestimonial].content}"</p>
                    </div>
                  </div>
                  <button className="testimonial-nav next" onClick={nextTestimonial}>❯</button>
                </div>
                <div className="testimonial-dots">
                  {testimonials.map((_, index) => (
                    <span 
                      key={index} 
                      className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                      onClick={() => setCurrentTestimonial(index)}
                    ></span>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <aside className="right-column">
            <div id="tin-tuc-noi-bat" className="sidebar-section">
              <h3 className="sidebar-title">Tin Tức Nổi Bật</h3>
              <div className="sidebar-list">
                {newsItems.map((item) => (
                  <div key={item.id} className="sidebar-item">
                    <span className="sidebar-item-image">{item.image}</span>
                    <span className="sidebar-item-title">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h3 className="sidebar-title">Mẹo Vay Tiền</h3>
              <div className="sidebar-list">
                {tipsItems.map((item) => (
                  <div key={item.id} className="sidebar-item">
                    <span className="sidebar-item-image">{item.image}</span>
                    <span className="sidebar-item-title">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer id="lien-he" className="App-footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>Về Hosito</h4>
            <p>Hosito là nền tảng so sánh vay tiền online uy tín nhất Việt Nam. Chúng tôi giúp bạn tìm kiếm các đơn vị cho vay với lãi suất thấp, giải ngân nhanh chóng và an toàn.</p>
          </div>
          <div className="footer-section">
            <h4>Liên kết nhanh</h4>
            <ul>
              <li><a href="#danh-sach-vay">Vay tín chấp</a></li>
              <li><a href="#danh-sach-vay">Vay thế chấp</a></li>
              <li><a href="#tin-tuc-noi-bat">Tin tức tài chính</a></li>
              <li><a href="#tin-tuc-noi-bat">Hướng dẫn vay tiền</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Liên hệ</h4>
            <p>📧 Email: contact@hosito.com</p>
            <p>📞 Hotline: 1900 xxxx</p>
            <p>📍 Địa chỉ: Hà Nội, Việt Nam</p>
          </div>
          <div className="footer-section">
            <h4>Kết nối</h4>
            <div className="social-links">
              <a href="#">Facebook</a>
              <a href="#">Zalo</a>
              <a href="#">Youtube</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Hosito. Tất cả các quyền được bảo lưu. | <a href="#">Chính sách bảo mật</a> | <a href="#">Điều khoản sử dụng</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
