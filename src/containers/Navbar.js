import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

import MenuItem from 'material-ui/MenuItem';


class Navbar extends Component {
    state = {
        openDrawer: false
    }
    handleDrawerChange = () => {
        this.setState({ openDrawer: !this.state.openDrawer })

    }
    render() {
        const { history } = this.props;
        return (
            <div>
                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={() => {
                        this.handleDrawerChange()
                    }}
                />
                <Drawer
                    open={this.state.openDrawer}
                    docked={false}
                    onRequestChange={(openDrawer) => {

                        this.setState({ openDrawer })
                    }}
                >
                    <MenuItem
                        onTouchTap={() => {
                            history.push('/todo')
                            this.handleDrawerChange()

                        }}
                    >To Do</MenuItem>
                    <MenuItem
                        onTouchTap={() => {
                            history.push('/water')
                            this.handleDrawerChange()

                        }}
                    >Water</MenuItem>
                    <MenuItem
                        onTouchTap={() => {
                            history.push('/post')
                            this.handleDrawerChange()

                        }}
                    >Post</MenuItem>
                </Drawer>
            </div>

        );
    }
}

export default Navbar;