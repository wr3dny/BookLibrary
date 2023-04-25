class TuBedzieEdycja extends Component{

    state = {
        dane : JSON.parse(localStorage.getItem("KT")),
        index : this.props.match.params.id
    }

    edytujKontakt = () => {

               
        this.state.dane[this.state.index].imie = document.querySelector("#imie").value;
        this.state.dane[this.state.index].nazwisko = document.querySelector("#nazwisko").value;
        this.state.dane[this.state.index].email = document.querySelector("#email").value;
        this.state.dane[this.state.index].telefon = document.querySelector("#telefon").value;


        localStorage.setItem("KT", JSON.stringify(this.state.dane));
        window.location.href="/";

    }

    anuluj = () =>{

        window.location.href="/";
    }

  render(){

    return(
        <div>
  
          <p>
              Imię:<br/>
              <input type="text" name="imie" id="imie" defaultValue={this.state.dane[this.state.index].imie} />
          </p>
          <p>
              Nazwisko:<br/>
              <input type="text" name="nazwisko" id="nazwisko" defaultValue={this.state.dane[this.state.index].nazwisko}/>
          </p>
          <p>
              Email:<br/>
              <input type="text" name="email" id="email" defaultValue={this.state.dane[this.state.index].email}/>
          </p>
          <p>
              Telefon:<br/>
              <input type="text" name="telefon" id="telefon" defaultValue={this.state.dane[this.state.index].telefon}/>
          </p>
          <p>
              <button onClick={this.edytujKontakt}>Zmień dane</button>
              <button onClick={this.anuluj}>Anuluj</button>
          </p>
  
        </div>
      )};
    }