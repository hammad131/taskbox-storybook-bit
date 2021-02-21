import React, { useState } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from "@material-ui/icons/Delete"

import { taskObj } from "./index"
export interface taskProps extends taskObj {
    theme: "primary" | "secondary" | "default" | undefined
}
const Task: React.FC<taskProps> = ({ title, done, theme }) => {
    const [checked, setChecked] = useState(done)
    return (
        <div>
            <ListItem role={undefined} dense button >
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked}
                        tabIndex={-1}
                        disableRipple
                        onChange={() => {
                            setChecked(!checked)

                        }}
                        color={theme}

                    />
                </ListItemIcon>
                <ListItemText primary={`${title}`} />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="comments">
                        
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </div>
    )
}

export default Task
