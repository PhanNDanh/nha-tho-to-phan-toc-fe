import "./HistoryPage.css";

export default function HistoryPage() {
  return (
    <div className="history-page">
      <div className="history-header">
        <span>Di tích lịch sử văn hóa</span>
        <h1>Lịch sử Nhà thờ tổ Phan Tộc</h1>
        <p>Xuân Phương - Xuân Trường - Nam Định</p>
      </div>

      <div className="history-card">
        <h2>Khởi nguồn dòng họ</h2>
        <p>
          Vào năm Hồng Đức nhị niên 1471, Đức Thủy tổ Phan Quý Công tự
          Chính Niệm từ Phượng Lũ về vùng Trà Giang lập ấp, đặt nền móng
          cho quá trình mở mang sự nghiệp và phát triển dòng họ Phan Tộc.
        </p>

        <blockquote>
          “Hồng Đức niên gian bồi đức thụ<br />
          Trà giang lạc thổ triệu nhân cơ”
        </blockquote>
      </div>

      <div className="history-card">
        <h2>Phát triển dòng họ</h2>
        <p>
          Phan Tộc là dòng họ lớn, có truyền thống văn võ, khoa bảng và
          nhiều đóng góp với làng xã. Đến nay dòng họ đã trải qua khoảng
          15 - 16 đời, con cháu đông đúc, định cư trên nhiều vùng miền.
        </p>
      </div>

      <div className="history-card">
        <h2>Các mốc xây dựng nhà thờ tổ</h2>

        <div className="history-timeline">
          <div><strong>1783</strong><p>Xây dựng nhà thờ tổ lần đầu.</p></div>
          <div><strong>1807</strong><p>Xây dựng với quy mô bề thế.</p></div>
          <div><strong>1840</strong><p>Phục dựng dưới triều Minh Mệnh.</p></div>
          <div><strong>1883</strong><p>Đại trùng tu, hình thành diện mạo gần như hiện nay.</p></div>
          <div><strong>1902</strong><p>Tiếp tục kiến thiết, tu bổ.</p></div>
          <div><strong>2007</strong><p>Xây dựng lại tiền đường.</p></div>
          <div><strong>23/09/2009</strong><p>Được công nhận là Di tích lịch sử văn hóa cấp tỉnh.</p></div>
        </div>
      </div>

      <div className="history-card">
        <h2>Vai trò cách mạng</h2>
        <p>
          Trong hai cuộc kháng chiến chống Pháp và Mỹ, Nhà thờ tổ Phan Tộc
          là cơ sở cách mạng quan trọng của địa phương, từng là nơi hội họp,
          kho vũ khí, nơi tập luyện du kích, địa điểm giao nhận quân và cơ sở
          sơ tán của huyện.
        </p>
      </div>
    </div>
  );
}