import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Task from './Task';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            boxShadow: "0px 0px 5px 0px rgba(50, 50, 50, 0.75)",
            backgroundColor: theme.palette.background.paper,
        },
    }),
);
export interface taskObj {
    title: string
    done: boolean
}
export interface taskBoxProps {
    tasks: taskObj[]
    theme: "primary" | "secondary" | "default" | undefined
}
const CheckboxList: React.FC<taskBoxProps> = ({ tasks, theme }) => {
    const classes = useStyles();


    return (
        <List className={classes.root}>
            {tasks.map((task) => {


                return (
                    <Task title={task.title} done={task.done} theme={theme} />
                );
            })}
        </List>
    );
}
export default CheckboxList