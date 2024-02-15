import CheckIcon from '../assets/CheckIcon.svg';

type Props = {
  checked: boolean;
  percentage: string;
  img: string;
  logo: string;
  onClick: () => void;
};

export const SmallBox = ({ checked, onClick, percentage, img, logo }: Props) => {
  return (
    <div
      onClick={onClick}
      style={{
        background: `url(${img}) center center / cover no-repeat`,
      }}
      className={`rounded-2xl flex flex-col gap-10 justify-between border p-2 row-span-1 ${checked ? 'border-ab-red' : 'border-transparent'} overflow-hidden`}
    >
      <div className="flex justify-between">
        <img src={logo} className="w-12 h-12 rounded-2xl" />
        {checked ? (
          <img className="w-6 h-6" src={CheckIcon} />
        ) : (
          <div className="w-6 h-6 border-2 border-ab-light-grey rounded-full bg-white" />
        )}
      </div>

      <div className="py-1 px-3 w-fit bg-white rounded-xl text-center text-black text-base font-semibold">{percentage}</div>
    </div>
  );
};
