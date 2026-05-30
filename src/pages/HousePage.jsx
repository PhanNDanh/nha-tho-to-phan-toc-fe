import { useEffect, useState } from "react";
import "./HousePage.css";

const images = [
    "/nha-tho-to.png",
    "/nha-tho-to-2.png",
    "/nha-tho-to-3.png",
];

const constructionTimeline = [
    {
        year: "1783",
        title: "Dựng nhà thờ đầu tiên",
        desc: "Nhà thờ tổ được xây dựng lần đầu, ban đầu chỉ đắp đất và lợp rạ.",
    },
    {
        year: "1807",
        title: "Xây dựng quy mô bề thế",
        desc: "Dưới triều Gia Long, nhà thờ tổ được xây dựng với quy mô lớn hơn.",
    },
    {
        year: "1840",
        title: "Phục dựng",
        desc: "Nhà thờ được phục dựng vào năm Minh Mệnh thứ 21.",
    },
    {
        year: "1883",
        title: "Đại trùng tu",
        desc: "Đợt đại trùng tu tạo nên diện mạo gần như ngày nay.",
    },
    {
        year: "2007",
        title: "Xây dựng lại tiền đường",
        desc: "Tiền đường được xây dựng lại như hiện nay.",
    },
    {
        year: "23/09/2009",
        title: "Công nhận di tích",
        desc: "UBND tỉnh Nam Định công nhận là Di tích lịch sử văn hóa cấp tỉnh.",
    },
];

export default function HousePage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextImage();
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="house-page">
            <section className="house-slider">
                <img
                    src={images[currentIndex]}
                    alt="Nhà thờ tổ Phan Tộc"
                    className="house-slider-image"
                />

                <div className="slider-overlay">
                    <span>Di tích lịch sử văn hóa cấp tỉnh</span>
                    <h1>Nhà thờ tổ Phan Tộc</h1>
                    <p>Xuân Phương - Xuân Trường - Nam Định</p>
                </div>

                <button className="slider-btn prev" onClick={prevImage}>
                    ‹
                </button>

                <button className="slider-btn next" onClick={nextImage}>
                    ›
                </button>

                <div className="slider-dots">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={index === currentIndex ? "active" : ""}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </section>

            <section className="house-info-layout">
                <div className="house-card">
                    <h2>Thông tin di tích</h2>

                    <div className="info-list">
                        <div>
                            <strong>Tên di tích</strong>
                            <span>Nhà thờ tổ Phan Tộc</span>
                        </div>

                        <div>
                            <strong>Địa chỉ</strong>
                            <span>Xuân Phương, Xuân Trường, Nam Định</span>
                        </div>

                        <div>
                            <strong>Thờ phụng</strong>
                            <span>Đức Thủy tổ Phan Quý Công tự Chính Niệm</span>
                        </div>

                        <div>
                            <strong>Công nhận</strong>
                            <span>Di tích lịch sử văn hóa cấp tỉnh - 23/09/2009</span>
                        </div>
                    </div>

                    <p>
                        Nhà thờ tổ Phan Tộc là nơi thờ phụng Đức Thủy tổ Phan Quý Công
                        tự Chính Niệm cùng các bậc tiền nhân của dòng họ. Đây là không gian
                        tâm linh, văn hóa và lịch sử quan trọng của con cháu Phan Tộc.
                    </p>
                </div>

                <div className="house-card map-card">
                    <h2>Vị trí nhà thờ tổ</h2>

                    <p>
                        Thông tin định vị trên Google Maps để con cháu và khách thập phương
                        thuận tiện tìm đường đến nhà thờ tổ Phan Tộc.
                    </p>

                    <div className="info-list">
                        <div>
                            <strong>Địa chỉ Google Maps</strong>
                            <span>
                                892C+5CW, Xóm 4, Xuân Hưng, Ninh Bình, Việt Nam
                            </span>
                        </div>
                    </div>

                    <iframe
                        title="Nhà thờ tổ Phan Tộc"
                        src="https://www.google.com/maps?q=892C%2B5CW%2C%20X%C3%B3m%204%2C%20Xu%C3%A2n%20H%C6%B0ng%2C%20Ninh%20B%C3%ACnh%2C%20Vi%E1%BB%87t%20Nam&output=embed"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                    <a
                        className="map-link"
                        href="https://www.google.com/maps/search/?api=1&query=892C%2B5CW%2C%20X%C3%B3m%204%2C%20Xu%C3%A2n%20H%C6%B0ng%2C%20Ninh%20B%C3%ACnh%2C%20Vi%E1%BB%87t%20Nam"
                        target="_blank"
                        rel="noreferrer"
                    >
                        📍 Mở trên Google Maps
                    </a>
                </div>
            </section>

            <section className="house-card">
                <h2>Các mốc xây dựng - tu bổ</h2>

                <div className="house-timeline">
                    {constructionTimeline.map((item) => (
                        <div className="house-timeline-item" key={item.year}>
                            <div className="timeline-year">{item.year}</div>

                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="house-card">
                <h2>Vai trò trong kháng chiến</h2>

                <p>
                    Trong hai cuộc kháng chiến chống Pháp và Mỹ, Nhà thờ tổ Phan Tộc
                    từng là cơ sở cách mạng quan trọng của địa phương, là nơi hội họp,
                    sơ tán, cất giữ vũ khí, tập luyện du kích và phục vụ nhiều hoạt động
                    cách mạng của huyện Xuân Trường.
                </p>
            </section>
        </div>
    );
}