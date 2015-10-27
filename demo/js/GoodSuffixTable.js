var React = require("react");

var GoodSuffixTable = React.createClass({
    render: function() {
        var needleArray = this.props.children.split("");
        var goodSuffixTable = this.props.goodSuffixTable;

        var tableHeader = needleArray.map(function(char, index) {
            return (
                <td key={index}>
                    <samp>
                        <span>{char}<sub>{index}</sub></span>
                    </samp>
                </td>
            );
        });

        var tableBody = needleArray.map(function(_, index) {
            return (
                <td key={index}>
                    <samp>
                        <span>{goodSuffixTable[index]}</span>
                    </samp>
                </td>
            );
        });

        return (
            <div>
                <div>
                    Good Suffix Table:
                </div>
                <table className="shiftTable">
                    <thead>
                        <tr>
                            {tableHeader}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {tableBody}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = GoodSuffixTable;
