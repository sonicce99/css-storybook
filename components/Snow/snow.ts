import { css, keyframes } from "styled-components";

export default class Snow {
  _opacity: number;
  _snowScale: number;

  _start_X_Point: number;
  _offSet_X: number;
  _end_X_Point: number;

  _return_X_Point: number;
  _return_time: number;
  _Y_Point: number;

  _animation_duration: string;
  _animation_delay: string;

  constructor() {
    this._opacity = Math.random();
    this._snowScale = Math.random();

    this._start_X_Point = Math.random() * window.innerWidth;
    this._offSet_X = (this.getRandomValue(-5, 5) * window.innerWidth) / 100;
    this._end_X_Point = this._start_X_Point + this._offSet_X;
    this._return_X_Point = this._start_X_Point + this._offSet_X / 2;

    this._return_time = this.getRandomValue(3, 8) / 10;
    this._Y_Point = this._return_time * 100;

    this._animation_duration = `${this.getRandomValue(10, 30)}s`;
    this._animation_delay = `${Math.random() * -30}s`;
  }

  getRandomValue(min: number, max: number) {
    const value = Math.random();
    const randomValue = min + Math.floor(value * (max - min + 1));

    return randomValue;
  }

  getAnimation() {
    const falling = keyframes`
      ${`${this._Y_Point}%`} {
          transform: translate(${this._end_X_Point}px, ${this._Y_Point}vh);
      }
      to {
          transform: translate(${this._return_X_Point}px, 100vh);
      }
      `;

    const animation = css`
      animation: ${falling} ${this._animation_duration} ${this._animation_delay}
        linear infinite;
    `;

    return animation;
  }

  getProps() {
    return {
      opacity: this._opacity,
      transform: `translate(${this._start_X_Point}px, -10px) scale(${this._snowScale})`,
      animation: this.getAnimation(),
    };
  }
}
