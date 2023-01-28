import QR from "./assets/image-qr-code.png";
export default function App() {
  return (
    <div className="bg-light-gray h-screen grid place-items-center text-center">
      <div className="w-80 p-4 rounded-2xl grid bg-white gap-4">
        <img className="rounded-xl" src={QR} alt="QR code" />
        <p className="font-bold text-dark-blue text-xl px-4">
          Improve your front-end skills by building projects
        </p>
        <p className="text-grayish-blue text-base pb-4 px-4">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}
