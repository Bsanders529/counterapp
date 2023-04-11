function UPbutton() {
    function handleClick() {
    let h = document.querySelector(".n");
    h.innerHTML++;
    }
  
    return (
      <button onClick={handleClick}>
        UP
      </button>
    );
  }

  export default UPbutton;