export interface ModalProps {
  title: string,
  initialZIndex: number,
  children: React.ReactNode,
  animation?: boolean
  content:string
  width?: number
  backgroundColor?: string
}
