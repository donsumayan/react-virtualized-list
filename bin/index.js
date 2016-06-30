var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "react-dom", "virtualized-list"], function (require, exports, React, ReactDOM, virtualized_list_1) {
    "use strict";
    var App = (function (_super) {
        __extends(App, _super);
        function App() {
            _super.call(this);
            this.state = {
                items: 100
            };
        }
        App.prototype.refresh = function () {
            this.setState({
                items: parseInt(this.refs["itemsCount"].value)
            });
        };
        App.prototype.setScroll = function () {
            var offset = parseInt(this.refs["scrollOffset"].value);
            this.refs["list"].setScrollOffset(offset);
        };
        App.prototype.render = function () {
            var list = [];
            for (var i = 0; i < this.state.items; i++) {
                list.push(i);
            }
            return (React.createElement("div", null, React.createElement("h1", null, "Virtualized list example"), React.createElement("br", null), React.createElement("input", {ref: "itemsCount", placeholder: "Number of items", defaultValue: this.state.items + ""}), React.createElement("button", {onClick: this.refresh.bind(this)}, "Set Items"), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {ref: "scrollOffset", placeholder: "Scroll offset", defaultValue: this.state.items + ""}), React.createElement("button", {onClick: this.setScroll.bind(this)}, "Set Scroll"), React.createElement("br", null), React.createElement("br", null), React.createElement(virtualized_list_1.VirtualizedList, {ref: "list", list: list})));
        };
        return App;
    }(React.Component));
    ReactDOM.render(React.createElement(App), document.getElementById("container"));
});
