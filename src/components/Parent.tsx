import Child from "./Child";
import { useStore } from "../store/useStore";

const Parent = () => {
  const count = useStore((state) => state.count);
  const setCount = useStore((state) => state.setCount);
  return (
    <>
      <span className="align-center mb-1">Parent</span>
      <div className="align-center">
        <span className="count-box">{count}</span>
        <div className="change-btns-container">
          <button onClick={() => setCount(count + 1)}>one up</button>
          <button onClick={() => setCount(count - 1)}>one down</button>
        </div>
      </div>
      <div className="child-container">
        <Child title="Child One" />
        <Child title="Child Two" />
      </div>
      <div className="child-container">
        <Child title="Grand Child One" />
        <Child title="Grand Child Two" />
      </div>
    </>
  );
};

export default Parent;
