import React, { useEffect, useState } from "react";
import Axios, { all } from "axios";

import Modal from "../../EComponents/Modal";
import ModalDel from "../../EComponents/ModalDel";
import ModalApprove from "../../EComponents/ModalApprove";
// import notFound from '../../assets/images/page-not-found.svg'

const API_URL = import.meta.env.VITE_API_URL;

// exposter
import ev1 from "../../DAssets/exposter/ev1.png";
import ev2 from "../../DAssets/exposter/ev2.png";
import ev3 from "../../DAssets/exposter/ev3.png";
import sc1 from "../../DAssets/exposter/sc1.png";
import sc2 from "../../DAssets/exposter/sc2.png";
import sc3 from "../../DAssets/exposter/sc3.png";

const A_ShowTiktok = ({ id }) => {
  // Get *ShowTiktok
  //  const [showTiktok, setShowTiktok] = useState([]);
  const showTiktok = [
    {
      topic: "Ex Topic #1 ",
      description: "Description Support Topic",
      embed:
        '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@impeanuts/video/7477057682168384786" data-video-id="7477057682168384786" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@impeanuts" href="https://www.tiktok.com/@impeanuts?refer=embed">@impeanuts</a> เด็กคอมรัน  เขียนโค้ด ❌ แก้โค้ด ✅ <a title="spu" target="_blank" href="https://www.tiktok.com/tag/spu?refer=embed">#spu</a> <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a> <a target="_blank" title="♬ original sound - sp99d.s0ngs" href="https://www.tiktok.com/music/original-sound-7071809975861005099?refer=embed">♬ original sound - sp99d.s0ngs</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>',
      status: "Approved",
    },
    {
      topic: "Ex Topic #2 ",
      description: "Description Support Topic",
      embed:
        '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@bunniebinie/video/7477156937201782024" data-video-id="7477156937201782024" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@bunniebinie" href="https://www.tiktok.com/@bunniebinie?refer=embed">@bunniebinie</a> <a title="cpe" target="_blank" href="https://www.tiktok.com/tag/cpe?refer=embed">#CPE</a> <a title="it_spu" target="_blank" href="https://www.tiktok.com/tag/it_spu?refer=embed">#it_spu</a> <a title="spu" target="_blank" href="https://www.tiktok.com/tag/spu?refer=embed">#spu</a> <a target="_blank" title="♬ original sound - Hellomello - Hellomellooo" href="https://www.tiktok.com/music/original-sound-Hellomello-7477157015078308624?refer=embed">♬ original sound - Hellomello - Hellomellooo</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>',
      status: "Approved",
    },
    {
      topic: "Ex Topic #1 ",
      description: "Description Support Topic",
      embed:
        '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@sripatum.spu/video/7368684229170957576" data-video-id="7368684229170957576" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@sripatum.spu" href="https://www.tiktok.com/@sripatum.spu?refer=embed">@sripatum.spu</a> <p>สาย IT ต้องห้ามพลาด‼️ คณะเทคโนฯ มัดรวมความรู้ จัดเต็มอัดแน่นมาให้น้องๆ แล้วว ถ้าเรื่อง IT มันใช่ มาสมัครเป็น DEK IT SPU ได้เลย #คณะเทคโนโลยีสารสนเทศ #มหาวิทยาลัยศรีปทุม #SPU #SripatumUniversity #Dek67 #TCAS67 #TGAT67 #TPAT67</p> <a target="_blank" title="♬ เสียงต้นฉบับ  - Sripatum University SPU" href="https://www.tiktok.com/music/เสียงต้นฉบับ-Sripatum-University-SPU-7368684324280896257?refer=embed">♬ เสียงต้นฉบับ  - Sripatum University SPU</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>',
      status: "Waiting",
    },
    // {
    //   topic: "Ex Topic #2 ",
    //   description: "Description Support Topic",
    //   embed:
    //     '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@it_spu/video/7381301983308795144" data-video-id="7381301983308795144" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@it_spu" href="https://www.tiktok.com/@it_spu?refer=embed">@it_spu</a> เปิดโลกไซเบอร์!!!! ชมรม Cyber Club SPU คณะเทคโนโลยีสารสนเทศ พาไปสัมผัสประสบการณ์จริง @RPCA Cyber Club ชมรมไซเบอร์โรงเรียนนายร้อยตำรวจ  โดยมี พี่ๆจากโรงเรียนนายร้อยตำรวจพาทัวร์และให้ความรู้ -ได้เรียนรู้เทคโนโลยีล้ำสมัยที่ใช้ในงานด้านไซเบอร์ -ได้พบปะพูดคุยกับผู้เชี่ยวชาญด้านไซเบอร์ -ได้เรียนรู้กลยุทธ์การป้องกันภัยไซเบอร์ ทั้งนี้ ยังได้สร้างเครือข่ายกับนักศึกษาและผู้เชี่ยวชาญด้านไซเบอร์อีกด้วย <a title="itspu" target="_blank" href="https://www.tiktok.com/tag/itspu?refer=embed">#ITSPU</a> <a title="คณะเทคโนโลยีสารสนเทศ" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%84%E0%B9%82%E0%B8%99%E0%B9%82%E0%B8%A5%E0%B8%A2%E0%B8%B5%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%A8?refer=embed">#คณะเทคโนโลยีสารสนเทศ</a> <a title="มหาวิทยาลัยศรีปทุม" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%9B%E0%B8%97%E0%B8%B8%E0%B8%A1?refer=embed">#มหาวิทยาลัยศรีปทุม</a>  <a title="เรียนกับตัวจริงประสบการณ์จริง" target="_blank" href="https://www.tiktok.com/tag/%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%87%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%87?refer=embed">#เรียนกับตัวจริงประสบการณ์จริง</a> <a title="dekspu" target="_blank" href="https://www.tiktok.com/tag/dekspu?refer=embed">#dekspu</a> <a target="_blank" title="♬ Nasty x Naughty Girl - Jacobdior" href="https://www.tiktok.com/music/Nasty-x-Naughty-Girl-7367898047356865322?refer=embed">♬ Nasty x Naughty Girl - Jacobdior</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>',
    //   status: "Waiting",
    // },
  ];

  const [selectedShowTiktok, setselectedShowTiktok] = useState([]);
  // console.log(showTiktok);
  const handleShowTiktok = async () => {
    try {
      const res = await Axios.get(`${API_URL}/studentShowTiktok`, {
        withCredentials: true,
      });
      if (res.status === 200) {
        //  setShowTiktok(res.data);
      } else {
        alert(`Error to get *ShowTiktok, [Check/Log]`);
        return;
      }
    } catch (err) {
      alert(`Internal server ${err.message}`);
    }
  };

  const handleselectedShowTiktok = async () => {
    try {
      const res = await Axios.get(`${API_URL}/selectedShowTiktok`, {
        withCredentials: true,
      });
      if (res.status === 200) {
        setselectedShowTiktok(res.data);
        setNewSelect(res.data);
      } else {
        alert(`Error to get *Showcase, [Check/Log]`);
        return;
      }
    } catch (err) {
      alert(`Internal server ${err.message}`);
    }
  };

  useEffect(() => {
    document.title = "Showcase (Tiktok) | Admin";
    handleShowTiktok();
    handleselectedShowTiktok();
  }, []);

  // Post *Selected ShowTiktok
  const [newSelect, setNewSelect] = useState([]);
  // console.log(newSelect)

  //  const handleNewSelect = (newItem) => {
  //    const isAlreadySelected = newSelect.some(
  //      (selected) => selected.id === newItem.id
  //    );

  //    if (isAlreadySelected) {
  //      // ถ้าเลือกซ้ำให้ลบออกจาก newSelect
  //      setNewSelect(newSelect.filter((selected) => selected.id !== newItem.id));
  //    } else {
  //      if (newSelect.length < 3) {
  //        // ถ้ายังไม่ครบ 3 อัน ให้เพิ่มเข้าไป
  //        setNewSelect([...newSelect, newItem]);
  //      } else {
  //        alert(`Select only 3 Showcase for 'Show'`);
  //      }
  //    }
  //  };

  const handleSaveNewSelect = async () => {
    try {
      const res = await Axios.post(
        `${API_URL}/selectedShowTiktok`,
        [newSelect],
        { withCredentials: true }
      );
      if (res.status === 200) {
        alert(`Save New "Selected Showcase" Sueccessful.`);
        location.reload();
      } else {
        alert(`Save New "Selected Showcase" Failed.`);
      }
    } catch (err) {
      alert(`Internal server error: ${err.message}`);
    }
  };

  // Put *Showcase
  const [oldInfo, setOldInfo] = useState([]);
  const [newTopic, setNewTopic] = useState("");
  const [newEmbed, setNewEmbed] = useState("");

  const handlePutShowcase = async () => {
    try {
      const updatedTopic = newTopic.trim() ? newTopic : oldShowTiktok.topic;
      const updatedEmbed = newEmbed.trim() ? newEmbed : oldShowTiktok.embed;

      const res = await Axios.put(
        `${API_URL}/studentShowTiktok/${oldShowTiktok.id}`,
        { topic: updatedTopic, embed: updatedEmbed },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.status === 200) {
        alert(`Edit Showcase (id: ${oldShowTiktok.id}) Successful.`);
        location.reload();
      } else {
        alert(`Error to get *Showcase, [Check/Log]`);
        return;
      }
    } catch (err) {
      alert(`Internal server ${err.message}`);
    }
  };

  // Put Status (Approved)
  const [approveItem, setApproveItem] = useState([]);

  // Delete *Showcase
  const [delInfo, setDelInfo] = useState([]);

  // HANDLE *CANCEL MODAL
  const handleClosedModal = () => {
    document.getElementById("topic").value = "";
    document.getElementById("description").value = "";
    document.getElementById("image").value = "";
  };

  // Filter - Sub Menu [Status]
  const [filter, setFilter] = useState("All");
  const filteredShowTiktok = showTiktok.filter(
    (item) => filter === "All" || item.status === filter
  );

  // Load Tiktok
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [showTiktok]);

  return (
    <main className="a-ShowTiktok-container">
      <section className="top-container">
        <h1 className="topic">Showcase (Tiktok)</h1>
        <hr />

        <section className="fil-save-select-container">
          <section className="filter-container">
            <button
              className={`btn btn-all
                ${filter === "All" ? "active" : ""}
              `}
              onClick={() => setFilter("All")}
            >
              All
            </button>
            <button
              className={`btn btn-approved
                ${filter === "Approved" ? "active" : ""}
              `}
              onClick={() => setFilter("Approved")}
            >
              Approved
            </button>
            <button
              className={`btn btn-waiting
                ${filter === "Waiting" ? "active" : ""}
              `}
              onClick={() => setFilter("Waiting")}
            >
              Waiting
            </button>
          </section>

          <section className="save-select-add-new-container">
            <button
              data-bs-toggle="modal"
              data-bs-target="#modal-add-new"
              className="btn btn-add-new"
            >
              Add New
            </button>
            <button
              data-bs-toggle="modal"
              data-bs-target="#modal-save-select"
              className="btn btn-save-select"
            >
              Save Select
            </button>
          </section>
        </section>
      </section>

      <article className="content-container row m-0">
        {filteredShowTiktok.map((ShowTiktokItem, idx) => (
          <section key={idx} className="col-sm-12 col-md-3">
            <section
              className="content-card"
            >
              <section
                className="content-tiktok"
                key={idx}
                dangerouslySetInnerHTML={{ __html: ShowTiktokItem.embed }}
              />

              <section className="text-container">
                {ShowTiktokItem.status === "Approved" ? (
                  <span
                    className={`status
                        ${ShowTiktokItem.status === "Approved" ? "Approved" : ""}
                      `}
                  >
                    <i class="bi bi-check-circle-fill"></i>
                    {ShowTiktokItem.status}
                  </span>
                ) : (
                  <span
                    className={`status
                        ${ShowTiktokItem.status === "Waiting" ? "Waiting" : ""}
                      `}
                    data-bs-toggle="modal"
                    data-bs-target="#modal-approve"
                  >
                    <i className="bi bi-clock-fill"></i>
                    {ShowTiktokItem.status}
                  </span>
                )}
                <h1 className="topic">{ShowTiktokItem.topic}</h1>
                <p className="desc">{ShowTiktokItem.description}</p>
              </section>
              
              <section className="edit-del-container">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#modal-update"
                  className="btn btn-update"
                  // onClick={() => setOldInfo(showcaseItem)}
                >
                  Update
                </button>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#modal-delete"
                  className="btn btn-del"
                  // onClick={() => setDelInfo(showcaseItem)}
                >
                  Delete
                </button>
              </section>

              {/* <section onClick={() => handleNewSelect(ShowTiktokItem)}>
                  <section className="content-text">
                    <p className="student-id">
                      ID - {ShowTiktokItem.studentID}
                    </p>
                    <h1 className="topic">{ShowTiktokItem.topic}</h1>
                    <p className="desc">{ShowTiktokItem.description}</p>
                  </section>

                  <section className="content-btn">
                    <button
                      className="btn btn-edit"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-edit"
                      onClick={(e) => [
                        e.stopPropagation(),
                        setOldShowTiktok(ShowTiktokItem),
                      ]}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-delete"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-delete"
                      onClick={(e) => [
                        e.stopPropagation(),
                        setDelInfo(ShowTiktokItem),
                      ]}
                    >
                      Delete
                    </button>
                  </section>
                </section> */}
            </section>
          </section>
        ))}
      </article>

      {/* Modal - Add *Showcase */}
      <Modal
        modalID="modal-add-new"
        modalHeaderStyle="d-none"
        modalFooterStyle="d-none"
        modalBodyContent={
          <form className="form">
            <h1 className="topic">Showcase</h1>

            {/* Topic */}
            <div className="input-box">
              <label htmlFor="topic" className="mb-2">
                * Topic
              </label>
              <input
                type="text"
                name="topic"
                id="topic"
                className="form-control mb-3"
                placeholder="ex. showcase #1"
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>

            {/* Description */}
            <div className="input-box">
              <label htmlFor="description" className="mb-2">
                * Description
              </label>
              <textarea
                type="text"
                name="description"
                id="description"
                className="form-control mb-3"
                placeholder="type description..."
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <section className="btn-container">
              <button
                type="button"
                data-bs-dismiss="modal"
                onClick={handleClosedModal}
                className="btn btn-cancel"
              >
                Cancel
              </button>

              <button
                type="button"
                // onClick={handlePostShowcase}
                className="btn btn-add"
              >
                Add New
              </button>
            </section>
          </form>
        }
      />

      {/* Modal - Update *Showcase */}
      <Modal
        modalID="modal-update"
        modalHeaderStyle="d-none"
        modalFooterStyle="d-none"
        modalBodyContent={
          <form className="form">
            <h1 className="topic">Showcase</h1>

            {/* Topic */}
            <div className="input-box">
              <label htmlFor="topic" className="mb-2">
                * Topic
              </label>
              <input
                type="text"
                name="topic"
                id="topic"
                className="form-control mb-3"
                placeholder={oldInfo.topic}
                onChange={(e) => setNewTopic(e.target.value)}
              />
            </div>

            {/* Description */}
            <div className="input-box">
              <label htmlFor="description" className="mb-2">
                * Description
              </label>
              <textarea
                type="text"
                name="description"
                id="description"
                className="form-control mb-3"
                placeholder={oldInfo.description}
                onChange={(e) => setNewDescription(e.target.value)}
              ></textarea>
            </div>

            <section className="btn-container">
              <button
                type="button"
                data-bs-dismiss="modal"
                onClick={handleClosedModal}
                className="btn btn-cancel"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handlePutShowcase}
                className="btn btn-update"
              >
                Update
              </button>
            </section>
          </form>
        }
      />

      {/* Modal - Delete *Showcase */}
      <ModalDel
        modalDelID="modal-delete"
        modalDelTitle="(Student) Showcase"
        modalDelContent={delInfo}
        modalDelPath="studentShowcase"
      />
      
      {/* Modal *Approve */}
      <ModalApprove approveItem={approveItem} approvePath="studentShowcase" />
    </main>
  );
};

export default A_ShowTiktok;
