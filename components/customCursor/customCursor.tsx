// 'use client'

// import React, { useEffect, useState } from "react";
// import styles from './customCursor.module.scss';

// export default function CustomCursor() {
//   const [position, setPosition] = useState<{ x: number; y: number }>({
//     x: 0,
//     y: 0,
//   });

//   const updateCursorPosition = (e: MouseEvent) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", updateCursorPosition);

//     return () => {
//       window.removeEventListener("mousemove", updateCursorPosition);
//     };
//   }, []);

//   return (
//     <div
//       className={styles.customCursor}
//       style={{
//         left: `${position.x}px`,
//         top: `${position.y}px`,
//       }}
//     ></div>
//   );
// }
