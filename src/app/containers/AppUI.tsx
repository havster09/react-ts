import * as React from 'react'

import { AppMain } from './AppMain'

import { getMuiTheme, MuiThemeProvider, lightBaseTheme } from "material-ui/styles";

const muiTheme = getMuiTheme(lightBaseTheme);

export class AppUI extends React.Component<{}, {}> {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <AppMain />
            </MuiThemeProvider>
        )
    }
}

export default AppUI;
