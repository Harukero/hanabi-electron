function openOrCloseNav(_id) {
    var nav = document.getElementById(_id);
    if(nav.style.width !== "250px") {
        openNav(_id);
    } else {
        closeNav(_id);
    }
}

function openNav(_id) {
    document.getElementById(_id).style.width = "250px";
}

function closeNav(_id) {
    document.getElementById(_id).style.width = "0";
}

/*
function CloseButton(props) {
  return (
    <button onClick={props.onClick} className={props.className}>
      <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
      {props.value}
    </button>
  );
}

class SideNav extends React.Component {
  renderCloseButton(_id) {
    return (
      <CloseButton
        value="Close Me!"
        onClick={() => openOrCloseNav(_id)}
        className="btn"
      />
    );
  }

  render() {
    return (
        <nav>
            {this.renderCloseButton(this.props.id)}
        </nav>
    );
  }
}
*/

const element = (
        <nav>
            <button onClick={() => openOrCloseNav('rightSideNav')} id="closeNavButton" className="btn">
                <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
                Close Button
            </button>
            <ul className="list-group" id="content"></ul>
            <div id="input-zone">
                <span id="status" className="label">Connecting...</span>
                <input type="text" id="input" disabled="disabled" />
            </div>
        </nav>
);
ReactDOM.render(
    element,
    document.getElementById('rightSideNav')
);


