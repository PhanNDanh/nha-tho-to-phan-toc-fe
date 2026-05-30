import "./BranchList.css";

const branches = [
  {
    id: 1,
    name: "Phan Quý Công tự Đức Gô",
    image: "/nha-tho-to.png",
    deathDay: "16 tháng Giêng âm lịch hằng năm",
    address: "Đang cập nhật",
    description: "Một trong 5 ngành tổ con chính của Phan Đại Tộc.",
  },
  {
    id: 2,
    name: "Ngành tổ thứ hai",
    image: "/nha-tho-to.png",
    deathDay: "Đang cập nhật",
    address: "Đang cập nhật",
    description: "Thông tin ngành tổ đang được bổ sung.",
  },
  {
    id: 3,
    name: "Ngành tổ thứ ba",
    image: "/nha-tho-to.png",
    deathDay: "Đang cập nhật",
    address: "Đang cập nhật",
    description: "Thông tin ngành tổ đang được bổ sung.",
  },
  {
    id: 4,
    name: "Ngành tổ thứ tư",
    image: "/nha-tho-to.png",
    deathDay: "Đang cập nhật",
    address: "Đang cập nhật",
    description: "Thông tin ngành tổ đang được bổ sung.",
  },
  {
    id: 5,
    name: "Ngành tổ thứ năm",
    image: "/nha-tho-to.png",
    deathDay: "Đang cập nhật",
    address: "Đang cập nhật",
    description: "Thông tin ngành tổ đang được bổ sung.",
  },
];

export default function BranchList() {
  return (
    <div className="branch-page">
      <section className="branch-header">
        <span>Phan Đại Tộc</span>
        <h1>5 ngành tổ con</h1>
        <p>
          Thông tin các ngành tổ con chính, ngày giỗ, địa chỉ nhà tổ và tư liệu
          từng ngành trong dòng họ.
        </p>
      </section>

      <section className="branch-grid">
        {branches.map((branch) => (
          <article className="branch-card" key={branch.id}>
            <div className="branch-image">
              <img src={branch.image} alt={branch.name} />
              <span>Ngành {branch.id}</span>
            </div>

            <div className="branch-body">
              <h2>{branch.name}</h2>

              <div className="branch-info">
                <div>
                  <strong>Ngày giỗ</strong>
                  <span>{branch.deathDay}</span>
                </div>

                <div>
                  <strong>Địa chỉ nhà tổ</strong>
                  <span>{branch.address}</span>
                </div>
              </div>

              <p>{branch.description}</p>

              <button>Xem chi tiết</button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}