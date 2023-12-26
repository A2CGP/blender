import clsx from 'clsx';
import {
  HTMLAttributes,
  MutableRefObject,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

export interface SurfaceProps extends HTMLAttributes<HTMLCanvasElement> {}

export const Surface = forwardRef((props: SurfaceProps, ref) => {
  const { className, ...restProps } = props;
  const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>;

  useEffect(() => {
    const { width, height } = canvasRef.current.getBoundingClientRect();
    canvasRef.current.width = width;
    canvasRef.current.height = height;
  }, []);

  useImperativeHandle(ref, () => canvasRef.current);

  return (
    <canvas
      ref={canvasRef}
      className={clsx('w-full h-full', className)}
      {...restProps}
    />
  );
});
