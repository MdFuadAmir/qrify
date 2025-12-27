import { Toaster } from "react-hot-toast";
import QRCodeGenerator from "./ QRCodeGenerator/ QRCodeGenerator";
import logo from "../src/assets/qrify.png"
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
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8">
        <QRCodeGenerator />
      </div>
      <div className="relative flex justify-center items-center">
        <img src={logo} alt="/qrify" className="w-8 h-8"/>
        <p className="text-white text-center p-4">Copyright © {new Date().getFullYear()} - Md Fuad Amir All right reserved</p>
        <img src={logo} alt="/qrify" className="w-8 h-8"/>
      </div>
       <Toaster />
    </div>
  );
};

export default App;
