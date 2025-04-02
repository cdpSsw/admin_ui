import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/pagination";

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

const A_Tools = ({ id }) => {
  const tools = [
    {
      img1: ev1,
      img2: ev2,
      img3: ev3,
      img4: sc1,
      name: "Tool Name #1",
      quantity: 20,
      available: 20,
    },
    {
      img1: ev2,
      img2: ev1,
      img3: ev2,
      img4: ev3,
      name: "Tool Name #2",
      quantity: 20,
      available: 20,
    },
    {
      img1: ev3,
      img2: ev1,
      img3: ev2,
      img4: ev3,
      name: "Tool Name #3",
      quantity: 20,
      available: 20,
    },
    {
      img1: sc1,
      img2: ev1,
      img3: ev2,
      img4: ev3,
      name: "Tool Name #1",
      quantity: 20,
      available: 20,
    },
    {
      img1: sc2,
      img2: ev1,
      img3: ev2,
      img4: ev3,
      name: "Tool Name #1",
      quantity: 20,
      available: 20,
    },
    {
      img1: sc3,
      img2: ev1,
      img3: ev2,
      img4: ev3,
      name: "Tool Name #1",
      quantity: 20,
      available: 20,
    },
  ];

  // Overlay
  const [selectedimg1, setSelectedimg1] = useState(null);

  // HANDLE *CANCEL MODAL
  const handleClosedModal = () => {
    document.getElementById("topic").value = "";
    document.getElementById("description").value = "";
    document.getElementById("image").value = "";
  };

  useEffect(() => {
    document.title = "tools (Files) | Admin";
    // handleGettools();
  }, []);

  // Filter - Sub Menu [available]
  const [filter, setFilter] = useState("All");
  const filteredtools = tools.filter(
    (item) => filter === "All" || item.available === filter
  );

  return (
    <main className="a-tools-container">
      <section className="top-container">
        <h1 className="name">Tools Management</h1>
        <section className="add-new-container">
          <button
            data-bs-toggle="modal"
            data-bs-target="#modal-add-new"
            className="btn btn-add-new"
          >
            Add New
          </button>
        </section>
      </section>
      <hr />

      <article className="content-container row m-0">
        {tools.map((toolsItem, idx) => (
          <section key={idx} className="col-sm-6 col-md-3">
            <section className="content-card">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                centeredSlides={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[ Autoplay, Pagination ]}
                className="swiper"
              >
                {[
                  toolsItem.img1,
                  toolsItem.img2,
                  toolsItem.img3,
                  toolsItem.img4,
                ].map((img, i) => (
                  <SwiperSlide key={i}>
                    <img src={img} alt={`Slide ${i}`} className="swiper-img" />
                  </SwiperSlide>
                ))}
              </Swiper>

              <section className="text-container">
                {toolsItem.available > 0 
                ? (
                    <p className="available">Available {toolsItem.available}/{toolsItem.quantity}</p>
                ) 
                : (
                    <p className="out-of-stock">Out Of Stock</p>
                )
                }
                <h1 className="name">{toolsItem.name}</h1>
              </section>
            </section>
          </section>
        ))}
      </article>

      {/* Modal - Add *tools */}
      <Modal
        modalID="modal-add-new"
        modalHeaderStyle="d-none"
        modalFooterStyle="d-none"
        modalBodyContent={
          <form className="form">
            <h1 className="name">tools</h1>

            {/* name */}
            <div className="input-box">
              <label htmlFor="name" className="mb-2">
                * name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control mb-3"
                placeholder="ex. tools #1"
                onChange={(e) => setname(e.target.value)}
              />
            </div>

            {/* quantity */}
            <div className="input-box">
              <label htmlFor="quantity" className="mb-2">
                * quantity
              </label>
              <textarea
                type="text"
                name="quantity"
                id="quantity"
                className="form-control mb-3"
                placeholder="type quantity..."
                onChange={(e) => setquantity(e.target.value)}
              ></textarea>
            </div>

            {/* Image */}
            <div className="input-box">
              <label htmlFor="image" className="mb-2">
                * Image
              </label>
              <input
                type="file"
                name="image"
                id="image"
                className="form-control mb-3"
                onChange={(e) => handleimg1(e.target.files[0])}
              />
            </div>

            {/* {previewImage ? (
              <img1 src={previewImage} className="preview-image" />
            ) : null} */}

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
                // onClick={handlePosttools}
                className="btn btn-add"
              >
                Add New
              </button>
            </section>
          </form>
        }
      />

      {/* Modal - Update *tools */}
      <Modal
        modalID="modal-update"
        modalHeaderStyle="d-none"
        modalFooterStyle="d-none"
        modalBodyContent={
          <form className="form">
            <h1 className="name">tools</h1>

            {/* name */}
            <div className="input-box">
              <label htmlFor="name" className="mb-2">
                * name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control mb-3"
                // placeholder={oldInfo.name}
                onChange={(e) => setNewname(e.target.value)}
              />
            </div>

            {/* quantity */}
            <div className="input-box">
              <label htmlFor="quantity" className="mb-2">
                * quantity
              </label>
              <textarea
                type="text"
                name="quantity"
                id="quantity"
                className="form-control mb-3"
                // placeholder={oldInfo.quantity}
                onChange={(e) => setNewquantity(e.target.value)}
              ></textarea>
            </div>

            {/* Image */}
            <div className="input-box">
              <label htmlFor="image" className="mb-2">
                * Image
              </label>
              <input
                type="file"
                name="image"
                id="image"
                className="form-control mb-3"
                onChange={(e) => handleNewimg1(e.target.files[0])}
              />
            </div>

            {/* {previewImage ? (
              <img1 src={previewImage} className="preview-image" />
            ) : null}

            {oldInfo ? (
              newPreviewImage ? (
                <img1
                  src={newPreviewImage}
                  alt="New Preview"
                  className="preview-image"
                />
              ) : (
                <img1
                  className="preview-image"
                  // src={`${API_URL}/images/stu_tools/${oldInfo.image}`}
                  src={oldInfo.img1}
                  alt={oldInfo.name}
                />
              )
            ) : null} */}

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
                // onClick={handlePuttools}
                className="btn btn-update"
              >
                Update
              </button>
            </section>
          </form>
        }
      />

      {/* Modal - Delete *tools */}
      <ModalDel
        modalDelID="modal-delete"
        modalDelTitle="(Student) tools"
        // modalDelContent={delInfo}
        modalDelPath="studenttools"
      />

      {/* Modal *Approve */}
      {/* <ModalApprove approveItem={approveItem} approvePath="studenttools" /> */}

      {/* {selectedimg1 && (
        <div className="overlay" onClick={() => setSelectedimg1(null)}>
          <div className="overlay-content">
            <span className="close-btn" onClick={() => setSelectedimg1(null)}>
              &times;
            </span>
            <img1 src={selectedimg1} alt="Preview" className="original-img1" />
          </div>
        </div>
      )} */}
    </main>
  );
};

export default A_Tools;
