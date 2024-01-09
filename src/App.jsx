import { Component } from "react";
import Header from "./Components/Header/Header";
import SearchContent from "./Components/SearchContent/SearchContent";
import Content from "./Components/Content/Content";
import "./App.scss";

class App extends Component {
  state = {
    info: null,
    active: false,
    notFound: false,
    empty: true,
    search: false,
    font: "Sans Serif",
    emptyInp: null,
  };
  getData = async (value) => {
    if (value.length === 0) {
      this.setState({ emptyInp: "Whoops can't be empty!!" });
      document.querySelector(".search").style.border = "1px solid red";
    } else {
      this.setState({ search: true, empty: false });
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`;
      const response = await fetch(url);
      const jsonRes = await response.json();
      this.setState({ search: false });
      if (jsonRes.title === "No Definitions Found") {
        this.setState({ notFound: true });
      } else {
        this.setState({ notFound: false });
      }
      this.setState({ info: jsonRes[0] });
      document.querySelector(".search").style.border = "1px solid #8F19E8";
      this.setState({ emptyInp: "" });
    }
  };

  showFonts = () => {
    let ul = document.querySelector(".block");
    this.setState((prevState) => {
      return {
        list: (ul.style.display = "flex"),
        active: (prevState.active = true),
      };
    });
  };
  hideFonts = () => {
    let ul = document.querySelector(".block");
    this.setState((prevState) => {
      return {
        list: (ul.style.display = "none"),
        active: (prevState.active = false),
      };
    });
  };
  changeFonts = (e) => {
    this.setState({ font: e.target.innerText });

    switch (e.target.innerText) {
      case "Sans Serif":
        document.body.style.fontFamily = "'Inter',sans-serif";

        break;
      case "Serif":
        document.body.style.fontFamily = "'Lora',sans-serif";

        break;
      case "Mono":
        document.body.style.fontFamily = "'Inconsolata',sans-serif";

        break;
      default:
        document.body.style.fontFamily = "'Inter',sans-serif";
    }
    this.setState((prewState) => {
      let ul = document.querySelector(".block");
      return {
        data: (prewState.data = e.target.innerText),
        list: (ul.style.display = "none"),
      };
    });
  };

  render() {
    const { active, font, info, empty, notFound, search, emptyInp } =
      this.state;
    console.log(info);
    return (
      <>
        <div className="wrapper container">
          <Header
            changeFonts={this.changeFonts}
            showFonts={this.showFonts}
            hideFonts={this.hideFonts}
            active={active}
            data={font}
          />
          <SearchContent
            getData={this.getData}
            data={info}
            emptyInp={emptyInp}
          />

          <Content
            data={info}
            empty={empty}
            search={search}
            notFound={notFound}
          />
        </div>
      </>
    );
  }
}

export default App;
