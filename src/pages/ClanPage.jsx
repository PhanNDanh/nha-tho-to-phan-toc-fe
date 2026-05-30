import "./ClanPage.css";

const branchList = [
  "Ngành 1",
  "Ngành 2",
  "Ngành 3",
  "Ngành 4",
  "Ngành 5",
];

export default function ClanPage() {
  return (
    <div className="clan-page">
      <section className="clan-header">
        <span>Dòng họ Phan Tộc</span>
        <h1>Thông tin dòng họ</h1>
        <p>
          Khởi nguồn từ Đức Thủy tổ Phan Quý Công tự Chính Niệm,
          phát tích tại Phượng Lũ và lập ấp tại vùng Trà Giang.
        </p>
      </section>

      <section className="clan-grid">
        <div className="clan-card main-card">
          <h2>Đức Thủy tổ</h2>
          <h3>Phan Quý Công</h3>
          <p className="highlight">Tự Chính Niệm</p>

          <p>
            Theo tư liệu dòng họ, Đức Thủy tổ Phan Quý Công tự Chính Niệm
            từ Phượng Lũ về vùng Trà Giang lập ấp vào năm Hồng Đức nhị niên
            1471, đặt nền móng cho sự hình thành và phát triển của Phan Tộc.
          </p>
        </div>

        <div className="clan-card">
          <h2>Quê phát tích</h2>
          <p>Phượng Lũ, ngoại thành Hà Nội</p>
        </div>

        <div className="clan-card">
          <h2>Nơi lập ấp</h2>
          <p>Trà Giang - Trà Lũ Đông, Xuân Phương, Xuân Trường, Nam Định</p>
        </div>

        <div className="clan-card">
          <h2>Niên đại</h2>
          <p>Hồng Đức nhị niên 1471</p>
        </div>
      </section>

      <section className="clan-card">
        <h2>Truyền thống dòng họ</h2>

        <p>
          Phan Tộc là dòng họ lớn, có truyền thống “Văn võ thế khoa”,
          nhiều đời tiền nhân có công với dòng họ, làng xã và quê hương.
          Từ Thủy tổ đến các liệt tổ kế thừa, xây dựng cơ nghiệp rạng rỡ,
          đến nay đã trải qua khoảng 15 - 16 đời con cháu.
        </p>
      </section>

      <section className="clan-card">
        <h2>5 ngành tổ con</h2>

        <p>
          Qua quá trình phát triển, dòng họ hình thành 5 ngành tổ con,
          tương ứng với các nhà tổ lớn, tiếp nối và phát triển các đời con cháu.
        </p>

        <div className="branch-list">
          {branchList.map((branch) => (
            <div className="branch-item" key={branch}>
              <strong>{branch}</strong>
              <span>Nhà tổ {branch.toLowerCase()}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="clan-card">
        <h2>Câu đối tiền đường</h2>

        <div className="clan-quote">
          “Hồng Đức niên gian bồi đức thụ<br />
          Trà giang lạc thổ triệu nhân cơ”
        </div>

        <p>
          Dịch nghĩa: Năm Hồng Đức vun trồng lên phúc đức,
          đất sông Trà tốt đẹp dựng xây cơ đồ.
        </p>
      </section>
    </div>
  );
}