type Props = { children: React.ReactNode };

const Card = ({ children }: Props) => {
  return (
    <div className='rounded-xl m-4 py-8 px-10 shadow-lg ring ring-black/5 hover:ring-black/10'>
      {children}
    </div>
  );
};

Card.Title = ({ children }: { children: React.ReactNode }) => (
  <h2 className='text-lg font-semibold'>{children}</h2>
);

export default Card;
