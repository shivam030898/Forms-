import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="main_container">
      <div className="heading">
        <h2>Create Kubernetes Namespace: Step 3 of 3</h2>
      </div>
      <div className="container2">
        <form>
          <h3>Kubernetes Namespace Name</h3>
          <input type="text" />
        </form>
      </div>
      <div className="container3">
        <h3>Environment</h3>
        <button>Non-Prod</button>
        <button>Prod</button>
      </div>
      <div className="container4">
        <h3>Clusters:</h3>
        <select name="cluster" id="cluster">
          <option value="cluser1">Cluster1</option>
          <option value="cluser2">Cluster2</option>
          <option value="cluser3">Cluster3</option>
          <option value="cluser4">Cluster4</option>
        </select>
        <h4>Cluster in which the kubernetes namespace is to be created</h4>
      </div>
      <div className="container5">
        <div className="form-grp">
          <h3>Cpu Limits (number of Cores)</h3>
          <input type="number" />
        </div>
        <div className="form-grp">
          <h3>Memory limits(gf)</h3>
          <input type="number" />
        </div>
      </div>
    </div>
  );
};

export default Form;
