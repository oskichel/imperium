export type LightProps = {
  width: number;
  height?: number;
  color: string;
  blur?: number;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export const Light = ({width, height, color, blur, top, right, bottom, left}: LightProps) => {
  return (
    <div style={{
      width: `${width}px`, 
      height: `${height}px`, 
      background: color, 
      filter: `blur(${blur}px)`,
      position: 'absolute',
      zIndex: '-5',
      top: `${top}px`,
      right: `${right}px`,
      bottom: `${bottom}px`,
      left: `${left}px`,
    }}></div>
  );
};
