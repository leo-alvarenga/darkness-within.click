import { PropsWithChildren } from 'react';

export interface ModalProps extends PropsWithChildren {
  open?: boolean;
  onClose?: () => boolean;
}

function Modal({ open, children }: ModalProps) {
  return (
    <div
      className={`
      ${open ? 'visible' : 'hidden'}
      fixed h-[100vh] w-[100vw] bg-background
      overflow-hidden opacity-80 top-0 left-0 p-8
      flex flex-col items-center
    `}
    >
      <div className='opacity-100 p-4 max-w-[90%] overflow-y-scroll rounded-lg bg-black2 text-foreground'>
        {children}
      </div>
    </div>
  );
}

export default Modal;
