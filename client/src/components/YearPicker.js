import React from "react";
import { Field, Control, Icon } from "bloomer";

class YearPicker extends React.Component {
    displayYears = (startYear, endYear) => {
        let yearArr = [];
        for (let i = startYear; i <= endYear; i++) {
            yearArr.push(i);
        }
        return yearArr;
    };

    handleChange = event => {
        this.props.getYearCB(this.props.when, event.target.value);
    };

    render() {
        return (
            <Field>
                <Control isExpanded hasIcons="left">
                    <span className="select">
                        <select
                            onChange={this.handleChange}
                            defaultValue="Year"
                        >
                            <option disabled>Year</option>
                            {this.displayYears(1975, 2017).map(year => {
                                return <option key={year}>{year}</option>;
                            })}
                        </select>
                    </span>
                    <Icon isSize="small" isAlign="left" icon="calendar" />
                </Control>
            </Field>
        );
    }
}

export default YearPicker;
