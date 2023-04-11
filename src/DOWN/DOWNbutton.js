function DOWNbutton() {
    function handleClick() {
    let h = document.querySelector(".n");
    h.innerHTML--;
    }
  
    return (
      <button onClick={handleClick}>
        DOWN
      </button>
    );
  }

  export default DOWNbutton;