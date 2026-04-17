// 1. เลือก Element จาก HTML มาเตรียมไว้
const fetchBtn = document.getElementById("findPoke");
const pokeContainer = document.getElementById("pokemon-container");

// 2. ตั้งค่าการทำงานเมื่อคลิกปุ่ม
fetchBtn.addEventListener("click", () => {
    
    // สุ่ม ID โปเกมอน (1 - 1025)
    const randomId = Math.floor(Math.random() * 1025) + 1;

    // 3. ยิง API ไปดึงข้อมูล
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("ดึงข้อมูลไม่สำเร็จ");
            }
            return response.json();
        })
        .then((data) => {
            // --- ขั้นตอนสร้าง DOM Element เพื่อแสดงผลต่อท้าย ---

            // สร้างกล่อง Card หุ้ม
            const card = document.createElement("div");
            card.className = "pokemon-card";

            // สร้างรูปภาพ
            const pokeIMG = document.createElement("img");
            // ใช้รูปฝั่งหน้าตรง (front_default)
            pokeIMG.src = data.sprites.front_default; 
            pokeIMG.alt = data.name;

            // สร้างชื่อ
            const pokename = document.createElement("h3");
            pokename.textContent = `#${data.id} ${data.name}`;

            // นำรูปและชื่อใส่เข้าไปใน Card
            card.appendChild(pokeIMG);
            card.appendChild(pokename);

            // นำ Card ทั้งหมดไปใส่ใน Container หลัก (โดยไม่ลบของเก่า)
            pokeContainer.appendChild(card);
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("เกิดข้อผิดพลาดในการดึงข้อมูลโปเกมอน");
        });
});