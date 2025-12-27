import logo from "../assets/qrify.png";
import { FaDownload, FaQrcode } from "react-icons/fa";
import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";

const QRCodeGenerator = () => {
  const [text, setText] = useState("");
  const [bgColor, setBgColor] = useState();
  const [fgColor, setFgColor] = useState();

  const downloadQR = () => {};
  return (
    <div className=" max-w-md w-full">
      <div className="bg-white/20 p-4 md:p-6 rounded-2xl">
        {/* heading */}
        <h1 className="text-white text-2xl font-bold font-serif flex justify-center items-center">
          <img src={logo} alt="/qrify" className="w-12" /> QR Code Genarator
        </h1>
        <p className="px-8 text-gray-200 text-center">
          type your text,image url, pdf url & get the QR code
        </p>
        {/* input */}
        <input
          type="text"
          placeholder="Enter tent or URL..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg my-4 outline-none focus:ring-2 focus:ring-green-400 border-white text-white placeholder-gray-300"
        />
        {/* CONTROLER */}
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          {/* qr color */}
          <div>
            <label className="block mb-1 text-white">QR color</label>
            <input
              type="color"
              value={fgColor}
              onChange={(e) => setFgColor(e.target.value)}
              className="w-full h-10"
            />
          </div>
          {/* qr bg color */}
          <div>
            <label className="block mb-1 text-white">Background</label>
            <input
              type="color"
              value={fgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className="w-full h-10"
            />
          </div>
        </div>
        {/* qr preview */}
        <div className="flex justify-center my-8">
          {text ? (
            <QRCodeCanvas
              id="qr-code"
              value={text}
              bgColor={bgColor}
              fgColor={fgColor}
              level="H"
              includeMargin
            />
          ) : (
            <div className="flex flex-col justify-center  items-center">
              <FaQrcode className="text-4xl text-green-100 mb-2" />
              <p className="text-gray-200 text-sm">Enter text to generate QR</p>
            </div>
          )}
        </div>
        {/* downloade */}

        <button
          onClick={downloadQR}
          disabled={!text}
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold disabled:opacity-50 flex justify-center items-center gap-4"
        >
          <FaDownload /> Doqnloade QR code
        </button>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
