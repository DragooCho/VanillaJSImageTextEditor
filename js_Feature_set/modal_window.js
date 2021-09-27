// const fileCheckingWarning = (file, flieSrc) => {
//   const fileFormat = flieSrc.src.split("/")[0].split(":")[1];
//   if (fileFormat !== `${file}`) {
//     alert(`${file} 파일형식으로 넣어주세요!!!`);
//   }
// };

const fileCheckingWarning = (file, flieSrc) => {
  const fileFormat = flieSrc.src.match(/data:image/);

  if (!fileFormat) {
    alert(`${file} 파일형식으로 넣어주세요!!!`);
  }
};
