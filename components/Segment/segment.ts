export default class Segment {
  top: boolean;
  middle: boolean;
  buttom: boolean;

  left_top: boolean;
  left_buttom: boolean;
  right_top: boolean;
  right_buttom: boolean;

  constructor() {
    this.top = false;
    this.middle = false;
    this.buttom = false;

    this.left_top = false;
    this.left_buttom = false;
    this.right_top = false;
    this.right_buttom = false;
  }

  setNumber(value: number) {
    switch (value) {
      case 0:
        this.top = true;
        this.left_top = true;
        this.left_buttom = true;
        this.right_top = true;
        this.right_buttom = true;
        this.buttom = true;

        this.middle = false;
        break;

      case 1:
        this.top = false;
        this.buttom = false;
        this.middle = false;
        this.left_top = false;
        this.left_buttom = false;

        this.right_top = true;
        this.right_buttom = true;
        break;

      case 2:
        this.right_buttom = false;
        this.left_top = false;

        this.buttom = true;
        this.top = true;
        this.right_top = true;
        this.middle = true;
        this.left_buttom = true;
        break;

      case 3:
        this.left_top = false;
        this.left_buttom = false;

        this.right_buttom = true;
        this.buttom = true;
        this.top = true;
        this.right_top = true;
        this.middle = true;
        break;

      case 4:
        this.left_buttom = false;
        this.buttom = false;
        this.top = false;

        this.left_top = true;
        this.right_buttom = true;
        this.right_top = true;
        this.middle = true;
        break;

      case 5:
        this.left_buttom = false;
        this.right_top = false;

        this.buttom = true;
        this.top = true;
        this.left_top = true;
        this.right_buttom = true;
        this.middle = true;
        break;

      case 6:
        this.right_top = false;

        this.left_buttom = true;
        this.buttom = true;
        this.top = true;
        this.left_top = true;
        this.right_buttom = true;
        this.middle = true;
        break;

      case 7:
        this.left_buttom = false;
        this.buttom = false;
        this.left_top = false;
        this.middle = false;

        this.right_top = true;
        this.top = true;
        this.right_buttom = true;
        break;

      case 8:
        this.left_buttom = true;
        this.buttom = true;
        this.left_top = true;
        this.middle = true;
        this.right_top = true;
        this.top = true;
        this.right_buttom = true;
        break;

      case 9:
        this.left_buttom = false;

        this.buttom = true;
        this.left_top = true;
        this.middle = true;
        this.right_top = true;
        this.top = true;
        this.right_buttom = true;
        break;

      default:
        this.left_buttom = false;
        this.buttom = false;
        this.left_top = false;
        this.middle = false;
        this.right_top = false;
        this.top = false;
        this.right_buttom = false;
    }
  }
}
