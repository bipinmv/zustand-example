import { useStore } from "../store/useStore";

const ChildTwo = ({ title }) => {
  const count = useStore((state) => state.count);
  const setCount = useStore((state) => state.setCount);
  return (
    <div className="align-center">
      <span className="mb-1">{title}</span>
      <div className="align-center">
        <span className="count-box">{count}</span>
        <div className="change-btns-container">
          <button onClick={() => setCount(count + 1)}>one up</button>
          <button onClick={() => setCount(count - 1)}>one down</button>
        </div>
      </div>
    </div>
  );
};

export default ChildTwo;
