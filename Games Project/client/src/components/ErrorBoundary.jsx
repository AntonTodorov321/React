import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor() {
        super();

        this.state = {
            hasError: false
        };
    };

    static getDerivedStateFromError(err) {
        console.log('getDerivedStateFromError');
        return {
            hasError: true
        };
    };

    componentDidCatch(err, errorInfo) {
        console.log('componentDidCatch');

    };

    render() {
        if (this.state.hasError) {
            return <h2>404</h2>;
        }
        
        return this.props.children;;
    }
};