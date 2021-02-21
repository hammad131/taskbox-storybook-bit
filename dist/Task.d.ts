import React from 'react';

import { taskObj } from "./index";

export interface taskProps extends taskObj {

    theme: "primary" | "secondary" | "default" | undefined;

}

declare const Task: React.FC<taskProps>;

export default Task;

