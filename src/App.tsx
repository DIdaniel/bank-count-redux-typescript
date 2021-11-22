import React from "react";
import "./App.css";
import { useActionHook } from "./hooks/useAction";
import { useSelectorHook } from "./hooks/useSelectorHook";

const App: React.FC = () => {
  const { depositMoney, withdrawMoney, bankrupt } = useActionHook();
  const amount = useSelectorHook((state) => state.AllReducer);

  const depositHandler = () => {
    return depositMoney(1000);
  };

  const withdrawHandler = () => {
    return withdrawMoney(500);
  };

  const bankruptHandler = () => {
    return bankrupt();
  };

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={depositHandler}>Deposit</button>
      <button onClick={withdrawHandler}>Withdraw</button>
      <button onClick={bankruptHandler}>Bankrupt</button>
    </div>
  );
};

export default App;
