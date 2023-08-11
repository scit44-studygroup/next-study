interface IBtn {
  text: string;
  color: string;
  handleClick: () => void;
}

export default function Btn({ color, text, handleClick }: IBtn) {
  return (
    <button
      onClick={handleClick}
      className={`py-2 px-4 bg-${color}-500 text-white rounded-lg`}>
      {text}
    </button>
  );
}
