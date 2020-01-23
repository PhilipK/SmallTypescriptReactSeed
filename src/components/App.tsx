import * as React from "react";

export interface AppProps {
}

export interface AppState {

}

const FunctionApp: React.FunctionComponent<AppProps> = () => <div>Hello World</div>;

export default class App extends React.Component<AppProps, AppState> {
    render() {
        return <h1>Hello World</h1>;
    }
}
