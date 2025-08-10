<p align="center">
  <img src="https://github.com/Soymaferlopezp/Trazza/blob/main/project/src/assets/Trazza-II.png" alt="Tazza Logo" height="250">
</p>

<h1 align="center">Trazza - Mountain Coffee Traceability Platform
</h1>

<p align="center">
Trazza is a web platform that <strong>verifies the origin and authenticity of mountain coffee, empowering producers, brands, and buyers.</strong>Through a symbolic traceability system, verifiable certificates, and a clear visualization of the supply chain, the platform connects the story behind every coffee bean with the people who enjoy it.
</p>

---
## 🚀 Key Features

- Symbolic Traceability: Producers can register their coffee lots and tell the story of their cultivation.

- Verifiable Certificates and QRs: Generation of unique certificates and QR codes for each batch, allowing buyers to verify the origin with a simple scan.

- User Profiles: Personalized dashboards for Producers, Coffee Brands, and Buyers, adapted to their specific needs.

- Data Visualization: Simulation of key data such as IoT sensor information and predictive quality analysis.

- Simulated Technologies: Visual representation of technologies like blockchain (public ledger) and AI.
 
---
## 🛠️ Tech Stack

| Technology | Description |
| :--- | :--- |
| **Frontend** | HTML, CSS, JavaScript (AI-generated) |
| **Styling** | Custom CSS and variables, based on Trazza's branding. |
| **Typography** | Titles: `DM Serif Display` <br> Body: `Epilogue` |
| **Generation** | Bolt.new |
| **Deployment** | Vercel |

---

## 🎨 Color Palette

| Name | Hex | Suggested Use |
| :--- | :--- | :--- |
| Kilamanjaro | `#271202` | Main text, titles |
| Bracken | `#491704` | Dark headers, strong contrast |
| Cioccolato | `#61210a` | Main buttons, active states, CTA |
| Café Royale | `#6e3c0d` | Soft backgrounds, cards, secondary blocks |
| Deep Bronze | `#3e3504` | Secondary text, details |
| Highlight | `#FFD166` | Warm accents: medals, badges |
| Fondo Base | `#FFFFFF` | Clean white background |

---

## 👨‍💻 Visual Mock Use Cases

This project is a functional visual mock, not a full backend application. It's designed to simulate the following functionalities:

### Producer
* Registering coffee lots.
* Generating public profiles and certificates.
* Viewing simulated lot statistics.

### Coffee Brand
* Exploring producer profiles.
* Accessing the traceability of associated lots.
* Downloading simulated certificates.

### Buyer / Exporter
* Simulated QR code scanning to verify origin.
* Full lot traceability visualization.

---

## ⚙️ Setup and Local Run

Since this is a visual mock generated in Bolt.new, the local setup is minimal.

1.  **Clone the repository**:
    ```bash
    git clone [https://github.com/Soymaferlopezp/Trazza.git](https://github.com/Soymaferlopezp/Trazza.git)
    cd trazza-project
    ```
2.  **Open the project**: You can open the project folder in your preferred code editor (like VS Code) and use a `Live Server` extension to view it in your browser.

---

## Flow general

+-------------------+       selects       +-------------------+
|   Landing Page    | ------------------> |   User Role       |
|  (Welcome, About) |                     |  (Producer, Brand,|
+-------------------+                     |   Buyer)          |
        |                                 +-------------------+
        |                                           |
        |                                           | (login/auth)
        v                                           v
+-------------------+     POST       +-------------------+
|  Producer Login   | ----------->   |  Backend          |
+-------------------+                +-------------------+
                                         |
                                         | uses
                                         v
+-------------------+       creates     +-------------------+
|  Producer Dashboard | <--------------  |   /lots/register  |
| - Register Lot    |                   |   (controller)    |
| - View Lots       |                   |  /producer/profile|
+-------------------+                   +-------------------+
        |
        | (lot data)
        v
+-------------------+       fetches    +-------------------+
| Lot Detail View   | ----------------->  | /lots/view        |
| - QR Code         |                   |  /certificates    |
| - Certificate     |                   |  (simulated)      |
+-------------------+                   +-------------------+


---
### Verification Flow for Buyers

+----------------------+     GET     +----------------------+|  Buyer Dashboard     | ----------->  | Backend (api/lots/id)|
| - Scan QR            |               | - Returns lot data   |
| - Search by Origin   |               |                      |
+----------------------+               +----------------------+
        |
        | (JSON)
        v
+----------------------+     fetches    +----------------------+|  Lot Detail View     | <----------   | Backend (simulated)  || - Displays lot history|               | - IoT sensor data    || - Producer Profile   |               | - Blockchain hash    |
+----------------------+               +----------------------+
        |
        v
+----------------------+|  "Reaction" Feature  || - Saves interest     || - Adds to favorites  |
+----------------------+

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
