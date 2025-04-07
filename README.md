
# 🔐 Digital Signature Authentication App (DSS-Based)

## 📌 Abstract

This project presents a full-stack web application for digitally signing and verifying messages using the Digital Signature Standard (DSS). It allows users to securely authenticate textual data, ensuring its integrity and origin. The front-end, built in React, offers a clean interface for user interaction, while the Flask-based back-end handles key generation, message signing, and signature verification using Python’s cryptography library.

The application simulates real-world use cases of digital signature systems, helping users understand how cryptographic keys work in securing communications. It features a persistent history panel to track previous signed messages using local storage. This project aims to bridge theoretical cryptography concepts with hands-on, practical implementation in a beginner-friendly environment.

Through this system, users can explore digital signature functionality and learn how digital identity verification can be integrated into modern web platforms. It's a lightweight but educational implementation useful for demos, teaching, and basic secure messaging.

---

## 🚨 Problem Statement

In today’s digital world, verifying the authenticity and integrity of messages or data is crucial. Traditional password-based systems are prone to interception and impersonation. This project solves the problem by providing a mechanism to **digitally sign messages**, ensuring their validity through **public key cryptography** without requiring password-based logins.

---

## 🎯 Objectives

- Implement the Digital Signature Standard (DSS) in a web-based system.
- Allow users to sign messages using a private key.
- Enable signature verification using the corresponding public key.
- Provide a clean and intuitive user interface.
- Maintain a local history of signed messages even after page refresh.
- Integrate backend and frontend seamlessly using REST API calls.
- Help users visualize the digital signature workflow.

---

## 🛠️ Methodology

- 🔐 **Key Generation**: DSS private and public keys are generated using Python’s cryptography library.
- ✍️ **Message Input**: User enters a text message in the web UI.
- 🔏 **Signing**: On clicking 'Sign', the backend signs the message using the private key and returns the signature.
- ✅ **Verification**: The signature is automatically verified using the public key.
- 🧠 **Display Result**: The UI shows the original message, signature, and verification status.
- 💾 **History Storage**: Signed messages and their signatures are stored using browser Local Storage.
- 🔄 **Persistence**: On reload, the history is retrieved from local storage and displayed again.
- 🔗 **API Integration**: Frontend communicates with the Flask backend using Axios for all signature-related operations.

---

## 📈 Methodology Flowchart

```
[User Input] → [Send to Backend]
                      ↓
             [Sign Message with DSS]
                      ↓
           [Return Signature to Frontend]
                      ↓
    [Display Result + Save to LocalStorage]
```

(*You can replace this with a proper flowchart image if desired.*)

---

## 💻 Implementation Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/dss-auth-website.git
cd dss-auth-website
```

---

### 2. Backend Setup (Flask)

```bash
cd dss_server
```

(Optional but recommended)

```bash
python -m venv venv
venv\Scripts\activate      # Windows
# or
source venv/bin/activate   # macOS/Linux
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the backend:

```bash
python app.py
```

---

### 3. Frontend Setup (React)

```bash
cd ../dss_client
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Visit your app at: `http://localhost:3000`

---

## 🧩 Project Files Overview

```
dss-auth-website/
├── dss_server/
│   ├── app.py
│   ├── signer.py
│   └── requirements.txt
├── dss_client/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
│   └── package-lock.json
```

---

## ✨ Features

- Sign and verify messages using DSS cryptography
- View public and private keys (auto-generated)
- Show signature and verification result instantly
- Persistent history using Local Storage
- Clean user interface built with React

---

## 🔮 Future Work

- Store history in a database (e.g., SQLite or MongoDB)
- Add multi-user support with authentication
- Let users export or import their private/public key pair
- Generate downloadable proof of signature (PDF format)
- Deploy live using services like Netlify (frontend) + Render/Railway (backend)

---

## 📸 Screenshots

Add your screenshots here:
```
![](screenshots/homepage.png)
![](screenshots/signature.png)
```

---

## 📚 References

- [Digital Signature Standard (FIPS 186-4)](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-4.pdf)
- [Flask Docs](https://flask.palletsprojects.com/)
- [React Docs](https://react.dev/)
- [Python Cryptography](https://cryptography.io/en/latest/)

---

## 👨‍💻 Developed By

Your Name  
[GitHub Profile](https://github.com/YOUR_USERNAME)

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
