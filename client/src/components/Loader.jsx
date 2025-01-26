// import { useEffect, useState } from "react";
// import App from "../App";

// const LoadingScreen = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate GIF play duration and fade-out effect
//     const timer = setTimeout(() => {
//       setLoading(false); // Hide the loading screen after 5 seconds
//     }, 6000); // 5 seconds for GIF + 1 second fade-out animation

//     return () => clearTimeout(timer); // Cleanup the timeout on component unmount
//   }, []);

//   return (
//     <div className="relative w-full h-screen">
//       {/* Loading Screen */}
//       {loading && (
//         <div
//           className={`fixed inset-0 bg-white flex items-center justify-center transition-opacity duration-1000 ${
//             !loading ? "opacity-0" : "opacity-100"
//           }`}
//         >
//           {/* GIF */}
//           <img
//             src="/ts-logo-intro-ezgif.com-video-to-gif-converter.gif"
//             alt="Developer Working GIF"
//             className="object-cover w-full h-screen"
//           />
//         </div>
//       )}

//       {/* Main Content */}
//       {!loading && (
//         <App />
//       )}
//     </div>
//   );
// };

// export default LoadingScreen;
