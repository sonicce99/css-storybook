import { css, keyframes } from "styled-components";

export default class Snow {
  private readonly opacity: number;
  private readonly snowScale: number;

  private readonly start_X_Point: number;
  private readonly offSet_X: number;
  private readonly end_X_Point: number;

  private readonly return_X_Point: number;
  private readonly return_time: number;
  private readonly Y_Point: number;

  private readonly animation_duration: string;
  private readonly animation_delay: string;

  constructor() {
    this.opacity = Math.random();
    this.snowScale = Math.random();

    this.start_X_Point = Math.random() * window.innerWidth;
    this.offSet_X = (this.getRandomValue(-5, 5) * window.innerWidth) / 100;
    this.end_X_Point = this.start_X_Point + this.offSet_X;
    this.return_X_Point = this.start_X_Point + this.offSet_X / 2;

    this.return_time = this.getRandomValue(3, 8) / 10;
    this.Y_Point = this.return_time * 100;

    this.animation_duration = `${this.getRandomValue(10, 30)}s`;
    this.animation_delay = `${Math.random() * -30}s`;
  }

  private getRandomValue(min: number, max: number) {
    const value = Math.random();
    const randomValue = min + Math.floor(value * (max - min + 1));

    return randomValue;
  }

  private getAnimation() {
    const falling = keyframes`
      ${`${this.Y_Point}%`} {
          transform: translate(${this.end_X_Point}px, ${this.Y_Point}vh);
      }
      to {
          transform: translate(${this.return_X_Point}px, 100vh);
      }
      `;

    const animation = css`
      animation: ${falling} ${this.animation_duration} ${this.animation_delay}
        linear infinite;
    `;

    return animation;
  }

  getProps() {
    return {
      opacity: this.opacity,
      transform: `translate(${this.start_X_Point}px, -10px) scale(${this.snowScale})`,
      animation: this.getAnimation(),
    };
  }
}
