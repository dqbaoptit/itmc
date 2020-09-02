import './index.scss';

const Trial = {
  title: 'C++ Cơ bản',
  des: 'Kiến thức lập trình ngôn ngữ C++ cơ bản',
  price: '0,000',
  feature: [
    'Lập trình là gì ? ',
    'C++ là ngôn ngữ gì ? ',
    'Code C++ là như thế nào',
  ],
};
const Personal = {
  title: 'Personal',
  des: 'Bạn đang tự kinh doanh cho bản thân và muốn tạo nhiều lead?',
  price: '500,000',
  feature: [
    'Không giới hạn landing page',
    '3 Email marketing',
    'Khả dụng 365 ngày',
  ],
};
const MediumBusiness = {
  title: 'C++ Cơ bản',
  des: 'Kiến thức lập trình ngôn ngữ C++ cơ bản',
  price: '0,000',
  feature: [
    'Lập trình là gì ? ',
    'C++ là ngôn ngữ gì ? ',
    'Code C++ là như thế nào',
  ],
};
const LargeBusiness = {
  title: 'Large Business',
  des: 'Phát triển marketing và lợi nhuận của bạn ở trình độ nâng cao nhất',
  price: '2,000,000',
  feature: [
    'Không giới hạn landing page',
    'Không giới hạn Email marketing',
    'Khả dụng 365 ngày',
  ],
};
const PriceCard = ({ type = 3, name, desc, level, onClick }) => {
  const { feature } = MediumBusiness;
  const Level = level.charAt(0).toUpperCase() + level.slice(1);
  return (
    <div className="price-card">
      <div
        className={`price-card--content price-card--type-${type}`}
        style={{
          borderRadius: '35px 35px 0px 0px',
          padding: '2rem',
        }}
      >
        <div className="price-card__title">{name}</div>
        <div className="price-card__desc">{desc}</div>
      </div>
      <div className="price-card__price">{Level}</div>
      <div align="center">
        <div
          className={`price-card__btn price-card__btn--type-${type}`}
          onClick={onClick}
        >
          <p>Bắt đầu ngay</p>
        </div>
      </div>
      <div className="price-card__features">
        <ul>
          {feature.map((item, idx) => (
            <li key={idx} className="price-card__features__item">
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default PriceCard;
