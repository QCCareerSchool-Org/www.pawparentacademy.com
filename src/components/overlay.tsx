import type { CSSProperties, FC } from 'react';

interface Props {
  background: CSSProperties['background'];
  className?: string;
}

export const Overlay: FC<Props> = ({ background: background, className }) => (
  <div className={className} style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, background }} />
);
