import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';

import Task from './Task';

const useStyles = makeStyles((theme) => createStyles({

    root: {

        width: '100%',

        maxWidth: 360,

        boxShadow: "0px 0px 5px 0px rgba(50, 50, 50, 0.75)",

        backgroundColor: theme.palette.background.paper,

    },

}));

const CheckboxList = ({ tasks, theme }) => {

    const classes = useStyles();

    return (React.createElement(List, { className: classes.root }, tasks.map((task) => {

        return (React.createElement(Task, { title: task.title, done: task.done, theme: theme }));

    })));

};

export default CheckboxList;

