import React, { useState } from "react";

// Components
import Modal from "../../EComponents/Modal";

import J from "../../DAssets/person/j.png";
import N from "../../DAssets/person/n.png";
import B from "../../DAssets/person/b.png";
import P from "../../DAssets/person/p.png";
import { i } from "framer-motion/client";

const A_Team = () => {
  const [selectedInfo, setSelectedInfo] = useState([]);
  const teams = [
    {
      image: J,
      name: "ผู้ช่วยศาสตราจารย์ จิโรจน์ จริตควร",
      position: "หัวหน้าสาขาวิชาวิศวกรรมคอมพิวเตอร์",
      education: [
        "ปริญญาโท: M.Eng. (Microelectronics) Asian Institute of Technology, Thailand",
        "ปริญญาตรี: วิศวกรรมศาสตรบัณฑิต (วิศวกรรมไฟฟ้า) มหาวิทยาลัยศรีปทุม",
      ],
      expertise: [
        "Hardware. Digital.& analog circuit.design",
        "IoT (Embedded system)",
        "Robotics and Hardware Interfaces",
      ],
      experience: [
        {
          location: "คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม",
          position: "หัวหน้าสาขาวิศวกรรมคอมพิวเตอร์ (2553 – ปัจจุบัน)",
        },
        {
          location: "คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม",
          position: "อาจารย์ประจำ (2551 – 2552)",
        },
        {
          location: "คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม",
          position: "หัวหน้าสาขาวิศวกรรมคอมพิวเตอร์ (2547 – 2551)",
        },
        {
          location: "คณะสารสนเทศศาสตร์ มหาวิทยาลัยศรีปทุม",
          position: "ตำแหน่ง: อาจารย์ประจำ (2543 – 2547)",
        },
      ],
      tel: "0 2579 1111 ต่อ 2197",
      email: "chirot.ch@spu.ac.th",
      website: "https://chirotch.wixsite.com/chirot-charitkhuan",
    },
    {
      image: B,
      name: "ดร.สุรชัย ทองแก้ว",
      position: "อาจารย์ประจำ",
      education: [
        "ปริญญาเอก: Ph.D. (Communication and Integrated Systems), Tokyo Institute of Technology, Japan",
        "ปริญญาโท: M.E. (Microelectronics), Asian Institute of Technology, Thailand",
        "ปริญญาตรี: B.E. (Computer Engineering), Sripatum University, Thailand",
      ],
      expertise: [
        " IoT Solution",
        "Hardware Programming",
        "Processor design and Computer Architecture",
        "Embedded systems",
      ],
      experience: [
        {
          location: "คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม",
          position:
            "ตำแหน่ง: หัวหน้าสาขาสาขาวิชาเทคโนโลยีสารสนเทศและการสื่อสาร (พ.ศ.2565 – ปัจจุบัน)",
        },
        {
          location: "คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม",
          position:
            "อาจารย์ประจำสาขาวิชาวิศวกรรมคอมพิวเตอร์ (พ.ศ.2543 – ปัจจุบัน)",
        },
        {
          location: "คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม",
          position: "ผู้ช่วยคณบดีฝ่ายกิจการนักศึกษา (พ.ศ.2549 -2553)",
        },
      ],
      research: [
        "ปฏิภาณ ศรีสวัสดิ์, สุรชัย ทองแก้ว. “อินเทอร์เน็ตประสานสรรพสิ่งควบคุมน้ำ และปุ๋ยในฟาร์มเมล่อนคิโมจิ.”. (2563). รายงานสืบเนื่องจากการประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2020). ครั้งที่ 15. มหาวิทยาลัยศรีปทุม.หน้า 1643-1652.",
        "นริศรา จิตต์เที่ยง, สรวีย์ นีรนาถภูวดล, ภาสกร พรสี่, นิมิตร ทักษวิทยาพงศ์, สุรชัย ทองแก้ว. “อุปกรณ์เสริมตรวจจับวัตถุและช่วยเหลือการเดินทางสําหรับผู้พิการทางสายตา.”. (2562). รายงานสืบเนื่องจากการประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2019). ครั้งที่ 14. มหาวิทยาลัยศรีปทุม.หน้า 1828-1837.",
        "ยุทธศักดิ์ ฝูงพิลา, ศรัณย์ โนราช, ณัฐนันท์ โมราสุข, ผิน ฉัตรแก้วมณี, สุรชัย ทองแก้ว. “ระบบจัดการเวอร์ชั่นของอุปกรณ์อินเทอร์เน็ตในทุกสรรพสิ่งผ่านบริการคลาวด์.”. (2562). รายงานสืบเนื่องจากการประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2019). ครั้งที่ 14. มหาวิทยาลัยศรีปทุม.หน้า 1857-1865.",
        "อภิสิทธิ์ หมัดแสง, พุฒิสรรค์ แหสกุล, อนุรักษ์ แสงคํา, ผิน ฉัตรแก้วมณี, สุรชัย ทองแก้ว. “ระบบเฝ้าสังเกตอาการง่วงด้วยการประมวลผลด้วยภาพ.”. (2562). รายงานสืบเนื่องจากการประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2019). ครั้งที่ 14. มหาวิทยาลัยศรีปทุม.หน้า 1908-1917.",
        "ณัฐวุฒิ กอแก้วปฐมกุล, ธนพัฒน์ เด่นไกรรักษ์, กฤชบ์พัทธ์ สกุลชินสีห์, ผิน แก้วฉัตรมณี, สุรชัย ทองแก้ว. “ระบบวิเคราะห์กิจวัตรประจําวันสําหรับผ้สูงอาย.”. (2561). รายงานสืบเนื่องจากการประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2018). ครั้งที่ 13. มหาวิทยาลัยศรีปทุม.หน้า 2186-2194.",
        "สุรชัย ทองแก้ว, จิโรจน์ จริตควร และสัลยุทธ์ สว่างวรรณ. (2561). ระบบสมองกลฝังตัวเพื่อการประหยัดพลังงานเครื่องปรับอากาศแบบแยกส่วน โดยการควบคุมความเย็นสะสมของลมจ่ายออก. การประชุมวิชาการทางวิศกรรมไฟฟ้า ครั้งที่ 41, หน้า 166-169.",
        "วรพฤกษ์ คงเจริญ, วีรวัฒน์ แย้มโสม, นันทวัฒน์ ฮาบละคร,จิโรจน์ จริตควร,สุรชัย ทองแก้ว. “ระบบควบคุมการให้น้ำให้ปุ๋ยสําหรับการทําสวนกล้วยหอมทอง.”. (2561). รายงานสืบเนื่องจากการประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2018). ครั้งที่ 13. มหาวิทยาลัยศรีปทุม. หน้า 2297-2306.",
        "ไพวรรณ มะละ, ปราลี มณีรัตน์, สุขสวัสดี ณัฏฐวุฒิสิทธิ์, และสุรชัย ทองแก้ว. (2561). การพัฒนาระบบ วิเคราะห์ข้อมูลเตียงลมอัจฉริยะเพื่อลดอาการเกิดโรคแผลกดทับ. Sripatum Review of Science and Technology, 10(1), หน้า 88-101.",
        "วีรยุทธ แก้วเกษ, จิโรจน์ จริตควร, และสุรชัย ทองแก้ว. (2560). ระบบ IOT และฐานข้อมูลสำหรับการทดสอบปัจจัยการเจริญเติบโตของพืช. การประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม ครั้งที่ 12 ประจำปี 2560 (SPUCON2017), วันที่ 14 ธันวาคม 2560, หน้า 2207-2216",
        "กฤษฎา พรหมมา, ลักษมี เหมนรากร, สุรชัย ทองแก้ว, และจิโรจน์ จริตควร. (2560). อินเตอร์เน็ตทุกสรรพสิ่งสำหรับการควบคุมประสิทธิภาพของยาโดยการตรวจสอบอุณหภูมิ. การประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม ครั้งที่ 12 ประจำปี 2560 (SPUCON2017), วันที่ 14 ธันวาคม 2560, หน้า 2226-2236",
        "S. Thongkaew and C. Charitkuan .(2018). IoT for Energy Saving of Split-Type Air Conditioner by Controlling Supply Air and Area Temperature, .22nd International Computer Science and Engineering Conference (ICSEC), pp. 1-4, doi: 10.1109/ICSEC.2018.8712656.",
      ],
      tel: "0 2579 1111 ต่อ 2212",
      email: ["surachai.th@spu.ac.th", "surachait@hotmail.com"],
      website: "https://surachaith.wixsite.com/dr-bird",
    },
    {
      image: N,
      name: "อาจารย์นิมิตร ทักษวิทยาพงศ์",
      position: "หัวหน้าสาขาวิชาวิศวกรรมคอมพิวเตอร์",
      education: [
        "ปริญญาโท: M.Eng. (Microelectronics and Embedded Systems ) Asian Institute of Technology, Thailand",
        "ปริญญาตรี : วิศวกรรมศาสตรบัณฑิต (วิศวกรรมคอมพิวเตอร์) มหาวิทยาลัยศรีปทุม",
      ],
      expertise: [
        "Internet of Thing (IoT)",
        "Embedded system (hardware/software)",
        "Application development (web/mobile)",
      ],
      experience: [
        {
          location: "คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม",
          position:
            "ตำแหน่ง: อาจารย์ประจำสาขาวิศวกรรมคอมพิวเตอร์ (พ.ศ.2549 – ปัจจุบัน)",
        },
      ],
      research: [
        "นายการันต์ เศรษฐี, นายชนกันต์ อิ่มใจ, นิมิตร ทักษวิทยาพงศ์, ภูริลาภ จุฑาวัชระพล “แอปพลิเคชันดูแลสุขภาพด้วยนาฬิกาอัจฉริยะ” (2563) รายงานสืบเนื่อง (Proceedings) การประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2019) ครั้งที่ 15 มหาวิทยาลัยศรีปทุม. หน้า 1585-1595",
        "นพดล ชะนางวัลย์ , ณรงค์ชัย ชาติชาญชัย , นิรวิทธ์ อินดี, นิมิตร ทักษวิทยาพงศ์, ผศ.จิโรจน์ จริตควร “การพัฒนาระบบควบคุมอุณหภูมิอัจฉริยะสําหรับฟาร์มเลี้ยงไก่” (2562) รายงานสืบเนื่อง (Proceedings) การประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2019) ครั้งที่ 14 มหาวิทยาลัยศรีปทุม หน้า 1818-1827",
        "นริศรา จิตต์เท่ียง , สรวีย์ นีรนาถภูวดล , ภาสกร พรสี่, นิมิตร ทักษวิทยาพงศ์, ดร.สุรชัย ทองแก้ว “อุปกรณ์เสริมตรวจจับวัตถุและช่วยเหลือการเดินทางสําหรับผู้พิการทางสายตา” (2562) รายงานสืบเนื่อง (Proceedings) การประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2019) ครั้งที่ 14 มหาวิทยาลัยศรีปทุม หน้า 1828-1837",
        "ดุสิตา สีตาชัย, เชิดศักดิ์ ดงบัง, ธีรพงษ์ คงประเสริฐ, ดร.สุรชัย ทองแก้ว, นิมิตร ทักษวิทยาพงศ์ “อินเทอร์เน็ตของทุกสรรพสิ่งสำหรับตรวจสอบสุขภาพจิตกลุ่มเสี่ยงภาวะโรคซึมเศร้า” (2561) รายงานสืบเนื่อง (Proceedings) การประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2018) ครั้งที่ 13 มหาวิทยาลัยศรีปทุม หน้า 2195-2204",
        "นิมิตร ทักษวิทยาพงศ์, กันยารัตน์ ศรีวิสทิยกุล, กฤษณ์ ไชยวงศ์ “อินเตอร์เน็ตของทุกสรรพสิ่งสำหรับระบบเพิ่มประสิทธิภาพผลผลิตและประหยัดพลังงานส าหรับฟาร์มกล้วยหอมทอง” (2561) รายงานสืบเนื่อง (Proceedings) การประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2018) ครั้งที่ 13 มหาวิทยาลัยศรีปทุม หน้า 2236-2246",
        "ผิน ฉัตรแก้วมณี, นิมิตร ทักษวิทยาพงศ์ “อินเตอร์เน็ตของทุกสรรพสิ่งสําหรับโรงเพาะเห็ดอัจฉริยะ” (2560) รายงานสืบเนื่อง (Proceedings) การประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2017) ครั้งที่ 12 มหาวิทยาลัยศรีปทุม หน้า 2147-2156",
        "กนกพนธ์ นิลสวัสดิ์, วรากร ถาวร, ผิน ฉัตรแก้วมณี, นิมิตร ทักษวิทยาพงศ์ “ระบบลานจอดรถอัจฉริยะ” (2560) รายงานสืบเนื่อง (Proceedings) การประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2017) ครั้งที่ 12 มหาวิทยาลัยศรีปทุม หน้า 2198-2206",
        "บุญญาภา หรรษากานต์, จักรพงษ์ จันทร์ประทักษ์, นิมิตร ทักษวิทยาพงศ์, ผิน ฉัตรแก้วมณี “อินเตอร์เน็ตทุกสรรพสิ่งสําหรับถังขยะอัจฉริยะ” (2560) รายงานสืบเนื่อง (Proceedings) การประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2017) ครั้งที่ 12 มหาวิทยาลัยศรีปทุม หน้า 2217-2225",
        "นิพิชญ์ นิธิสุภา, เมธัส ชูจิตอธิคม, ประภาพร โปธาคํา, นิมิตร ทักษวิทยาพงศ์, ผิน ฉัตรแก้วมณี “อินเตอร์เน็ตในทุกสรรพส่ิงสําหรับระบบบันทึกการดิ้นของทารกในครรภ์” (2559) รายงานสืบเนื่อง (Proceedings) การประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2016) ครั้งที่ 11 มหาวิทยาลัยศรีปทุม หน้า 1417-1427",
        "ณัฐชากร คำยอด, ปริญญา แสนจันทร์, มนัสนันท์ หรั่งยิ้ม, สุรชัย ทองแก้ว, นิมิตร ทักษวิทยาพงศ์ “การวิเคราะห์ความอับชื้นเพื่อเปลี่ยนการใช้งานของผ้าอ้อมสำเร็จรูปสำหรับผู้สูงอายุ” (2559) รายงานสืบเนื่อง (Proceedings) การประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2016) ครั้งที่ 11 มหาวิทยาลัยศรีปทุม หน้า 1428-1437",
        "มานพ เกษประดิษฐ์, พิชัย แนวดี, สุรชัย ทองแก้ว, จิโรจน์ จริตควร, นิมิตร ทักษวิทยาพงศ์ “ระบบอินเตอร์เน็ตในทุกสรรพสิ่งสําหรับควบคุมน้ำในนาข้าว” (2559) รายงานสืบเนื่อง (Proceedings) การประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2016) ครั้งที่ 11 มหาวิทยาลัยศรีปทุม หน้า 1602-1612",
      ],
      tel: "0 2579 1111 ต่อ 2212",
      email: "nimit.tu@spu.ac.th",
      website: "https://nimittu.wixsite.com/spu-nimit",
    },
    {
      image: P,
      name: "อาจารย์ภูริลาภ จุฑาวัชระพล",
      position: "อาจารย์ประจำ",
      education: [
        "ปริญญาโท: วิทยาศาสตรมหาบัณฑิต (เทคโนโลยีสารสนเทศ) คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม",
        "ปริญญาตรี: วิศวกรรมศาสตรบัณฑิต (วิศวกรรมไฟฟ้า) มหาวิทยาลัยศรีปทุม",
        "ปริญญาตรี: วิทยาศาสตรบัณฑิต (วิทยาการคอมพิวเตอร์) คณะสารสนเทศศาสตร์ มหาวิทยาลัยศรีปทุม",
        "ประกาศนียบัตร: Java Certification",
        "ประกาศนียบัตร: Web 2.0 Certification",
      ],
      expertise: [
        "Programming",
        "Mobile Developer",
        "Web Programming",
        "Database System",
      ],
      experience: [
        {
          location: "คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม",
          position:
            "ตำแหน่ง: อาจารย์ประจำสาขาวิชาวิศวกรรมคอมพิวเตอร์ (พ.ศ.2544-ปัจจุบัน)",
        },
      ],
      tel: "0 2579 1111 ต่อ 2212",
      email: "purilarp.ch@spu.ac.th",
      website: "https://purilarpch.wixsite.com/myprofile",
    },
  ];

  const [image, setImage] = useState();
  const [previewImage, setPreviewImage] = useState();
  const [position, setPosition] = useState("");
  const [name, setName] = useState("");
  const [education, setEducation] = useState([""]);
  const [expertise, setExpertise] = useState([""]);
  const [expLocation, setExpLocation] = useState([""]);
  const [expPosition, setExpPosition] = useState([""]);
  const [research, setResearch] = useState([""]);
  const [tel, setTel] = useState([""]);
  const [email, setEmail] = useState([""]);
  const [website, setWebsite] = useState([""]);

  const handleImage = (e) => {
    setImage(e);
    setPreviewImage(URL.createObjectURL(e));
  };

  // ฟังก์ชันที่ใช้ร่วมกันสำหรับการเปลี่ยนค่าใน array ต่างๆ
  const handleFieldChange = (index, value, type) => {
    const updatedFields =
      type === "tel"
        ? [...tel]
        : type === "email"
        ? [...email]
        : type === "website"
        ? [...website]
        : type === "education"
        ? [...education]
        : type === "expertise"
        ? [...expertise]
        : type === "experience"
        ? [...experience]
        : type === "research"
        ? [...research]
        : type === "expLocation"
        ? [...expLocation]
        : type === "expPosition"
        ? [...expPosition]
        : [];

    updatedFields[index] = value;
    type === "tel"
      ? setTel(updatedFields)
      : type === "email"
      ? setEmail(updatedFields)
      : type === "website"
      ? setWebsite(updatedFields)
      : type === "education"
      ? setEducation(updatedFields)
      : type === "expertise"
      ? setExpertise(updatedFields)
      : type === "experience"
      ? setExperience(updatedFields)
      : type === "research"
      ? setResearch(updatedFields)
      : type === "expLocation"
      ? setExpLocation(updatedFields)
      : type === "expPosition"
      ? setExpPosition(updatedFields)
      : null;
  };

  // ฟังก์ชันที่ใช้ร่วมกันสำหรับการเพิ่มค่าใน array ต่างๆ
  const handleAddField = (type) => {
    type === "tel"
      ? setTel([...tel, ""])
      : type === "email"
      ? setEmail([...email, ""])
      : type === "website"
      ? setWebsite([...website, ""])
      : type === "education"
      ? setEducation([...education, ""])
      : type === "expertise"
      ? setExpertise([...expertise, ""])
      : type === "research"
      ? setResearch([...research, ""])
      : type === "expLocation"
      ? setExpLocation([...expLocation, ""])
      : type === "expPosition"
      ? setExpPosition([...expPosition, ""])
      : null;
  };

  // ฟังก์ชันที่ใช้ร่วมกันสำหรับการลบค่าใน array ต่างๆ
  const handleDeleteField = (index, type) => {
    const updatedFields =
      type === "tel"
        ? [...tel]
        : type === "email"
        ? [...email]
        : type === "website"
        ? [...website]
        : type === "education"
        ? [...education]
        : type === "expertise"
        ? [...expertise]
        : type === "research"
        ? [...research]
        : type === "expLocation"
        ? [...expLocation]
        : type === "expPosition"
        ? [...expPosition]
        : [];

    updatedFields.splice(index, 1);
    type === "tel"
      ? setTel(updatedFields)
      : type === "email"
      ? setEmail(updatedFields)
      : type === "website"
      ? setWebsite(updatedFields)
      : type === "education"
      ? setEducation(updatedFields)
      : type === "expertise"
      ? setExpertise(updatedFields)
      : type === "research"
      ? setResearch(updatedFields)
      : type === "expLocation"
      ? setExpLocation(updatedFields)
      : type === "expPosition"
      ? setExpPosition(updatedFields)
      : null;
  };

  // Handle Cancel Button
  const handleCancel = () => {
    document.getElementById("image").value = null;
    document.getElementById("position").value = null;
    document.getElementById("name").value = null;
    setEducation([""]);
    setExpertise([""]);
    setExpLocation([""]);
    setExpPosition([""]);
    setResearch([""]);
    setTel([""]);
    setEmail([""]);
    setWebsite([""]);
    setPreviewImage(null);
  }

  return (
    <main className="a-team-container">
      <article className="top-container">
        <h1 className="topic">Teams Management</h1>
        <section className="add-new-container">
          <button
            data-bs-toggle="modal"
            data-bs-target="#modal-add"
            className="btn btn-add"
          >
            Add New
          </button>
        </section>
      </article>
      <hr />

      <article className="content-container row m-0">
        {teams.map((team, idx) => (
          <section key={idx} className="col-sm-6 col-md-3">
            <section className="content-card">
              <img src={team.image} alt={team.name} className="content-img" />

              <section className="text-container">
                <p className="position">{team.position}</p>
                <h6 className="name">{team.name}</h6>
                <div className="hr"></div>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-preview"
                  className="btn btn-edit"
                  onClick={() => setSelectedInfo(team)}
                >
                  <i className="bi bi-eye"></i>
                  Preview
                </button>
              </section>
            </section>
          </section>
        ))}
      </article>

      {/* Modal - Add New */}
      <Modal
        modalID="modal-add"
        modalHeaderStyle="d-none"
        modalFooterStyle="d-none"
        modalSize="modal-lg"
        modalBodyContent={
          <form className="form">
            <h1 className="topic">Add New *Team Member</h1>
            <div className="hr"></div>
            <article className="form-content row m-0">
              {/* Left Side */}
              <section className="input-container col-md-6">
                {/* Preview Image */}
                {previewImage ? (
                  <img
                    src={previewImage}
                    className="preview-img"
                    alt="Preview"
                  />
                ) : null}

                {/* Image */}
                <div className="input-box">
                  <label htmlFor="image" className="form-label mb-2">
                    * Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    className="form-control mb-3"
                    onChange={(e) => handleImage(e.target.files[0])}
                  />
                </div>

                {/* Positon */}
                <div className="input-box">
                  <label htmlFor="position" className="form-label mb-2">
                    * Position
                  </label>
                  <input
                    type="text"
                    id="position"
                    placeholder="enter position"
                    className="form-control mb-3"
                    onChange={(e) => setPosition(e.target.value)}
                  />
                </div>

                {/* Name */}
                <div className="input-box">
                  <label htmlFor="name" className="form-label mb-2">
                    * Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="enter name"
                    className="form-control mb-3"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Tel */}
                <div className="d-flex flex-column">
                  <label className="form-label mb-2">* Tel</label>
                  {tel.map((telValue, index) => (
                    <div
                      className="input-box d-flex align-items-start gap-2"
                      key={index}
                    >
                      <div className="flex-grow-1">
                        <input
                          type="text"
                          id={`tel-${index}`}
                          placeholder="ex. 0 2579 1111 ต่อ 2212"
                          className="form-control mb-3"
                          value={telValue}
                          onChange={(e) =>
                            handleFieldChange(index, e.target.value, "tel")
                          }
                        />
                      </div>
                      {index > 0 && (
                        <button
                          type="button"
                          className="btn btn-danger mb-3"
                          onClick={() => handleDeleteField(index, "tel")}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={() => handleAddField("tel")}
                    className="btn btn-secondary mb-4"
                  >
                    Add Tel.
                  </button>
                </div>

                {/* Email */}
                <div className="d-flex flex-column">
                  <label className="form-label mb-2">* Email</label>
                  {email.map((emailValue, index) => (
                    <div
                      className="input-box d-flex align-items-start gap-2"
                      key={index}
                    >
                      <div className="flex-grow-1">
                        <input
                          type="email"
                          id={`email-${index}`}
                          placeholder="ex. nimit.tu@spu.ac.th"
                          className="form-control mb-3"
                          value={emailValue}
                          onChange={(e) =>
                            handleFieldChange(index, e.target.value, "email")
                          }
                        />
                      </div>
                      {index > 0 && (
                        <button
                          type="button"
                          className="btn btn-danger mb-3"
                          onClick={() => handleDeleteField(index, "email")}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={() => handleAddField("email")}
                    className="btn btn-secondary mb-4"
                  >
                    Add Email.
                  </button>
                </div>

                {/* Website */}
                <div className="d-flex flex-column">
                  <label className="form-label mb-2">* Website</label>
                  {website.map((websiteValue, index) => (
                    <div
                      className="input-box d-flex align-items-start gap-2"
                      key={index}
                    >
                      <div className="flex-grow-1">
                        <input
                          type="text"
                          id={`website-${index}`}
                          placeholder="ex. https://nimittu.wixsite.com/spu-nimit"
                          className="form-control mb-3"
                          value={websiteValue}
                          onChange={(e) =>
                            handleFieldChange(index, e.target.value, "website")
                          }
                        />
                      </div>
                      {index > 0 && (
                        <button
                          type="button"
                          className="btn btn-danger mb-3"
                          onClick={() => handleDeleteField(index, "website")}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={() => handleAddField("website")}
                    className="btn btn-secondary mb-4"
                  >
                    Add Web.
                  </button>
                </div>
              </section>

              {/* Right Side */}
              <section className="input-container col-md-6">
                {/* Education */}
                <div className="d-flex flex-column">
                  <label className="form-label mb-2">* Education</label>
                  {education.map((educationValue, index) => (
                    <div
                      className="input-box d-flex align-items-start gap-2"
                      key={index}
                    >
                      <div className="flex-grow-1">
                        <textarea
                          type="text"
                          id={`education-${index}`}
                          placeholder="ex. ปริญญาตรี: วิศวกรรมศาสตรบัณฑิต (วิศวกรรมไฟฟ้า) มหาวิทยาลัยศรีปทุม"
                          className="form-control mb-3"
                          value={educationValue}
                          onChange={(e) =>
                            handleFieldChange(
                              index,
                              e.target.value,
                              "education"
                            )
                          }
                        ></textarea>
                      </div>
                      {index > 0 && (
                        <button
                          type="button"
                          className="btn btn-danger mb-3"
                          onClick={() => handleDeleteField(index, "education")}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={() => handleAddField("education")}
                    className="btn btn-secondary mb-4"
                  >
                    Add Edu.
                  </button>
                </div>

                {/* Expertise */}
                <div className="d-flex flex-column">
                  <label className="form-label mb-2">* Expertise</label>
                  {expertise.map((expertiseValue, index) => (
                    <div
                      className="input-box d-flex align-items-start gap-2"
                      key={index}
                    >
                      <div className="flex-grow-1">
                        <input
                          type="text"
                          id={`expertise-${index}`}
                          placeholder="ex. Internet of Thing (IoT)"
                          className="form-control mb-3"
                          value={expertiseValue}
                          onChange={(e) =>
                            handleFieldChange(
                              index,
                              e.target.value,
                              "expertise"
                            )
                          }
                        />
                      </div>
                      {index > 0 && (
                        <button
                          type="button"
                          className="btn btn-danger mb-3"
                          onClick={() => handleDeleteField(index, "expertise")}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={() => handleAddField("expertise")}
                    className="btn btn-secondary mb-4"
                  >
                    Add Expt.
                  </button>
                </div>

                {/* Experience - Location / Position */}
                <div>
                  <p className="topic text-start">Experience</p>
                  <div className="d-flex flex-column">
                    <label className="form-label mb-2">
                      * Location / Position
                    </label>
                    {expLocation.map((expLocationValue, index) => (
                      <div
                        className="input-box d-flex flex-column gap-2"
                        key={index}
                      >
                        {/* Location Input */}
                        <div className="mb-2">
                          <input
                            type="text"
                            id={`expLocation-${index}`}
                            placeholder="ex. Location"
                            className="form-control"
                            value={expLocationValue}
                            onChange={(e) =>
                              handleFieldChange(
                                index,
                                e.target.value,
                                "expLocation"
                              )
                            }
                          />
                        </div>

                        {/* Position Input */}
                        <div className="exp-position-box d-flex row">
                          <div
                            className={`mb-2 ${
                              index > 0 ? "col-md-9" : "col-md-12"
                            }`}
                          >
                            {/* Position Input */}
                            <input
                              type="text"
                              id={`expPosition-${index}`}
                              placeholder="ex. Position"
                              className="form-control"
                              value={expPosition[index]}
                              onChange={(e) =>
                                handleFieldChange(
                                  index,
                                  e.target.value,
                                  "expPosition"
                                )
                              }
                            />
                          </div>

                            {/* Delete Button */}
                            {index > 0 && (
                              <div className="btn-del-container col-md-3">
                                <button
                                  type="button"
                                  className="btn btn-danger mb-3"
                                  onClick={() => {
                                    handleDeleteField(index, "expLocation");
                                    handleDeleteField(index, "expPosition");
                                  }}
                                >
                                  Delete
                                </button>
                              </div>
                            )}
                        </div>
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={() => {
                        handleAddField("expLocation");
                        handleAddField("expPosition");
                      }}
                      className="btn btn-secondary mb-4"
                    >
                      Add Expt.
                    </button>
                  </div>
                </div>

                {/* Research */}
                <div className="d-flex flex-column">
                  <label className="form-label mb-2">* Research</label>
                  {research.map((researchValue, index) => (
                    <div
                      className="input-box d-flex align-items-start gap-2"
                      key={index}
                    >
                      <div className="flex-grow-1">
                        <textarea
                          type="text"
                          id={`research-${index}`}
                          placeholder="ex. นายการันต์ เศรษฐี, นายชนกันต์ อิ่มใจ, นิมิตร ทักษวิทยาพงศ์, ภูริลาภ จุฑาวัชระพล “แอปพลิเคชันดูแลสุขภาพด้วยนาฬิกาอัจฉริยะ” (2563) รายงานสืบเนื่อง (Proceedings) การประชุมวิชาการระดับชาติและนานาชาติ มหาวิทยาลัยศรีปทุม (Sripatum University Conference 2019) ครั้งที่ 15 มหาวิทยาลัยศรีปทุม. หน้า 1585-1595"
                          className="form-control mb-3"
                          value={researchValue}
                          onChange={(e) =>
                            handleFieldChange(index, e.target.value, "research")
                          }
                        ></textarea>
                      </div>
                      {index > 0 && (
                        <button
                          type="button"
                          className="btn btn-danger mb-3"
                          onClick={() => handleDeleteField(index, "research")}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={() => handleAddField("research")}
                    className="btn btn-secondary mb-4"
                  >
                    Add Res.
                  </button>
                </div>
                <div className="hr"></div>

                {/* Button */}
                <section className="btn-container">
                    <button 
                        type="button"
                        className="btn btn-cancel"
                        data-bs-dismiss="modal"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                    <button 
                        type="button"
                        className="btn btn-add"

                    >
                        Add New
                    </button>
                </section>
              </section>
            </article>
          </form>
        }
      />

      {/* Modal - Preview Info */}
      <Modal
        modalID="modal-preview"
        modalHeaderStyle="preview-topic-container"
        modalTitleStyle="preview-topic"
        modalTitle={"Information"}
        modalFooterStyle="d-none"
        modalSize="modal-lg"
        modalBodyContent={
          <article className="preview-info-container">
            <article className="preview-content row m-0">
              <section className="col-md-4">
                <img
                  src={selectedInfo.image}
                  alt={selectedInfo.name}
                  className="content-img"
                />
              </section>
              <section className="col-md-8">
                <p className="position">{selectedInfo.position}</p>
                <h6 className="name">{selectedInfo.name}</h6>

                <h6 className="edu-topic">วุฒิการศึกษา: </h6>
                {Array.isArray(selectedInfo.education) ? (
                  selectedInfo.education.map((edu, idx) => (
                    <p key={idx} className="edu">
                      {edu}
                    </p>
                  ))
                ) : (
                  <p className="edu">{selectedInfo.education}</p>
                )}

                {Array.isArray(selectedInfo.expertise) &&
                  selectedInfo.expertise.length !== 0 && (
                    <ol className="expt-list">
                      <h6 className="expt-topic">ความถนัด:</h6>
                      {selectedInfo.expertise.map((expt, idx) => (
                        <li key={idx} className="expt">
                          {expt}
                        </li>
                      ))}
                    </ol>
                  )}

                {Array.isArray(selectedInfo.experience) &&
                  selectedInfo.experience.length !== 0 && (
                    <>
                      <h6 className="exp-topic">ประสบการณ์:</h6>
                      {selectedInfo.experience.map((exp, idx) => (
                        <p key={idx} className="exp">
                          {exp.location} <br /> {exp.position}
                        </p>
                      ))}
                    </>
                  )}
                {Array.isArray(selectedInfo.research) &&
                  selectedInfo.research.length !== 0 && (
                    <>
                      <h6 className="res-topic">ผลงานวิจัย:</h6>
                      {selectedInfo.research.map((res, idx) => (
                        <p key={idx} className="res">
                          {res}
                        </p>
                      ))}
                    </>
                  )}

                <p className="tel">Tel: {selectedInfo.tel}</p>
                {Array.isArray(selectedInfo.email) &&
                selectedInfo.email.length > 1 ? (
                  <>
                    <p className="email">Email: {selectedInfo.email[0]}</p>
                    <p className="email">Email: {selectedInfo.email[1]}</p>
                  </>
                ) : (
                  <p className="email">
                    Email:{" "}
                    {Array.isArray(selectedInfo.email)
                      ? selectedInfo.email[0]
                      : selectedInfo.email}
                  </p>
                )}
                <p className="website">Website: {selectedInfo.website}</p>
              </section>
            </article>
          </article>
        }
      />
    </main>
  );
};

export default A_Team;
