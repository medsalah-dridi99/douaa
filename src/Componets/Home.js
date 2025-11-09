import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const [name, setName] = useState("");

  const listedouaa = [
  "اللهم ارزقني سعادةً لا تنقطع، وراحةً لا تزول 🤍",
  "اللهم اجعل لي من كل همٍّ فرجًا ومن كل ضيقٍ مخرجًا 🌿",
  "اللهم اغفر لي ولوالدي ولجميع المسلمين 🙏",
  "اللهم اجعلني من المتوكلين عليك، الراضين بقضائك 💫",
  "اللهم اجعل القرآن نور قلبي وجلاء حزني 💖",
  "اللهم ارزقني التوفيق في عملي وبارك في وقتي 🕊️",
  "اللهم إني أعوذ بك من الهم والحزن والعجز والكسل 🌸",
  "اللهم اجعل يومي هذا خيرًا من أمسه واغفر لي ذنبي 🌼",
  "اللهم إني أسألك حسن الخاتمة ورضاك عني 🤍",
  "اللهم وسّع رزقي وبارك لي فيما أعطيتني 🌾",
];


  const handleClick = () => {
    if (name.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Attention !",
        text: "يرجى إدخال اسم قبل المتابعة 🙏",
      });
      return;
    }

    const randomDouaa =
      listedouaa[Math.floor(Math.random() * listedouaa.length)];

    Swal.fire({
      title: `🤲 ${name}`,
      text: `دعاؤك اليوم هو: ${randomDouaa}`,
      icon: "success",
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(to bottom, #a1c4fd, #c2e9fb)",
      }}
    >
      <h1 style={{ marginBottom: 20 }}>💫 صفحة الأدعية - Douaa 💫</h1>
      <input
        type="text"
        placeholder="اكتب الاسم هنا..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "10px 15px",
          fontSize: "16px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          outline: "none",
          marginBottom: "15px",
        }}
      />
      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          borderRadius: "10px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        عرض الدعاء 🌸
      </button>
    </div>
  );
}
