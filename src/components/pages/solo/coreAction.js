export const setTimer2 = (start, props) => {
    // if (!start) {
    //     setStarting(true);
    //     this.interval = setInterval(() => {
    //     }, 1000);
    // }
}


export const onFinish2 = (userInput) => {
    // if (userInput === text) {
    //     clearInterval(this.interval);
    //     clearInterval(this.myInterval);
    //     this.setState({
    //         mainTime: this.state.mainTime - this.state.time,
    //         finished: true,
    //         isAlert: true,
    //     });}
}
export const onChange = (e) => {
    let count = 0;
    let index = 0;
    setTimer2();
    onFinish2(e.target.value);
}