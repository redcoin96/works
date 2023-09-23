// import React, { useEffect, useState } from "react";

// export default function Loading() {
//   const data = [
//     {
//       AboutDevTypeText: "<span>About Dev Quest<br/><br/>Do you want to go on an epic quest to uncover the magic of coding? Seize the chance to learn about web development and get a scholarship or an internship.</span><br/><br/><br/><span>Are you a developer?<br/> Y / N</span><br/>"
//     }
//   ];

//   const [text, setText] = useState("");
//   const [isTag, setIsTag] = useState(false);

//   useEffect(() => {
//     const devTypeText = data[0]["AboutDevTypeText"];
//     let i = 0;

//     function type() {
//       const currentText = devTypeText.slice(0, ++i);
//       if (currentText === devTypeText) return;
//       setText(currentText + `<span class='blinker'>&#32;</span>`);
//       const char = currentText.slice(-1);
//       if (char === "<") setIsTag(true);
//       if (char === ">") setIsTag(false);
//       if (isTag) return type();
//       setTimeout(type, 60);
//     }

//     type();
//   }, []);

//   return (
//     <div>
//       <span id="AboutDevTypeText" className="typeing" dangerouslySetInnerHTML={{ __html: text }}></span>
//     </div>
//   );
// }
