export const textTransform = (text: string) => {
  return text.replace(/(\r\n|\n|\r)/gm, " ");
};
