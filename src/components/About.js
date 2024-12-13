import React from 'react';

export default function About(props) {
  // Define dynamic styles based on the mode prop
  let mystyke = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#252c3e' : 'gray',
    border :'1px solid',
    backgroundColor: props.mode === 'dark' ? '#252c3e' : 'white'
  };

  return (
    <div className="container my-4" style={mystyke}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button "
              type="button"
              style={mystyke}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Accordion Item #1</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyke}>
              <strong>This is the first item's accordion body.</strong> It is shown by default...
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button "
              type="button"
              style={mystyke}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyke}>
              <strong>This is the second item's accordion body.</strong> It is hidden by default, but it will be shown when the second accordion item is clicked.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button "
              type="button"
              style={mystyke}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyke}>
              <strong>This is the third item's accordion body.</strong> It is hidden by default, but it will be shown when the third accordion item is clicked.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
