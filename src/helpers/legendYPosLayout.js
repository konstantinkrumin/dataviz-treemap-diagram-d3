/* legendYPosLayout is a helper function that defines spacing between 
legend's elements on the y-axis */
const legendYPosLayout = (i) => {
  switch (i) {
    case 0:
    case 6:
    case 12:
      return 0;
    case 1:
    case 7:
    case 13:
      return 20;
    case 2:
    case 8:
    case 14:
      return 40;
    case 3:
    case 9:
    case 15:
      return 60;
    case 4:
    case 10:
    case 16:
      return 80;
    case 5:
    case 11:
    case 17:
      return 100;
    default:
      break;
  }
};

export { legendYPosLayout };
