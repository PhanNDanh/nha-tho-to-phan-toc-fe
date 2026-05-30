import { useMemo, useState } from "react";
import "./GenealogyPage.css";

const genealogyData = [
  {
    id: 1,
    name: "Phan Quý Công tự Chính Niệm",
    generation: 1,
    branch: "Thủy tổ",
  },

  {
    id: 2,
    name: "Phan Quý Công tự Đức Gô",
    generation: 2,
    branch: "Ngành 1",
  },

  {
    id: 3,
    name: "Tổ ngành thứ hai",
    generation: 2,
    branch: "Ngành 2",
  },

  {
    id: 4,
    name: "Tổ ngành thứ ba",
    generation: 2,
    branch: "Ngành 3",
  },

  {
    id: 5,
    name: "Tổ ngành thứ tư",
    generation: 2,
    branch: "Ngành 4",
  },

  {
    id: 6,
    name: "Tổ ngành thứ năm",
    generation: 2,
    branch: "Ngành 5",
  },

  {
    id: 7,
    name: "Phan Văn A",
    generation: 3,
    branch: "Ngành 1",
  },

  {
    id: 8,
    name: "Phan Văn B",
    generation: 3,
    branch: "Ngành 1",
  },

  {
    id: 9,
    name: "Phan Văn C",
    generation: 3,
    branch: "Ngành 2",
  },
];

export default function GenealogyPage() {
  const [selectedBranch, setSelectedBranch] = useState("all");
  const [selectedGeneration, setSelectedGeneration] = useState("all");
  const [keyword, setKeyword] = useState("");

  const filteredData = useMemo(() => {
    return genealogyData.filter((item) => {
      const matchBranch =
        selectedBranch === "all" ||
        item.branch === selectedBranch;

      const matchGeneration =
        selectedGeneration === "all" ||
        item.generation === Number(selectedGeneration);

      const matchKeyword =
        item.name
          .toLowerCase()
          .includes(keyword.toLowerCase());

      return (
        matchBranch &&
        matchGeneration &&
        matchKeyword
      );
    });
  }, [
    selectedBranch,
    selectedGeneration,
    keyword,
  ]);

  const generations = [...new Set(
    filteredData.map((item) => item.generation)
  )];

  return (
    <div className="genealogy-page">
      <section className="genealogy-header">
        <span>Phan Đại Tộc</span>

        <h1>Gia phả dòng họ</h1>

        <p>
          Thông tin các đời tổ tiên và con cháu
          trong dòng họ Phan.
        </p>
      </section>

      <section className="filter-box">
        <select
          value={selectedBranch}
          onChange={(e) =>
            setSelectedBranch(e.target.value)
          }
        >
          <option value="all">
            Tất cả ngành
          </option>

          <option value="Ngành 1">
            Ngành Đức Gô
          </option>

          <option value="Ngành 2">
            Ngành 2
          </option>

          <option value="Ngành 3">
            Ngành 3
          </option>

          <option value="Ngành 4">
            Ngành 4
          </option>

          <option value="Ngành 5">
            Ngành 5
          </option>
        </select>

        <select
          value={selectedGeneration}
          onChange={(e) =>
            setSelectedGeneration(e.target.value)
          }
        >
          <option value="all">
            Tất cả đời
          </option>

          {[...Array(20)].map((_, index) => (
            <option
              key={index + 1}
              value={index + 1}
            >
              Đời {index + 1}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Tìm tên thành viên..."
          value={keyword}
          onChange={(e) =>
            setKeyword(e.target.value)
          }
        />
      </section>

      {generations.map((generation) => (
        <section
          key={generation}
          className="generation-section"
        >
          <h2>Đời {generation}</h2>

          <div className="member-grid">
            {filteredData
              .filter(
                (item) =>
                  item.generation === generation
              )
              .map((member) => (
                <div
                  key={member.id}
                  className="member-card"
                >
                  <strong>{member.name}</strong>

                  <span>{member.branch}</span>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}