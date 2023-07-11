"use strict";
const { Dropdown, DropdownMenuItemType, IDropdownOption, IDropdownStyles, ThemeProvider, initializeIcons } = window.FluentUIReact;
// Initialize icons in case this example uses them
initializeIcons();
const dropdownStyles = { dropdown: { width: 300 } };
const DropdownControlledMultiExampleOptions = [
    { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
    { key: 'apple', text: 'Apple' },
    { key: 'banana', text: 'Banana' },
    { key: 'orange', text: 'Orange', disabled: true },
    { key: 'grape', text: 'Grape' },
    { key: 'watermelon', text: 'Watermelon', hidden: true },
    { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
    { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
    { key: 'broccoli', text: 'Broccoli' },
    { key: 'carrot', text: 'Carrot' },
    { key: 'lettuce', text: 'Lettuce' },
];
const DropdownControlledMultiExample = () => {
    const [selectedKeys, setSelectedKeys] = React.useState([]);
    const onChange = (event, item) => {
        if (item) {
            setSelectedKeys(item.selected ? [...selectedKeys, item.key] : selectedKeys.filter(key => key !== item.key));
        }
    };
    return (React.createElement(Dropdown, { placeholder: "Select options", label: "Multi-select controlled example", selectedKeys: selectedKeys, 
        // eslint-disable-next-line react/jsx-no-bind
        onChange: onChange, multiSelect: true, options: DropdownControlledMultiExampleOptions, styles: dropdownStyles }));
};
const DropdownControlledMultiExampleWrapper = () => React.createElement(ThemeProvider, null,
    React.createElement(DropdownControlledMultiExample, null));
ReactDOM.render(React.createElement(DropdownControlledMultiExampleWrapper, null), document.getElementById('content'));