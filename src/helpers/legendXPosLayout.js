/* legendXPosLayout is a helper function that defines spacing between 
legend's elements on the x-axis */
const legendXPosLayout = (i) => {
  if (i < 6) {
    return 0;
  } else if (i < 12) {
    return 80;
  } else {
    return 160;
  }
};

export { legendXPosLayout };
