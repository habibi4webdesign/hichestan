import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Aux from "../../../hoc/Auxi";
import InfiniteScroll from "react-infinite-scroller";

import { actionCreators } from "../index";
import styles from "./Catalog.scss";
import InfoBox from "../components/infoBox/InfoBox";
import LargeThumb from "../components/largeThumb/LargeThumb";
import SmallThumb from "../components/SmallThumb/SmallThumb";

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getCatalogList(10);
  }

  loadFunc = (page) => {
    this.props.getCatalogList(page);
  };

  render() {
    let catalogesBody;

    if (this.props.cataloges.length > 0) {
      catalogesBody = (
        <Aux>
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadFunc}
            hasMore={true || false}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
          >
            {this.props.cataloges.map((category, categoryIndex) => (
              <div key={categoryIndex} className={styles.Card}>
                <a href="/catalog">
                  <div>
                    <div className={["row", styles.PicWrapper].join(" ")}>
                      <div className="col-md-8">
                        <LargeThumb imgUrl="https://app.address.ir/__file/r/c/b/9df945b9-c6b7-4a87-a0da-d627839d2fcb.jpg" />
                      </div>
                      <div className="col-md-4">
                        <SmallThumb
                          marginBottom="2px"
                          imgUrl="https://app.address.ir/__file/r/a/o/afd62db2-6e99-4ba9-8609-6092512ea8c1.jpg"
                        />
                        <SmallThumb
                          marginTop="2px"
                          imgUrl="https://app.address.ir/__file/t/u/i/420adc54-d508-4b68-8fe0-92fcfe627811.jpg"
                        />
                      </div>
                    </div>
                    <div className={["row", styles.Detail].join(" ")}>
                      <div className="col-md-6">
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMDExNjggOS45NjM3NkM1LjAxMTY0IDkuOTYzNTMgNS4wMTE2IDkuOTYzMyA1LjAxMTU2IDkuOTYzMDlMNS4wMDk2NiA5Ljk1MDE2TDUuMDA1ODQgOS45MzEwOEM0Ljk0NTk1IDkuNjMxOCA0LjkxNjc1IDkuMzIxODcgNC45MTY3NSA5LjAxMjA0QzQuOTE2NzUgNi4zMTQ0NSA3LjE3ODUgNC4wODM1IDkuOTk3MDMgNC4wODM1QzEyLjgxNTEgNC4wODM1IDE1LjA3NzkgNi4zMTQxOCAxNS4wODM0IDkuMDEyOThDMTUuMDgzNCA5LjMxODI5IDE1LjA1MTkgOS42MzAwNiAxNC45OTMxIDkuOTM3MjVMMTQuOTkgOS45NTMyOEwxNC45ODg2IDkuOTYzMUMxNC45ODg2IDkuOTYzMzEgMTQuOTg4NSA5Ljk2MzUzIDE0Ljk4ODUgOS45NjM3N0wxNC45ODMzIDkuOTkwMTNDMTQuOTc4MSAxMC4wMTUyIDE0Ljk3MDIgMTAuMDUyIDE0Ljk1OSAxMC4xMDExQzE0Ljg4MzEgMTAuNDMyNCAxNC43NzAzIDEwLjc1NDkgMTQuNjIyNCAxMS4wNjYxTDE0LjYxNzIgMTEuMDc3MUwxNC42MTIzIDExLjA4ODJDMTQuMDQ4OSAxMi4zODAzIDEyLjc5MDUgMTQuNDI2NSA5Ljk5OTk4IDE2LjY1OThDNy4yMDcxIDE0LjQyNjggNS45NTE0NiAxMi4zODA2IDUuMzg3ODUgMTEuMDg4Mkw1LjM4MyAxMS4wNzcxTDUuMzc3NzkgMTEuMDY2MUM1LjIzMDQ1IDEwLjc1NiA1LjExNzMgMTAuNDMwNSA1LjA0MTA3IDEwLjEwMDZDNS4wMjk5MiAxMC4wNTE3IDUuMDIyMDQgMTAuMDE1MSA1LjAxNjkxIDkuOTkwMTNMNS4wMTE2OCA5Ljk2Mzc2WiIgc3Ryb2tlPSJ1cmwoI3BhaW50MF9saW5lYXIpIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8cGF0aCBkPSJNOS45OTk2NyA3QzguODA1MDggNyA3LjgzMzAxIDcuOTcyMDcgNy44MzMwMSA5LjE2NjY3QzcuODMzMDEgMTAuMzYxMyA4LjgwNTA4IDExLjMzMzMgOS45OTk2NyAxMS4zMzMzQzExLjE5NDMgMTEuMzMzMyAxMi4xNjYzIDEwLjM2MTMgMTIuMTY2MyA5LjE2NjY3QzEyLjE2NjMgNy45NzIwNyAxMS4xOTQzIDcgOS45OTk2NyA3WiIgc3Ryb2tlPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI1LjE0ODE5IiB5MT0iNC4zOTYiIHgyPSIxMy4wOTAyIiB5Mj0iMTcuNTU4MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRjJEQTYxIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGNTk3NCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXIiIHgxPSI4LjA1NTIzIiB5MT0iNy4yMjIyMiIgeDI9IjExLjY2NjMiIHkyPSIxMi4yMjIyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGMkRBNjEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY1OTc0Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==" />
                        <span>{category.district.name}</span>
                      </div>
                      <div className={["col-md-6", styles.Price].join(" ")}>
                        <span>قیمت کل </span>
                        <span>1/05 </span>
                        <span>میلیارد تومان</span>
                      </div>
                    </div>
                    <div className={["row ", styles.MeterPrice].join(" ")}>
                      <span>متری 8,000,000</span>
                    </div>
                    <div className="row">
                      <InfoBox
                        text="100 متر"
                        imgUrl="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjYxNDEzIDAuMTA3NjFDNy44NTE2NCAtMC4wMzU4NyA4LjE0ODM2IC0wLjAzNTg3IDguMzg1ODcgMC4xMDc2MUwxNS42MzU5IDQuNDg3OTVDMTUuODYxOCA0LjYyNDQ1IDE2IDQuODcwMjYgMTYgNS4xMzU1NlY2Ljg2NDQyQzE2IDcuMTI5NzEgMTUuODYxOCA3LjM3NTU2IDE1LjYzNTkgNy41MTIwM0w4LjM4NTg3IDExLjg5MjRDOC4xNDgzNiAxMi4wMzU5IDcuODUxNjQgMTIuMDM1OSA3LjYxNDEzIDExLjg5MjRMMC4zNjQxMjggNy41MTIwM0MwLjEzODIyNCA3LjM3NTU2IDAgNy4xMjk3MSAwIDYuODY0NDJWNS4xMzU1NkMwIDQuODcwMjYgMC4xMzgyMjQgNC42MjQ0NSAwLjM2NDEyOCA0LjQ4Nzk1TDcuNjE0MTMgMC4xMDc2MVpNMyA2LjIwOTkyTDEuMjI4ODYgNS4xMzk4M0wzLjI0MjkzIDMuOTIyOTRMNS4wMTQwOSA0Ljk5MzAzTDMgNi4yMDk5MlpNNS41IDQuNjk5NDZMMy43Mjg4NSAzLjYyOTM0TDUuNzQyOTMgMi40MTI0OEw3LjUxNDA4IDMuNDgyNTdMNS41IDQuNjk5NDZaTTggMy4xODkwMUw2LjIyODg1IDIuMTE4ODhMOCAxLjA0ODc5TDkuNzcxMTUgMi4xMTg4OEw4IDMuMTg5MDFaTTguNDg1OTIgMy40ODI1N0wxMC4yNTcxIDIuNDEyNDhMMTIuMjcxMSAzLjYyOTM0TDEwLjUgNC42OTk0Nkw4LjQ4NTkyIDMuNDgyNTdaTTEwLjk4NTkgNC45OTMwM0wxMi43NTcxIDMuOTIyOTRMMTQuNzcxMSA1LjEzOTgzTDEzIDYuMjA5OTJMMTAuOTg1OSA0Ljk5MzAzWk0xIDYuNzIxODlWNS41ODg3MUw3Ljc1IDkuNjY2OTdWMTAuODAwMUwxIDYuNzIxODlaTTguMjUgMTAuODAwMUwxNSA2LjcyMTg5VjUuNTg4NzFMOC4yNSA5LjY2Njk3VjEwLjgwMDFaTTUuOTg1OTEgNC45OTMwM0w4IDYuMjA5OTJMMTAuMDE0MSA0Ljk5MzAzTDggMy43NzYxN0w1Ljk4NTkxIDQuOTkzMDNaTTggNi43OTcwOUw1Ljk4NTkxIDguMDEzOTVMOCA5LjIzMDg0TDEwLjAxNDEgOC4wMTM5NUw4IDYuNzk3MDlaTTMuNDg1OTEgNi41MDM0OUw1LjUgNy43MjAzOEw3LjUxNDA4IDYuNTAzNDlMNS41IDUuMjg2NkwzLjQ4NTkxIDYuNTAzNDlaTTEwLjUgNy43MjAzOEwxMi41MTQxIDYuNTAzNDlMMTAuNSA1LjI4NjYzTDguNDg1OTIgNi41MDM0OUwxMC41IDcuNzIwMzhaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K"
                      />
                      <InfoBox
                        text="3 خواب"
                        imgUrl="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxOCAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjM0MzggMC4yNzg2ODlDMTQuMzQzOCAwLjQzMjU5MyAxNC40Njk3IDAuNTU3Mzc3IDE0LjYyNSAwLjU1NzM3N0gxNS42MzM1TDE0LjQyNjEgMS43NTM3NEMxNC4zNDU3IDEuODMzNDUgMTQuMzIxNiAxLjk1MzM0IDE0LjM2NTIgMi4wNTc0N0MxNC40MDg3IDIuMTYxNjEgMTQuNTExMiAyLjIyOTUxIDE0LjYyNSAyLjIyOTUxSDE2LjMxMjVDMTYuNDY3OCAyLjIyOTUxIDE2LjU5MzggMi4xMDQ3MiAxNi41OTM4IDEuOTUwODJDMTYuNTkzOCAxLjc5NjkxIDE2LjQ2NzggMS42NzIxMyAxNi4zMTI1IDEuNjcyMTNIMTUuMzA0TDE2LjUxMTQgMC40NzU3NjRDMTYuNTkxOCAwLjM5NjA1NiAxNi42MTU5IDAuMjc2MTcxIDE2LjU3MjMgMC4xNzIwMzdDMTYuNTI4OCAwLjA2NzkwMzEgMTYuNDI2MyAwIDE2LjMxMjUgMEgxNC42MjVDMTQuNDY5NyAwIDE0LjM0MzggMC4xMjQ3ODQgMTQuMzQzOCAwLjI3ODY4OVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xMS44MTI1IDIuMjI5NTFDMTEuNjU3MiAyLjIyOTUxIDExLjUzMTIgMi4xMDQ3MiAxMS41MzEyIDEuOTUwODJDMTEuNTMxMiAxLjc5NjkxIDExLjY1NzIgMS42NzIxMyAxMS44MTI1IDEuNjcyMTNIMTMuNUMxMy42MTM4IDEuNjcyMTMgMTMuNzE2MyAxLjc0MDAzIDEzLjc1OTggMS44NDQxN0MxMy44MDM0IDEuOTQ4MyAxMy43NzkzIDIuMDY4MTkgMTMuNjk4OSAyLjE0NzlMMTIuNDkxNSAzLjM0NDI2SDEzLjVDMTMuNjU1MyAzLjM0NDI2IDEzLjc4MTIgMy40NjkwNSAxMy43ODEyIDMuNjIyOTVDMTMuNzgxMiAzLjc3Njg2IDEzLjY1NTMgMy45MDE2NCAxMy41IDMuOTAxNjRIMTEuODEyNUMxMS42OTg3IDMuOTAxNjQgMTEuNTk2MiAzLjgzMzc0IDExLjU1MjcgMy43Mjk2QzExLjUwOTEgMy42MjU0NyAxMS41MzMyIDMuNTA1NTggMTEuNjEzNiAzLjQyNTg4TDEyLjgyMSAyLjIyOTUxSDExLjgxMjVaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIuMjUgMTAuODY4OVY1Ljg1MjQ2QzIuMjUgNS4yMzY4MSAyLjc1MzY4IDQuNzM3NyAzLjM3NSA0LjczNzdIMTQuNjI1QzE1LjI0NjMgNC43Mzc3IDE1Ljc1IDUuMjM2ODEgMTUuNzUgNS44NTI0NlYxMC44Njg5SDE2LjMxMjVDMTcuMjQ0NSAxMC44Njg5IDE4IDExLjYxNzUgMTggMTIuNTQxVjE0LjIxMzFDMTggMTQuODI4OCAxNy40OTYzIDE1LjMyNzkgMTYuODc1IDE1LjMyNzlIMTUuNzVWMTdIMTQuNjI1VjE1LjMyNzlIMTMuNVYxNi40NDI2SDEyLjM3NVYxNS4zMjc5SDUuNjI1VjE2LjQ0MjZINC41VjE1LjMyNzlIMy4zNzVWMTdIMi4yNVYxNS4zMjc5SDEuMTI1QzAuNTAzNjggMTUuMzI3OSAwIDE0LjgyODggMCAxNC4yMTMxVjEyLjU0MUMwIDExLjYxNzUgMC43NTU1MTkgMTAuODY4OSAxLjY4NzUgMTAuODY4OUgyLjI1Wk0zLjM3NSA1Ljg1MjQ2SDE0LjYyNVYxMC44Njg5SDE0LjA2MjVWOS4xOTY3MkMxNC4wNjI1IDguNTgxMDcgMTMuNTU4OCA4LjA4MTk3IDEyLjkzNzUgOC4wODE5N0gxMC4xMjVDOS41MDM2OCA4LjA4MTk3IDkgOC41ODEwNyA5IDkuMTk2NzJDOSA4LjU4MTA3IDguNDk2MzIgOC4wODE5NyA3Ljg3NSA4LjA4MTk3SDUuMDYyNUM0LjQ0MTE4IDguMDgxOTcgMy45Mzc1IDguNTgxMDcgMy45Mzc1IDkuMTk2NzJWMTAuODY4OUgzLjM3NVY1Ljg1MjQ2Wk00LjUgMTAuODY4OUg4LjQzNzVWOS4xOTY3MkM4LjQzNzUgOC44ODg4OCA4LjE4NTY2IDguNjM5MzQgNy44NzUgOC42MzkzNEg1LjA2MjVDNC43NTE4NCA4LjYzOTM0IDQuNSA4Ljg4ODg4IDQuNSA5LjE5NjcyVjEwLjg2ODlaTTEzLjUgOS4xOTY3MlYxMC44Njg5SDkuNTYyNVY5LjE5NjcyQzkuNTYyNSA4Ljg4ODg4IDkuODE0MzQgOC42MzkzNCAxMC4xMjUgOC42MzkzNEgxMi45Mzc1QzEzLjI0ODIgOC42MzkzNCAxMy41IDguODg4ODggMTMuNSA5LjE5NjcyWk0xNi44NzUgMTIuNTQxVjE0LjIxMzFIMS4xMjVWMTIuNTQxQzEuMTI1IDEyLjIzMzEgMS4zNzY4NCAxMS45ODM2IDEuNjg3NSAxMS45ODM2SDE2LjMxMjVDMTYuNjIzMiAxMS45ODM2IDE2Ljg3NSAxMi4yMzMxIDE2Ljg3NSAxMi41NDFaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K"
                      />
                      <InfoBox
                        text="نوساز"
                        imgUrl="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1IDguOTk5OTlDMTUuMTY1NyA4Ljk5OTk5IDE1LjMgOC44NjU2NyAxNS4zIDguNjk5OTlWNC41SDE3LjdDMTcuODY1NyA0LjUgMTggNC4zNjU2NyAxOCA0LjJWM0MxNy45OTg1IDIuOTg4ODYgMTcuOTk2MyAyLjk3Nzg3IDE3Ljk5MzQgMi45NjdDMTcuOTkxNSAyLjk0NTI5IDE3Ljk4NzIgMi45MjM4NCAxNy45ODA1IDIuOTAzMUMxNy45NzUgMi44ODc4NCAxNy45NjgxIDIuODczMSAxNy45NjAxIDIuODU5QzE3LjkzMzEgMi44MDc4NSAxNy44OTEzIDIuNzY2MDQgMTcuODQwMSAyLjczOUMxNy44MjUxIDIuNzMwNiAxNy44MDkzIDIuNzIzNTkgMTcuNzkzIDIuNzE4QzE3Ljc4NDMgMi43MTUgMTcuNzc3NCAyLjcwOTMgMTcuNzY4NCAyLjcwNzJMNi4zNjg0IDAuMDA3MTk5OTlDNi4zNDU5OCAwLjAwMjE3NSA2LjMyMzAzIC0wLjAwMDIyNSA2LjMgMEg1LjFDNS4wNjQ1MyAwLjAwMDc4NzQ5OSA1LjAyOTQ2IDAuMDA3ODc0OTkgNC45OTY1IDAuMDIxQzQuOTg4NCAwLjAyNCA0Ljk4MDkgMC4wMjY3IDQuOTczMSAwLjAzMDNDNC45NjUzIDAuMDMzOSA0Ljk1OTMgMC4wMzQ4IDQuOTUyNyAwLjAzODRMMC4xNTI3IDIuNzM4NEMwLjEzNzg4OCAyLjc0ODMgMC4xMjQwNSAyLjc1OTU1IDAuMTExMyAyLjc3MkMwLjEwMTQzNyAyLjc3OTAxIDAuMDkyMDI1IDIuNzg2NjIgMC4wODMxIDIuNzk0OEMwLjA1Nzk3NSAyLjgyMDM3IDAuMDM3Njg3NSAyLjg1MDI2IDAuMDIzMSAyLjg4M1YyLjg4NjZDMC4wMTAwMTI1IDIuOTE5NTYgMC4wMDI4ODc1IDIuOTU0NjIgMC4wMDIxIDIuOTkwMUMwLjAwMjEgMi45OTM3NCAwIDIuOTk2NyAwIDMuMDAwM1Y0LjIwMDNDMCA0LjM2NTk3IDAuMTM0MzI1IDQuNTAwMyAwLjMgNC41MDAzSDQuNVYxMC4wNzU4TDMuMzg3OSAxMS4xODc5QzMuMzMxNjUgMTEuMjQ0MSAzLjMgMTEuMzIwNCAzLjMgMTEuNFYxNi4ySDIuN1YxOEg4LjdWMTYuMkg4LjFWMTEuNEM4LjEgMTEuMzIwNCA4LjA2ODM1IDExLjI0NDEgOC4wMTIxIDExLjE4NzlMNi45IDEwLjA3NThWNC41SDEyLjlWOC42OTk5OUMxMi45IDguODY1NjcgMTMuMDM0MyA4Ljk5OTk5IDEzLjIgOC45OTk5OUgxMy44VjkuODk5OTlDMTMuOCAxMC4wNjU3IDEzLjkzNDMgMTAuMiAxNC4xIDEwLjJDMTQuNDMxNCAxMC4yIDE0LjcgMTAuNDY4NiAxNC43IDEwLjhDMTQuNyAxMS4xMzE0IDE0LjQzMTQgMTEuNCAxNC4xIDExLjRDMTMuNzY4NiAxMS40IDEzLjUgMTEuMTMxNCAxMy41IDEwLjhWMTAuNUgxMi45VjEwLjhDMTIuOTAxNSAxMS4yMzggMTMuMTQyMyAxMS42NCAxMy41Mjc2IDExLjg0ODJMMTEuMjc1OCAxNC4xSDEwLjVDMTAuMzM0MyAxNC4xIDEwLjIgMTQuMjM0MyAxMC4yIDE0LjRWMTcuMUMxMC4yIDE3LjI2NTcgMTAuMzM0MyAxNy40IDEwLjUgMTcuNEgxNy43QzE3Ljg2NTcgMTcuNCAxOCAxNy4yNjU3IDE4IDE3LjFWMTQuNEMxOCAxNC4yMzQzIDE3Ljg2NTcgMTQuMSAxNy43IDE0LjFIMTYuOTI0MkwxNC42NzI0IDExLjg0ODJDMTUuMjUzNSAxMS41MzUgMTUuNDcwNiAxMC44MTAxIDE1LjE1NzQgMTAuMjI5QzE0Ljk5ODggOS45MzQ2OCAxNC43MjQxIDkuNzIwMjUgMTQuNCA5LjYzNzc5VjguOTk5OTlIMTVaTTE1LjMgMy4zSDE3LjRWMy45SDE1LjNWMy4zWk0xNy40IDE0LjdWMTYuOEgxMC44VjE0LjdIMTcuNFpNMTYuMDc1OCAxNC4xSDEyLjEyNDJMMTQuMSAxMi4xMjQyTDE2LjA3NTggMTQuMVpNMTQuNyA3LjE5OTk5SDEzLjVWNC41SDE0LjdWNy4xOTk5OVpNMTQuNyAzLjlIMTMuNVYzLjNIMTQuN1YzLjlaTTUuNCAwLjU5OTk5OUg2VjIuN0g1LjRWMC41OTk5OTlaTTUgMy45OTk5OUg2LjVWMTYuMkg2LjE3NThINVYzLjk5OTk5Wk00LjggMC44MTI5OTlWMi43SDEuNDQ1MUw0LjggMC44MTI5OTlaTTAuNiAzLjlWMy4zSDQuNVYzLjlIMC42Wk0zLjkgMTEuNTI0Mkw0LjUgMTAuOTI0MlYxNi4ySDMuOVYxMS41MjQyWk04LjEgMTYuOFYxNy40SDMuM1YxNi44SDguMVpNNy41IDExLjUyNDJWMTYuMkg2LjlWMTAuOTI0Mkw3LjUgMTEuNTI0MlpNMTIuOSAzLjlINi45VjMuM0gxMi45VjMuOVpNNi42IDIuN1YwLjY3OTE5OUwxNS4xMzE3IDIuN0gxNUg2LjZaTTEzLjUgOC4zOTk5OVY3Ljc5OTk5SDE0LjdWOC4zOTk5OUgxMy41WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="
                      />
                      <InfoBox
                        text="1 پارکینگ"
                        imgUrl="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyMCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjE5NTEyIDEwLjVDMi4xOTUxMiA5LjY3MTU3IDIuODUwMzEgOSAzLjY1ODU0IDlDNC40NjY3NiA5IDUuMTIxOTUgOS42NzE1NyA1LjEyMTk1IDEwLjVDNS4xMjE5NSAxMS4zMjg0IDQuNDY2NzYgMTIgMy42NTg1NCAxMkMyLjg1MDMxIDEyIDIuMTk1MTIgMTEuMzI4NCAyLjE5NTEyIDEwLjVaTTMuNjU4NTQgMTEuNUMzLjExOTcyIDExLjUgMi42ODI5MyAxMS4wNTIzIDIuNjgyOTMgMTAuNUMyLjY4MjkzIDkuOTQ3NzIgMy4xMTk3MiA5LjUgMy42NTg1NCA5LjVDNC4xOTczNSA5LjUgNC42MzQxNSA5Ljk0NzcyIDQuNjM0MTUgMTAuNUM0LjYzNDE1IDExLjA1MjMgNC4xOTczNSAxMS41IDMuNjU4NTQgMTEuNVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMzQxNSA5QzE1LjUzMzIgOSAxNC44NzggOS42NzE1NyAxNC44NzggMTAuNUMxNC44NzggMTEuMzI4NCAxNS41MzMyIDEyIDE2LjM0MTUgMTJDMTcuMTQ5NyAxMiAxNy44MDQ5IDExLjMyODQgMTcuODA0OSAxMC41QzE3LjgwNDkgOS42NzE1NyAxNy4xNDk3IDkgMTYuMzQxNSA5Wk0xNS4zNjU5IDEwLjVDMTUuMzY1OSAxMS4wNTIzIDE1LjgwMjYgMTEuNSAxNi4zNDE1IDExLjVDMTYuODgwMyAxMS41IDE3LjMxNzEgMTEuMDUyMyAxNy4zMTcxIDEwLjVDMTcuMzE3MSA5Ljk0NzcyIDE2Ljg4MDMgOS41IDE2LjM0MTUgOS41QzE1LjgwMjYgOS41IDE1LjM2NTkgOS45NDc3MiAxNS4zNjU5IDEwLjVaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNy4zMTcwNyA5Ljc1QzcuMzE3MDcgOS42MTE5MyA3LjIwNzg3IDkuNSA3LjA3MzE3IDkuNUM2LjkzODQ3IDkuNSA2LjgyOTI3IDkuNjExOTMgNi44MjkyNyA5Ljc1VjExLjI1QzYuODI5MjcgMTEuMzg4MSA2LjkzODQ3IDExLjUgNy4wNzMxNyAxMS41QzcuMjA3ODcgMTEuNSA3LjMxNzA3IDExLjM4ODEgNy4zMTcwNyAxMS4yNVY5Ljc1WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTguNzgwNDkgOS43NUM4Ljc4MDQ5IDkuNjExOTMgOC42NzEyOSA5LjUgOC41MzY1OSA5LjVDOC40MDE4OCA5LjUgOC4yOTI2OCA5LjYxMTkzIDguMjkyNjggOS43NVYxMS4yNUM4LjI5MjY4IDExLjM4ODEgOC40MDE4OCAxMS41IDguNTM2NTkgMTEuNUM4LjY3MTI5IDExLjUgOC43ODA0OSAxMS4zODgxIDguNzgwNDkgMTEuMjVWOS43NVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xMC4yNDM5IDkuNzVDMTAuMjQzOSA5LjYxMTkzIDEwLjEzNDcgOS41IDEwIDkuNUM5Ljg2NTMgOS41IDkuNzU2MSA5LjYxMTkzIDkuNzU2MSA5Ljc1VjExLjI1QzkuNzU2MSAxMS4zODgxIDkuODY1MyAxMS41IDEwIDExLjVDMTAuMTM0NyAxMS41IDEwLjI0MzkgMTEuMzg4MSAxMC4yNDM5IDExLjI1VjkuNzVaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTEuNzA3MyA5Ljc1QzExLjcwNzMgOS42MTE5MyAxMS41OTgxIDkuNSAxMS40NjM0IDkuNUMxMS4zMjg3IDkuNSAxMS4yMTk1IDkuNjExOTMgMTEuMjE5NSA5Ljc1VjExLjI1QzExLjIxOTUgMTEuMzg4MSAxMS4zMjg3IDExLjUgMTEuNDYzNCAxMS41QzExLjU5ODEgMTEuNSAxMS43MDczIDExLjM4ODEgMTEuNzA3MyAxMS4yNVY5Ljc1WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEzLjE3MDcgOS43NUMxMy4xNzA3IDkuNjExOTMgMTMuMDYxNSA5LjUgMTIuOTI2OCA5LjVDMTIuNzkyMSA5LjUgMTIuNjgyOSA5LjYxMTkzIDEyLjY4MjkgOS43NVYxMS4yNUMxMi42ODI5IDExLjM4ODEgMTIuNzkyMSAxMS41IDEyLjkyNjggMTEuNUMxMy4wNjE1IDExLjUgMTMuMTcwNyAxMS4zODgxIDEzLjE3MDcgMTEuMjVWOS43NVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNC4yNzkyMSAxLjg5MzY1QzQuNTUwNjcgMC43ODA3NDYgNS41MjYyMiAwIDYuNjQ1NDIgMEgxMy4zNTQ2QzE0LjQ3MzggMCAxNS40NDkzIDAuNzgwNzQ2IDE1LjcyMDggMS44OTM2NUwxNi45NDIgNi45MDA3OUwxNy4wOTg5IDYuNTc5MThDMTcuMzQ2OCA2LjA3MSAxNy44NTM1IDUuNzUgMTguNDA3OCA1Ljc1SDE4Ljg2MDhDMTkuNDkgNS43NSAyMCA2LjI3Mjc4IDIwIDYuOTE3NjdDMjAgNy42NjQ2OSAxOS4zMjUxIDguMjE5NTkgMTguNjEzNyA4LjA1NzU0TDE3LjcyMjggNy44NTQ2MkMxOC42NDI4IDguMzYwMjggMTkuMjY4MyA5LjM1NSAxOS4yNjgzIDEwLjVDMTkuMjY4MyAxMS45ODY1IDE4LjIxMzUgMTMuMjIwNSAxNi44MjkzIDEzLjQ1ODVWMTMuNUMxNi44MjkzIDE0LjMyODQgMTYuMTc0MSAxNSAxNS4zNjU5IDE1SDE0LjM5MDJDMTMuNTgyIDE1IDEyLjkyNjggMTQuMzI4NCAxMi45MjY4IDEzLjVINy4wNzMxN0M3LjA3MzE3IDE0LjMyODQgNi40MTc5OSAxNSA1LjYwOTc2IDE1SDQuNjM0MTVDMy44MjU5MiAxNSAzLjE3MDczIDE0LjMyODQgMy4xNzA3MyAxMy41VjEzLjQ1ODVDMS43ODY0OSAxMy4yMjA1IDAuNzMxNzA3IDExLjk4NjUgMC43MzE3MDcgMTAuNUMwLjczMTcwNyA5LjM1NSAxLjM1NzI0IDguMzYwMjggMi4yNzcxOCA3Ljg1NDYyTDEuMzg2MzIgOC4wNTc1NEMwLjY3NDg3NiA4LjIxOTU5IDAgNy42NjQ2OSAwIDYuOTE3NjdDMCA2LjI3Mjc4IDAuNTEwMDMzIDUuNzUgMS4xMzkxOSA1Ljc1SDEuNTkyMTZDMi4xNDY0NiA1Ljc1IDIuNjUzMTkgNi4wNzEgMi45MDEwOCA2LjU3OTE4TDMuMDU3OTYgNi45MDA3OUw0LjI3OTIxIDEuODkzNjVaTTYuNjQ1NDIgMUgxMy4zNTQ2QzE0LjAyNjEgMSAxNC42MTE0IDEuNDY4NDUgMTQuNzc0MyAyLjEzNjJMMTYuMjA0NSA4SDMuNzk1NUw1LjIyNTcgMi4xMzYyQzUuMzg4NTYgMS40Njg0NSA1Ljk3MzkgMSA2LjY0NTQyIDFaTTMuNjU4NTQgOC41QzIuNTgwOTEgOC41IDEuNzA3MzIgOS4zOTU0MyAxLjcwNzMyIDEwLjVDMS43MDczMiAxMS42MDQ2IDIuNTgwOTEgMTIuNSAzLjY1ODU0IDEyLjVIMTYuMzQxNUMxNy40MTkxIDEyLjUgMTguMjkyNyAxMS42MDQ2IDE4LjI5MjcgMTAuNUMxOC4yOTI3IDkuMzk1NDMgMTcuNDE5MSA4LjUgMTYuMzQxNSA4LjVIMy42NTg1NFpNMTguODI1MyA3LjA4MTM1TDE4LjA1NDEgNi45MDU2OEMxOC4xNDQ4IDYuODA3OCAxOC4yNzIgNi43NSAxOC40MDc4IDYuNzVIMTguODYwOEMxOC45NTEyIDYuNzUgMTkuMDI0NCA2LjgyNTA3IDE5LjAyNDQgNi45MTc2N0MxOS4wMjQ0IDcuMDI0OTQgMTguOTI3NSA3LjEwNDYyIDE4LjgyNTMgNy4wODEzNVpNMS45NDU4OSA2LjkwNTY4QzEuODU1MTkgNi44MDc4IDEuNzI3OTYgNi43NSAxLjU5MjE2IDYuNzVIMS4xMzkxOUMxLjA0ODg1IDYuNzUgMC45NzU2MSA2LjgyNTA3IDAuOTc1NjEgNi45MTc2N0MwLjk3NTYxIDcuMDI0OTQgMS4wNzI1MiA3LjEwNDYyIDEuMTc0NjggNy4wODEzNUwxLjk0NTg5IDYuOTA1NjhaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K"
                      />
                      <InfoBox
                        text="انباری"
                        imgUrl="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjM3MzYyIDAuODU2NjM2QzYuMDkxNzUgMC45MzM3NzcgNS45MjQ0NyAxLjIyOTY5IDYgMS41MTc1OEw2LjQxMDI2IDMuMDgxMzlMNi44MjA1MyA0LjY0NTJDNi44OTYwNSA0LjkzMzA4IDcuMTg1NzkgNS4xMDM5NiA3LjQ2NzY2IDUuMDI2ODJMMTAuNTI5OSA0LjE4ODc0QzEwLjgxMTggNC4xMTE2IDEwLjk3OTEgMy44MTU2OCAxMC45MDM1IDMuNTI3OEwxMC4wODMgMC40MDAxNzhDMTAuMDA3NSAwLjExMjI5NyA5LjcxNzc1IC0wLjA1ODU4NjcgOS40MzU4NyAwLjAxODU1NDdMNi4zNzM2MiAwLjg1NjYzNlpNOC4zNTUwNyAyLjE1NDE0TDYuODcxMjIgMS4yNzkxN0w5LjIxMTc3IDAuNjM4NTg1TDguMzU1MDcgMi4xNTQxNFpNOC44MTI2NiAyLjQyMzk3TDkuNjY5MzQgMC45MDg0ODFMMTAuMjk2NSAzLjI5ODk0TDguODEyNjYgMi40MjM5N1pNOC41NDg0NyAyLjg5MTNMMTAuMDMyMiAzLjc2NjI3TDcuNjkxODEgNC40MDY3OUw4LjU0ODQ3IDIuODkxM1pNOC4wOTA4OCAyLjYyMTQ3TDcuMjM0MjEgNC4xMzY5Nkw2LjYwNzA4IDEuNzQ2NUw4LjA5MDg4IDIuNjIxNDdaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMy4zMzU3NiAxLjE5MTg2TDAuMjczNTA5IDIuMDI5OTRMMCAwLjk4NzM3NkwzLjA2MjI1IDAuMTQ5MzZDMy45MDc4NyAtMC4wODIwNjM5IDQuNzc3MDYgMC40MzA0NTYgNS4wMDM2NCAxLjI5NDFMNy4wNTQ5NyA5LjExMzE4TDYuMDM0MjIgOS4zOTI1NkwzLjk4Mjg5IDEuNTczNDhDMy45MDczNyAxLjI4NTYgMy42MTc2NCAxLjExNDcyIDMuMzM1NzYgMS4xOTE4NloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOS4zNDIzMSAxMS44Mzk1TDE0IDEwLjU2NDhMMTMuNzI2NSA5LjUyMjI3TDkuMDY4ODEgMTAuNzk2OUM4LjYwNjI1IDkuOTU5NjMgNy42MzI2MSA5LjUxMzg0IDYuNjgxMzUgOS43NzQxOUM1LjU1Mzg2IDEwLjA4MjggNC44ODQ3NSAxMS4yNjY0IDUuMTg2ODYgMTIuNDE3OUM1LjQ4ODk3IDEzLjU2OTUgNi42NDc4OSAxNC4yNTI5IDcuNzc1MzggMTMuOTQ0NEM4LjcyNjYzIDEzLjY4NCA5LjM1MTU5IDEyLjgwMDggOS4zNDIzMSAxMS44Mzk1Wk03LjUwMTg3IDEyLjkwMThDNi45MzgxMyAxMy4wNTYxIDYuMzU4NjcgMTIuNzE0NCA2LjIwNzYxIDEyLjEzODZDNi4wNTY1NiAxMS41NjI5IDYuMzkxMTEgMTAuOTcxIDYuOTU0ODUgMTAuODE2N0M3LjUxODYgMTAuNjYyNSA4LjA5ODA2IDExLjAwNDIgOC4yNDkxMiAxMS41Nzk5QzguNDAwMTcgMTIuMTU1NyA4LjA2NTYyIDEyLjc0NzUgNy41MDE4NyAxMi45MDE4WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjYwNDQxIDUuNTQ4MUM3LjMyMjU0IDUuNjI1MjQgNy4xNTUyNyA1LjkyMTE2IDcuMjMwNzkgNi4yMDkwNEw4LjA1MTMyIDkuMzM2NjZDOC4xMjY4NSA5LjYyNDU0IDguNDE2NTggOS43OTU0MiA4LjY5ODQ1IDkuNzE4MjhMMTEuNzYwNyA4Ljg4MDJDMTIuMDQyNiA4LjgwMzA2IDEyLjIwOTkgOC41MDcxNCAxMi4xMzQzIDguMjE5MjZMMTEuMzEzOCA1LjA5MTY0QzExLjIzODMgNC44MDM3NiAxMC45NDg1IDQuNjMyODggMTAuNjY2NyA0LjcxMDAyTDcuNjA0NDEgNS41NDgxWk05LjU4NTg2IDYuODQ1NTRMOC4xMDIwOSA1Ljk3MDYzTDEwLjQ0MjUgNS4zMzAwNUw5LjU4NTg2IDYuODQ1NTRaTTExLjUyNzMgNy45OTAzNEwxMC45MDAxIDUuNTk5ODhMMTAuMDQzNSA3LjExNTM3TDExLjUyNzMgNy45OTAzNFpNOC40NjQ5OSA4LjgyODM2TDcuODM3ODUgNi40Mzc4OUw5LjMyMTY3IDcuMzEyODdMOC40NjQ5OSA4LjgyODM2Wk0xMS4yNjMgOC40NTc2N0w4LjkyMjU2IDkuMDk4MjVMOS43NzkyNiA3LjU4MjdMMTEuMjYzIDguNDU3NjdaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYuMzczNjIgMC44NTY2MzZDNi4wOTE3NSAwLjkzMzc3NyA1LjkyNDQ3IDEuMjI5NjkgNiAxLjUxNzU4TDYuNDEwMjYgMy4wODEzOUw2LjgyMDUzIDQuNjQ1MkM2Ljg5NjA1IDQuOTMzMDggNy4xODU3OSA1LjEwMzk2IDcuNDY3NjYgNS4wMjY4MkwxMC41Mjk5IDQuMTg4NzRDMTAuODExOCA0LjExMTYgMTAuOTc5MSAzLjgxNTY4IDEwLjkwMzUgMy41Mjc4TDEwLjA4MyAwLjQwMDE3OEMxMC4wMDc1IDAuMTEyMjk3IDkuNzE3NzUgLTAuMDU4NTg2NyA5LjQzNTg3IDAuMDE4NTU0N0w2LjM3MzYyIDAuODU2NjM2Wk04LjM1NTA3IDIuMTU0MTRMNi44NzEyMiAxLjI3OTE3TDkuMjExNzcgMC42Mzg1ODVMOC4zNTUwNyAyLjE1NDE0Wk04LjgxMjY2IDIuNDIzOTdMOS42NjkzNCAwLjkwODQ4MUwxMC4yOTY1IDMuMjk4OTRMOC44MTI2NiAyLjQyMzk3Wk04LjU0ODQ3IDIuODkxM0wxMC4wMzIyIDMuNzY2MjdMNy42OTE4MSA0LjQwNjc5TDguNTQ4NDcgMi44OTEzWk04LjA5MDg4IDIuNjIxNDdMNy4yMzQyMSA0LjEzNjk2TDYuNjA3MDggMS43NDY1TDguMDkwODggMi42MjE0N1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="
                      />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </InfiniteScroll>
        </Aux>
      );
    } else {
      catalogesBody = "";
    }
    return catalogesBody;
  }
}
export default connect(
  state => ({
    cataloges: state.catalogsState.cataloges
  }),
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Catalog);
