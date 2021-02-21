import React, { useState } from 'react';

import ListItem from '@material-ui/core/ListItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import ListItemText from '@material-ui/core/ListItemText';

import Checkbox from '@material-ui/core/Checkbox';

import IconButton from '@material-ui/core/IconButton';

const Task = ({ title, done, theme }) => {

    const [checked, setChecked] = useState(done);

    return (React.createElement("div", null,

        React.createElement(ListItem, { role: undefined, dense: true, button: true },

            React.createElement(ListItemIcon, null,

                React.createElement(Checkbox, { edge: "start", checked: checked, tabIndex: -1, disableRipple: true, onChange: () => {

                        setChecked(!checked);

                    }, color: theme })),

            React.createElement(ListItemText, { primary: `${title}` }),

            React.createElement(ListItemSecondaryAction, null,

                React.createElement(IconButton, { edge: "end", "aria-label": "comments" })))));

};

export default Task;

