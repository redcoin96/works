export interface IconProps {
  icon: {
    img: string;
    title: string;
  };
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}
