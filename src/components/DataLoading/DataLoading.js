import React from "react";
import PropTypes from "prop-types";
import Message from "../../components/Message/Message";

const DataLoading = (props) => {
  
  let output = "";
  if(props.state.loading){
    output = <Message message={props.loadingMessage}/>;
  }else {
    output = props.slot;
  }
  
  return (
    <div>
      {output}
    </div>
  );
};

DataLoading.propTypes = {
  slot: PropTypes.object,
  state: PropTypes.object,
  loadingMessage: PropTypes.string
};

export default DataLoading;