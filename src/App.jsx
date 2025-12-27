import { Toaster } from "react-hot-toast";
import QRCodeGenerator from "./ QRCodeGenerator/ QRCodeGenerator";
import logo from "../src/assets/qrify.png";
const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/XZ62XpdQ/qr-code-table-1.jpg)",
        }}
      > 
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row  justify-center items-center  min-h-screen px-4 md:px-12  py-8 gap-6">
        <div className="flex-1 flex justify-center">
          <QRCodeGenerator />
        </div>
        <div className="flex-1">
          <img src={logo} alt="" className="w-44 mx-auto"/>
        <p className="text-gray-200 text-center">
          <b className="text-green-500">QRIFY </b>Web is a modern and user-friendly web application designed to
          generate QR codes quickly and efficiently. It allows users to convert
          text, links, images, and PDF files into scannable QR codes with just a
          few clicks. The goal of QRify Web is to make sharing digital content
          simple, fast, and accessible for everyone. The application features a
          clean and responsive interface that works smoothly on both desktop and
          mobile devices. Users can enter any text or URL and instantly see a
          live QR code preview. For advanced usage, QRify Web supports uploading
          images and PDF files, generating QR codes that link directly to those
          files. QRify Web uses modern web technologies to ensure high
          performance and reliability. The QR codes generated are high quality
          and can be downloaded as PNG images. This makes them perfect for
          printing, sharing on social media, or embedding into documents.
          Security and simplicity are core principles of the platform. No
          unnecessary data is stored, and the user experience remains fast and
          lightweight. The application is designed for students, developers,
          business owners, and anyone who needs quick QR solutions. QRify Web is
          ideal for sharing documents, promotional materials, websites, or
          digital resources.
        </p>
        </div>
      </div>
      <div className="relative">
        <p className="text-white text-center p-4">
          Copyright © {new Date().getFullYear()} - Md Fuad Amir All right
          reserved
        </p>
      </div>
      <Toaster />
    </div>
  );
};

export default App;
